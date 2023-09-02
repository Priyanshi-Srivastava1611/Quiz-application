import "./App.css";
import { HomePage } from "./Pages/Home/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Instruction } from "./Pages/Instruction/instructions";
import { ShowResults } from "./Pages/Result/ShowResults";
//import { Quiz } from "./Pages/Quiz/Quiz";
import { Quiz } from "./Pages/Quiz/Quiz";
import { shuffle, startQuiz, endQuiz } from "./Pages/Utils/useShuffle";
import Main from "./Components/Main";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="" element={<HomePage />} />
          <Route exact path="/main" element={<Main />} />
          {/* <Route exact path="/instructions" element={Instruction} />
          <Route exact path="/quiz" element={Quiz} /> */}
          {/* <Route exact path="/main/result" element={ShowResults} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
