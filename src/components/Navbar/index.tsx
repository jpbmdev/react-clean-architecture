import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog";
import { FavoriteTable } from "./components";
import { useCallback } from "react";

export interface NavbarInterface {}

export const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = useCallback(() => {
    dialogOpenSubject$.setSubject = true;
  }, []);

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JPBM
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Open Favourites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
