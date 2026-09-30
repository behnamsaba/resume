// Company logo, or the company's initials when no logo image is available
const CompanyLogo = ({ company, logo }) => (
  <div className='w-12 h-12 flex-shrink-0 rounded-lg bg-white ring-1 ring-slate-200 dark:ring-slate-600 overflow-hidden flex items-center justify-center'>
    {logo ? (
      <img src={logo} alt={`${company} logo`} className='w-full h-full object-contain p-1' />
    ) : (
      <span className='text-sm font-bold text-slate-600' aria-hidden='true'>
        {company.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase()}
      </span>
    )}
  </div>
);

const ExperienceEntry = ({ role, company, location, logo, period, responsibilities }) => {
  const itemCount = responsibilities.length;
  return (
    <>
      <li className='w-full border-b border-slate-200 dark:border-slate-700 text-left py-2'>
        <div className='flex items-center gap-3'>
          <CompanyLogo company={company} logo={logo} />
          <div className='flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1'>
            <div>
              <div className='font-semibold text-slate-900 dark:text-slate-100'>{role}</div>
              <div className='text-sm text-slate-600 dark:text-slate-300'>
                {company}
                {location && ` · ${location}`}
              </div>
            </div>
            <span className='text-sm text-slate-600 dark:text-slate-300 sm:whitespace-nowrap'>{period}</span>
          </div>
        </div>
      </li>
      <ul className='text-slate-700 dark:text-slate-300 font-normal text-sm list-none text-left'>
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
