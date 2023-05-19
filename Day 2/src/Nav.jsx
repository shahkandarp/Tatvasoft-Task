import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Contact from './Contact';
import About from './About'
import Home from './Home';
import Error from './Error';
import Menu from './Menu';
const Nav=()=>{
    const contactinfo=()=>{
        const number=123456879;
        return number;
    }
    return(
        <><BrowserRouter>
        <Menu/>
            <Routes>
                <Route path='/' element={<Home name='Kandarp' number='24'/>}></Route>
                <Route path='/about' element={<About name='Kandarp'/>}></Route>
                <Route path='/contact' element={<Contact fun={contactinfo} />}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
};
export default Nav;