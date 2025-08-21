import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Drawer,
    List,
    useMediaQuery,
    Link as MuiLink,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from './AppBar.module.scss';
import { navLinks } from '../../constants/navLinks';

export default function AppBarComp({
    logoText = 'ZapStore',
    showSearch = true,
}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static" className={styles.appBar} sx={{ backgroundColor: '#ffffff', color: '#000000' }} >
            <Toolbar className={styles.toolbar}>
                <Box className={styles.container}>
                    {/* Box 1: Logo */}
                    <Box className={styles.logo}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000' }}>{logoText}</Typography>
                    </Box>

                    {/* Box 2: Navigation Links */}
                    <Box className={styles.navLinks} sx={{  color: '#000000' }}>
                        {navLinks.map(({ label, path }) => (
                            <MuiLink
                                key={label}
                                component={RouterLink}
                                to={path}
                                underline="none"
                            >
                                {label}
                            </MuiLink>
                        ))}
                    </Box>

                    {/* Box 3: Search Box */}
                    {showSearch && (
                        <Box className={styles.searchBox}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Search..."
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    )}
                </Box>

                {/* Mobile Menu Icon */}
                {isMobile && (
                    <IconButton
                        className={styles.menuIcon}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>

            {/* Drawer for Mobile Only */}
            {isMobile && (
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <Box className={styles.drawer}>
                        <List>
                            {navLinks.map(({ label, path }) => (
                                <MuiLink
                                    key={label}
                                    component={RouterLink}
                                    to={path}
                                    underline="none"
                                    className={styles.drawerItem}
                                >
                                    {label}
                                </MuiLink>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            )}
        </AppBar>
    );
}
