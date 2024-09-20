import Header from "./components/Header";
import "./App.css";
import Content from "./components/Content";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Content />
        <Profile />
      </div>
    </div>
  );
}

export default App;
