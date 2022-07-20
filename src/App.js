import JoueursTennisHomePage from './components/Pages/JoueursTennisHomePage';
import JoueursTennisDetailHomePage from './components/Pages/JoueurTennisDetailHomePage';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  return (
            <Router>
              <Routes>
                  <Route path={'/listeJoueurs'} element={
                  <div className='joueursTennisHomePage'>
                    <JoueursTennisHomePage />
                  </div>
                  }></Route>
                  <Route path={'/detailJoueur'} element={ <JoueursTennisDetailHomePage />}></Route>
                  <Route path={'/'} element={<JoueursTennisHomePage/>} ></Route>
              </Routes>
            </Router>
  );
}

export default App;
