import { Box, Button, Typography, IconButton, TextField, Breadcrumbs, Link } from "@mui/material";
import { useCart } from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./CartPage.module.scss"; // Import SCSS as module
import PromoBarComp from "../../molecules/promobar/PromoBarComp";
import Layout from "../../molecules/Layout/Layout";
import Footer from "../../molecules/Footer/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate()
    const { cart, removeFromCart, updateQuantity } = useCart();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.discount * item.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <>
                <PromoBarComp />
                <Layout />
                <Box className={styles.header}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/home">Home</Link>
                        <Typography color="error">Cart</Typography>
                    </Breadcrumbs>
                </Box>
                <Typography variant="h5" className={styles["empty-cart"]}>
                    Your cart is empty 🛒
                </Typography>

            </>
        );
    }

    return (
        <>
            <PromoBarComp />
            <Layout />
            <Box className={styles.header}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/home">Home</Link>
                    <Typography color="error">Cart</Typography>
                </Breadcrumbs>
            </Box>
            <Box className={styles["cart-page"]}>
                <Typography variant="h4" className={styles["cart-title"]}>
                    My Cart
                </Typography>

                {/* Cart Items */}
                <Box className={styles["cart-items"]}>
                    {cart.map((item) => (
                        <Box key={item.id} className={styles["cart-item"]}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className={styles["cart-item-img"]}
                            />
                            <Typography className={styles["cart-item-title"]}>
                                {item.title}
                            </Typography>
                            <TextField
                                type="number"
                                size="small"
                                inputProps={{ min: 1 }}
                                value={item.quantity}
                                onChange={(e) =>
                                    updateQuantity(item.id, parseInt(e.target.value) || 1)
                                }
                                className={styles["cart-qty-input"]}
                            />
                            <Typography className={styles["cart-item-price"]}>
                                ${item.discount * item.quantity}
                            </Typography>
                            <IconButton
                                color="error"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    ))}
                </Box>

                {/* Bottom Section - Coupon + Cart Total */}
                <Box className={styles["cart-bottom"]}>
                    {/* Coupon Section */}
                    <Box className={styles["coupon-section"]}>
                        <TextField
                            size="small"
                            fullWidth
                            placeholder="Coupon Code"
                            className={styles["coupon-input"]}
                        />
                        <Button
                            variant="contained"
                            className={styles["apply-coupon-btn"]}
                        >
                            Apply Coupon
                        </Button>
                    </Box>

                    {/* Cart Total */}
                    <Box className={styles["cart-total"]}>
                        <Typography variant="h6" className={styles["cart-total-title"]}>
                            Cart Total
                        </Typography>
                        <Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
                        <Typography>Shipping: Free</Typography>
                        <Typography variant="h6">
                            Total: ${subtotal.toFixed(2)}
                        </Typography>

                        <Button
                            variant="contained"
                            className={styles["checkout-btn"]}
                            onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default CartPage;
