import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Fab, Drawer, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import DrawerContent from "./DrawerContent";
import { MenuRounded } from "@mui/icons-material";
import { useState } from "react";

const Sidebar = ({ value, handleChange }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{
        backgroundColor: grey[900], 
      }}
    >
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          m: 2,
        }}
      >
        <Fab
          color="success"
          aria-label="Sidebar"
          onClick={() => setOpenDrawer(true)}
        >
          <MenuRounded fontSize="large" />
        </Fab>
      </Box>

      <DrawerContent value={value} handleChange={handleChange} />
    
      <Drawer
        open={openDrawer}
        variant="temporary"
        onClose={() => setOpenDrawer(false)}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },

          "& .MuiDrawer-paper": {
            width: 200,
          },
        }}
        PaperProps={{ style: {minHeight: '100vw' } }}
      >
        <DrawerContent
          value={value}
          handleChange={handleChange}
          setOpenDrawer={setOpenDrawer}
        />
      </Drawer>
    </Grid>
  );
};

export default Sidebar;
