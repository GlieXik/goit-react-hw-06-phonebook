import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = [
  { id: nanoid(), name: "Banatan", number: "233-43-43" },
  { id: nanoid(), name: "Kane", number: "433-43-43" },
  { id: nanoid(), name: "Bot", number: "433-43-43" },
];
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: initialState,
    filter: "",
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterTask(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const { addContact, deleteTask, filterTask } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const dataReduser = persistReducer(persistConfig, contactsReducer);
