import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
const Resume = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/projects'
                        element={<Projects />}
                    />
                    <Route
                        path='/experience'
                        element={<Experience />}
                    />
                    <Route
                        path='/education'
                        element={<Education />}
                    />
                    <Route
                        path='/skills'
                        element={<Skills />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Resume;
