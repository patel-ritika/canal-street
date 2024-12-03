import React, {useState} from 'react';
import headerlogo from "../asset/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const MobileHeader = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <>
            <div className='md:hidden fixed z-50 w-full flex justify-between p-8 items-center'>
                <div className='h-10'>
                    <Link to='/' onClick={() => setShowMenu(false)}>
                        <img src={headerlogo} alt="headerlogo" className="h-full" />
                    </Link>
                </div>
                <div className=''>
                    <button src={headerlogo} alt="headerlogo" className="text-2xl font-bold"
                        onClick={() => setShowMenu(true)}
                    >&#9776;</button>
                </div>
                {
                    showMenu && <div className='absolute bg-slate-50 w-full left-0 top-0 h-screen overflow-scroll'>
                        <div className='grid grid-cols-2 h-96 gap-0 '>
                            <Link to='/' onClick={() => setShowMenu(false)}>
                                <div className='bg-slate-50 text-center py-20'>
                                    <p className='font-semibold font-mono text-xl -rotate-45'>About</p>
                                </div>
                            </Link>
                            <Link to='/food' onClick={() => setShowMenu(false)}>
                                <div className='bg-blue-500 text-center py-20'>
                                    <p className='font-semibold font-mono text-xl rotate-45'>Food</p>
                                </div>
                            </Link>
                            <Link to='/retail' onClick={() => setShowMenu(false)}>
                                <div className='bg-red-500 text-center py-20'>
                                    <p className='font-semibold font-mono text-xl rotate-45'>Retail</p>
                                </div>
                            </Link>
                            <Link to='/community' onClick={() => setShowMenu(false)}>
                                <div className='bg-yellow-500 text-center py-20'>
                                    <p className='font-semibold font-mono text-xl -rotate-45'>Community</p>
                                </div>
                            </Link>
                        </div>
                        <div className='p-8'>
                            <button className='border-solid border border-black w-full py-5 mb-4 font-mono text-lg'>become a vendor</button>
                            <p className='font-mono text-lg mb-4'>265 Canal Street <br />New York, New York</p>
                            <p className='font-mono text-lg mb-4'>Food Hall Hours: <br />Mon – Sun: 11AM- 8PM</p>
                            <p className='font-mono text-lg mb-4'>Retail Market Hours: <br />Thurs – Sun: 11AM- 7PM</p>
                            <small className='font-mono text-lg underline'>Email us</small>
                            <div className='flex justify-between mt-4'>
                                <button className='border-solid px-14 text-4xl py-5 border border-black'><FontAwesomeIcon icon={faFacebookF} /></button>
                                <button className='border-solid px-14 text-4xl py-5 border border-black'><FontAwesomeIcon icon={faInstagram} /></button>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faClose} className='fixed top-5 text-4xl right-5'
                            onClick={() => setShowMenu(false)}
                        />
                    </div>
                }
            </div>
        </>
  );
}

export default MobileHeader;
