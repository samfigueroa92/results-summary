import './App.css';

// icons
import memory from "./assets/fonts/images/icon-memory.svg"
import reaction from "./assets/fonts/images/icon-reaction.svg"
import verbal from "./assets/fonts/images/icon-verbal.svg"
import visual from "./assets/fonts/images/icon-visual.svg"

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <div className="left-side">
          <div className="left-side_header">Your Result</div>
          <div className="left-side_score">76 <span>of 100</span></div>
          <div className="left-side_sub-header">Great</div>
          <div className="left-side_text">You scored higher than 65% of the people who have taken these tests.</div>
        </div>
        <div className="right-side">
          <div className="right-side_header">Summary</div>
          <div className="right-side_banner reaction">
            <img src={reaction}/>
            Reaction <span>80 / 100</span>
          </div>
          <div className="right-side_banner memory">
          <img src={memory}/>
            Memory <span>92 / 100</span>
          </div>
          <div className="right-side_banner verbal">
          <img src={verbal}/>
            Verbal <span>61 / 100</span>
          </div>
          <div className="right-side_banner visual">
          <img src={visual} />
            Visual <span>72 / 100</span>
          </div>
          <input type='submit' value='Continue' className="button"/>
        </div>
      </div>
    </div>
  );
}

export default App;
