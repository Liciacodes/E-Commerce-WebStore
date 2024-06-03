import React from "react";
import { Link } from "react-router-dom";

export default function Input({ placeholder, ...props }) {
  return (
    <div className="relative flex items-center ">
      <svg
        className="absolute w-5 h-5 ml-2 "
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2252 18.9799C13.28 18.9799 15.2507 18.1636 16.7037 16.7106C18.1566 15.2577 18.9729 13.287 18.9729 11.2322C18.9729 9.17737 18.1566 7.20672 16.7037 5.75374C15.2507 4.30077 13.28 3.4845 11.2252 3.4845C9.17041 3.4845 7.19976 4.30077 5.74679 5.75374C4.29381 7.20672 3.47754 9.17737 3.47754 11.2322C3.47754 13.287 4.29381 15.2577 5.74679 16.7106C7.19976 18.1636 9.17041 18.9799 11.2252 18.9799Z"
          stroke="#878A92"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.5225 21.5155L16.5782 17.5712"
          stroke="#878A92"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <input
        type="text"
        placeholder={placeholder}
        {...props}
        className="h-[50px] px-[20px] py-[10px] border bg-white pl-10"
      />
      <div className="flex ml-8 gap-x-6 items-center">
        <Link to="cart">
          <svg
            className="text-[#5C5F6A]"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5H4.38321L5.58853 13.4769C5.63862 13.8071 5.80643 14.108 6.06102 14.3243C6.31561 14.5406 6.63984 14.6576 6.97395 14.6538H15.7021C16.0042 14.6696 16.3032 14.5861 16.5534 14.4161C16.8035 14.2461 16.9912 13.9989 17.0875 13.7123L18.9302 8.17385C18.999 7.96564 19.0173 7.74406 18.9836 7.52739C18.9498 7.31072 18.865 7.10517 18.7362 6.92769C18.6021 6.73894 18.4227 6.58681 18.2146 6.48522C18.0065 6.38362 17.7761 6.33581 17.5447 6.34615H4.8681"
              stroke="#5C5F6A"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.4666 19.5C15.2829 19.5 15.1067 19.427 14.9768 19.2972C14.8469 19.1674 14.7739 18.9913 14.7739 18.8077C14.7739 18.6241 14.8469 18.448 14.9768 18.3181C15.1067 18.1883 15.2829 18.1154 15.4666 18.1154C15.6504 18.1154 15.8266 18.1883 15.9565 18.3181C16.0864 18.448 16.1594 18.6241 16.1594 18.8077C16.1594 18.9913 16.0864 19.1674 15.9565 19.2972C15.8266 19.427 15.6504 19.5 15.4666 19.5Z"
              fill="#5C5F6A"
              stroke="#5C5F6A"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.46127 19.5C6.27755 19.5 6.10135 19.427 5.97145 19.2972C5.84154 19.1674 5.76855 18.9913 5.76855 18.8077C5.76855 18.6241 5.84154 18.448 5.97145 18.3181C6.10135 18.1883 6.27755 18.1154 6.46127 18.1154C6.64499 18.1154 6.82118 18.1883 6.95109 18.3181C7.081 18.448 7.15398 18.6241 7.15398 18.8077C7.15398 18.9913 7.081 19.1674 6.95109 19.2972C6.82118 19.427 6.64499 19.5 6.46127 19.5Z"
              fill="#5C5F6A"
              stroke="#5C5F6A"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.56201 9.11536V11.8846"
              stroke="#5C5F6A"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.7183 9.11536V11.8846"
              stroke="#5C5F6A"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <svg
          className="text-[#5C5F6A]"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.11604 4.58299C7.88092 3.81812 8.91831 3.38842 10 3.38842C11.0817 3.38842 12.1191 3.81812 12.884 4.58299C13.6488 5.34787 14.0785 6.38525 14.0785 7.46695C14.0785 8.54864 13.6488 9.58603 12.884 10.3509C12.1191 11.1158 11.0817 11.5455 10 11.5455C8.91831 11.5455 7.88092 11.1158 7.11604 10.3509C6.35117 9.58603 5.92147 8.54864 5.92147 7.46695C5.92147 6.38525 6.35117 5.34787 7.11604 4.58299ZM10 4.76864C9.28436 4.76864 8.59804 5.05292 8.09201 5.55895C7.58597 6.06498 7.30169 6.75131 7.30169 7.46695C7.30169 8.18258 7.58597 8.86891 8.09201 9.37494C8.59804 9.88097 9.28436 10.1653 10 10.1653C10.7156 10.1653 11.402 9.88097 11.908 9.37494C12.414 8.86891 12.6983 8.18258 12.6983 7.46695C12.6983 6.75131 12.414 6.06498 11.908 5.55895C11.402 5.05292 10.7156 4.76864 10 4.76864Z"
            fill="#5C5F6A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 13.5804C8.95587 13.5804 7.9293 13.849 7.01897 14.3603C6.10864 14.8717 5.34516 15.6087 4.80193 16.5003C4.60364 16.8258 4.17902 16.9289 3.85353 16.7307C3.52804 16.5324 3.42493 16.1077 3.62323 15.7823C4.28964 14.6884 5.22624 13.7843 6.343 13.157C7.45975 12.5297 8.71911 12.2002 10 12.2002C11.2809 12.2002 12.5402 12.5297 13.657 13.157C14.7738 13.7843 15.7104 14.6884 16.3768 15.7823C16.5751 16.1077 16.472 16.5324 16.1465 16.7307C15.821 16.9289 15.3964 16.8258 15.1981 16.5003C14.6548 15.6087 13.8914 14.8717 12.981 14.3603C12.0707 13.849 11.0441 13.5804 10 13.5804Z"
            fill="#5C5F6A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.28249 2.78249C5.06408 1.00089 7.48044 0 10 0C12.5196 0 14.9359 1.00089 16.7175 2.78249C18.4991 4.56408 19.5 6.98044 19.5 9.5C19.5 12.0196 18.4991 14.4359 16.7175 16.2175C14.9359 17.9991 12.5196 19 10 19C7.48044 19 5.06408 17.9991 3.28249 16.2175C1.50089 14.4359 0.5 12.0196 0.5 9.5C0.5 6.98044 1.50089 4.56408 3.28249 2.78249ZM10 1.38022C7.8465 1.38022 5.7812 2.23569 4.25845 3.75845C2.73569 5.2812 1.88022 7.3465 1.88022 9.5C1.88022 11.6535 2.73569 13.7188 4.25845 15.2416C5.7812 16.7643 7.8465 17.6198 10 17.6198C12.1535 17.6198 14.2188 16.7643 15.7416 15.2416C17.2643 13.7188 18.1198 11.6535 18.1198 9.5C18.1198 7.3465 17.2643 5.2812 15.7416 3.75845C14.2188 2.23569 12.1535 1.38022 10 1.38022Z"
            fill="#5C5F6A"
          />
        </svg>
      </div>
    </div>
  );
}
