
require('dotenv').config()
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs')


const app = express();
const port = process.env.PORT;
const password = process.env.DATABASE_PASS;



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'book_store'
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});


app.get('/init-database', (req, res) => {
  // Read the SQL script from the file
  fs.readFile('init-database.sql', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading SQL file:', err);
      res.status(500).send('Error reading SQL file');
      return;
    }
    
    // Execute the SQL script
    connection.query(data, (err, result) => {
      if (err) {
        console.error('Error executing SQL script:', err);
        res.status(500).send('Error executing SQL script');
        return;
      }
      console.log('SQL script executed successfully');
      res.send('Database initialized successfully');
    });
  });
});


app.use(cors({
    origin: 'http://localhost:5500',
}))

app.use(bodyParser.json());

/*-----------------GET ROUTES---------------------*/

app.get('/books', ( req, res ) => {//get books db
  connection.query('SELECT * FROM books', (err, results) => {
    if (err) throw err;
    const result = res.json(results)
    console.log(result)
  });
});

app.get('/users', ( req, res ) => {//get users db
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });

  app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    connection.query('SELECT * FROM users WHERE user_id = ?', userId, (err, results) => {
      if (err) throw err;
      if (results.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(results[0]);
      }
    });
  });

  app.get('/orders', ( req, res ) => {//get orders db
    connection.query('SELECT * FROM orders', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });

  app.get('/order_items', ( req, res ) => {//get order_items db
    connection.query('SELECT * FROM order_items', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });

  app.get('/orders/:userId', (req, res) => {
    const userId = req.params.userId;
    
    //query to retrieve each user's orders with corresponding details
    const query = `
        SELECT o.order_id, o.order_date, oi.book_id, oi.quantity, b.title, b.author, b.price
        FROM orders o
        JOIN order_items oi ON o.order_id = oi.order_id
        JOIN books b ON oi.book_id = b.book_id
        WHERE o.user_id = ?
    `;
    
    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user orders:', err);
            res.status(500).json({ error: 'Failed to fetch user orders' });
        } else {
            res.json(results);
        }
    });
});

  app.get('/favorite_items', ( req, res ) => {//get favorite_items db
    connection.query('SELECT * FROM favorite_items', (err, results) => {
      if (err) throw err;
      const result = res.json(results)
      console.log(result)
    });
  });
  


/*-----------------POST ROUTES---------------------*/
app.options('/users', cors())

app.post('/users', (req, res) => {
    const { username, email, password, address, role } = req.body;
    connection.query('INSERT INTO users (username, email, password, address, role) VALUES (?, ?, ?, ?, ?)', 
                     [username, email, password, address, role], 
                     (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: 'Error inserting user' });
      } else {
        console.log("User inserted successfully");
        res.status(200).json({ success: true });
      }
    })
    console.log('request body', req.body);
  });

  app.post('/books', (req, res) => {
    const { title, author, cover, price, category, quantity } = req.body;
    connection.query('INSERT INTO books (title, author, cover, price, category, quantity) VALUES (?, ?, ?, ?, ?, ?)', 
                     [title, author, cover, price, category, quantity], 
                     (err, result) => {
      if (err) {
        console.error("Error inserting book:", err);
        res.status(500).json({ error: 'Error inserting book' });
      } else {
        console.log("Book inserted successfully");
        res.status(200).json({ success: true });
      }
    });
});

app.post('/orders', (req, res) => {
  const { userId, items } = req.body;

  // Insert new order into the orders table
  const orderQuery = 'INSERT INTO orders (user_id) VALUES (?)';
  connection.query(orderQuery, [userId], (err, result) => {
    if (err) {
      console.error('Error creating order:', err);
      res.status(500).send('Error creating order');
      return;
    }

    const orderId = result.insertId;

    // Insert order items into the order_items table
    const orderItemsQuery = 'INSERT INTO order_items (order_id, book_id, quantity) VALUES ?';
    const orderItemsValues = items.map(item => [orderId, item.bookId, item.quantity]);
    connection.query(orderItemsQuery, [orderItemsValues], (err) => {
      if (err) {
        console.error('Error creating order items:', err);
        res.status(500).send('Error creating order items');
      } else {
        res.status(200).json({success: true});
      }
  
    });
  });
});

app.post('/favorite_items', (req, res) => {
  const { user_id, book_id } = req.body;
  connection.query('INSERT INTO favorite_items (user_id, book_id) VALUES (?, ?)', 
                   [user_id, book_id], 
                   (err, result) => {
    if (err) {
      console.error("Error inserting favorite:", err);
      res.status(500).json({ error: 'Error inserting favorite' });
    } else {
      console.log("favorite inserted successfully");
      res.status(200).json({ success: true });
    }
  });
});

/*-----------------PUT ROUTES---------------------*/

app.put('/books/:id', (req, res) => {
    const bookId = req.params.book_id;
    const { book_id, title, author, cover, price, category, quantity, bookIdNum } = req.body;
    connection.query('UPDATE books SET book_id = ?, title = ?, author = ?, cover = ?, price = ?, category = ?, quantity = ? WHERE book_id = ?', 
                     [book_id, title, author, cover, price, category, quantity, bookIdNum], 
                     (err, result) => {
      if (err) {
        console.error("Error updating book:", err);
        res.status(500).json({ error: 'Error updating book' });
      } else {
        console.log("Book updated successfully");
        res.status(200).json({ success: true });
      }
    });
});

/*-----------------DELETE ROUTES---------------------*/

app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;

  connection.query('DELETE FROM books WHERE book_id = ?', [bookId], (err, result) => {
      if (err) {
          console.error("Error deleting book:", err);
          res.status(500).json({ error: 'Error deleting book' });
      } else {
          console.log("Book deleted successfully");
          res.status(200).json({ success: true });
      }
  });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

