import React from "react";

const Mid = () => {
    return (
        <div className="border-2 border-red-600 mt-20 flex-col text-white">
            <div className="p-3 mb-4 border-2 border-blue-500 w-10/12 mx-auto md:w-9/12">
                <img
                    className="border-2"
                    src="https://res.cloudinary.com/svartblood/image/upload/v1649058212/Filo-dark-page/illustration-stay-productive_o6scab.png "
                    alt=""
                />
            </div>
            <div className="text-left  ml-9 font-bold text-lg md:text-base">
                <h4>Stay Productive, wherever you are</h4>
            </div>
            <div className="text-left font-light text-sm w-10/12 mx-auto mt-5 md:w-6/12 md:mt-2">
                <p className="mt-7">
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                </p>
                <p className="mt-7">
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required.
                </p>

                <div className="border-2 border-purple-400 mt-6  flex flex-row justify-start">
                    <span>See how Filo works</span>
                    <img
                        src="https://res.cloudinary.com/svartblood/image/upload/v1649058210/Filo-dark-page/icon-arrow_rdspoy.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Mid;
