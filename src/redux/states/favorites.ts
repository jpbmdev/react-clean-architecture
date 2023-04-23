import { createSlice, current } from "@reduxjs/toolkit";
import { Person } from "../../models";
import { LocalStorageTypes } from "../../enums/index";
import { getLocalStorage, setLocalStorage } from "../../utils";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (_, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
  },
});

export const { addFavorite } = favoritesSlice.actions;
