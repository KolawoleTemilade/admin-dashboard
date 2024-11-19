import React from "react";

const Forms = () => {
  {
    /* i'll be working with different types of form like with a placeholder, with a selector, with multiples selector,text area, file seletor, and radio button. */
  }
  return (
    <div>
      <div>
        <form>
          <div className="flex flex-col mb-8">
            <label htmlFor="email" className="capitalize mb-1.5">
              email
            </label>
            <input
              type="text"
              placeholder="enter your email here"
              className="border border-black p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="password" className="capitalize mb-1.5">
              password
            </label>
            <input
              type="text"
              placeholder="enter your password here"
              className="border border-black p-3 rounded-md"
            />
          </div>
          <div className="w-full ">
            <label htmlFor="select" className="mb-4">
              Select
            </label>
            <select className="md:w-1/2 lg:w-full border border-black p-3 rounded-md">
              <option value="select an option">select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
