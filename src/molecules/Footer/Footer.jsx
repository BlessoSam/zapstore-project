import React from "react";
import { Box, Container, Typography, TextField, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.scss";
import qrCode from "../../assets/qrCode.png";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";

const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Container maxWidth="lg" className={styles.container}>
                {/* ZapStore */}
                <Box className={styles.section}>
                    <Typography variant="h6">ZapStore</Typography>
                    <Typography variant="body2">Subscribe</Typography>
                    <Typography variant="body2">Get 10% off your first order</Typography>
                    <Box className={styles.inputWrapper}>
                        <TextField
                            fullWidth
                            label="Enter your email"
                            variant="outlined"
                            InputLabelProps={{ style: { color: "#fff" } }}
                            InputProps={{ style: { color: "#fff" } }}
                        />
                    </Box>
                </Box>

                {/* Support */}
                <Box className={styles.section}>
                    <Typography variant="h6">Support</Typography>
                    <Typography variant="body2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Typography>
                    <Typography variant="body2">exclusive@gmail.com</Typography>
                    <Typography variant="body2">+88015-88888-9999</Typography>
                </Box>

                {/* Account */}
                {/* Account */}
                <Box className={styles.section}>
                    <Typography variant="h6">Account</Typography>
                    <Typography variant="body2" className={styles.link}>My Account</Typography>
                    <Typography variant="body2" className={styles.link}>Login / Register</Typography>
                    <Typography variant="body2" className={styles.link}>Cart</Typography>
                    <Typography variant="body2" className={styles.link}>Wishlist</Typography>
                    <Typography variant="body2" className={styles.link}>Shop</Typography>
                </Box>

                {/* Quick Link */}
                <Box className={styles.section}>
                    <Typography variant="h6">Quick Link</Typography>
                    <Typography variant="body2" className={styles.link}>Privacy Policy</Typography>
                    <Typography variant="body2" className={styles.link}>Terms Of Use</Typography>
                    <Typography variant="body2" className={styles.link}>FAQ</Typography>
                    <Typography variant="body2" className={styles.link}>Contact</Typography>
                </Box>

                {/* Download App */}
                <Box className={styles.section}>
                    <Typography variant="h6">Download App</Typography>
                    <Typography variant="body2">Save $3 with App New User Only</Typography>
                    <Box className={styles.qrWrapper}>
                        <img src={qrCode} alt="QR Code" className={styles.qr} />
                        <Box className={styles.storeBadges}>
                            <img src={googlePlay} alt="Google Play" />
                            <img src={appStore} alt="App Store" />
                        </Box>
                    </Box>
                    <Box className={styles.socialIcons}>
                        <IconButton><FacebookIcon /></IconButton>
                        <IconButton><TwitterIcon /></IconButton>
                        <IconButton><InstagramIcon /></IconButton>
                        <IconButton><LinkedInIcon /></IconButton>
                    </Box>
                </Box>
            </Container>

            <Box className={styles.copyright}>
                <Typography variant="body2">
                    © Copyright ZapStore 2022. All rights reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
