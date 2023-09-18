import herobg from '../src/assets/herobg.png';

const styles = {
  heroBackground: {
    backgroundImage: `url(${herobg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText: "font-black text-secondary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 mr-",
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText: "text-yellowgreen font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  sectionHeadText2: "text-forestgreen font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",

  navr: " text-align: right text-secondary",
};

styles.heroHeadText += " text-shadow: 2px 2px 6px #000000;";
styles.heroSubText += " text-shadow: 2px 2px 6px #000000;";

export { styles };