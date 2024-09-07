import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Input from './components/input';

export default function Approute (){
    return(
        <>
         <Router>
            <Routes>
                <Route path="/" element={<Input />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
        </>
    )

}
  
