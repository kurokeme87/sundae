import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
      }, 500);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsAnimating(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className="Home">
      <Navigation />
      <div className="pt-6 md:pt-10">
        <div className="max-w-[1200px] flex flex-col-reverse lg:flex-row items-center m-auto px-9 lg:px-14">
          <div className="max-w-[670px] w-full">
            <h1 className="text-white text-center lg:text-left text-3xl lg:text-7xl font-bold">
              The sweetest protocol builders on the blockchain
            </h1>
            <p className="text-[#b4a5c1] text-center lg:text-left text-lg lg:text-xl mt-6">
              We concept, design and build innovative, decentralized software to
              power the next generation of global financial services.
            </p>
            <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start max-w-lg m-auto lg:mx-0">
              <button className="buttonGradient text-white text-lg rounded-full px-10 py-2 max-w-md w-full m-auto">
                <Link to="/fi">Open SundaeSwap</Link>
              </button>
              <button className="buttonBorderGradient text-white text-lg px-10 py-2 max-w-md w-full m-auto">
                <span>
                  {" "}
                  <Link to="https://sundae.fi/contact">Work with us</Link>
                </span>
              </button>
            </div>
          </div>
          <div
            ref={imageRef}
            className={`transition-transform duration-1000 ease-in-out ${
              isAnimating ? "transform -translate-y-10" : ""
            }`}
          >
            <img
              src="https://res.cloudinary.com/dcco9bkbw/image/upload/v1725122041/gt9nchhbv6cdr480zuiy.png"
              alt="image"
              className="w-[500px]"
            />
          </div>
        </div>

        <section>
          <div className="max-w-[1200px] m-auto py-8 px-9 lg:px-14">
            <h1 className="text-[#594f58]">Our partners and clients</h1>
            <div className="mt-2">
              <img src="/home.png" alt="banner" />
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-[1300px] rounded-xl m-auto pt-8 sectionGradient">
            <h1 className="text-white text-center mb-4 text-3xl lg:text-5xl font-medium tracking-wide pt-14 px-9 lg:px-14">
              Our Products
            </h1>
            <p className="text-[#b4a5c1] text-center mb-4 px-9 lg:px-14">
              We build innovative blockchain products that move the ecosystem
              forward.
            </p>
            <div>
              <div className="flex flex-col lg:flex-row gap-5 items-center justify-center px-6 lg:py-16 lg:px-14">
                <Link
                  to="https://sundae.fi/products/rewards"
                  className="w-full"
                >
                  <img
                    src="/imgone.png"
                    alt="image"
                    className="rounded-xl w-full  hidden lg:block"
                  />
                </Link>


                <Link
                  to="https://sundae.fi/products/rewards"
                  className="w-full block lg:hidden"
                >

                <img
                  src="/respzero.png"
                  alt="image"
                  className="rounded-xl"
                />
                </Link>

                <Link
                  to="https://sundae.fi/products/rewards"
                  className="w-full"
                >
                  <img
                    src="/imgtwo.png"
                    alt="image"
                    className="w-full hidden lg:block"
                  />
                </Link>

                <div className="flex flex-col gap-4">
                <Link
                  to="https://sundae.fi/products/governance"
                  className="w-full block lg:hidden"
                >
                  <img
                    src="/respone.PNG"
                    alt="image"
                    className="rounded-xl"
                  />
                  </Link>

                  <Link
                  to="https://sundae.fi/products/sundaeswap"
                  className="w-full block lg:hidden"
                >
                  <img
                    src="/resptwo.PNG"
                    alt="image"
                    className="rounded-xl"
                  />
                  </Link>
                </div>
              </div>
              <div className="pt-6 pb-15 px-6 lg:px-14">
              
              <Link
                  to="https://sundae.fi/contact"
                  className="w-full"
                >
                <img
                  src="/imgthree.png"
                  alt="image"
                  className="w-full rounded-xl hidden lg:block"
                />
                </Link>
                <Link
                  to="https://sundae.fi/contact"
                  className="w-full block lg:hidden"
                >
                <img
                  src="/respthrree.PNG"
                  alt="image"
                  className="rounded-xl"
                />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-[1300px] m-auto mt-8">
            <div className="px-9 lg:px-14">
              <h1 className="text-white text-center mb-4 text-3xl lg:text-5xl font-medium tracking-wide pt-14">
                Testimonials
              </h1>
              <p className="text-[#b4a5c1] text-center mb-4">
                We're proud to work with some amazing partners and customers.
              </p>
            </div>
            <div className="px-4 lg:px-14">
              <img
                src="/test.png"
                alt="img"
                className="rounded-xl  hidden lg:block"
              />
              <img
                src="/respfour.PNG"
                alt="image"
                className="rounded-xl block lg:hidden"
              />
            </div>
          </div>
        </section>

        <section className="max-w-[1300px] m-auto mt-10 px-4 lg:px-14">
          <img
            src="/last.png"
            alt="img"
            className="rounded-xl hidden lg:block"
          />
          <img
            src="/respfive.png"
            alt="image"
            className="rounded-xl w-full block lg:hidden"
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
