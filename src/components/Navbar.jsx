
import PropTypes from 'prop-types'; // Import PropTypes
import Title from './Title';
import GenreDropdown from './GenreDropdown';
import SearchBar from './SearchBar';

function Navbar({ handleSearch,genres,setSelectedGenre }) {
  return (
    <nav className="navbar bg-gray-800 text-white flex items-center justify-between pl-8 sticky top-0"> 
        <Title title="TOP 100 Movies of All Time" />
        <div className="sm:flex justify-end items-center space-x-4 w-full max-w-4xl pr-10 pl-5 gap-2">
          <GenreDropdown genres={genres} onSelect={setSelectedGenre} className="sm:py-5"/>
          <SearchBar onSearch={handleSearch} />
        </div>
      </nav>
  );
}

// Define prop types for the Navbar component
Navbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  setSelectedGenre: PropTypes.any,
  genres: PropTypes.any
};

export default Navbar;
