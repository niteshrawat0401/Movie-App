import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { routhPath } from "../../constants/route";

export const Headersmenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Box>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
      >
        <Link to={`${routhPath.categories}?category=popular`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        <Link to={`${routhPath.categories}?category=toprated`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Link>
        <Link to={`${routhPath.categories}?category=upcoming`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
      </Menu>
    </Box>
  );
};
