import React from "react";

const FeatureItem = ({ icon, title, description, ...props }) => {
  return (
    <div className="mt-12 mb-0" {...props}>
      <div className="mb-6">{icon}</div>
      <h1 className="text-[16px] font-interFont font-semibold w-[272px]">
        {title}
      </h1>
      <p className="w-[278px] mt-3 text-[#5C5F6A] font-normal">{description}</p>
    </div>
  );
};

export default FeatureItem;
// bg-[#F6F6F6]
