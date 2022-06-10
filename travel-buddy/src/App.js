import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./comps/Header/Header";
import List from "./comps/List/List";
import Map from "./comps/Map/Map";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
