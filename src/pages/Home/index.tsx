import { useCallback, useState } from "react";

import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { People } from "../../data";
import { Person } from "../../models";
import { Checkbox } from "@mui/material";

export interface HomeInterface {}

export const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const findPerson = useCallback(
    (person: Person) => !!selectedPeople.find((p) => p.id === person.id),
    [selectedPeople]
  );

  const filterPerson = useCallback(
    (person: Person) => selectedPeople.filter((p) => p.id !== person.id),
    [selectedPeople]
  );

  const handleChange = useCallback(
    (person: Person) => {
      setSelectedPeople(
        findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
      );
    },
    [selectedPeople]
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
        rows={People}
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
