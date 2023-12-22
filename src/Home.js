import General from './General';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
const Home = () => {
    return (
        <div>
            <General />
            <Skills />
            <Experience />
            <Projects />
            <Education />
        </div>
    );
};

export default Home;
