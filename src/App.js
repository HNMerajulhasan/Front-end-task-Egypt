import img1 from "./assets/Dashboard.png";
import microsolft from "./assets/mcrsft.png";
import cardimg1 from "./assets/cardimg1.png";
import userLogo from "./assets/userlogo.svg";
import paymentLogo from "./assets/paymentlogo.svg";
import calenderLogo from "./assets/calenderlogo.svg";
import cardimg2 from "./assets/cardimg2.png";
import cardimg3 from "./assets/cardimg3.png";
import userLogo2 from "./assets/user2.svg";
import graph from "./assets/graph.svg";
import bargraph from "./assets/bargraph.svg";
import weblogo from "./assets/grow.png";
import googleLogo from "./assets/googlePlus.png";
import instagramLogo from "./assets/instagram.png";
import cardsubimg1 from "./assets/cardsubimg1.svg";
import cardsubimg2 from "./assets/cardsubimg2.png";
import cardsubimg3 from "./assets/cardsubimg3.svg";
import cardsubimg4 from "./assets/cardsubimg4.svg";
import block1 from "./assets/block1.svg";
import block2 from "./assets/block2.svg";
import block3 from "./assets/block3.svg";
import block4 from "./assets/block4.svg";
import block5 from "./assets/block5.svg";
import block6 from "./assets/block6.svg";
import block7 from "./assets/block7.svg";
import block8 from "./assets/block8.svg";

import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar section  */}
      <div style={{ backgroundColor: "#F5F6FA" }}>
        <section className="mx-24">
          <div className="navbar bg-info-500">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Features</a>
                  </li>
                  <li tabIndex={0}>
                    <a className="justify-between">Pricing</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                  <li>
                    <a className="mr-5">Login</a>
                  </li>
                </ul>
              </div>
              <img src={weblogo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Features</a>
                </li>
                <li tabIndex={0}>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="mr-10">Login</a>
              <a className="btn rounded-2xl" style={{backgroundColor:"blue",border:"1px solid blue"}}>Get started</a>
            </div>
          </div>
        </section>

        {/* heading text */}
        <section>
          <div>
            <h1 className="top_heading">
              A software Platform build exclusively for gyms.
            </h1>
            <p className="top_text">
              become more in control over their well-being, fitness clubs must
              be digitally prepared to service members with a variety of options
              and fitness experiences
            </p>
          </div>
        </section>

        {/* signin and dashboard section */}
        <section className="grid grid-cols-3 mt-5 sm:flex justify-around" style={{marginLeft:"118px"}}>
          <div className="signin_area w-96">
            <div className="form-control w-full max-w-xs ">
              <input
                type="text"
                placeholder="Enter your email to got connected"
                className="input input-bordered w-full  rounded-2xl"
              />
              <label className="label">
                <span className="label-text">
                  Already Using Grow?{" "}
                  <a href="" style={{ color: "#306CF6" }}>
                    {" "}
                    Sign in
                  </a>
                </span>
              </label>
            </div>
          </div>
          <div className="dashboard_area col-span-2 ml-36">
            <img src={img1} alt="" className="rounded-lg sm:h-full" />
          </div>
        </section>
      </div>
      {/* image card section */}
      <section className="text-center mt-20">
        <p style={{ color: "#306CF6" }}>Our Partners</p>
        <div className="">
          <span className="flex mx-5 mrsft mrsft_logo">
            <img src={microsolft} alt="" />
            Mirosoft <span className="ggle">Google</span>
          </span>
        </div>
      </section>

      {/* card section 1 */}

      <section className="grid grid-cols-2 mx-48">
        <div>
          <img src={cardsubimg1} alt="" className="cardsubimg1" />
          <img src={cardimg1} alt="" className="" />
          <img src={cardsubimg2} alt="" className="cardsubimg2" />
        </div>

        <div className="mt-52 ml-6">
          <p style={{ color: "#306CF6" }}>Club Membership Management</p>
          <h1
            style={{
              fontSize: "1.4rem",
              color: "#151515",
              fontWeight: "bold",
              letterSpacing: "-1.13px",
              opacity: "1",
            }}
          >
            Full control to your club members
            <br /> with our premium fitness software solutions
            <br /> that simplify all the hard managing work
          </h1>

          <div style={{ lineHeight: "2.3rem", marginTop: "7px" }}>
            <span className="flex mr-5">
              <img src={userLogo} alt=" " />
              <span style={{ color: "#306CF6", marginLeft: "7px" }}>
                Member Attendance management
              </span>
            </span>
            <span className="flex mr-5">
              <img src={paymentLogo} alt=" " />
              <span style={{ color: "#306CF6", marginLeft: "7px" }}>
                Member Payment management
              </span>
            </span>
            <span className="flex mr-5">
              <img src={calenderLogo} alt=" " />
              <span style={{ color: "#306CF6", marginLeft: "7px" }}>
                Member Bookings
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* card no-2 */}
      <section className="grid grid-cols-2 mx-48">
        <div className="mt-44">
          <p style={{ color: "#306CF6" }}>Club Operations Management</p>
          <h1
            style={{
              fontSize: "1.4rem",
              color: "#151515",
              fontWeight: "bold",
              letterSpacing: "-1.13px",
              opacity: "1",
            }}
          >
            Our fitness management software solutions
            <br />
            are tailor made to help you run all operational
            <br />
            aspects of your club with ease.
          </h1>

          <div style={{ lineHeight: "2.3rem", marginTop: "7px" }}>
            <span className="flex mr-5">
              <img src={graph} alt=" " />
              <span style={{ color: "#306CF6", marginLeft: "7px" }}>
                Dashboard & Reports
              </span>
            </span>
            <span className="flex mr-5">
              <img src={userLogo2} alt=" " />
              <span style={{ color: "#306CF6", marginLeft: "7px" }}>
                Staff Management
              </span>
            </span>
            <span className="flex mr-5">
              <img src={bargraph} alt=" " />
              <span style={{ color: "#306CF6", marginLeft: "7px" }}>
                Track Revenue
              </span>
            </span>
          </div>
        </div>
        <div>
          <img src={cardsubimg3} alt="" className="cardsubimg3" />
          <img src={cardimg2} alt="" className="" />
          <img src={cardsubimg4} alt="" className="cardsubimg4" />
        </div>
      </section>

      {/* card section-3 */}
      <section>
        <div className="card card-side bg-base-100  mx-32 mt-24 mr-52 mb-20">
          <div className="mx-auto mt-14 ">
            <p style={{ color: "#306CF6" }}>Management System</p>
            <h1
              style={{
                fontSize: "1.4rem",
                color: "#151515",
                fontWeight: "bold",
                letterSpacing: "-1.13px",
                opacity: "1",
              }}
            >
              Our fitness management software solutions
              <br />
              are tailor made to help you run all operational
              <br />
              aspects of your club with ease.
            </h1>
          </div>

          <div className="mx-auto mt-14 ">
            <p
              style={{
                color: "#67707D",
                letterSpacing: "-0.66px",
                opacity: "1",
              }}
            >
              helps you increase your revenue, get clarity on your metrics,
              automate
              <br /> repetitive tasks and provide your members with a superior
              gym experience.
              <br />
              <br /> keeps your customers happy with a software that’s so easy
              to use that it
              <br /> blends in the background. Build long-lasting relationships
              with your clients
              <br /> and keep them coming back!
            </p>
          </div>
        </div>
      </section>

      {/* grid card section1 */}
      <section>
        <div className="grid grid-cols-4 mt-12 mr-5 mx-20">
          <img src={block1} alt="" className="" />
          <img src={block2} alt="" className="" />
          <img src={block3} alt="" className="" />
          <img src={block4} alt="" className="" />
        </div>
      </section>
      {/* grid card section2 */}
      <section>
        <div className="grid grid-cols-4 mx-14">
          <img src={block5} alt="" className="" />
          <img src={block6} alt="" className="" />
          <img src={block7} alt="" className="" />
          <img src={block8} alt="" className="" />
        </div>
      </section>

      {/* card section 3 */}
      <section className="grid grid-cols-2 mt-44 mx-36">
        <div>
          <p style={{ color: "#306CF6" }}>Why our club management software</p>
          <h1
            style={{
              letterSpacing: "-1.13px",
              fontSize: "1.4rem",
              fontWeight: "bold",
            }}
          >
            Automate manual work. Focus on growing
            <br /> revenue with our gym software.
          </h1>
          <img src={cardimg3} alt="" className="mt-5" />
        </div>
        <div>
          <p className="mt-8">
            Streamline your workflows, automate repetitive tasks and save time
            for
            <br /> things that matter. Get industry-leading service at an
            affordable price.
            <br />
            <br /> Put your members first and drive revenue with an efficient,
            user-friendly
            <br /> gym software.
          </p>
          <div className="mt-12 leading-loose">
            <p
              style={{
                letterSpacing: "-0.85px",
                color: "#306CF6",
                opacity: "1",
                fontWeight: "500",
              }}
            >
              <span className="mr-2">01</span> We’re put user experience first
            </p>
            <p
              style={{
                letterSpacing: "-0.85px",
                color: "#306CF6",
                opacity: "1",
                fontWeight: "500",
              }}
            >
              <span className="mr-2">02</span> We’re a team consisting of gym
              owners
            </p>
            <p
              style={{
                letterSpacing: "-0.85px",
                color: "#306CF6",
                opacity: "1",
                fontWeight: "500",
              }}
            >
              <span className="mr-2">03</span> We’ve niched down to solve a few
              problem effectively
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <div style={{ backgroundColor: "#F4F5FA", marginTop: "80px" }}>
        <section className="mx-44">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                <div className="card-body">
                  <div className="form-control">
                    <p
                      style={{
                        textAlign: "center",
                        color: "#151515",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                      }}
                    >
                      Fill in your details
                    </p>
                    <label className="label mt-5">
                      <span className="label-text">Enter your full name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Enter your email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Enter your phone number
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="phone number"
                      className="input input-bordered"
                    />
                    <label className="label"></label>
                  </div>
                  <div class="mt-5 flex gap-3 items-center">
                    <span class="check_it h-6 w-10 border rounded flex justify-center items-center cursor-pointer transition-all ">
                      <i class=" text-white fa fa-check"></i>
                    </span>
                    <p className="text-sm text-gray-700">
                      I want to receive occasional, practical content for
                      Fitness business owners via email.
                    </p>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                  <div>
                    <p className="text-sm" style={{ textAlign: "center" }}>
                      By submitting this form, I confirm that I have read and
                      understood
                      <br />{" "}
                      <span style={{ color: "#306CF6" }}>
                        Grow gyms privacy policy
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left mr-5">
                <p>Digitally Transform Your Health Club</p>
                <h1 className="font-bold" style={{ fontSize: "22px" }}>
                  fitness clubs must be digitally prepared to service
                  <br /> members with fitness experiences.
                  <br />
                  <br /> So lets Get a quote
                </h1>
                <div>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer section */}

        <section className="mt-16">
          <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
              <img src={weblogo} alt="" />
              <p className="mt-3">
                Software build against manual paperwork and
                <br /> complicated, overpriced software.
                <br />
                <br /> For gym owners, by gym owners.
              </p>
              <div className="grid grid-flow-col gap-4 mt-3">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="" style={{ height: "25px", width: "25px" }}>
                  <img src={googleLogo} alt=" " />
                </a>
                <a href="" style={{ height: "25px", width: "25px" }}>
                  <img src={instagramLogo} alt=" " />
                </a>
              </div>
              <div>
                <p>Tel : +02 01006282198</p>
                <p>Email : sales@growgyms.com</p>
                <p>Location : Building no. 137 - el sheikh Zayed, Giza.</p>
              </div>
            </div>

            <div>
              <span
                style={{
                  color: "#000100",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Company
              </span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
            </div>
            <div>
              <span
                style={{
                  color: "#000100",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Support
              </span>
              <a className="link link-hover">Knoledge base</a>
              <a className="link link-hover">Contact us</a>
              <a className="link link-hover">Blog</a>
            </div>
            <div>
              <span
                style={{
                  color: "#000100",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Business types
              </span>
              <a className="link link-hover">Gyms</a>
              <a className="link link-hover">Yoga and pilates</a>
              <a className="link link-hover">Hit and fitness studios</a>
              <a className="link link-hover">Boxing and fitness clubs</a>
            </div>
            <div>
              <span
                style={{
                  color: "#000100",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Pricing
              </span>
            </div>
          </footer>
          <hr />
          <p style={{ textAlign: "center" }} className="py-5">
            All rights reserved to growgyms @2023
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
