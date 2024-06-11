import React from "react";
import Button from "../../components/Button";
import emptyState from "../../assets/icons/Empty State.png";

export default function NoOrders() {
  return (
    <div className="flex items-center ml-40">
      <div className="flex  flex-col justify-center ">
        <div className="mb-6">
          <img src={emptyState} alt="empty state" className=" " />
        </div>
        <p className="mb-6">Your order history is waiting to be filled.</p>
        <Button
          label={"Start Shopping"}
          icon={
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}
