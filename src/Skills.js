import { skillsData } from './data/skills';

const SkillItem = ({ skill }) => (
    <li className='text-base rounded-lg px-2 py-2 transition-colors hover:bg-blue-50 hover:text-slate-900 dark:hover:bg-slate-700 dark:hover:text-white'>
        {skill}
    </li>
);

const SkillCategory = ({ category, skills, gridTemplate }) => (
    <>
        <li className='font-semibold w-full border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100'>
            {category}
        </li>
        <ul className={`grid ${gridTemplate} content-between gap-2`}>
            {skills.map((skill, index) => (
                <SkillItem
                    key={index}
                    skill={skill}
                />
            ))}
        </ul>
    </>
);

const Skills = () => {
    return (
        <section className='my-6'>
            <div className='section-card p-6 sm:p-8'>
                <h2 className='section-title'>Skills</h2>
                <ul className='list-none space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-center'>
                    {skillsData.map((data, index) => (
                        <SkillCategory key={index} {...data} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
