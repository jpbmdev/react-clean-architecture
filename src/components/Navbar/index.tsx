import { AppBar, Toolbar, Typography } from "@mui/material";

export interface NavbarInterface {}

export const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JPBM
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
