import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'

import Layout from './layout';
import Signup from "./component/signup";
import Signin from "./component/signin";
import Home from "./component/home";
import Celebrity from "./component/celebrity";
import WaitRoom from "./component/wait_room";
// childen router for hamburger
import API from "./component/hamburger/secondcomponent/api";
import W91 from "./component/hamburger/secondcomponent/w91";
import W92 from "./component/hamburger/secondcomponent/w92";
import Disclaimer from "./component/hamburger/secondcomponent/disclaimer";
import Permission from "./component/hamburger/secondcomponent/permission";
import End from "./component/hamburger/secondcomponent/end";


import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';

function App() {
  const [logined, setLogined] = useState(false);
  const [isHome, setIsHome] = useState(true);
  return (
    <BrowserRouter>
      <Layout logined={logined} isHome={isHome} setIsHome={setIsHome}>
        <Routes>
          <Route path="/waitroom" element={<WaitRoom />} />
          <Route path="/celebrity" element={<Celebrity logined={logined} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin setLogined={setLogined} />} />

          <Route path="/api" element={<API />} />
          <Route path="/w91" element={<W91 />} />
          <Route path="/w92" element={<W92 />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/permission" element={<Permission />} />
          <Route path="/end" element={<End />} />

          <Route path="*" element={<Home logined={logined} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
