import {
    Box,
    Typography,
    Breadcrumbs,
    Link,
    TextField,
    Button,
    Divider,
    Paper,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import styles from './Contact.module.scss';
import PromoBarComp from '../../molecules/promobar/PromoBarComp';
import Layout from '../../molecules/Layout/Layout';
import Footer from '../../molecules/Footer/Footer';

export default function ContactPage() {
    return (
        <>
            {/* Header */}
            <PromoBarComp />
            <Layout />
            <Box className={styles.header}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/home">Home</Link>
                    <Typography color="error">Contact</Typography>
                </Breadcrumbs>
            </Box>

            {/* Main Layout */}
            <Box className={styles.container}>
                {/* Contact Info */}
                <Box className={styles.infoPanel}>
                    <Paper elevation={1} className={styles.card}>
                        <Box className={styles.iconRow}>
                            <PhoneIcon color="error" />
                            <Typography variant="subtitle1">Call To Us</Typography>
                        </Box>
                        <Typography variant="body2">We are available 24/7, 7 days a week.</Typography>
                        <Typography variant="body2">Phone: +8801611112222</Typography>
                    </Paper>

                    <Paper elevation={1} className={styles.card}>
                        <Box className={styles.iconRow}>
                            <EmailIcon color="error" />
                            <Typography variant="subtitle1">Write To Us</Typography>
                        </Box>
                        <Typography variant="body2">Fill out our form and we will contact you within 24 hours.</Typography>
                        <Typography variant="body2">Email: customer@exclusive.com</Typography>
                        <Typography variant="body2">Email: support@exclusive.com</Typography>
                    </Paper>
                </Box>

                {/* Contact Form */}
                <Box className={styles.formPanel}>
                    <Box className={styles.row}>
                        <TextField label="Your Name" fullWidth />
                        <TextField label="Your Email" fullWidth />
                        <TextField label="Your Phone" fullWidth />
                    </Box>
                    <TextField
                        label="Your Message"
                        multiline
                        rows={5}
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                    <Box className={styles.actions}>
                        <Button variant="contained" color="error">Send Message</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
