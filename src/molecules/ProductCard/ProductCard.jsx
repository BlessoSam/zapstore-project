import { Box, Typography, IconButton, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, onAddToCart }) => (
    <Box className={styles.card}>
        <Box className={styles.imageWrapper}>
            {/* 🔴 Discount Badge */}
            <Box className={styles.discountBadge}>
                -{product.discountPercent}% OFF
            </Box>

            {/* 🖼️ Product Image */}
            <img src={product.image} alt={product.title} className={styles.image} />

            {/* 🎯 Overlay Icons + Button */}
            <Box className={styles.overlay}>
                <Box className={styles.iconGroup}>
                    <IconButton sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff' }}>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton sx={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff' }}>
                        <VisibilityOutlinedIcon />
                    </IconButton>
                </Box>

                <Button
                    variant="contained"
                    className={styles.cartButton}
                    onClick={() => onAddToCart(product)}
                >
                    Add to Cart
                </Button>
            </Box>
        </Box>

        {/* 📝 Product Info */}
        <Typography variant="body2" className={styles.title}>
            {product.title}
        </Typography>

        <Typography variant="body2" className={styles.price}>
            <span className={styles.discount}>${product.discount}</span>
            <span className={styles.original}>${product.original}</span>
        </Typography>

        <Box className={styles.rating}>
            {'⭐'.repeat(product.rating)}
        </Box>
    </Box>
);

export default ProductCard;
