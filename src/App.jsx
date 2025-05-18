import React, { useState } from 'react';
import SongTable from './components/SongTable';
import songs from './songs.csv?raw';

export default function App() {
  const [search, setSearch] = useState('');

  const parsedSongs = songs
    .trim()
    .split('\n')
    .slice(1)
    .map((line) => {
      const [title, topics, youtube, spotify] = line.split(',');
      return { title, topics, youtube, spotify };
    });

  const filtered = parsedSongs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.topics.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Liedsuch-App</h1>
      <input
        type="text"
        placeholder="Suchbegriff eingeben..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', maxWidth: 400 }}
      />
      <SongTable songs={filtered} />
    </div>
  );
}