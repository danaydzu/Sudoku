import { useState } from 'react'

import './App.css'
import Board from "./components/board/Board.jsx";
import TopBar from "./components/topbar/TopBar.jsx";
import {Box} from "@mui/material";
import Panel from "./components/panel/Panel.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }}>
      <TopBar/>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          justifyContent: 'center'
        }}>
        <Box sx={{display: 'flex'}}>
          <Board />

        </Box>

      </Box>
      <Footer/>
    </Box>
  )
}

export default App
