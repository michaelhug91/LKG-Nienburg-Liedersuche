import React from 'react';

export default function SongTable({ songs }) {
  return (
    <table border="1" cellPadding="10" style={{ marginTop: '1rem', width: '100%' }}>
      <thead>
        <tr>
          <th>Titel</th>
          <th>Themen</th>
          <th>YouTube</th>
          <th>Spotify</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <tr key={index}>
            <td>{song.title}</td>
            <td>{song.topics}</td>
            <td>
              {song.youtube && <a href={song.youtube} target="_blank" rel="noreferrer">YouTube</a>}
            </td>
            <td>
              {song.spotify && <a href={song.spotify} target="_blank" rel="noreferrer">Spotify</a>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}