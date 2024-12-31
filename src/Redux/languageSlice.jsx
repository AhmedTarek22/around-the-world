import EN from "../Lang/EN";
import AR from "../Lang/AR";
import { createSlice } from "@reduxjs/toolkit";

const translation = {
  EN: EN,
  AR: AR,
};

const savedLanguage = localStorage.getItem("language") || "EN";
const INITIAL_STATE = {
  myLang: savedLanguage,
  translation: translation[savedLanguage],
};

const language = createSlice({
  name: "language",
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage(state, action) {
      const newLang = action.payload;
      state.myLang = newLang;
      state.translation = translation[newLang];
      localStorage.setItem("language", newLang);
    },
  },
});

export default language.reducer;

export const { setLanguage } = language.actions;
