
function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition"
    >
      ↑ Top
    </button>
  );
}

export default ScrollToTopButton;