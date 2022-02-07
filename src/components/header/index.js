import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from './index.module.scss'
import {   ROUTES_CONFIG} from "../../routes";
import {NavLink} from "react-router-dom";
import Basked from "./components/basket";
import {useOpen} from "../../hooks/use-open";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const {isOpen , onClose ,onOpen  , onToggle} = useOpen();

    return (
        <AppBar className={styles.header} position={'sticky'}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >

                        <NavLink
                            onClick={handleCloseNavMenu}
                            to={'/'}
                            className={'nav-item'}
                        >
                            Just Shop
                        </NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {ROUTES_CONFIG.map((item) => (
                                <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"> <NavLink to={item.name} > {item.name}  </NavLink> </Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >

                        <NavLink
                            onClick={handleCloseNavMenu}
                            to={'/'}
                            className={'nav-item'}
                        >
                            Just Shop
                        </NavLink>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {ROUTES_CONFIG.map((item) => (
                            <NavLink
                                key={item.name}
                                onClick={handleCloseNavMenu}
                                to={item.name}
                                className={'nav-item'}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open basket">
                            <IconButton onClick={onToggle} sx={{ p: 0 }}>
                                <Basked/>
                            </IconButton>
                        </Tooltip>
                        {isOpen&& <div> her</div>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
