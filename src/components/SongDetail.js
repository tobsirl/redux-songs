import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>Song Detail</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
