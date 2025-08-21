import { Box, Button } from '@mui/material';
import styles from './ProductCarousel.module.scss';
import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products}) => {
    const [viewAll, setViewAll] = useState(false);

    const visibleProducts = viewAll ? products : products.slice(0, 4);

    const onAddToCart = (product) => {
        console.log('Product added to cart:', product);
        // You can replace this with your cart logic or Toastify feedback
    };

    return (
        <Box className={styles.wrapper}>

            <Box className={styles.cardGrid}>
                {visibleProducts.map((product, i) => (
                    <ProductCard
                        key={i}
                        product={product}
                        onAddToCart={onAddToCart} // ✅ Pass the function here
                    />
                ))}
            </Box>

            <Box className={styles.viewToggle}>
                <Button variant="outlined" onClick={() => setViewAll(!viewAll)} sx={{bgcolor:"red",color:"white"}}>
                    {viewAll ? 'View Less Products' : 'View All Products'}
                </Button>
            </Box>
        </Box>
    );
};

export default ProductCarousel;
