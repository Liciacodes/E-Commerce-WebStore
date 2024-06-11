import React from "react";

export default function ChangePassword() {
  return (
    <div className="ml-7">
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>

      <form action=" " className="pb-8 mb-4 mt-8">
        <div>
          <label htmlFor="" className="block font-medium mb-1">
            New Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="border rounded px-[15px] py-[10px] outline-none w-[60%]"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="block font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="border rounded px-[15px] py-[10px] outline-none w-[60%]"
          />
        </div>
        <button className="bg-[#0E1422] rounded px-6 py-3 mt-10  text-white">
          Change Password
        </button>
      </form>
    </div>
  );
}
