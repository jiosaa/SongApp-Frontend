
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import SongList from './components/SongList';
import SongStats from './components/SongStats';
import Form from './pages/Form';
import UpdateForm from './pages/UpdateForm';
import { SongProvider } from './context/SongContext'; 



function App() { 


  return (

     <SongProvider>
      <Router>
    <Header />  
      <div className="song">
        <Routes>
        
        <Route exact path='/' element={
          <>
       <SongStats />
      <SongList />
          </>
        }>
       {/* passing song props to SongList  - goto SongList*/}

      </Route>

      <Route path ='/songs/add' element={<Form/>}/>
      <Route path ='/songs/:id/update' element={<UpdateForm/>}/>
      </Routes>
     
      </div>
      </Router>
      </SongProvider>
     
  );
}

export default App;
