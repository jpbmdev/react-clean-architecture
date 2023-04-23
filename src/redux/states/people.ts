import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../../models";
import { LocalStorageTypes } from "../../enums";
import { setLocalStorage } from "../../utils";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: LocalStorageTypes.PEOPLE,
  initialState,
  reducers: {
    addPeople: (_, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, action.payload);
      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
