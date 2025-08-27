import ExperienceEntry from './ExperienceEntry';
import { experienceData } from './data/experience';

const Experience = () => {
    return (
        <section className='my-6'>
            <div className='section-card p-6 sm:p-8'>
                <h2 className='section-title'>EXPERIENCE</h2>
                <ul className='list-none space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-left'>
                    {experienceData.map((item, index) => (
                        <ExperienceEntry key={index} {...item} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
