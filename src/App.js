import React from 'react';
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//styles
import { GlobalStyle } from './GlobalStyle'; // as the component was not exported  default hence curly braces. 
//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
//import Actor from './components/Actor';
import ActorInfo from './components/ActorInfo';



const App = () =>
(
  <Router>
    <Header />

    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/:movieId' element={<Movie />} />
      <Route exact path='/person/:id' element={<ActorInfo />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

    <GlobalStyle />
  </Router>
);


export default App;


