import React from 'react';

const MarketEventSection = () => {
  return (
    <>
            <div className='md:p-20 md:mt-10 p-6'>
                <div className='md:flex md:justify-between md:items-center text-center'>
                    <div className='md:w-1/3 md:text-center md:mb-0 mb-5'>
                        <h3 className='md:font-bold md:text-6xl text-4xl md:m-0'>活動</h3>
                    </div>
                    <div className='md:w-1/3 md:text-center md:mb-0 mb-5'>
                        <h1 className='md:text-9xl font-mono text-4xl md:m-0'>Market Events</h1>
                    </div>
                    <div className='md:w-1/3 md:text-center md:mb-0 mb-5'>
                        <h3 className='md:font-bold md:text-6xl text-4xl md:m-0'>活動</h3>
                    </div>
                </div>
                <div className='md:relative md:flex md:justify-between md:items-start md:mt-20 market-event-content'>
                    <div className='md:w-96 md:text-center md:mb-0 mb-5'>
                        <p className='text-base font-semibold font-mono'>09/21</p>
                        <p className='text-xl  font-mono'>Small Business Retail Pop Up Weekend!</p>
                    </div>
                    <div className='md:w-96 md:text-center md:mb-0 mb-5'>
                        <p className='text-base font-semibold font-mono'>02/07</p>
                        <p className='text-xl  font-mono'>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
                    </div>
                    <div className='md:w-96 md:text-center'>
                        <p className='text-base font-semibold font-mono'>12/11</p>
                        <p className='text-xl font-mono'>Hack City 12/11</p>
                    </div>
                    <button className='md:absolute md:-bottom-7 bg-slate-50 font-mono font-semibold text-xl border-solid border-2 border-slate-950 md:px-20 md:py-5 md:m-0 mt-4 md:w-auto w-full py-4'>see all</button>
                </div>
            </div>
        </>
  );
}

export default MarketEventSection;
