import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main className="content">
        <Main></Main>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
