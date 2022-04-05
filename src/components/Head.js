import React from 'react'

const Head = () => {
  return (
      <div className="border-2 border-red-600 mt-6 flex-col text-white">
          <div className="p-3 mb-4 border-2 border-blue-500 w-10/12 mx-auto md:w-9/12   ">
              <img
                  className="md:justify-center border-2 md:flex md:mx-auto"
                  src="https://res.cloudinary.com/svartblood/image/upload/v1649058212/Filo-dark-page/illustration-intro_pdrbvg.png"
                  alt=""
              />
          </div>
          <div className="border-2 border-blue-500 mb-4 w-10/12 mx-auto text-center md:w-7/12">
              <h3 className="font-bold text-2xl md:text-5xl ">
                  All your files in one secure location, accessible anywhere.
              </h3>
          </div>
          <div className="border-2 border-blue-400 text-s font-normal w-10/12 mx-auto text-center md:w-6/12 md:text-2xl md:p-1 md:leading-9 ">
              <p className="mb-4">
                  Fylo stores all your most important files in one secure
                  location. Access them wherever you need, share and collaborate
                  with friends family, and co-workers.{" "}
              </p>
              <button className=" py-3 w-60 rounded-full font-semibold md:w-64">Get Started</button>
          </div>
      </div>
  );
}

export default Head