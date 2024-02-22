import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div
      className="flex flex-col items-center pt-10 w-1/2 mx-auto "
      style={{ color: "black" }}
    >
      <div className="relative w-full h-96">
        <Image
          src="/homeImage.jpg"
          alt="Home Image"
          layout="fill"
          objectFit="contain"
          className="mx-auto"
        />
      </div>
      <h4 className="text-center mt-1 text-sm">Caption Image</h4>
      <h1 className="text-center mt-8 text-3xl font-bold">Article Title</h1>
      <h5 className="text-center mt-8 text-sm font-light">
        10 Februari | 10:43
      </h5>
      <h5 className="text-center mt-4 text-sm font-bold">Asep Surasep</h5>
      <div className="max-w-2xl mt-4 text-sm text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          illo! Voluptates modi, vero consequuntur, cupiditate iste debitis,
          officia dolore aliquid tenetur hic eius? Distinctio fuga tempore
          aliquam odio minus at veritatis quod officiis, quasi nesciunt fugiat
          consequatur tempora molestias et pariatur nostrum laudantium quos
          corrupti labore dolores voluptate possimus. Rerum corporis perferendis
          accusantium nulla delectus. Eius in maiores alias sequi aspernatur
          culpa natus ratione adipisci iste? Deserunt delectus enim facilis nisi
          est. Dolore tempore mollitia necessitatibus? Eos veniam quia, dolorem
          quae velit modi amet odit, aliquid excepturi, vero ea voluptates fuga
          sapiente nemo ad minima perferendis sequi maxime. Tempore mollitia
          soluta nemo quos beatae aperiam repudiandae, quo numquam aliquam saepe
          nam modi natus officia odit facere. Quis quos harum voluptate quia.
          Delectus quas veritatis culpa, sunt similique doloribus saepe nisi
          minus, accusantium magni reprehenderit officia et repellat velit
          molestias numquam odio! Nostrum ut blanditiis possimus nemo ipsam
          debitis iste laborum iusto quibusdam atque unde vel illo repellendus
          minus omnis, nesciunt necessitatibus minima quis? Quos eum, quae
          sapiente animi aut, quia reiciendis debitis vero quas impedit quaerat
          ratione iure dolor distinctio, libero laboriosam tempora similique
          dignissimos asperiores officiis optio aliquam? Ipsum fugiat nam
          eligendi itaque eos reiciendis unde quas.
        </p>
        <p style={{ paddingTop: 20, paddingBottom: 20 }}>Editor : Ujang</p>
      </div>
    </div>
  );
};

export default Avatar;
