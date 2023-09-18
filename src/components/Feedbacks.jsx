import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-white p-5 rounded-3xl xs:w-[300px] w-full'
  >
    <p ></p>

    <div className='mt-1'>
      
      <div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-200 h-200  '
        />
        </div>
        <br/>
        <div className='flex-1 flex flex-col'>
          <p className='text-black font-medium text-[16px]'>
            <span className='grey-gradient'></span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} 
          </p>
        </div>
        
      </div>
    
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-white-100 rounded-[20px]`}>
      <div
        className={`bg-grey rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Lerne uns kennen.</p>
          <h2 className={styles.sectionHeadText}>Das Management-Team</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
