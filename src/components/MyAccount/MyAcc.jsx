import {
    Box,
    Typography,
    Breadcrumbs,
    Link,
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import styles from './Profile.module.scss';
import PromoBarComp from '../../molecules/promobar/PromoBarComp';
import Layout from '../../molecules/Layout/Layout';
import Footer from '../../molecules/Footer/Footer';

export default function EditProfilePage() {
    return (
        <>
            {/* Header */}
            <PromoBarComp />
            <Layout />
            <Box className={styles.header}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/home">Home</Link>
                    <Typography color="error">My Account</Typography>
                </Breadcrumbs>
                <Typography variant="body2" color="text.secondary">
                    Welcome! <span className={styles.username}>User</span>
                </Typography>
            </Box>

            {/* Main Layout */}
            <Box className={styles.container}>
                {/* Sidebar */}
                <Box className={styles.sidebar}>
                    <Typography variant="subtitle2">Manage My Account</Typography>
                    <List>
                        <ListItem selected><ListItemText primary="My Profile" /></ListItem>
                        <ListItem><ListItemText primary="Address Book" /></ListItem>
                        <ListItem><ListItemText primary="My Payment Options" /></ListItem>
                    </List>

                    <Typography variant="subtitle2">My Orders</Typography>
                    <List>
                        <ListItem><ListItemText primary="My Returns" /></ListItem>
                        <ListItem><ListItemText primary="My Cancellations" /></ListItem>
                    </List>

                    <Typography variant="subtitle2">My Wishlist</Typography>
                </Box>

                {/* Form Panel */}
                <Box className={styles.formPanel}>
                    <Typography variant="h6" color="error">Edit Your Profile</Typography>
                    <Box className={styles.row}>
                        <TextField label="First Name" fullWidth />
                        <TextField label="Last Name" fullWidth />
                    </Box>
                    <Box className={styles.row}>
                        <TextField label="Email" fullWidth />
                        <TextField label="Address" fullWidth />
                    </Box>

                    <Typography variant="subtitle1" gutterBottom>Password Changes</Typography>
                    <TextField label="Current Password" fullWidth type="password" />
                    <TextField label="New Password" fullWidth type="password" sx={{ mt: 2 }} />
                    <TextField label="Confirm New Password" fullWidth type="password" sx={{ mt: 2 }} />

                    <Box className={styles.actions}>
                        <Button variant="outlined">Cancel</Button>
                        <Button variant="contained" color="error">Save Changes</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
