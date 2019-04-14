import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h1>Select a song...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Song: {song.title} </h1>
      <h1>Duration: {song.duration}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
