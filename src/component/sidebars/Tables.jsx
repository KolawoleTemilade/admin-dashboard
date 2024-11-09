import React from "react";

export const firstTable = [
  {
    name: " toba taiwo",
    email: "tobatee@gmail.com",
    project: "HTML5",
    status: "done",
    week: "35",
    budget: "95k",
  },
  {
    name: "tife samuel",
    email: "tifesam@gmail.com",
    project: "CSS3",
    status: "pending",
    week: "35",
    budget: "95k",
  },
  {
    name: "kinfeoluwa shobo",
    email: "kinfeshobs@gmail.com",
    project: "JavaScript",
    status: "pending",
    week: "35",
    budget: "95k",
  },
  {
    name: "oluwaseteminire isaiah",
    email: "isaiah04@gmail.com",
    project: "React",
    status: "pending",
    week: "35",
    budget: "95k",
  },
  {
    name: "ope tolu",
    email: "opetee@gmail.com",
    project: "Nextjs",
    status: "pending",
    week: "35",
    budget: "95k",
  },
];
// remember to add status to be either true or false, when it is true, return this and when it is false, return that color.

const Tables = () => {
  return (
    <div className="border border-red-900">
      <div>hello world!</div>
      <div>
        <table className="w-full">
          <thead className="">
            <tr className="  capitalize">
              <th className="text-start px-4 py-2">team lead</th>
              <th className=" text-start px-4 py-2">project</th>
              <th className="text-start px-4 py-2">status</th>
              <th className="text-start px-4 py-2">weeks</th>
              <th className="text-start px-4 py-2">budget</th>
            </tr>
          </thead>
          <tbody>
            {firstTable.map((ftabs, index) => (
              <tr key={index} className=" w-full">
                <td className="text-start px-4 py-2 mb-4">
                  <h1 className="capitalize mb-1">{ftabs.name} </h1>
                  <i>{ftabs.email}</i>
                </td>

                <td className="text-start px-4 py-2">{ftabs.project}</td>
                <td className="text-start px-4 py-2">{ftabs.status}</td>
                <td className="text-start px-4 py-2">{ftabs.week}</td>
                <td className="text-start px-4 py-2">{ftabs.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
