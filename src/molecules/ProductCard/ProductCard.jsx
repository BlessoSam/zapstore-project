// src/molecules/ProductCard/ProductCard.jsx
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import styles from './ProductCard.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
    const { addToWishlist } = useWishlist();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const handleAddToWishlist = () => {
        addToWishlist(product);
        toast.success(`${product.title} added to Wishlist ❤️`, {  
        });
    };

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.title} added to Cart 🛒`, {
        });
    };

    return (
        <Box className={styles.card}>
            <Box className={styles.imageWrapper}>
                <Box className={styles.discountBadge}>-{product.discountPercent}% OFF</Box>
                <img src={product.image} alt={product.title} className={styles.image} />

                {/* Overlay Buttons */}
                <Box className={styles.overlay}>
                    <Box className={styles.iconGroup}>
                        <IconButton
                            sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
                            onClick={handleAddToWishlist}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>

                        <IconButton
                            sx={{ backgroundColor: "rgba(0,0,0,0.5)", color: "#fff" }}
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <VisibilityOutlinedIcon />
                        </IconButton>
                    </Box>

                    <Button
                        variant="contained"
                        className={styles.cartButton}
                        onClick={handleAddToCart} // ✅ Directly adds to cart
                    >
                        Add to Cart
                    </Button>
                </Box>
            </Box>
            {/* Product Info */}
            <Typography variant="body2" className={styles.title}>
                {product.title}
            </Typography>
            <Typography variant="body2" className={styles.price}>
                <span className={styles.discount}>${product.discount}</span>
                <span className={styles.original}>${product.original}</span>
            </Typography>
            <Box className={styles.rating}>{"⭐".repeat(product.rating)}</Box>
        </Box>
    );
};

export default ProductCard;
