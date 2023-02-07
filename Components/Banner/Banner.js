import Image from "next/image";
import adidas from '../../public/Adidas-logo.webp'
import nike from '../../public/nike-logo.png'
import puma from '../../public/PUMA-logo.jpg'
import reebok from '../../public/reebok-logo.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse sm:w-full">
    <img src="https://hips.hearstapps.com/hmg-prod/images/mh-physical-athlete-doing-dumbbell-bench-presses-royalty-free-image-585857153-1531341609.jpg?crop=0.612xw:0.919xh;0.175xw,0.0701xh&resize=1200:*" className="max-w-sm mx-auto w-[358px] h-[580px] rounded-lg shadow-2xl" />
    <div>
      <div className="w-[568px] h-[146px] mb-[23px]">
      <h1 className="text-[56px] font-bold">Healthy in side </h1> <h1 className="text-[56px] font-bold"><span className="text-blue-500">fresh</span> out side</h1>
      </div>

      <p className="lg:w-[492px] lg:-[84px] mb-[30px]">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
      <button className="btn bg-[#264373] w-[246px] h-[56px] capitalize rounded-[10px] mr-[35px] p-1">Get started</button> <button className="btn text-blue-500 bg-white capitalize rounded-[10px] w-[174px] h-[56px]">Learn more</button>
      <h5 className="mb-[20px] mt-[30px]">Brands:</h5>

      <div className="flex">
      <Image className="mr-[43px] h-[50px]" src={nike} width={80} height={35}></Image>  <Image className="mr-[43px] h-[50px]"  src={adidas} height={35} width={80}></Image>
      <Image className="mr-[43px] h-[50px]"  src={puma} height={35} width={80}></Image> <Image className="mr-[43px] h-[50px]"  src={reebok} height={35} width={80}></Image>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;