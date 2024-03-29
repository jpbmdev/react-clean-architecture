import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";

import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

import { Person } from "../../../../models";
import { addFavorite } from "../../../../redux/states";
import { AppStore } from "../../../../redux/store";

export interface PeopleTableInterface {}

export const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const dispatch = useDispatch();

  const statePeople = useSelector((store: AppStore) => store.people);
  const stateFavourites = useSelector((store: AppStore) => store.favorites);

  const findPerson = useCallback(
    (person: Person) => !!stateFavourites.find((p) => p.id === person.id),
    [stateFavourites]
  );

  const filterPerson = useCallback(
    (person: Person) => stateFavourites.filter((p) => p.id !== person.id),
    [stateFavourites]
  );

  const handleChange = useCallback(
    (person: Person) => {
      const filteredPeople = findPerson(person)
        ? filterPerson(person)
        : [...stateFavourites, person];

      dispatch(addFavorite(filteredPeople));
    },
    [stateFavourites]
  );

  const columns: GridColDef[] = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      flex: 1,
      maxWidth: 50,
      renderCell: (params: GridCellParams) => (
        <Checkbox
          size="small"
          checked={findPerson(params.row)}
          onChange={() => handleChange(params.row)}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
    },
  ];

  return (
    <div>
      <DataGrid
        rows={statePeople}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        getRowId={(row: any) => row.id}
      />
    </div>
  );
};
