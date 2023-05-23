import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

export const Headersmenu = ({open, handleClose}) => {

    const openMenu = Boolean(open)
  return (
    <Box>
         <Menu
        // id="fade-menu"
        // MenuListProps={{
        //   'aria-labelledby': 'fade-button',
        // }}
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        // TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Menu>
    </Box>
  )
}
