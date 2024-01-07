// Component for individual experience entry
const ExperienceEntry = ({ role, period, responsibilities }) => {
    const itemCount = responsibilities.length;
    return (
        <>
            <li className='font-semibold hover:font-bold w-full border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50 text-center'>
                {role} <p className="text-sm">({period})</p>
            </li>
            <ul className='text-gray-800 font-normal text-sm list-none dark:text-gray-400 text-justify'>
                {responsibilities.map((responsibility, index) => (
                    <li
                        key={index}
                        className={`py-2 px-2 rounded-lg hover:bg-blue-100 ${
                            index === itemCount - 1
                                ? ''
                                : 'border-b-2 border-neutral-200 border-opacity-100 dark:border-opacity-50'
                        }`}>
                        {responsibility}
                    </li>
                ))}
            </ul>
        </>
    );
};
export default ExperienceEntry;
