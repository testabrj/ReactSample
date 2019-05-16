import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
        <AppBar color="primary" position="static">
        <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
           <NavBar/>
          </Toolbar>
        </AppBar>

      </div>
  );
}

export default App;
