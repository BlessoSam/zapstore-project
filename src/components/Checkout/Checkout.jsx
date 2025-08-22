// src/pages/CheckoutPage.jsx
import { Box, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio, Divider, Breadcrumbs, Link } from "@mui/material";
import { useCart } from "../../context/CartContext";
import PromoBarComp from "../../molecules/promobar/PromoBarComp";
import Layout from "../../molecules/Layout/Layout";
import Footer from "../../molecules/Footer/Footer";
import styles from "./Checkout.module.scss";

// Import Toastify
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CheckoutPage = () => {
    const { cart } = useCart();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.discount * item.quantity,
        0
    );

    const handlePlaceOrder = () => {
        // Show big toast
        toast.success("🎉 Order placed successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '20px',
            },
        });
    };

    return (
        <>
            <PromoBarComp />
            <Layout />
            <Box className={styles.header}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/home">Home</Link>
                    <Link underline="hover" color="inherit" href="/cart">Cart</Link>
                    <Typography color="error">Chekout</Typography>
                </Breadcrumbs>
            </Box>
            <Box className={styles.checkoutContainer}>

                {/* Billing Form */}
                <Box className={styles.billingForm}>
                    <Typography variant="h5" gutterBottom>Billing Details</Typography>
                    <TextField fullWidth label="First Name" margin="normal" required />
                    <TextField fullWidth label="Company Name" margin="normal" />
                    <TextField fullWidth label="Street Address" margin="normal" required />
                    <TextField fullWidth label="Apartment, suite, etc. (optional)" margin="normal" />
                    <TextField fullWidth label="Town/City" margin="normal" required />
                    <TextField fullWidth label="Phone Number" margin="normal" required />
                    <TextField fullWidth label="Email Address" margin="normal" required />
                </Box>

                {/* Order Summary */}
                <Box className={styles.orderSummary}>
                    <Typography variant="h5" gutterBottom>Order Summary</Typography>

                    {cart.map((item) => (
                        <Box key={item.id} className={styles.orderItem}>
                            <img src={item.image} alt={item.title} className={styles.orderImg} />
                            <Typography>{item.title}</Typography>
                            <Typography>${item.discount * item.quantity}</Typography>
                        </Box>
                    ))}

                    <Divider sx={{ my: 2 }} />
                    <Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
                    <Typography>Shipping: Free</Typography>
                    <Typography variant="h6">Total: ${subtotal.toFixed(2)}</Typography>

                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6">Payment Method</Typography>
                    <RadioGroup defaultValue="cod">
                        <FormControlLabel value="bank" control={<Radio />} label="Bank" />
                        <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
                    </RadioGroup>

                    {/* Coupon */}
                    <Box className={styles.couponBox}>
                        <TextField size="small" placeholder="Coupon Code" fullWidth />
                        <Button variant="contained" sx={{ mt: 1 }}>Apply Coupon</Button>
                    </Box>

                    <Button
                        variant="contained"
                        color="error"
                        sx={{ mt: 2 }}
                        fullWidth
                        onClick={handlePlaceOrder} // Trigger toast
                    >
                        Place Order
                    </Button>
                </Box>
            </Box>

            {/* Toast Container */}
            <ToastContainer />

            <Footer />
        </>
    );
};

export default CheckoutPage;
