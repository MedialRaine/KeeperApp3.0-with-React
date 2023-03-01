import React from "react";
import FlareIcon from "@material-ui/icons/Flare";
//Here we just added an icon to our main title.
function Header() {
  return (
    <header>
      <h1>
        <FlareIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
