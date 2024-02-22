import React from "react";

function FeaturePage() {
  return (
    <div className="w-full h-2000 bg-transparent p-20 flex flex-col">
      <div className="flex">
        <img src="/userHome.svg" alt="" className="w-6 h-6 mr-4 ml-20" />
        <img src="/save.svg" alt="" className="w-6 h-6 mr-4" />
        <img src="/pencil.svg" alt="" className="w-6 h-6 mr-4" />
        <img src="/trash.svg" alt="" className="w-6 h-6 mr-4" />
      </div>
      <div className="flex flex-col pl-20">
        <h1 className="text-7xl font-light text-black mb-7">Display 1</h1>
        <h1 className="text-6xl font-light text-black mb-7">Display 2</h1>
        <h1 className="text-5xl font-light text-black mb-7">Display 3</h1>
        <h1 className="text-4xl font-light text-black">Display 4</h1>
      </div>
      <p className="text-center text-black pt-14">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem
        tenetur corporis nobis error quae culpa harum suscipit quisquam sequi
      </p>
      <p className="text-right text-black pt-14">
        Lorem ipsum dolor sit amet consectetur lorem.
      </p>
      <p className="line-through text-right text-black pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="line-through text-right text-black pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.
      </p>
      <p className="underline text-right text-black pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor
        sit.
      </p>
      <p className="underline text-right text-black pt-4">
        Lorem ipsum dolor sit amet sit amet.
      </p>
      <p className="text-right text-black pt-4 font-normal text-sm">
        Lorem ipsum lorem dolor sit amet consectetur
      </p>
      <p className="text-right text-black pt-4 font-bold text-sm">
        Lorem ipsum dolor sit amet.
      </p>
      <p className="italic text-right text-black pt-4">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
}

export default FeaturePage;
