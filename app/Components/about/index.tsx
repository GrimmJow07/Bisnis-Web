import React from "react";
import Form from "./page";

const Home: React.FC = () => {
  const handleSubmit = (email: string, password: string) => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
