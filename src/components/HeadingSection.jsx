import React from "react";

const HeadingSection = ({heading,description}) => {
  return (
    <div>
      <div className="text-center mb-12">

        <h2 className="text-3xl font-bold text-gray-800 mt-3 capitalize mx-auto leading-normal lg:leading-snug md:w-2/4">
          {heading}
        </h2>
        {
            description && <p className="text-gray-600 mt-4 text-base mx-auto md:w-2/4">{description}</p>
        }
      </div>
    </div>
  );
};

export default HeadingSection;
