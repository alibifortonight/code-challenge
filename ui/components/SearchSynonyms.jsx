import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function SearchSynonyms() {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/synonyms/${word}`);
      setSynonyms(response.data);
    } catch (err) {
      console.error('Failed to fetch synonyms:', err);
      setError('Failed to fetch synonyms. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? 'Loading...' : 'Search Synonyms'}
        </Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {synonyms.length > 0 && (
        <div>
          <h3 className="text-lg font-medium">Synonyms:</h3>
          <ul className="list-disc list-inside">
            {synonyms.map((synonym, index) => (
              <li key={index}>{synonym}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchSynonyms;