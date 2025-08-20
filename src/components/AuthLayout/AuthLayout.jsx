import styles from './AuthLayout.module.scss';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PromoBarComp from '../../molecules/promobar/PromoBarComp';
import AppBarComp from '../../molecules/AppBar/AppBar';
import Footer from '../../molecules/Footer/Footer';
import sideImage from '../../assets/sideImage.png'
import { useNavigate } from 'react-router-dom';

const AuthLayout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        toast.success('🎉 Account created successfully!');
    };

    const navigate = useNavigate()

    const navHomePage = () => {
        navigate("/home")
    }

    return (
        <>
            <PromoBarComp />
            <AppBarComp />
            <Box className={styles.container}>
                {/* Image Panel */}
                <Box className={styles.imagePanel}>
                    <Box
                        component="img"
                        src={sideImage}
                        alt="Shopping visual"
                        className={styles.image}
                    />
                </Box>

                {/* Form Panel */}
                <Box className={styles.formPanel}>
                    <Card elevation={3} className={styles.card}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Create an account
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Enter your details below
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    {...register('name', { required: 'Name is required' })}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />

                                <TextField
                                    fullWidth
                                    label="Email or Phone Number"
                                    margin="normal"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Enter a valid email'
                                        }
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />

                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Minimum 6 characters'
                                        }
                                    })}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    className={styles.redButton}
                                    sx={{
                                        mt: 4,
                                        backgroundColor: '#d32f2f',
                                        color: '#fff',
                                        fontWeight: 600,
                                        '&:hover': {
                                            backgroundColor: '#b71c1c'
                                        }

                                    }}
                                    onClick={() => { navHomePage() }}
                                >
                                    Create Account
                                </Button>

                                <Button
                                    variant="outlined"
                                    fullWidth
                                    startIcon={<GoogleIcon />}
                                    className={styles.googleButton}
                                >
                                    Sign up with Google
                                </Button>

                                <Typography align="center" sx={{ mt: 2 }}>
                                    Already have an account?{' '}
                                    <Link href="/login" underline="hover">
                                        Log in
                                    </Link>
                                </Typography>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default AuthLayout;
