import * as React from 'react'
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Views from './components/pages/Home';
import WOW from "wowjs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Team from './components/pages/Team';
import PreMint from './components/pages/PreMint';
import Navbar from './components/Navbar';
import DAO from './components/pages/DAO';
import DivineLabs from './components/pages/DivineLabs';
import DiscordLink from './components/pages/DiscordLink';

function App() {
  useEffect(() => {
    new WOW.WOW().init();

  }, []);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Views />} />
        <Route path="/team" element={<Team />} />
        <Route path="/PreMint" element={<PreMint />} />
        <Route path="/DAO" element={<DAO />} />
        <Route path="/DivineLabs" element={<DivineLabs />} />
        <Route path="/DivineLabs/DiscordLink" element={<DiscordLink />} />
      </Routes>
    </div>
  );
}

export default App;
