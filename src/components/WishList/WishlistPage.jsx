// src/pages/WishlistPage.jsx
import {
  Box,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import Footer from "../../molecules/Footer/Footer";
import PromoBarComp from "../../molecules/promobar/PromoBarComp";
import Layout from "../../molecules/Layout/Layout";
import styles from "./WishList.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart } = useCart();

  const handleAddToCart = (product) => {
    // Check if product already exists in cart
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      addToCart({ ...product, quantity: existing.quantity + 1 });
      toast.info(`${product.title} quantity updated in cart 🛒`);
    } else {
      addToCart({ ...product, quantity: 1 });
      toast.success(`${product.title} added to cart 🛒`);
    }
  };

  if (wishlist.length === 0) {
    return (
      <>
        <PromoBarComp />
        <Layout />
        <Box className={styles.header}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>
            <Typography color="error">Wishlist</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
          Your wishlist is empty ❤️
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
          <Link underline="hover" color="inherit" href="/home">
            Home
          </Link>
          <Typography color="error">Wishlist</Typography>
        </Breadcrumbs>
      </Box>
      <Box className={styles.wishlist}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          My Wishlist
        </Typography>

        <Box className={styles.list}>
          {wishlist.map((product) => (
            <Box key={product.id} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} />
              </div>

              <Typography className={styles.title}>{product.title}</Typography>

              <div className={styles.priceWrapper}>
                <span className={styles.discount}>₹{product.discount}</span>
                <span className={styles.original}>₹{product.original}</span>
              </div>

              <div className={styles.actions}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
                <IconButton
                  color="error"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default WishlistPage;
