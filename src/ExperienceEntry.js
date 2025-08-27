const ExperienceEntry = ({ role, period, responsibilities }) => {
  const itemCount = responsibilities.length;
  return (
    <>
      <li className='font-semibold w-full border-b border-slate-200 dark:border-slate-700 text-left py-2'>
        <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
          <span className='text-slate-900 dark:text-slate-100'>{role}</span>
          <span className='text-sm text-slate-600 dark:text-slate-300'>({period})</span>
        </div>
      </li>
      <ul className='text-slate-700 dark:text-slate-300 font-normal text-sm list-none text-justify'>
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className={`py-2 px-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 ${
              index === itemCount - 1 ? '' : 'border-b border-slate-200 dark:border-slate-700'
            }`}
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ExperienceEntry;
