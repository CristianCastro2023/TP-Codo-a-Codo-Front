
import { navBar } from "../components/navBar.js";

const globalState = {
  loggedIn: false,
  userRole: '',
  userId: ''
};

const navbarContainer = document.querySelector("#navbar-container");
const homeContainer = document.querySelector("#display-div");

export const setLoggedIn = (loggedIn, userRole, userId) => {
  globalState.loggedIn = loggedIn;
  globalState.userRole = userRole;
  globalState.userId = userId
 
  renderLoggedInComponents();
};

export const getLoggedIn = () => globalState.loggedIn;
export const getUserRole = () => globalState.userRole;
export const getUserId = () => globalState.userId;

export const renderLoggedInComponents = () => {
  const { userRole, loggedIn, userId } = globalState;


  if (loggedIn) {
    navbarContainer.innerHTML = '';
    homeContainer.innerHTML = '';
    navBar(loggedIn, userRole, userId);
  } else {
    navBar();
  }
};