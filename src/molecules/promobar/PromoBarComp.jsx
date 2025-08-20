import React, { useState } from 'react';
import { Box, Typography, Link, FormControl, Select, MenuItem } from '@mui/material';
import styles from "./PromoBar.module.scss";


export default function PromoBarComp() {
   const [language, setLanguage] = useState('en');

   return (
      <Box className={styles.promoBar}>
         <Typography className={styles.promoText}>
            Summer Sale! Get 40% off All Swim Suits And Free Express Delivery - OFF 50%
            <Link href="#" className={styles.promoLink}>
               SHOP NOW
            </Link>
         </Typography>

         <FormControl variant="standard" className={styles.languageSelect}>
            <Select
               value={language}
               onChange={(e) => setLanguage(e.target.value)}
               sx={{ color: 'white' }}
            >
               <MenuItem value="en">English</MenuItem>
               <MenuItem value="hi">हिंदी</MenuItem>
            </Select>
         </FormControl>

      </Box>
   );
}
