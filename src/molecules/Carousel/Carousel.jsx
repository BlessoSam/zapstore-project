import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.scss';
import { carouselImg } from '../../constants/carouselmages';


const BannerCarousel = () => {
    return (
        <div className={styles.carouselWrapper}>
            <Carousel fade interval={3000}>
                {carouselImg.map((banner, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={banner.src}
                            alt={banner.alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default BannerCarousel;
