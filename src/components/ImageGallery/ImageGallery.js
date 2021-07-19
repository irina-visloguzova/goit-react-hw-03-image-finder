import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import style from "../ImageGallery/ImageGallery.module.css"

const ImageGallery = ({hits, onClick}) => {
    return (
        <ul className={style.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
            <li key={id} className={style.ImageGalleryItem}>
                <ImageGalleryItem
					url={webformatURL}
					alt={tags}
					onClick={()=>onClick(largeImageURL, tags)}
				/>
            </li>))}
        </ul>
    )
};

ImageGallery.propTypes = {
	pics: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
	})),
	onClick: PropTypes.func.isRequired,
}

export default ImageGallery;