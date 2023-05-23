import React from 'react'
import {AppBar, Box, Toolbar, styled, Typography, InputBase } from "@mui/material"
import { logoURL } from '../../constants/constants'
import {Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';
import { Headersmenu } from './Headersmenu';
import { useState } from 'react';

const StyleToolbar = styled(Toolbar)(`
    background : #121212;
    min-height: 56px !important;
    padding : 0 115px !important;
    justify-content: space-between;
    & > * {
        padding : 0 16px
    }
    & > div {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p {
            font-size : 14px;
            font-weight : 600;
        }
    }
    & > p {
        font-size : 14px;
        font-weight : 600; 
    }
`)

const Logo = styled('img')({
    width: 64,
})

const Inputsearch = styled(InputBase)`
    background: #ffffff;
    height : 30px;
    width: 52%;
    border-radius : 5px;
`

export const Header = () => {
const [open, setOpen] = useState(null);

const handleOpen = (e) =>{
    setOpen(e.currentTarget)
}

const handleClose = (e) =>{
    setOpen(null)
}

  return (
        <AppBar>
                <StyleToolbar>
                    <Logo src={logoURL} alt="movielogo" />
                    <Box onClick={handleOpen}>
                        <Menu/>
                        <Typography>Menu</Typography>
                    </Box>
                    <Headersmenu open={open} handleClose={handleClose}/>
                    <Inputsearch/>
                    <Typography>IMDB<Box component="span">Pro</Box></Typography>
                    <Box>
                        <BookmarkAdd/>
                        <Typography>Watchlist</Typography>
                    </Box>
                    <Typography>Sign In</Typography>
                    <Typography>EN</Typography>
                    <ExpandMore/>
                </StyleToolbar>
        </AppBar>
    )
}
