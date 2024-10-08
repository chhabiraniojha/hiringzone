import React from "react";

export default function Hero() {
  return (
    <>
      <div class=" h-[100vh] w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_2px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className=" pl-2 h-full flex justify-center">
            <div className=" w-[50%]  flex flex-col   justify-center   pl-[2em]">
                <p className="font-bold text-4xl text-slate-600 ">Digi Divine Online </p>
                <p className="font-bold text-2xl ">Digi Divine</p>
                <p className="  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aut corrupti laboriosam, ducimus quae blanditiis harum libero doloremque cum fugit optio molestiae temporibus qui quam incidunt explicabo maiores repellendus porro?</p>
            </div>
            <div className="w-[50%] flex justify-center flex-col align-middle bg-red-1000">
            
            <p className="  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aut corrupti laboriosam, ducimus quae blanditiis harum libero doloremque cum fugit optio molestiae temporibus qui quam incidunt explicabo maiores repellendus porro?</p>
            </div>
        </div>
      </div>
    </>
  );
}
