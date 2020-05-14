import React from 'react';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MenuNavigation(props) {
  return (
    <Menu className="horiz-menu">
      <MenuItem primaryText="Home"/>
      <MenuItem primaryText="Test Menu 1" />
      <MenuItem primaryText="Test Menu 2" />
      <MenuItem primaryText="About" />
    </Menu>
  );
}

MenuNavigation.propTypes = {

};