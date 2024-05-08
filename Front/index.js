
import { navBar } from "../components/navBar.js";
import { homeDisplay } from "../components/homeDisplay.js";




const CATEGORIES = ['ficción', 'historia', 'recetas', 'cómics'];//add categories here, they'll be dinamically added to the dropdown menu of the navbar

let PAGE_TITLE = 'AUREA';
const initialize = () => {
  navBar(CATEGORIES, PAGE_TITLE);
  homeDisplay();
}



initialize()//main entry point
