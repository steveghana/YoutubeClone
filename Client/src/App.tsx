import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import {
  Explore,
  Home,
  Shorts,
  Subscription,
  Library,
  History,
} from "./Pages/exports";

function App() {
  //Routes
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscription />} />
            <Route path="/library" element={<Library />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
