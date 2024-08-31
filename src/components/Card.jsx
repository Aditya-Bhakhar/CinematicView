
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

function Card({ id, image, title, year, genre, rating, description }) {
  // Helper function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2); // Convert 10-point rating to 5-star rating
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />); // Filled star
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />); // Unfilled star
      }
    }
    return stars;
  };

  return (
    <div className="Card bg-white rounded-3xl shadow-2xl max-w-[340px] " key={id}>
      <div className="p-6">
        <div className="h-100 overflow-hidden rounded-3xl">
          <img className="h-full w-full object-cover" src={image} alt={title} />
        </div>
        <div className="text-lg font-medium text-center mt-4">
          <h2 className="bg-slate-900 font-bold px-2 my-4 rounded-xl text-yellow-500">
            {title}
          </h2>
          <ul>
            <li><b>Year of release:</b> {year}</li>
            <li><b>Genre:</b> {genre.join(', ')}</li>
            <li className="flex items-center justify-center mt-2">
              <b className="pr-2">Rating:</b> {rating}/10
              <p className="flex items-center ml-2">{renderStars(rating)}</p>
            </li>
            <li className="mt-4"><b>----------- Movie plot -----------</b><br /> {description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
