import React from "react";
import Logo from "../images/logo-2.png";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-footer-bg px-8 md:px-16 lg:px-28 py-10 text-light">
      <div className="flex flex-col order-2 lg:order-1 gap-2">
          <p className="text-lg text-light mt-6 lg:mt-0 lg:mb-6 ">
            Happy customers shop again...
            <span className="text-primary lg:ml-4 block lg:inline">
              let us help make them happy
            </span>
          </p>
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div>
            <h6 className="mb-4">MERCHANTS</h6>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Work with Apace
            </p>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Transparency with Apace
            </p>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Merchant sign in
            </p>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Merchant sign up
            </p>
          </div>
          <div>
            <h6 className="mb-4">SHOPPERS</h6>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Your refund instantly
            </p>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Shopper sign in
            </p>
          </div>
          <div>
            <h6 className="mb-4">SOLUTIONS</h6>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Past Acceptance
            </p>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Pre Acceptance
            </p>
          </div>
          <div>
            <h6 className="mb-4">APACE</h6>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Terms of Services
            </p>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Privacy Policy
            </p>
            <p className="text-sm cursor-pointer py-1 hover:text-primary transition duration-300">
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col order-1 lg:order-2 gap-2">
        <img src={Logo} alt="logo" className="w-52 h-20 mb-6 -mt-4 -ml-2" />

        <div>
          <h6 className="mb-1">CALL US</h6>
          <p className="font-semibold cursor-pointer py-1 hover:text-primary transition duration-300">
            1212.000.000
          </p>
        </div>
        <div>
          <h6 className="mb-1">EMAIL US</h6>{" "}
          <p className="font-semibold cursor-pointer py-1 hover:text-primary transition duration-300">
            info@apacepayments.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
