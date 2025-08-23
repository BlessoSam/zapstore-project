// src/molecules/Layout/Layout.jsx
import {
    Box,
    IconButton,
    Typography,
    Link as MuiLink,
    InputBase,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import styles from "./Layout.module.scss";
import { navLinks } from "../../constants/navLinks";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext"; // ✅ Import Wishlist context

const Layout = () => {
    const navigate = useNavigate();
    const { cart } = useCart(); // ✅ only cart from CartContext
    const { wishlist } = useWishlist(); // ✅ wishlist from WishlistContext
    const [drawerOpen, setDrawerOpen] = useState(false);

    const myAcc = () => navigate("/myacc");
    const myWishList = () => navigate("/wishlist");
    const myCart = () => navigate("/cart");

    return (
        <>
            <Box className={styles.header}>
                <Typography variant="h5" className={styles.logo}>
                    ZapStore
                </Typography>

                <Box className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <MuiLink
                            key={link.label}
                            href={link.href}
                            underline="none"
                            color="text.primary"
                        >
                            {link.label}
                        </MuiLink>
                    ))}
                </Box>

                <InputBase
                    placeholder="Search products..."
                    className={styles.search}
                    inputProps={{ "aria-label": "search" }}
                    sx={{ display: { xs: "none", md: "block" } }}
                />

                <Box className={styles.iconGroup}>
                    {/* Wishlist with red badge */}
                    <IconButton onClick={myWishList}>
                        <Badge
                            badgeContent={wishlist?.length || 0}
                            showZero
                            sx={{
                                "& .MuiBadge-badge": {
                                    backgroundColor: "red",
                                    color: "white",
                                },
                            }}
                        >
                            <FavoriteBorderIcon sx={{ color: "red" }} />
                        </Badge>
                    </IconButton>

                    {/* Cart with red badge */}
                    <IconButton onClick={myCart}>
                        <Badge
                            badgeContent={cart?.length || 0}
                            showZero
                            sx={{
                                "& .MuiBadge-badge": {
                                    backgroundColor: "red",
                                    color: "white",
                                },
                            }}
                        >
                            <ShoppingCartIcon sx={{ color: "red" }} />
                        </Badge>
                    </IconButton>

                    {/* Account */}
                    <IconButton onClick={myAcc}>
                        <AccountCircleIcon />
                    </IconButton>

                    {/* Mobile Menu */}
                    <IconButton
                        className={styles.menuIcon}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Drawer for mobile nav */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <List className={styles.drawerList}>
                    {navLinks.map((link) => (
                        <ListItem button key={link.label} component="a" href={link.href}>
                            <ListItemText primary={link.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Layout;
