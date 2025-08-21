import { Box, Typography } from '@mui/material';
import styles from './SectionHeading.module.scss';

const SectionHeading = ({ title, subtitle }) => (
    <Box className={styles.heading}>
        <Box className={styles.subtitleRow}>
            <Box className={styles.iconBox} />
            <Typography variant="body2" className={styles.subtitle}>
                {subtitle}
            </Typography>
        </Box>
        <Typography variant="h5" className={styles.title}>
            {title}
        </Typography>
    </Box>
);

export default SectionHeading;
