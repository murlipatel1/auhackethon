import React from 'react';

export default function About(){
    return(
<div>
    <div className='flex flex-col xl:mt-12 xl:flex-row'>
      <div id="abt"className='abt w-full p-6 mt-8 lg:mt-24 xl:mt-14 xl:p-0 font-bold text-4xl'>
        <h1 className='text-black text-center md:text-4xl xl:bg-secondary xl:p-16 xl:text-centre xl:rounded-r-[8rem] xl:ml-0 xl:text-left xl:mt-0'>About Us</h1></div> 

        <div>
            <p className='text-xl font-thin xl:text-2xl p-7 text-center md:p-16 lg:pt-10'> <p>StockHive is a cutting-edge platform for stock portfolio management. Our mission is to simplify and optimize the process of buying, selling, and managing stocks for individuals and businesses. Our user-friendly interface and advanced tools make it easy for users to track their portfolio, perform in-depth market research, and make informed investment decisions. <br/></p>

<p className='hidden md:inline-flex mt-8'>At StockHive, we believe that everyone should have access to the resources they need to succeed in the stock market. That's why we've developed a platform that caters to investors of all levels, from beginners to seasoned professionals. Whether you're just starting out or looking to expand your portfolio, StockHive has everything you need to reach your financial goals.<br/></p>

<p className='hidden'>Our team of experts is dedicated to providing the best possible experience for our users. We constantly update our platform with new features and tools to help you stay ahead of the market. With StockHive, you can be confident that you have the support and resources you need to navigate the stock market with ease.</p>
<br/>
<p className='font-semibold mt-6'>"Join the StockHive community today and elevate your stock portfolio to new heights."</p> </p>
        </div> 
        </div>  
</div>
    )

}
