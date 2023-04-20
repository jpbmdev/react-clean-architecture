import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes, Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utils";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, state);
      return action.payload;
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
