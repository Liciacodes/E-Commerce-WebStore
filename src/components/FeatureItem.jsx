import React from "react";

const FeatureItem = ({ icon, title, description, ...props }) => {
  return (
    <div className="mt-12 mb-0" {...props}>
      <div>{icon}</div>
      <h1 className="text-[16px] font-interFont font-semibold w-[272px] h-[50px] mt-6">
        {title}
      </h1>
      <p className="mt-[-15px]">{description}</p>
    </div>
  );
};

export default FeatureItem;
// bg-[#F6F6F6]
