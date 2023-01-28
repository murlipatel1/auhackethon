import React from 'react'

const SideBar = () => {
  return (
    <>
    <body className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="flex md:flex-row-reverse flex-wrap">
		
         <div className="w-full md:w-4/5 bg-gray-100">
            <div className="container bg-gray-100 pt-16 px-6">
               
            </div>
         </div>
		 
         <div className="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div className="md:relative mx-auto lg:float-right lg:px-6">
               <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                  <li className="mr-3 flex-1">
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-secondary">
                     <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Link</span>
                     </a>
                  </li>
                  <li className="mr-3 flex-1">
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-secondary">
                     <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Overview</span>
                     </a>
                  </li>
                  <li className="mr-3 flex-1">
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-secondary">
                     <i className="fas fa-link pr-0 md:pr-3 text-pink-500"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">Buy</span>
                     </a>
                  </li>
                  <li className="mr-3 flex-1">
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-secondary">
                     <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Sell</span>
                     </a>
                  </li>
                  <li className="mr-3 flex-1">
                     <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-secondary">
                     <i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Rebalancing</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </body>
    </>
  )
}

export default SideBar