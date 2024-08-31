import PropTypes from 'prop-types';
import Logo from './Logo';

function Title({ title }) {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={handleScrollToTop}>
      <div className="title-container flex items-center justify-center py-6">
      <h1 className="sm:flex title-text text-4xl font-extrabold text-center bg-gradient-to-r from-red-600 to-yellow-500 text-white p-4 rounded-lg shadow-lg gap-6">
        <Logo />
        {title}
      </h1>
    </div>
    </button>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
