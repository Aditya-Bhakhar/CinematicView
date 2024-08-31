import { useEffect, useState } from 'react';
import { db } from './firebase'; // Import the Firestore instance
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Card from './components/Card'; // Import the Card component
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the ScrollToTopButton component

function App() {
  const [data, setData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'movies'), orderBy('rating', 'desc'));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(items);

        const genreSet = new Set();
        items.forEach(item => {
          item.genre.forEach(g => genreSet.add(g));
        });
        setGenres(['All', ...Array.from(genreSet)]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = selectedGenre === 'All'
    ? data
    : data.filter((item) => item.genre.includes(selectedGenre));

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const searchedData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App bg-slate-900 min-h-screen relative">
      <Navbar handleSearch={handleSearch} genres={genres} setSelectedGenre={setSelectedGenre} />

      <div className="content-container py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              year={item.year}
              genre={item.genre}
              rating={item.rating}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default App;