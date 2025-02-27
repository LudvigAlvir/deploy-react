import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <h1>I have succesfully deployed</h1>
      <Link to={"/test"}>To test page</Link>
      <br />
      <a href="/test">Anchor to test page</a>
    </>
  );
}

export default App;
