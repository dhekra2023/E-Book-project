

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './components/BookList.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx'




function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        {/* <Route index element={<BookList/>} /> */}
        <Route path="/register" element={<Register />} />
     
    </Routes>
  </BrowserRouter>
  
);


}

export default App;
