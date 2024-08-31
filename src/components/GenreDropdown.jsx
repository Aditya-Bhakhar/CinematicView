import PropTypes from 'prop-types';

function GenreDropdown({ genres, onSelect }) {
  const handleChange = (e) => {
    onSelect(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded-lg text-black"
    >
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

GenreDropdown.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default GenreDropdown;
