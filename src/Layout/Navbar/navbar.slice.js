import { createSlice } from "@reduxjs/toolkit";

const initialNavbarButtons = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Maps",
    link: "/maps",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    aktiveRoute: "/",
    navButtons: initialNavbarButtons,
  },
  reducers: {
    updateRoute: (state, action) => {
      state.aktiveRoute = action.payload;
    },
  },
});

export const { updateRoute } = navbarSlice.actions;

export default navbarSlice.reducer;
