import { navBar } from "./components/navBar.js";
import { homeDisplay } from "./components/homeDisplay.js";

const navbarContainer = document.querySelector(".navbar-container");
const displayDiv = document.querySelector(".display-div");

const initialize = () => {
  navBar()
  homeDisplay()
};

try {
  initialize();
} catch (error) {
  console.error("Error initializing application:", error);
  // You can add additional error handling logic here, such as displaying an error message to the user
}