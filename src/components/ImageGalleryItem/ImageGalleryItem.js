import PropTypes from 'prop-types';
import style from "../ImageGalleryItem/ImageGalleryItem.module.css"

const ImageGalleryItem = ({ url, alt, onClick }) => (
	<>
		<img
			src={url}
			alt={alt}
			onClick={onClick} className={style.ImageGalleryItemImage}
		/>
	</>
);

ImageGalleryItem.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;