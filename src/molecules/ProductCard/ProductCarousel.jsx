import { Box, Button } from '@mui/material';
import styles from './ProductCarousel.module.scss';
import { useState } from 'react';
import ProductCard from './ProductCard';



const ProductCarousel = ({ products }) => {
    const [viewAll, setViewAll] = useState(false);
    const [wishlist, setWishlist] = useState([]);

    const visibleProducts = viewAll ? products : products.slice(0, 4);

    const onAddToCart = (product) => {
        console.log('Product added to cart:', product);
    };

    const onAddToWishlist = (product) => {
        if (!wishlist.find(item => item.id === product.id)) {
            setWishlist([...wishlist, product]);
        }
    };

    const onRemoveFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    return (
        <Box className={styles.wrapper}>
            {/* Product Grid */}
            <Box className={styles.cardGrid}>
                {visibleProducts.map((product, i) => (
                    <ProductCard
                        key={i}
                        product={product}
                        onAddToCart={onAddToCart}
                        onAddToWishlist={onAddToWishlist}
                    />
                ))}
            </Box>

            {/* Toggle Button */}
            <Box className={styles.viewToggle}>
                <Button
                    variant="outlined"
                    onClick={() => setViewAll(!viewAll)}
                    sx={{ bgcolor: "red", color: "white" }}
                >
                    {viewAll ? 'View Less Products' : 'View All Products'}
                </Button>
            </Box>


        </Box>
    );
};

export default ProductCarousel;
