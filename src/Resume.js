import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import NotFoundRedirect from './NotFoundRedirect';
const Resume = () => {
    return (
        <div>
            <BrowserRouter>
                <a href="#content" className='skip-link'>Skip to content</a>
                <NavBar />
                <main id='content' tabIndex='-1' className='pt-20 page-container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/experience' element={<Experience />} />
                        <Route path='/education' element={<Education />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='*' element={<NotFoundRedirect />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
};

export default Resume;
