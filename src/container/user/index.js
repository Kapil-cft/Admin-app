import { Button } from "@mui/material";
import React, { useState } from "react";

function User() {
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [tableData, setTableData] = useState([]);
  console.log("tableData", tableData);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-vh ">
        <form className="flex flex-col gap-2 mt-8" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="rounded-md border border-gray-300 p-2 "
          />
          <label htmlFor="email" className="text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="rounded-md border border-gray-300 p-2 "
          />
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="rounded-md border border-gray-300 p-2 "
          />
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md  w-32"
            >
              Add to Table
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2  m-8 ">
        <div className="display-table">
          <table className=" center w-3/5 border-separate ml-32">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300 text-left font-bold rounded-md">
                  Name
                </th>
                <th className="p-2 border border-gray-300 text-left font-bold rounded-md">
                  Email
                </th>
                <th className="p-2 border border-gray-300 text-left font-bold rounded-md">
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr className="border-b border-gray-300">
                  <td className="p-2 border border-gray-300 text-left font-bold rounded-md">
                    {item.name}
                  </td>
                  <td className="p-2 border border-gray-300 text-left font-bold rounded-md">
                    {item.email}
                  </td>
                  <td className="p-2 border border-gray-300 text-left font-bold rounded-md">
                    {item.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <Button variant="outlined" className=''>Add User</Button> */}
      {/* <input
      className='h-8 w-2/5 mt-8 shadow-md rounded-md bg-gray-100 focus:shadow-lg focus:outline-none'
      placeholder='enter user ' 
      onChange={InputChange}
      value={userList}
     
      />
   <Button className='bg-blue-500' onClick={handleClick}>Submit</Button>
   <ul>
   {
    dataList.map((users,i)=>(
        <li key={i}>{users}</li>
    ))
   }
   </ul> */}
    </div>
  );
}

export default User;
