import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function SearchWordsBySynonym() {
  const [synonym, setSynonym] = useState('');
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/words/${synonym}`);
      setWords(response.data);
    } catch (err) {
      console.error('Failed to fetch words by synonym:', err);
      setError('Failed to fetch words by synonym. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Enter a synonym"
          value={synonym}
          onChange={(e) => setSynonym(e.target.value)}
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? 'Loading...' : 'Search Words by Synonym'}
        </Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {words.length > 0 && (
        <div>
          <h3 className="text-lg font-medium">Words:</h3>
          <ul className="list-disc list-inside">
            {words.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchWordsBySynonym;