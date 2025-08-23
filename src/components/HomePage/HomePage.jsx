import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import Layout from "../../molecules/Layout/Layout"
import PromoBarComp from "../../molecules/promobar/PromoBarComp"
import Sidebar from "../../molecules/SideBar/SideBar"
import BannerCarousel from "../../molecules/Carousel/Carousel"
import styles from './HomePage.module.scss';
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import ProductCarousel from "../../molecules/ProductCard/ProductCarousel"
import { sampleProducts } from "../../constants/sampleProducts"
import CategoryImage from "../../molecules/CategoryImage/CategoryImages"
import speakerImg from "../../assets/JBL.png"
import ps5Img from '../../assets/ps5.png';
import womenImg from '../../assets/women.png';
import speakerImgae from '../../assets/bluetoothpeaker.png';
import perfumeImg from '../../assets/perfume.png';
import { features } from "../../constants/features"
import Footer from "../../molecules/Footer/Footer"



function HomePage() {
  return (
    <>
      <PromoBarComp />
      <Layout />
      <Box className={styles.pageWrapper}>
        <Box className={styles.sidebar}>
          <Sidebar />
        </Box>
        <Box className={styles.carouselWrapper}>
          <BannerCarousel />
        </Box>
      </Box>
      <SectionHeading subtitle="Today's" title="Flash Sales" />
      <ProductCarousel products={sampleProducts} />
      <SectionHeading subtitle="Category" title="Browse By Category" />
      <CategoryImage />
      <SectionHeading subtitle="This Month" title="Best Selling Product" />
      <ProductCarousel products={sampleProducts} />
      <Box className={styles.bannerWrapper}>
        <Grid container className={styles.bannerContainer} spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} className={styles.leftContent}>
              <Typography variant="subtitle2" color="success.main">
                Categories
              </Typography>

              <Typography variant="h3" fontWeight={700}>
                Enhance Your <br /> Music Experience
              </Typography>

              <Stack direction="row" spacing={2} className={styles.countdown}>
                {['23 Hours', '05 Days', '59 Minutes', '35 Seconds'].map((label, i) => (
                  <Box key={i} className={styles.countItem}>
                    {label}
                  </Box>
                ))}
              </Stack>

              <Button variant="contained" color="success" className={styles.buyButton}>
                BUY NOW!
              </Button>
            </Stack>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} className={styles.rightImage}>
            <Box component="img" src={speakerImg} alt="Speaker" sx={{ width: '100%', maxWidth: 400 }} />
          </Grid>
        </Grid>
      </Box>
      <SectionHeading subtitle="Our Product's" title="Explore Our Products" />
      <ProductCarousel products={sampleProducts} />
      <SectionHeading subtitle="Features" title="New Arrival" />
      <Box className={styles.outer}>
        {/* Left Section */}
        <Box className={styles.left}>
          <Box className={styles.card}>
            <img src={ps5Img} alt="PlayStation 5" />
            <Box className={styles.overlay}>
              <Typography className={styles.title}>PlayStation 5</Typography>
              <Typography className={styles.desc}>
                Black and White version of the PS5 coming out on sale.
              </Typography>
              <Button variant="contained" className={styles.button}>
                Shop Now
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Right Section */}
        <Box className={styles.right}>
          <Box className={styles.topRight}>
            <Box className={`${styles.card} ${styles.womenCard}`}>
              <img src={womenImg} alt="Women's Collection" />
              <Box className={styles.overlay}>
                <Typography className={styles.title}>Women's Collections</Typography>
                <Typography className={styles.desc}>
                  Featured women collections that give you another vibe.
                </Typography>
                <Button variant="contained" className={styles.button}>
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Box>

          <Box className={styles.bottomRight}>
            <Box className={styles.bottomLeft}>
              <Box className={`${styles.card} ${styles.speakerCard}`}>
                <img src={speakerImgae} alt="Speakers" />
                <Box className={styles.overlay}>
                  <Typography className={styles.title}>Speakers</Typography>
                  <Typography className={styles.desc}>Amazon wireless speakers.</Typography>
                  <Button variant="contained" className={styles.button}>
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box className={styles.bottomRightAuto}>
              <Box className={styles.card}>
                <img src={perfumeImg} alt="Perfume" />
                <Box className={styles.overlay}>
                  <Typography className={styles.title}>Perfume</Typography>
                  <Typography className={styles.desc}>GUCCI INTENSE OUD EDP.</Typography>
                  <Button variant="contained" className={styles.button}>
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.featureSection}>
        {features.map(({ icon, title, desc }, i) => (
          <Box key={i} className={styles.feature}>
            <Box className={styles.iconWrapper}>{icon}</Box>
            <Typography className={styles.title}>{title}</Typography>
            <Typography className={styles.desc}>{desc}</Typography>
          </Box>
        ))}
      </Box>
      <Footer />

    </>
  )
}

export default HomePage
