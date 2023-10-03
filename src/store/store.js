import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../Layout/Navbar/navbar.slice";

export default configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});