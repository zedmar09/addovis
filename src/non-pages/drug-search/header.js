import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


const HeaderSearch = () => {

  return (
    <AppBar position="static" elevation={3} sx={{ backgroundColor: "#fff" }}>
  <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
    <img
      src={`/images/drug-searchlogo.png/`}
      width={200}
      alt="Sidebar Logo"
    />
  </Toolbar>
</AppBar>
  );
};

export default HeaderSearch;
