import React from 'react';
import {Icon} from "@iconify/react"
export default function News(){
  const news = [
    {
        "id":1,
        "title": "Big Banks Try to Take On Apple Wallet and PayPal",
        "url":"https://www.fool.com/investing/2023/01/28/big-banks-try-to-take-on-apple-wallet-and-paypal/"
    },
    {
        "id":2,
        "title":"Bitcoin Below $23K, Ethereum, Dogecoin Give Up Early Gains",
        "url": "https://www.benzinga.com/markets/cryptocurrency/23/01/30597566/bitcoin-ethereum-dogecoin-give-up-early-gains-analyst-says-2-altcoins-are-going-through-th"
    },
    {
        "id":3,
        "title":"These 3 Companies Can't Get Enough of Their Own Stock",
        "url":"https://www.zacks.com/commentary/2044954/these-3-companies-cant-get-enough-of-their-own-stock"
    },
    {
        "id":4,
        "title": "Disney Ain't Never Had A Friend Like Will Smith: Could Actor Return To This Movie Franchise?",
        "url":"https://www.benzinga.com/general/entertainment/23/01/30574207/disney-aint-never-had-a-friend-like-will-smith-could-actor-return-to-this-movie-franchise"
    },
    {
        "id":5,
        "title": "Does This VR News Make Apple Stock a Buy for 2023?",
        "url":"https://www.fool.com/investing/2023/01/28/big-banks-try-to-take-on-apple-wallet-and-paypal/"
    },
  ]
  let [current, setCurrent] = React.useState(0)
  const newsList = news.map((Newz)=>{
    return(

        <div key={news.id}
        className={
          "xs:w-4/5 relative bg-secondary w-[90%] m-3 rounded-2xl bg-tertiary py-8 px-8  drop-shadow-md sm:w-[65%] xl:px-11"
        } >

<svg
          aria-hidden="true"
          className="absolute h-12 w-12 text- opacity-50 "
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <div className="mt-8 mb-3 flex items-center justify-center gap-3  lg:mb-5 ">
          <p className="font-Lato text-lg font-extrabold text-black">
            {Newz.id}
          </p>
        </div>
        <div className="mt-4 mb-3 gap-3 lg:mt-3 lg:mb-5">
          <h1 className="font-Lato  text-center text-lg font-normal text-black">
            <a href={Newz.url}>{Newz.title}</a>
            
          </h1>
           
        </div>
        </div>
    )
  })
  return (
    <div className="mt-14 pb-8 btwnMdAndLg:mt-24">
      <div className='flex flex-row xl:mt-12 xl:flex-row'>
<div id="news"className='bg-opacity w-full p-4 mt-4 lg:mt-14 xl:mt-14 xl:p-0 font-bold text-5xl'>
  <h1 className='text-black  text-center md:text-4xl xl:bg-primary xl:p-6 xl:text-centre  xl:ml-0 xl:text-5xl font-semibold xl:mt-0'>News</h1></div> 

</div> 

      <div className="xs:px-6 relative mt-8 flex items-center justify-center sm:p-10 md:mt-0 md:px-5 lg:px-8">
        <div className="ml-3 xl:hidden">
          <Icon
            icon="ic:baseline-chevron-left"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-0 text-5xl"
            color="#B69575"
            onClick={() => {
              if (current === 0) {
                current = 1
              }
              setCurrent(current - 1)
            }}
          />
        </div>
        {/* All Testimonials */}
        <div className="relative flex justify-center md:hidden">
          {newsList[current]}
          
        </div>
        <div className="hidden md:flex relative  justify-center lg:hidden">
          {newsList[current]}{newsList[current+1]}
          
        </div>
        <div className="hidden lg:flex relative  justify-center xl:hidden">
          {newsList[current]}{newsList[current+1]}{newsList[current+2]}
          
        </div>
        <div className="hidden xl:flex md:gap-4 lg:mx-auto lg:w-[90%] lg:gap-8">
          {newsList}
        </div>
        <div className="mr-3 xl:hidden">
          <Icon
            icon="ic:baseline-chevron-right"
            color="#B69575"
            className="cursor-pointer rounded-full bg-secondary-15 p-1 pr-0 text-5xl"
            onClick={() => {
              if (current === newsList.length - 1) {
                current = -1
              }
              if(current=== newsList.length-3){
                current = -1
              }
              setCurrent(current + 1)
            }}
          />
        </div>
      </div>
    </div>
  )


    


}


