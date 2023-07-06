import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <div className="left-side">
          <div className="left-side_header">Your Result</div>
          <div className="left-side_score">76 of 100</div>
          <div className="left-side_sub-header">Great</div>
          <div className="left-side_text">You scored higher than 65% of the people who have taken these tests.</div>
        </div>
        <div className="right-side">
          <div>Summary</div>
          <div>
            Reaction
          </div>
          <div>
            Memory
          </div>
          <div>
            Verbal
          </div>
          <div>
            Visual
          </div>
          <input type='submit' value='Continue'/>
        </div>
      </div>
    </div>
  );
}

export default App;
