import { Link as MuiLink } from '@mui/material';
import styles from './Sidebar.module.scss';
import { categories } from '../../constants/sideBarCategories';



const Sidebar = () => (
    <ul className={styles.list}>
        {categories.map((cat, i) => (
            <li key={i}>
                <MuiLink
                    href={`/category/${cat.toLowerCase().replace(/ & | /g, '-')}`}
                    underline="none"
                    color="text.primary"
                >
                    {cat}
                </MuiLink>
            </li>
        ))}
    </ul>
);

export default Sidebar;
