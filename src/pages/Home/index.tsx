import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { People } from "../../data";

export interface HomeInterface {}

export const Home: React.FC<HomeInterface> = () => {
  const columns: GridColDef[] = [
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
