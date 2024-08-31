import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded-lg w-full max-w-xs text-black" // Adjust width here
    />
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
