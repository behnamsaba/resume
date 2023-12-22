import { Link } from 'react-router-dom';
const Education = () => {
    const itemList = 'font-semibold hover:font-bold px-1 py-1';
    return (
        <div className='max-w-2xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 p-3 m-4'>
            <h2 className=' bg-gray-50 text-center text-2xl font-bold mb-4'>EDUCATION AND CERTIFICATIONS</h2>
            <div className='bg-gray-50 p-6'>
                <ul className='list-none space-y-4 text-gray-700 leading-relaxed text-center'>
                    <li className={itemList}>
                        Microsoft Azure - Developer Associate AZ-204 Certificate
                        – Microsoft
                        <p className='text-sm'>December 2023</p>
                    </li>
                    <li className={itemList}>
                        Microsoft Azure - Fundamentals AZ-900 Certificate –
                        Microsoft
                        <p className='text-sm'>November 2023</p>
                    </li>
                    <li className={itemList}>
                        Full-Stack Software Engineering Program Certificate
                        <p className='text-sm'>September 2022 – August 2023</p>
                    </li>
                    {/* <ul className='list-none list-inside space-y-2 pl-5'>
                        <li className={seconditemList}>
                            Intensive program with comprehensive hands-on
                            coursework covering front-end, and back-end web
                            development, and coding.
                        </li>
                        <li className={seconditemList}>
                            Developed and tested real-world web applications
                            under the guidance of industry experts.
                        </li>
                        <li className={seconditemList}>
                            Completed a 700+ hour full-stack course,
                            encompassing all facets of web development, and
                            produced, refactor, and implemented code for 114+
                            projects and web applications.
                        </li>
                        <li className={seconditemList}>
                            Stayed updated on current web technologies and
                            practices through ongoing education and workshops.
                        </li>
                        <li className={seconditemList}>
                            Researched and selected alternative web technologies
                            for personal projects.
                        </li>
                    </ul>
                    <li className={itemList}>
                        Bachelor of Science – Industrial Engineering, Azad
                        University
                        <p className='text-sm'>October 2011 – February 2016</p>
                    </li> */}
                    <li className={itemList}>
                        Certificate: Word, Excel, PowerPoint, Access, Java,
                        Python – MFT
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Education;
