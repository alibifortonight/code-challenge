import './Home.css';
import AddWordForm from '../components/AddWordForm';
import AddSynonymForm from '../components/AddSynonymForm';
import SearchSynonyms from '../components/SearchSynonyms';
import SearchWordsBySynonym from '../components/SearchWordsBySynonym'; // Import the new component
import { useState } from 'react';

function Home() {
  const [wordId, setWordId] = useState(null);

  const handleWordAdded = (word) => {
    setWordId(word._id);
  };

  return (
    <div id="homePage">
      <h1>code_challenge</h1>
      <AddWordForm onWordAdded={handleWordAdded} />
      {wordId && <AddSynonymForm wordId={wordId} />}
      <SearchSynonyms />
      <SearchWordsBySynonym /> {/* Add the new component here */}
    </div>
  );
}

export default Home;