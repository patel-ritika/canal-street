import React from 'react';
import sectionImg1 from '../../asset/images/homeSectionImgs/newMarketImg1.avif'
import sectionImg2 from '../../asset/images/homeSectionImgs/newMarketImg2.jpg'
import sectionImg3 from '../../asset/images/homeSectionImgs/newMarketImg3.jpg'


const NewKindMarketSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            content: "Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.",
        },
        {
            sectionImg: sectionImg2,
            content: "Retail Market Hours: Thursday – Sun: 11:00AM - 7:00PM",
        },
        {
            sectionImg: sectionImg3,
            content: "Food Hall Hours: Mon – Sun: 11:00AM - 8:00PM",
        },
    ]
  return (
    <>
            <div className='md:p-20 p-6'>
                <div className='md:w-1/2'>
                    <h1 className='text-black md:text-9xl font-mono leading-snug text-5xl'>A New Kind of Market</h1>
                </div>
                <div className='md:flex md:justify-between md:gap-4 md:mt-20 mt-10'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='md:w-2/3 mb-10 md:m-0' key={index}>
                                <img src={data?.sectionImg} className='md:w-full' alt='section-img' />
                                <p className='md:mt-10 md:text-xl font-bold font-mono md:leading-8 mt-5'>{data?.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
  );
}

export default NewKindMarketSection;
