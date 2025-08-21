

import { images } from '../../constants/imageList';
import styles from './CategoryImage.module.scss';
import { Box, Typography } from "@mui/material";
function CategoryImage() {
    return (
        <Box className={styles.imageGrid}>
            {images.map(({src , text}, index) => (
                <Box key={index} className={styles.imageBox}>
                    <img src={src} alt={`Image ${index + 1}`} />
                    <Typography>{text}</Typography>
                    
                </Box>
            ))}
        </Box>

    )
}

export default CategoryImage
