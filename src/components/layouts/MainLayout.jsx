import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { theme } from "../ui/theme";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Grid container sx={{ height: "100vh"}}>
       {children}
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
