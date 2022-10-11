import React from "react";
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
import { StateContextProvider } from "./Context/context";
import Feed from "components/Feed";
import VideoDetail from "components/VideoDetail";
import ChannelDetail from "components/ChannelDetail";
import SearchFeed from "components/SearchFeed";

function App() {
  //Routes
  return (
    <StateContextProvider>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscription />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </StateContextProvider>
  );
}

export default App;
