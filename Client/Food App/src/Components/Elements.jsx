import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Elements = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div className="">
        <h1 className='text-3xl md:ml-[8rem] font-bold mt-10'>What's on your mind?</h1>
        <Carousel responsive={responsive} >
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQrbx6GFv94goNU0Af4PPK_Ws3kV-gCNwF1ymyz2vLm6BgCYgY_u1lD4t0nLv_ZNgb1I&usqp=CAU" alt="" className='ml-[5rem] h-32' />
            <h1>briyani</h1>
            </div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
</Carousel>;
    </div>
    </>
  )
}

export default Elements