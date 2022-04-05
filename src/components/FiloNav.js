import React from "react";

const FiloNav = () => {
    return (
        <div className="bg-hsl(218, 28%, 13%) w-full border-2 border-red-600 text-white container md:mx-auto  mt-9  flex flex-row items-center justify-between ">
            <div className="border-2 border-blue-600 ml-10 w-20 md:w-96 ">
                <img
                    src="https://res.cloudinary.com/svartblood/image/upload/v1649058212/Filo-dark-page/logo_pha4r5.svg"
                    alt=""
                />
            </div>
            <div className="border-2 border-blue-600 flex w-15 md:text-3xl md:mx-6">
                <a
                    className=" m-2 font-light md:mx-2 md:my-8"
                    href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1649058928&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fRpsCsrfState%3d3723b397-6c47-8c77-f0d4-240eff01399c&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015"
                >
                    Features
                </a>
                <a
                    className=" m-2 font-light md:mx-2 md:my-8"
                    href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1649058928&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fRpsCsrfState%3d3723b397-6c47-8c77-f0d4-240eff01399c&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015"
                >
                    Team
                </a>
                <a
                    className=" m-2 font-light md:mx-2 md:my-8"
                    href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1649058928&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fRpsCsrfState%3d3723b397-6c47-8c77-f0d4-240eff01399c&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015"
                >
                    Sing In
                </a>
            </div>
        </div>
    );
};

export default FiloNav;
