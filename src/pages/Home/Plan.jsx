import React, { useState } from "react";
import { PlanArray } from "../../utils/planArray";
import { imageUrl } from "../../utils/imageUrl";
import { FiCheck } from "react-icons/fi";
import HeadingSection from './../../components/HeadingSection';

const Plan = () => {
  const [isYearly,setYearly] = useState(false);
  return (
    <div className="section-container">

      {/* plan heading */}
      <HeadingSection heading={'Choose Your Plan'}  description={'Lets choose the package that is best for you and explore it happily and cheerfully.'}/>

      {/* plan price section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {PlanArray.map((item, index) => (
          <div key={index} className=" hover:shadow-red-600  shadow-md px-18 pb-8 pt-12 rounded-md flex items-center justify-between flex-col transition-colors duration-300">
            <div className="text-center flex flex-col items-center justify-center ">
              <div>
                <img
                  src={imageUrl(`${item.image}`)}
                  alt={item.planName}
                  className="text-center"
                />
              </div>
              <h3 className="mt-4">{item.planName}</h3>
            </div>
            <div>
              {item.features.map((feature,index) => (
                <div className="flex flex-row gap-2 mt-4 items-center" key={index}>
                  <div>
                    <FiCheck className="text-green-600 font-bold text-sm" />
                  </div>
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4 space-y-2">
              <h1>{item.price ? '': ''}</h1>
              <button className="border-1 border-red-600 hover:bg-red-700 hover:text-white text-red-600 py-2 px-8 rounded-full cursor-pointer transition-colors duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
