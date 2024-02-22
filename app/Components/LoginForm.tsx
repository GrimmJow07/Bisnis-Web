import React, { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {
  // State untuk menentukan apakah form login sudah di-submit atau belum
  const [submitted, setSubmitted] = useState(false);

  // Function untuk menangani pengiriman formulir login
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Tambahkan logika untuk menangani pengiriman formulir login
    // Set submitted menjadi true setelah formulir login dikirim
    setSubmitted(true);
  };

  // Function untuk menangani penutupan form
  const handleClose = () => {
    setSubmitted(false);
  };

  // Function untuk menangani update data
  const handleUpdate = () => {
    // Tambahkan logika untuk update data di sini
    // Setelah selesai, tampilkan popup alert
    alert("Data berhasil diupdate");
  };

  // Function untuk menangani penghapusan data
  const handleDelete = () => {
    // Tambahkan logika untuk menghapus data di sini
    // Setelah selesai, tampilkan popup alert
    alert("Data berhasil dihapus");
  };

  // Component styled untuk input
  const Input = styled.input`
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 8px 12px;
    border-radius: 4px;
    color: #333;
    background-color: #fff;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #007bff;
    }

    &::placeholder {
      color: #6c757d;
    }
  `;

  return (
    <>
      <div className="absolute top-0 right-0 mt-12 mr-4 p-4 mb-40 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit} className="bg-white">
          <h4 className="text-black pb-2">Email Address</h4>
          <Input type="text" placeholder="Email Address" />
          <h4 className="text-black pb-2 pt-2">Password</h4>
          <Input type="password" placeholder="Password" />
          <button
            type="submit"
            className="block w-full bg-blue-500 mt-4 text-white rounded-lg py-2 px-4"
          >
            Login
          </button>
        </form>
      </div>
      {/* Render form input baru jika submitted bernilai true */}
      {submitted && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: 500, alignItems: "center" }}
        >
          <div className="p-4 rounded-lg shadow-lg bg-white">
            <h4 className="text-black pb-2">Name</h4>
            <Input type="text" placeholder="Name" />
            <h4 className="text-black pb-2 pt-2">Email Address</h4>
            <Input type="text" placeholder="Email Address" />
            <h4 className="text-black pb-2 pt-2">Password</h4>
            <Input type="password" placeholder="Password" />
            <h4 className="text-black pb-2 pt-2">Date</h4>
            <Input type="date" placeholder="Date" />
            <div className="flex justify-start mt-4">
              <button
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                style={{ alignItems: "start" }}
                onClick={handleClose} // Menambahkan event handler untuk tombol "Close"
              >
                Close
              </button>
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleDelete} // Menambahkan event handler untuk tombol "Delete"
              >
                Delete
              </button>
              <button
                className=" px-4 py-2 bg-white text-green-500 border-green-500 rounded-md hover:bg-green-600 hover:text-white"
                onClick={handleUpdate} // Menambahkan event handler untuk tombol "Update"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
