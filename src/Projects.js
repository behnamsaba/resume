import ProjectCard from './ProjectCard';
import { projectData } from './data/projects';


const Projects = () => {
    return (
        <section className='my-6'>
            <div className='section-card p-6 sm:p-8'>
                <h2 className='section-title'>PROJECTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
