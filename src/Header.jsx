import React,  { useState,useEffect } from "react"
import Card from "./Card";
import Fcard from "./Fcard.jsx";
import CardCarousel from "./Carousel";

function Header() {
  const [backgroundImage,setBackground]=useState("url(../public/phonepay/phonepay17.svg)")
  const changeBimage=(imageurl)=>{
    setBackground(`url(${imageurl})`);
  }
  useEffect(() => {
    console.log('Background image changed to:', backgroundImage);
    const divElement = document.getElementById('year');
    if (divElement) {
      divElement.classList.add('background-change-animation');
      setTimeout(() => {
        divElement.classList.remove('background-change-animation');
      }, 200);
    }
  }, [backgroundImage]); 
  return ( 
    <>
      <div className='w-full  text-violet-800 xs:text-[25px] sm:text-[25px] md:text-4xl text-center font-bold pt-52 h-[400px] pb-10'>
        <h1 className="scroll-effect">To offer every Indian equal opportunity to accelerate their progress by unlocking the flow of money and access to services</h1>
        </div>
        <div className="relative z-[600]" >
            <div id='year' className=' md:w-full md:h-[40vh] h-[fit-content] w-[400px] '  style={{width: '100%',height: '500px',backgroundImage: backgroundImage,backgroundSize:'cover',backgroundPosition: 'center',transition: 'background-image 1s ease-in-out',}}></div>
            <div className=' z-[600] flex-wrap absolute w-full flex justify-center bg-transparent top-[480px]'>
            <div className='text-violet-800 rounded-3xl flex w-[600px] bg-transparent justify-center space-y-8 space-x-10 h-20 shadow-md shadow-indigo-400/40'>
              <a onClick={()=>changeBimage('../public/phonepay/phonepay17.svg')} className='pt-8 cursor-pointer'>2016</a>
              <a  onClick={()=>changeBimage('../public/phonepay/quriarlogo1.svg')}  className='cursor-pointer'>2017</a>
              <a  onClick={()=>changeBimage('../public/phonepay/phonepay20.svg')}  className='cursor-pointer'>2018</a>
              <a  onClick={()=>changeBimage('../public/phonepay/phonepay21.svg')}  className='cursor-pointer'>2019</a>
              <a  onClick={()=>changeBimage('../public/phonepay/phonepay22.svg')}  className='cursor-pointer'>2020</a>
              <a  onClick={()=>changeBimage('../public/phonepay/phonepay23.svg')}  className='cursor-pointer'>2021</a>
              <a  onClick={()=>changeBimage('../public/phonepay/phonepay24.svg')}  className='cursor-pointer'>2022</a>
              <a  onClick={()=>changeBimage('../public/phonepay/phonepay25.svg')}  className='cursor-pointer'>2023</a>
            </div>
          </div>
      </div>
      <div className="w-full mt-[70px] text-center flex items-center justify-center sm:h-[fit-content] xs:h-[fit-content] md:h-[60vh]">
        <div className="scroll-effect space-y-[10px] w-[70%]">
          <h1 className="text-violet-500 font-bold xs:text-[30px] sm:[30px] md:text-[55px]">PhonePe Group of companies</h1>
          <p className="text-gray-500 ">PhonePe Group is India’s leading fintech company. Its flagship product, the PhonePe digital payments app, was launched in Aug 2016. Within a short period of time, the company has scaled rapidly to become India’s leading consumer payments app. On the back of its leadership in digital payments, PhonePe Group has expanded into financial services - Insurance, Lending, & Wealth as well as new consumer tech businesses - Pincode and Indus Appstore.</p>
        </div>
      </div>
      <div className="p-8 justify-center items-center  px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card 
        image="https://i.postimg.cc/66dy7Qcr/phonepay26.png" 
        title="Share.Market" 
        description="A brand of PhonePe Wealth Broking and affilliates, is a wealth and investement plateform, catering to investator and traders of all experties levels." 
      />
      <Card 
        image="https://i.postimg.cc/7ZsHgn18/pincode-b507c3d65efb24d06121c92ee187da5b.png" 
        title="Pincode" 
        description="A shopping app that places local stores and sellers in the forefront of the digital-shopping growth story." 
      />
      <Card 
        image="https://i.postimg.cc/Cxq7DSfj/indus-app-store-0545ed53af7bcb6b3d84ff36916518f3.jpg" 
        title="Indus Appstore" 
        description="A native Android-based mobile app store, designed to fulfilled the local and cultural need of Indian consumers and provide developer a level playing field to list , distribute & promote their products in the Indian app ecosystem." 
      />
    </div>
    <div className="text-center w-full flex justify-center items-center md:px-56 xs:text-left sm:text-left h-[30vh]">
      <p className="text-gray-500 ">PhonePe Group is an India headquartered technology company with a portfolio of businesses aligned with the company’s vision to offer every Indian an equal opportunity to accelerate their progress by unlocking the flow of money and access to services.</p>
    </div>

    <div className="w-full h-[fit-content] py-4 text-center">
      <h1 className="md:text-[55px] xs:text-4xl xs:py-[40px] font-semibold text-violet-600 ">Awards & Accolades</h1>
    </div>
    
    <CardCarousel/>
    <div className="w-full h-[fit-content] py-4 text-center">
      <h1 className="md:text-[55px] xs:text-4xl xs:py-[40px] font-semibold text-violet-600">Our Founders</h1>
    </div>
    <div className="p-8 px-20 grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <Fcard
        image="../public/phonepay/phonepay43.png" 
        title="Sameer Nigam" 
        description="Sameer Nigam founded PhonePe in 2015 and serves as its Chief Executive Officer. Before PhonePe, he served as the SVP Engineering and VP Marketing at Flipkart. His Flipkart journey started in 2011 when the company acquired his earlier startup - Mime360, a digital media distribution platform. Sameer has also served as the" 
      />
      <Fcard
         image="../public/phonepay/phonepay45.png" 
         title="Burzin Engineer" 
         description="Burzin is the Chief Reliability Officer at PhonePe. He has more than 25 years of experience in the IT industry. During his stint, he has built web scale infrastructure and led multiple engineering projects including running and building PhonePe's web serving layer, cloud systems, network, storage and CDN. He’s passionate about" 
      />
      <Fcard
         image="../public/phonepay/phonepay44.png" 
         title="Rahul Chari" 
         description="Rahul Chari is the Chief Technology officer at PhonePe. He comes with two decades of experience spanning embedded systems, enterprise software development, e-commerce platforms and apps. Prior to PhonePe he was working as the VP Engineering at Flipkart and was responsible for building the best-in-class supply chain" 
      />
    </div>
    <div className="w-full h-[fit-content] py-4 text-center">
      <h1 className="md:text-[55px] xs:text-4xl xs:py-[40px] font-semibold text-violet-600">Our Board</h1>
    </div>
    <div className="p-[50px] px-20 grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-[80px]">
    <Fcard
        image="../public/phonepay/phonepay43.png" 
        title="Sameer Nigam" 
        description="Sameer Nigam founded PhonePe in 2015 and serves as its Chief Executive Officer. Before PhonePe, he served as the SVP Engineering and VP Marketing at Flipkart. His Flipkart journey started in 2011 when the company acquired his earlier startup - Mime360, a digital media distribution platform. Sameer has also served as the" 
      />
      <Fcard
         image="../public/phonepay/phonepay44.png" 
         title="Rahul Chari" 
         description="Rahul Chari is the Chief Technology officer at PhonePe. He comes with two decades of experience spanning embedded systems, enterprise software development, e-commerce platforms and apps. Prior to PhonePe he was working as the VP Engineering at Flipkart and was responsible for building the best-in-class supply chain" 
      />
         <Fcard
        image="../public/phonepay/phonepay46.png" 
        title="John David Rainey" 
        description="John David Rainey is the executive vice president and chief financial officer for Walmart. He is responsible for the company’s financial operations, corporate strategy, global procurement, and investor relations. John David and his team work to deliver on Walmart’s commitment to help customers around the world save money" 
      />
      <Fcard
         image="../public/phonepay/phonepay47.png" 
         title="Donna Morris" 
         description="Donna Morris is executive vice president and chief people officer for Walmart. A member of the executive committee, Donna is striving to make Walmart a great place to work for the more than 2 million associates around the world and contributing to the growth and success of the global business with a focus on" 
      />
      <Fcard
         image="../public/phonepay/phonepay48.png" 
         title="Leigh Hopkins" 
         description="Leigh Hopkins is executive vice president, international strategy & development, and regional CEO, supporting Walmart’s Asia Region and Walmex. Leigh began his Walmart career in 2009 based in Hong Kong as vice president of Mergers and Acquisitions. In 2011, he is brilliant in his work." 
      />
        <Fcard
         image="../public/phonepay/phonepay49.png" 
         title="Binny Bansal" 
         description="Binny Bansal co-founded Flipkart in 2007, playing a pivotal role in establishing it as India’s leading e-commerce marketplace. Almost a decade later (2018), as Group CEO, he steered Flipkart to close the largest global M&A deal in e-commerce when Walmart acquired a majority stake in the company at an enterprise valuation of" 
      />
      <Fcard
         image="../public/phonepay/phonepay50.png" 
         title="Rohit Bhagat" 
         description="Rohit Bhagat serves as the Chairman of PhonePe's Board of Directors. He has significant corporate governance experience, and has served on the boards of several other public and private tech-enabled services and financial services companies. During his executive career, he served as Chairman, Asia Pacific for" 
      />  <Fcard
         image="../public/phonepay/phonepay51.png" 
         title="Tarun Bajaj" 
         description="Mr Bajaj belongs to the Indian Administrative Service, 1988, Haryana Cadre. He was the Revenue Secretary, Government of India where he was responsible for various important policy matters related to revenue collection and taxation. He played a key role in the stabilisation of the Goods and Services Tax" 
      />
    

    </div>
    <div className="w-full h-[300px] bg-purple-500 flex text-center py-9 justify-center">
      <div className=" space-y-9">
      <h1 className="text-3xl font-semibold text-white ">Read more about<br></br>
      the PhonePe Ethics</h1>
      <button className="courser-pointer hover:bg-violet-400 hover:text-white bg-white w-[250px] h-[6vh] rounded-3xl text-black">Learn More</button>
      </div>
    </div>
    </>
  )
}

export default Header
