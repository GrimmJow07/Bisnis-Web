CREATE TABLE public.tb_user
(
    tb_firstname VARCHAR(50),
    tb_lastname VARCHAR(50),
    tb_username VARCHAR(50) UNIQUE NOT NULL,
    tb_email VARCHAR(50) UNIQUE NOT NULL,
    tb_number VARCHAR(20)
);

SELECT * FROM tb_user;

INSERT INTO public.tb_user (tb_firstname, tb_lastname, tb_username, tb_email, tb_number)
VALUES
  ('John', 'Doe', 'johndoe', 'johndoe@example.com', '1234567890'),
  ('Jane', 'Doe', 'janedoe', 'janedoe@example.com', '0987654321'),
  ('Bob', 'Smith', 'bobsmith', 'bobsmith@example.com', '1112223333'),
  ('Alice', 'Johnson', 'alicejohnson', 'alicejohnson@example.com', '4445556666');