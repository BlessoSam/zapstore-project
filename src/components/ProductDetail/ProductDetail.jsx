import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Select,
  MenuItem,
  Box,
  Rating,
  TextField,
  Container,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import styles from "./ProductDetail.module.scss";
import { sampleProducts } from "../../constants/sampleProducts";
import PromoBarComp from "../../molecules/promobar/PromoBarComp";
import Layout from "../../molecules/Layout/Layout";
import Footer from "../../molecules/Footer/Footer";

// ✅ import useCart context
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  const { addToCart } = useCart(); // ✅ get addToCart function from context

  if (!product) {
    return (
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h6" color="error">
          Product not found.
        </Typography>
      </Container>
    );
  }

  const images = [product.img, product.img, product.img, product.img];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [colour, setColour] = useState("");

  const handleAddToCart = () => {
    // ✅ pass product + selected quantity to cart context
    addToCart({
      ...product,
      image: product.img,
      quantity,
      size,
      colour,
      
    })
     toast.success(`${product.title} added to cart 🛒`);;
  };

  return (
    <>
      <PromoBarComp />
      <Layout />
      <Container maxWidth="lg" className={styles.productDetails}>
        <Grid container spacing={4} justifyContent="center">
          {/* LEFT SECTION - Images */}
          <Grid item xs={12} md={6}>
            <Box className={styles.imageSection}>
              <Box className={styles.thumbnails}>
                {images.map((img, i) => (
                  <Card
                    key={i}
                    className={`${styles.thumbnail} ${selectedImage === img ? styles.active : ""
                      }`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <CardMedia component="img" image={img} alt="thumb" />
                  </Card>
                ))}
              </Box>

              <Card className={styles.mainImage}>
                <CardMedia
                  component="img"
                  image={selectedImage}
                  alt={product.title}
                />
              </Card>
            </Box>
          </Grid>

          {/* RIGHT SECTION - Product Details */}
          <Grid item xs={12} md={6}>
            <Box className={styles.detailsSection}>
              <Typography className={styles.title}>{product.title}</Typography>

              <Box className={styles.rating}>
                <Rating value={product.rating} precision={0.1} readOnly />
                <Typography className={styles.value}>
                  ({product.rating})
                </Typography>
              </Box>

              <Box className={styles.priceBlock}>
                <Typography className={styles.discount}>
                  ₹{product.discount}
                </Typography>
                <Typography className={styles.original}>
                  ₹{product.original}
                </Typography>
                <Typography className={styles.percent}>
                  {product.discountPercent}% OFF
                </Typography>
              </Box>

              <Box className={styles.selector}>
                <label>Size:</label>
                <Select
                  size="small"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <MenuItem value="S">S</MenuItem>
                  <MenuItem value="M">M</MenuItem>
                  <MenuItem value="L">L</MenuItem>
                  <MenuItem value="XL">XL</MenuItem>
                </Select>
              </Box>

              <Box className={styles.selector}>
                <label>Colours:</label>
                <Select
                  size="small"
                  value={colour}
                  onChange={(e) => setColour(e.target.value)}
                >
                  <MenuItem value="White">White</MenuItem>
                  <MenuItem value="Black">Black</MenuItem>
                  <MenuItem value="Blue">Blue</MenuItem>
                </Select>
              </Box>

              <Box className={styles.quantity}>
                <label className={styles.label}>Quantity:</label>
                <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Remove />
                </IconButton>
                <TextField
                  value={quantity}
                  size="small"
                  className={styles.input}
                  inputProps={{ style: { textAlign: "center" } }}
                  readOnly
                />
                <IconButton onClick={() => setQuantity(quantity + 1)}>
                  <Add />
                </IconButton>
              </Box>

              <Box className={styles.actions}>
                <Button variant="contained" color="primary">
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleAddToCart} // ✅ add to cart action
                >
                  Add to Cart
                </Button>
              </Box>

              <Box className={styles.deliveryInfo}>
                <Typography>🚚 Free Delivery</Typography>
                <Typography>🔄 Return Available</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ProductDetails;
