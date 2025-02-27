import { Link } from "react-router-dom";
import { Dog } from "./component/Dog";
function App() {
  return (
    <>
      <h1>I have successfully deployed</h1>
      <Link to={"/test"}>To test page</Link>
      <br />
      <a href="/test">Anchor to test page</a>
      <Dog />
    </>
  );
}

export default App;
