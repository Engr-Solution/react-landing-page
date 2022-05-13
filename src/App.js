import "./App.css";
import Layer from "./components/Layer";
import Phone from "./images/phone.png";
import Ceo from "./images/pic.png";
import PhoneWithProof from "./images/phonewithproof.png";
import Lady from "./images/pic.png";
import Dashboard from "./images/dashboard.png";
import Carbon from "./images/carbon.png";
import Refund from "./images/refund.png";
import Crypto from "./images/crypto.png";
import Time from "./images/time.png";
import Credit from "./images/creditcard.png";

function App() {
  return (
    <>
      <Layer>
        <div className="w-full bg-white">
          {/* SECTION 1 */}
          <div className="relative w-full flex justify-between gap-20 bg-white px-8 md:px-16 lg:px-28 pt-12 pb-44 md:pb-20">
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <p className="break-words text-5xl font-bold mb-4">
                Power up sales. Boost customer loyalty.
              </p>
              <p className="break-words text-lg mb-4">
                Embolden your customers to buy with confidence by partnering
                with us for instant refunds
              </p>
              <p className="text-sm font-normal mb-4">
                when returning merchandise your customer receives an instant
                refund for a minor fee while you are invoiced at a later day for
                the refund at no extra cost
              </p>
              <button className="px-6 py-2 rounded-3xl text-light bg-primary cursor-pointer transition duration-300 hover:bg-secondary">
                Get started
              </button>
            </div>
            <div className="w-full hidden lg:flex justify-end">
              <div className="w-4/6 h-96 p-0 bg-gradient-to-b from-gradient-from to-gradient-to rounded-3xl">
                <img
                  src={Phone}
                  alt="phone"
                  className="h-[125%] -mt-[120px] mx-auto"
                />
              </div>
            </div>

            <div className="absolute w-full px-6 left-1/2 -translate-x-1/2 -bottom-0 translate-y-1/2">
              <ul className=" grid grid-cols-12 gap-2 md:gap-6 md:divide-x bg-white p-4 rounded-xl shadow-md">
                <li className="col-span-6 md:col-span-3 w-fit text-center px-3">
                  <p className="text-4xl font-semibold text-primary">75%</p>
                  <p className="text-md">increase customer loyalty</p>
                  <p className="text-sm font-light text-tertiary break-words">
                    (instance refund enhance purchase ability)
                  </p>
                </li>
                <li className="col-span-6 md:col-span-3 w-fit text-center px-3">
                  <p className="text-4xl font-semibold text-primary">75%</p>
                  <p className="text-md">increase customer loyalty</p>
                  <p className="text-sm font-light text-tertiary break-words">
                    (instance refund enhance purchase ability)
                  </p>
                </li>
                <li className="col-span-6 md:col-span-3 w-fit text-center px-3">
                  <p className="text-4xl font-semibold text-primary">75%</p>
                  <p className="text-md">increase customer loyalty</p>
                  <p className="text-sm font-light text-tertiary break-words">
                    (instance refund enhance purchase ability)
                  </p>
                </li>
                <li className="col-span-6 md:col-span-3 w-fit text-center px-3">
                  <p className="text-4xl font-semibold text-primary">75%</p>
                  <p className="text-md">increase customer loyalty</p>
                  <p className="text-sm font-light text-tertiary break-words">
                    (instance refund enhance purchase ability)
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 bg-ceo-bg px-8 md:px-16 lg:px-28 pt-44 pb-20">
            <div className="min-w-fit text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={Ceo}
                  alt="ceo"
                  className="w-full h-full rounded-full"
                />
              </div>
              <p className="text-sm mb-2">Joseph Walker</p>
              <p className="text-xs font-light text-slate-400">
                CEO, Chameleon Global
              </p>
            </div>
            <p className="break-words text-center lg:text-left">
              "We see many customers having to cancel / rebook their travel
              plans due to unforeseen circumstances. Customers spends large sums
              of money on their vacations and travel experiences so when they
              have to cancel, many customers have to wait until their refunds
              hit their account, which can prolong the rebooking, sometimes by
              two weeks or much more!
              <br />
              <strong>
                Apace has been a game-changing solutions for our customers to be
                able to get their money back or rebook their trips, INSTANTLY
              </strong>
              "
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="bg-blue-50 px-8 py-12 lg:pr-20">
            <p className="w-1/2 mx-auto text-center text-3xl font-bold px-2 mb-4">
              Apace offers yout customers two efficient options of instant
              refunds
            </p>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="w-full">
                <img src={PhoneWithProof} alt="" />
              </div>
              <div>
                <div className="w-full h-fit lg:bg-white lg:border-primary lg:border-l-[6px] mb-4 p-4 ">
                  <p className="text-xs text-slate-400 uppercase">option 1</p>
                  <p className="text-2xl font-bold mb-2">Post Acceptance</p>
                  <span className="text-xs">
                    This option for consumers is at the stage where a refund is
                    due and approved by retailer to receive an instant refund in
                    their bank rather than waiting the 3-7 busiiness days
                  </span>
                  <p className="text-xs text-slate-400 uppercase mt-6 mb-4">
                    our super simple process
                  </p>
                  <p className="text-md font-medium mb-4">
                    Customer get a notification email from the retailer that the
                    return was accepted notification
                  </p>
                  <div className="flex flex-col gap-2">
                    <span className="flex">
                      <span className="w-5 h-5 flex justify-center items-center text-white rounded-full bg-primary mr-4">
                        1
                      </span>
                      <span>
                        <p className="text-sm font-medium">
                          Customer Requests instant refund through space
                        </p>
                        <p className="text-xs font-thin">
                          On the merchants website or via an email link
                        </p>
                      </span>
                    </span>
                    <span className="flex">
                      <span className="w-5 h-5 flex justify-center items-center text-white rounded-full bg-primary mr-4">
                        2
                      </span>
                      <span>
                        <p className="text-sm font-medium">
                          Provides basic credit information to apace
                        </p>
                        <p className="text-xs font-thin">
                          No credit check or screening needed
                        </p>
                      </span>
                    </span>
                    <span className="flex">
                      <span className="w-5 h-5 flex justify-center items-center text-white rounded-full bg-primary mr-4">
                        3
                      </span>
                      <span>
                        <p className="text-sm font-medium">
                          Gets an instant full refund in their bank
                        </p>
                        <p className="text-xs font-thin">
                          Customers minimal deduction 1.9%
                        </p>
                      </span>
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="w-full h-fit p-4">
                  <div className="w-full lg:hidden mx-auto">
                    <img src={PhoneWithProof} alt="" />
                  </div>
                  <p className="text-xs text-slate-400 uppercase">option 2</p>
                  <p className="text-2xl font-bold mb-2">
                    Pre Acceptance{" "}
                    <button className="px-4 py-2 rounded-3xl text-sm ml-6 text-light bg-orange cursor-pointer transition duration-300 hover:opacity-90">
                      Coming soon
                    </button>
                  </p>
                  <p className="text-xs">
                    This option for customers is to receive the refund at the
                    shipping stage of the returning merchandise prior to
                    retailers acceptance of returned mechandise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTIION 4 */}
          <div className="flex flex-col lg:flex-row gap-10 px-8 md:px-16 lg:px-28 py-12">
            <div className="w-fit ">
              <img src={Lady} alt="lady" />
            </div>
            <div className="w-fit">
              <p className="text-3xl semibold mb-4">
                Earn your customer's loyalty by providing a flexible, immediate
                and easy refund experience they deserve and love.
              </p>
              <p className="text-sm font-normal text-slate-400">
                By providing your customer's with an opportuniity to get a
                refund and payment immediately and instantly in the real time at
                beginnig or mid point or return process you're ensuring a
                satisfied and happy returning customer
              </p>
              <button className="px-4 py-2 rounded-3xl text-sm mt-4 text-light bg-primary cursor-pointer transition duration-300 hover:bg-secondary">
                Sign up
              </button>
            </div>
          </div>

          {/* SECTION 5 */}
          <div className="py-12 px-0  lg:pr-28">
            <div className="flex flex-col lg:flex-row gap-20 bg-secondary text-white lg:rounded-r-2xl px-8 md:px-16 lg:px-28 py-12">
              <div className="w-full lg:1/3">
                {" "}
                <p className="text-2xl w-2/3">
                  We work in close partnership with the retailer.
                </p>
              </div>
              <div>
                <ul>
                  <li className="flex items-center gap-6 mb-2">
                    <span className="w-6 h-6 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 stroke-primary "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>{" "}
                    <p className="text-lg">
                      Easy non intrusive system integration
                    </p>
                  </li>
                  <li className="flex items-center gap-6 mb-2">
                    <span className="w-6 h-6 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 stroke-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>{" "}
                    <p className="text-lg">Negotiable invoice terms</p>
                  </li>
                  <li className="flex items-center gap-6 mb-2">
                    <span className="w-6 h-6 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 stroke-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>{" "}
                    <p className="text-lg">
                      Full detailed transaction file provided
                    </p>
                  </li>
                  <li className="flex items-center gap-6">
                    <span className="w-6 h-6 bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 stroke-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>{" "}
                    <p className="text-lg">Fully retailer's portal provided</p>
                  </li>
                </ul>
                <button className="px-4 py-2 rounded-3xl text-sm mt-4 text-primary bg-light cursor-pointer transition duration-300 hover:bg-primary hover:text-light">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 6 */}
          <div className="px-8 md:px-16 lg:px-28 py-12">
            <p className="text-center text-tertiary text-lg mb-6">
              Advance refund management system for merchants
            </p>
            <img
              src={Dashboard}
              alt="board"
              className="w-fit h-fit max-h-[380px]"
            />
          </div>

          {/* SECTION 7 */}
          <div className="flex flex-col lg:flex-row gap-12 bg-ceo-bg px-8 md:px-16 lg:px-28 py-12">
            <div className="flex overflow-hidden">
              <img src={Carbon} alt="" className="w-2/3" />
              <img src={Refund} alt="" className="w-2/3 -ml-12" />
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-secondary font-bold text-4xl mb-4 text-center lg:text-left">
                Simple integration. <br />
                Happy Customers.
              </p>
              <p className="text-primary text-md mb-8 text-center lg:text-left">
                Apace offers a smple plug-and-play integration with detailed
                developers documentation and full sandbox environment. Checkout
                our{" "}
                <span className="underline cursor-pointer">
                  developers documentation
                </span>
              </p>
              <p className="text-dark text-center lg:text-left">
                Ready to test?
              </p>
              <p className="text-dark font-bold mb-4 text-center lg:text-left">
                Sign up for the Sandbox merchants Portal
              </p>
              <button className=" px-4 py-2 rounded-3xl text-sm mt-4 text-light bg-secondary cursor-pointer transition duration-300 hover:bg-primary">
                Get started
              </button>
            </div>
          </div>

          {/* SECTION 8 */}
          <div className="px-8 md:px-16 lg:px-28 py-12 pb-32">
            <p className="text-xl text-dark text-center lg:text-left mb-4">
              From our Pipeline
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center">
                <img src={Crypto} alt="" className="w-14 mb-8" />
                <p className="text-black font-bold text-xl">
                  Apace Crypto<sup>TM</sup>
                </p>
                <p className="text-md text-dark mb-8">Q4-2022</p>
                <p className="text-dark text-md text-center lg:text-left">
                  How about getting your refund in your favorite crypto
                  currency? With Apace Crypto<sup>TM</sup> you will be able to
                  get your instant refund in one of your favorite
                  crypto-currencies within minutes
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img src={Time} alt="" className="w-14 mb-8" />
                <p className="text-black font-bold text-xl">
                  Apace Crypto<sup>TM</sup>
                </p>
                <p className="text-md text-dark mb-8">Q4-2022</p>
                <p className="text-dark text-md text-center lg:text-left">
                  How about getting your refund in your favorite crypto
                  currency? With Apace Crypto<sup>TM</sup> you will be able to
                  get your instant refund in one of your favorite
                  crypto-currencies within minutes
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img src={Credit} alt="" className="w-14 mb-8" />
                <p className="text-black font-bold text-xl">
                  Apace Crypto<sup>TM</sup>
                </p>
                <p className="text-md text-dark mb-8">Q4-2022</p>
                <p className="text-dark text-md text-center lg:text-left">
                  How about getting your refund in your favorite crypto
                  currency? With Apace Crypto<sup>TM</sup> you will be able to
                  get your instant refund in one of your favorite
                  crypto-currencies within minutes
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 9 */}
          <div className="relative bg-primary text-white flex justify-between gap-12 px-8 md:px-16 lg:px-28 py-12">
            <div className="w-full lg:w-1/3 overflow-hidden mt-28">
              <p className="text-3xl font-semibold">Let's talk</p>
              <p className="text-lg">
                Learn how you can <br /> benefit from Apace.
              </p>
              <br />
              <br />
              <br />
              <span>
                <p className="uppercase text-light text-xs">phone</p>
                <p className="text-md">1-888-718-1004</p>
              </span>
              <br />
              <span>
                <p className="uppercase text-light text-xs">email</p>
                <p className="text-md">info@apacepayment.com</p>
              </span>
            </div>
            <div className="absolute w-5/6 lg:w-auto -top-2/3 lg:-top-20 left-1/2 -translate-x-1/2  lg:right-20 bg-white shadow-lg rounded-xl mr-20 px-8 py-12">
              <p className="text-lg text-black font-normal mb-4">
                Get in touch with us
              </p>
              <form className="flex flex-col gap-6">
                <label>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full text-dark outline-none border-b border-slate-400"
                  />
                </label>
                <label>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full text-dark outline-none border-b border-slate-400"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    placeholder="Company *"
                    className="w-full text-dark outline-none border-b border-slate-400"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    placeholder="website *"
                    className="w-full text-dark outline-none border-b border-slate-400"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    placeholder="Business Type *"
                    className="w-full text-dark outline-none border-b border-slate-400"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full lg:w-auto lg:self-end px-4 py-2 rounded-3xl text-md mt-4 text-light bg-primary cursor-pointer transition duration-300 hover:bg-secondary"
                >
                  Contact us
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layer>
    </>
  );
}

export default App;
