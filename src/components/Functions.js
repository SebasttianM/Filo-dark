import React from "react";

const Functions = () => {
    return (
        <div className="border-2 border-red-500 mt-58 text-white flex  flex-col md:flex-row md:flex-wrap md:mt-54 md:p-3">
            <div className="border-2 border-blue-400 mt-20 flex flex-col  justify-center content-center md:w-1/2 md:mt-20">
                <img
                    className=" w-2/12 mx-auto mb-10 md:w-20 md:mb-5"
                    src="https://res.cloudinary.com/svartblood/image/upload/v1649058210/Filo-dark-page/icon-access-anywhere_ydos4g.svg"
                    alt=""
                />
                <h4 className="text-center font-bold text-xl md:text-base">
                    Access your files, anywhere
                </h4>
                <p className="text-center font-light text-sm w-3/4 mx-auto mt-5 md:w-6/12 md:mt-2">
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.{" "}
                </p>
            </div>
            <div className="border-2 border-blue-400 mt-20 flex flex-col  justify-center content-center md:w-1/2 md:mt-20">
                <img
                    className=" w-2/12 mx-auto mb-10 md:w-20 md:mb-5"
                    src="https://res.cloudinary.com/svartblood/image/upload/v1649058211/Filo-dark-page/icon-security_kgtf2u.svg"
                    alt=""
                />
                <h4 className="text-center font-bold text-xl md:text-base">
                    Security you can trust
                </h4>
                <p className="text-center font-light text-sm w-3/4 mx-auto mt-5 md:w-6/12 md:mt-2">
                    2-factor authentication and user-controlled encryption are
                    just a couple of the security features we allow to help
                    secure your files. .{" "}
                </p>
            </div>
            <div className="border-2 border-blue-400 mt-20 flex flex-col  justify-center content-center md:w-1/2 md:mt-20">
                <img
                    className=" w-2/12 mx-auto mb-10 md:w-20 md:mb-5"
                    src="https://res.cloudinary.com/svartblood/image/upload/v1649058210/Filo-dark-page/icon-collaboration_p9mikk.svg"
                    alt=""
                />
                <h4 className="text-center font-bold text-xl md:text-base">
                    Real-time collaboration
                </h4>
                <p className="text-center font-light text-sm w-3/4 mx-auto mt-5 md:w-6/12 md:mt-2">
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration.No email attachments
                    required.
                </p>
            </div>
            <div className="border-2 border-blue-400 mt-20 flex flex-col  justify-center content-center md:w-1/2 md:mt-20">
                <img
                    className=" w-2/12 mx-auto mb-10 md:w-20 md:mb-5"
                    src="https://res.cloudinary.com/svartblood/image/upload/v1649058210/Filo-dark-page/icon-any-file_hcfpbi.svg"
                    alt=""
                />
                <h4 className="text-center font-bold text-xl md:text-base">
                    Store any type of file
                </h4>
                <p className="text-center font-light text-sm w-3/4 mx-auto mt-5 md:w-6/12 md:mt-2">
                    Whether you're sharing holidays photos or work documents,
                    Fylo has you covered allowing for all file types to be
                    securely stored and shared.{" "}
                </p>
            </div>
        </div>
    );
};

export default Functions;
