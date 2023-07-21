import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection } from 'firebase/firestore';
import 'firebase/database';

const LiveSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults('');
  }, []);

  const fetchSearchResults = (query) => {
    
    const ref = collection(db, "categories"); 

    ref
      .orderByChild('name') 
      .startAt(query)
      .endAt(query + '\uf8ff') 
      .once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const results = Object.values(data);
          console.log(fetchSearchResults)
          setSearchResults(results);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li> // Replace 'name' with the property you want to display
        ))}
      </ul>
    </div>
  );
};

export default LiveSearchBar;
