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
    status: "ongoing",
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
    status: "ongoing",
    week: "35",
    budget: "95k",
  },
];

export const borderTable = [
  {
    id: 1,
    firstname: "John",
    middlename: "Adele",
    lastname: "Jumia",
  },
  {
    id: 2,
    firstname: "Seyi",
    middlename: "Vibes",
    lastname: "Jinx",
  },
  {
    id: 3,
    firstname: "Ken",
    middlename: "Zion",
    lastname: "Augusta",
  },
];
// remember to add status to be either true or false, when it is true, return this and when it is false, return that color.

const Tables = () => {
  return (
    <div>
      {/* okay so here is ordinary table  */}
      <div>
        <table className="w-full bg-slate-300">
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
              <tr key={index} className=" w-full border-t ">
                <td className="text-start px-4 py-2 mb-4">
                  <h1 className="capitalize mb-1">{ftabs.name} </h1>
                  <i>{ftabs.email}</i>
                </td>

                <td className="text-start px-4 py-2">{ftabs.project}</td>
                <td className="text-start px-4 py-2">
                  {ftabs.status === "pending" ? (
                    <span className="border rounded-full px-2  bg-red-700"></span>
                  ) : ftabs.status === "ongoing" ? (
                    <span className="border rounded-full px-2  bg-orange-300 "></span>
                  ) : (
                    <span className=" border rounded-full px-2 bg-green-500"></span>
                  )}
                </td>
                <td className="text-start px-4 py-2">{ftabs.week}</td>
                <td className="text-start px-4 py-2">{ftabs.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* here is a table with borders */}
      <div className="mt-20 bg-gray-300">
        <table className="w-full">
          <thead className="border-2 border-b-black">
            <tr className="capitalize">
              <th className="text-start p-4  border-x-black border">#</th>
              <th className="text-start p-4  border-x-black border">firstname</th>
              <th className="text-start p-4  border-x-black border">middlename</th>
              <th className="text-start p-4">lastname</th>
            </tr>
          </thead>
          <tbody>
            {borderTable.map((btabs, i) => (
              <tr key={i} className=" p-4 border border-b-black">
                <td className="p-4">
                  <div className="font-bold">{btabs.id} </div>
                </td>
                <td scope="row" className="text-start p-4 border border-b-black border-x-black">
                  <div>
                    {btabs.firstname}
                  </div>
                </td>
                <td scope="row" className="text-start p-4 border border-b-black border-x-black">
                  <div>
                    {btabs.middlename}
                  </div>
                </td>
                <td scope="row" className="text-start p-4 border border-b-black border-x-black">
                  <div>
                    {btabs.lastname}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* want to repeat same table with nth-child highlight */}
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {borderTable.map((btabs, i) => (
              <tr key={i}>
                <td><div>{btabs.id}</div></td>
                <td><div>{btabs.firstname}</div></td>
                <td><div>{btabs.middlename}</div></td>
                <td><div>{btabs.lastname}</div></td>
                

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
