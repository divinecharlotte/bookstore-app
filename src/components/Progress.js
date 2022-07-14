import React from 'react';
import progressbar from '../assets/images/progressbar.png';

const Progress = () => {
  const randomProgress = (min = 60, max = 85) => (Math.floor(Math.random() * (max - min)) + min);
  const randomChapter = (min = 1, max = 15) => (Math.floor(Math.random() * (max - min)) + min);

  return (
    <div className="progress-container">
      <div className="bar-wrapper">
        <img src={progressbar} alt="progressbar" />
        <span>
          <h1>
            {randomProgress()}
            %
          </h1>
          <p className="normal-text darker">Completed</p>
        </span>
      </div>
      <hr />
      <div className="chapter-wrapper">
        <h4 className="normal-text darker styled-font">CURRENT CHAPTER</h4>
        <p className="normal-text styled-font">
          Chapter
          {' '}
          {randomChapter()}
        </p>
        <button type="button" className="update-button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Progress;
