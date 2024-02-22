"use client";

import React, { useState, useEffect } from "react";

interface User {
  tb_firstname: string;
  tb_lastname: string;
  tb_username: string;
  tb_email: string;
  tb_number: string;
}

function PricingPage() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/data");

        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="ps-20 pt-10 flex flex-col items-start bg-transparent">
        {" "}
        Data Dummy
        <div className="overflow-x-96" style={{ color: "black" }}>
          <table className="table">
            <thead>
              <tr style={{ color: "black" }}>
                <th>#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy Data */}
              <tr className="hover:bg-gray-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr className="hover:bg-gray-200">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr className="hover:bg-gray-200">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Data From Server */}
      <div
        className="pl-20 pt-10 flex flex-col items-start"
        style={{ height: 500 }}
      >
        Data Server
        <div className="overflow-x-96" style={{ color: "black" }}>
          <table className="table">
            <thead>
              <tr className="text-black">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index} className="hover:bg-gray-200">
                  <th>{index + 1}</th>
                  <td>{user.tb_firstname}</td>
                  <td>{user.tb_lastname}</td>
                  <td>{user.tb_username}</td>
                  <td>{user.tb_email}</td>
                  <td>{user.tb_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
