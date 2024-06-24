import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography} from "@mui/material";


const Maincontent = ({children}) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={10}
      xl={10}
      sx={{ backgroundColor: "secondary.main", textAlign: "center" }}
    >
      <Typography variant="h4"> MainContent</Typography>
      {children}
      
    </Grid>
  );
};

export default Maincontent;
