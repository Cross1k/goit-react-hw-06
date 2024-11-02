import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts";
import { filterReducer } from "./filters/filters";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
