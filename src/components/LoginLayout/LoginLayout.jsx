import styles from './LoginLayout.module.scss';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Link
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PromoBarComp from '../../molecules/promobar/PromoBarComp';
import AppBarComp from '../../molecules/AppBar/AppBar';
import Footer from '../../molecules/Footer/Footer';
import sideImage from '../../assets/sideImage.png';
import { useNavigate } from 'react-router-dom';

const LoginLayout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log('Login Data:', data);
        toast.success('✅ Logged in successfully!');
        navigate("/home")
    };



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
                                Log in to <span style={{ color: '#db4444' }}>Exclusive</span>
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Enter your details below
                            </Typography>

                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <TextField
                                    fullWidth
                                    label="Email or Phone Number"
                                    margin="normal"
                                    {...register('identifier', {
                                        required: 'This field is required'
                                    })}
                                    error={!!errors.identifier}
                                    helperText={errors.identifier?.message}
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

                                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className={styles.redButton}
                                        sx={{
                                            backgroundColor: '#d32f2f',
                                            color: '#fff',
                                            fontWeight: 600,
                                            '&:hover': {
                                                backgroundColor: '#b71c1c'
                                            }
                                        }}

                                    >
                                        Log In
                                    </Button>

                                    <Link href="/forgot-password" underline="hover" className={styles.forgot}>
                                        Forgot Password?
                                    </Link>
                                </Box>

                                <Typography align="center" sx={{ mt: 4 }}>
                                    Don’t have an account?{' '}
                                    <Link href="/signup" underline="hover">
                                        Sign up
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

export default LoginLayout;
