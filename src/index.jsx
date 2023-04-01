import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import AboutUsImg from "./about-us-img.jpg";
import WebsiteDsgImg from "./file-solid.svg";
import AppDsI from "./mobile-screen-button-solid.svg";
import DevImg from "./laptop-code-solid.svg";
import Edit from "./pen-nib-solid.svg";
import design1 from "./design1.png";
import design2 from "./design2.png";
import design3 from "./design3.jpeg";
import headshot1 from "./headshot1.jpeg";
import headshot2 from "./headshot2.jpeg";
import headshot3 from "./headshot3.jpeg";
import appdes from "./appdesign.jpeg";
import appdes1 from "./appdesign[1].jpeg";
import software_one from "./softwareimg1.jpeg";
import software_two from "./softwareimg2.jpeg";
import brand from "./branding.jpeg";
import merch from "./merch.jpeg";

function TivePage() {
  function TopNav() {
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        ></link>
        <title>Home | Tive - A Creative Digital Agency</title>
        <div className="topnav flex">
          <a
            className="orange"
            href="index.js"
            id="header-name"
            target="_blank"
          >
            tive.
          </a>
          <div className="hamburgerMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </>
    );
  }

  function Preface() {
    return (
      <>
        <div className="flex">
          <span className="mega">Creative</span>
          <div style={{ padding: "0.5rem" }}>
            {" "}
            We at <span className="orange">tive.</span> are a creative digital
            agency focused on quality and digital innovation for your company.
            We leverage on the latest technological innovations to provide a
            unique digital experience for all our customers.
          </div>
        </div>
        <div className="flex">
          <div
            className="date flex"
            style={{ flexDirection: "column", padding: "0 0.5rem" }}
          >
            <span>Since</span> <span>2013</span>
          </div>
          <div
            className="flex"
            style={{ justifyContent: "space-between", width: "90%" }}
          >
            <span className="mega">Digital Agency</span>
            <button className="button">Get In Touch</button>
          </div>
        </div>
      </>
    );
  }

  function PhotoPageOne() {
    return (
      <div className="flex wrapper reverse">
        <div className="nav-links">
          <div className="link flex">
            <p>
              <a href="#about">About Us</a>
            </p>
          </div>
          <div className="link flex">
            <p>
              <a href="#services">Our Services</a>
            </p>
          </div>
          <div className="link flex">
            <p>
              <a href="#projects">Our Projects</a>
            </p>
          </div>
          <div className="link flex">
            <p>
              <a href="@testimonials">Client Testimonials</a>
            </p>
          </div>
        </div>
        <img src={AboutUsImg} alt="" style={{ width: "50%" }}></img>
      </div>
    );
  }

  function AboutUs() {
    const count_item1 = useRef();
    const count_item2 = useRef();
    const count_item3 = useRef();
    const count_item4 = useRef();
    const [value, updateValue] = useState(0);
    const [no_four, changeNo] = useState(0);
    const [no_two, two] = useState(0);
    const [no_three, three] = useState(0);
    let counter = () => {
      let target = 12;
      let increment = 2;
      let newValue = value + increment;
      if (value < target) {
        updateValue(newValue);
      } else {
        updateValue(target);
      }
    };

    let oneone = () => {
      let target = 125000000;
      let increment = 12456756;
      let newValue = no_four + increment;
      if (no_four < target) {
        changeNo(newValue);
      } else {
        changeNo("125M");
      }
    };
    let twoChange = () => {
      let target = 232;
      let increment = 10;
      let newValue = no_two + increment;
      if (no_two < target) {
        two(newValue);
      } else {
        two(target);
      }
    };
    let final = () => {
      let target = 175;
      let increment = 12;
      let newValue = no_three + increment;
      if (no_three < target) {
        three(newValue);
      } else {
        three(target);
      }
    };

    const Houndler= ()=>{
      setTimeout(setTimeout(counter, 250), 5000);
      setTimeout(twoChange, 15);      
      setTimeout(final, 50);
      setTimeout(oneone, 20);
    ;
  }

  let aboutDiv = useRef(null); 

    let tweakers= {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    }
    const intersectionCall=(entries)=>{
        entries.forEach(entry => {
          if(entry.isIntersecting){
          if(entry.intersectionRatio > 0.4){
            Houndler();
          }
        }
      })
    }
  
useEffect(()=>{
  let observerTest = new IntersectionObserver(intersectionCall, tweakers);
  if(aboutDiv.current)observerTest.observe(aboutDiv.current)
  return ()=> {if(aboutDiv.current) observerTest.unobserve(aboutDiv.current)}

}, [aboutDiv, tweakers] )

    return (
      <>
        <div className="flex header" id="about">
          <span className="midi">
            About <span className="orange">Us</span>
          </span>
          <span className="dash"></span>
          <p className="desc">
            We are a digital agency who since 2010, have been focused on the
            production, delivery and maintenance of high-end websites, apps and
            databases.
          </p>
        </div>
        <div className="flex wrapper" ref={aboutDiv}>
          <img
            src={AboutUsImg}
            alt="People discussing in an office setting"
            style={{ width: "50%" }}
          ></img>
          <div className="nav-links">
            <div className="link flex">
              <span className="midi orange" ref={count_item1}>
                {value}+
              </span>
              <span className="flex"> Years of Experience</span>
            </div>
            <div className="link flex">
              <span className="midi orange" ref={count_item2}>
                {no_two}
              </span>
              <span className="flex"> Completed Projects</span>
            </div>
            <div className="link flex">
              <span className="midi orange" ref={count_item3}>
                {no_three}
              </span>
              <span className="flex">Happy Customers</span>
            </div>
            <div className="link flex">
              <span className="midi orange" ref={count_item4}>
                {no_four}
              </span>
              <span className="flex"> Users Reached</span>
            </div>
          </div>
        </div>
      </>
    );
    }
  function Services() {
    let parentContainer = useRef(null);

    function targetKids(){
       let kids = parentContainer.current.children;
       for (let i = 0; i < kids.length; i++){
         let service_shots = kids[i].querySelector(".service_pics");
         kids[i].onclick = ()=> {
          
         if(service_shots.style.display === "none"){
          service_shots.style.display = "block";
         }
         else{
          service_shots.style.display = "none";
         }
       }
    }    
  }
    useEffect(()=>{targetKids()}, []) 
    return (
      <>      
        <div className="flex header" id="services">
          <span className="midi">
            Our <span className="orange">Services</span>
          </span>
          <span className="dash"></span>
          <p className="desc">
            Tive is your one-stop graphic design agency. We offer all the
            services you need to make the perfect first impressionsss
          </p>
        </div>
        <div ref={parentContainer} >
          <div>
            <div
              className="flex service" 
            >
              <img
                src={WebsiteDsgImg}
                alt="Website Icon"
                className="service_img"
              />
              <p className="service_name">Website Design</p>
              <p className="service_desc">
                We provide unique, vivid and eye-catching designs that would
                draw users in and keep them exploring your sites, apps and
                systems.
              </p>
            </div>
            <div
              className="flex service_pics"
            >
              <img src={design1} alt="Web Design 1" />
              <img src={design2} alt="Web Design 2" />
            </div>
          </div>

          <div>
            <div
              className="flex service"
            >
              <img src={AppDsI} alt="Phone Icon" className="service_img" />
              <p className="service_name">App Design</p>
              <p className="service_desc">
                Our eye-catching app designs combine beautiful aesthetics,
                intuitive user experience, and seamless functionality to delight
                users.
              </p>
            </div>
            <div
              className="flex service_pics"
            >
              <img src={appdes} alt="App Design 1" />
              <img src={appdes1} alt="App Design 2" />
            </div>
          </div>

          <div>
            <div
              className="flex service"
            >
              <img src={DevImg} alt="Laptop Code" className="service_img" />
              <p className="service_name">Software Development</p>
              <p className="service_desc">
                We also provide, ship and maintain user-friendly software for
                corporate bodies and individuals alike.
              </p>
            </div>

            <div
              className="flex service_pics"
            >
              <img src={software_one} alt="Software Design 1" />
              <img src={software_two} alt="Software Design 2" />
            </div>
          </div>

          <div>
            <div
              className="flex service"
            >
              <img src={Edit} alt="Branding Icon" className="service_img" />
              <p className="service_name">Branding</p>
              <p className="service_desc">
                We also provide branding, merchandising and advertising services
                to push your brand to the largest possible audience.
              </p>
            </div>
            <div
              className="flex service_pics"
            >
              <img src={brand} alt="Software Design 1" />
              <img src={merch} alt="Software Design 2" />
            </div>
          </div>
        </div>
      </>
    );
  }

  function Projects() {



    return (
      <>
        <div className="flex header" id="projects">
          <span className="midi">
            Our <span className="orange">Projects</span>
          </span>
          <span className="dash"></span>
          <p className="desc">
            A small selection of some of our finest projects till date
          </p>
        </div>
        <div className="flex wrapper">
          <div className="column">
            <div className="hover_image">
            <img src={design1} alt="Macroscopic Beef Jerky"  />
            <div className="overlay_text">
              <p>A simple project showcasing our design capabilities as a design agency</p>
            </div>
            </div>
            <div className="flex small">
              <img src={design2} alt="Another one of our designs" className="hover_images" />
              <img src={design3} alt="Yet another beautiful design" className="hover_images"/>
            </div>
          </div>
          <div className="flex side">
            <img src={design2} alt="test one" className="hover_images" />
            <img src={design3} alt="blowing" className="hover_images" />
          </div>
        </div>
      </>
    );
  }
  function Testimonials() {
    return (
      <>
        <div className="flex header" id="testimonials">
          <span className="midi orange">Client</span>
          <span className="midi">Testimonials</span>
          <span className="dash" />
          <span className="desc">
            Let's see what our clients have had to say about our key services
            (web development, app development and branding)
          </span>
        </div>
        <div className="flex">
          <div className="flex coll column">
            <div className=" quote_wrapper flex">
              <div className="flex coll">
                <div className="quote flex">
                  <img
                    src={headshot1}
                    className="quote_pic"
                    alt="Chenna Hwang"
                  />
                  <div className="quote_word">
                    <p>
                      " These guys over here at tive really know their onions.
                      With their innovative and functional websites, my company
                      has been able to create over 500k user impressions and has
                      recorded a 450% turnover since we started using tive.
                      They're an absolute godsend. "
                    </p>

                    <div>- Jenna Hwang, COO Almerion Incorporated</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex quote_wrapper">
              <div className="quote flex">
                <img src={headshot2} className="quote_pic" alt="Chenna Hwang" />
                <div className="quote_word">
                  <p>
                    " Working with Tive has been a game-changer for our company.
                    Their comprehensive approach to digital marketing has
                    allowed us to achieve impressive results across all
                    channels. From social media to SEO to email marketing,
                    Tive's team has exceeded our expectations every step of the
                    way. They've helped us unlock new opportunities and reach
                    our full potential. "
                  </p>

                  <div> - Jimmy C. Changgas, CEO Changas Burgers Worldwide</div>
                </div>
              </div>
            </div>
          </div>

          <div className="side">
            <div className="flex quote_wrapper">
              <div className="quote flex coll">
                <img src={headshot3} className="quote_pic" alt="Chenna Hwang" />
                <div className="quote_word">
                  <p>
                    " Tive has been an invaluable partner in our digital
                    marketing journey. Their innovative strategies and
                    data-driven approach have helped us stay ahead of the curve
                    and drive meaningful results. Tive's team has been
                    incredibly responsive, communicative, and dedicated to our
                    success. Thanks to their expertise, we've been able to grow
                    our business and expand our reach like never before "
                  </p>

                  <div>- Jenna Hwang, Board of Directors, PeakStream Inc.</div>
                </div>
              </div>
            </div>
            <div
              className="flex"
              style={{ justifyContent: "center" }}
              id="switcher"
            >
              <span className="midi click quote_wrapper"> {"<"} </span>
              <span className="orange midi click quote_wrapper">{">"}</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  function MailUs() {
    return (
      <>
        <div className="quote_wrapper">
          <span
            className="mega"
            style={{ textAlign: "center", padding: "0.75rem", width: "100%" }}
          >
            Let's <span className="orange">build</span> and{" "}
            <span className="orange">scale</span> it!
          </span>
          <div className="flex" id="blooper">
            <a
              href="mailto:atembarry12@gmail.com"
              style={{ width: "30%", fontSize: "2.5rem", padding: "0 0.5rem" }}
            >
              mailus@tive.co
            </a>
            <span className="dash sep" style={{ width: "40%" }} />
            <button className="button" style={{ marginLeft: "10%" }}>
              {"Get In Touch >"}
            </button>
          </div>
        </div>
        <div className="flex bottom">
          <div>
            <a className="bottom_links" href="#about">
              About Us
            </a>
            <a className="bottom_links" href="#services">
              Our Services
            </a>
            <a className="bottom_links" href="#projects">
              Our Projects
            </a>
            <a className="bottom_links" href="#testimonials">
              Client Testimonials
            </a>
          </div>
          <span>
            All Rights Reserved &copy; 2023{" "}
            <a href="https://github.com/vilio316">vilio316</a>
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <TopNav />
      <Preface />
      <PhotoPageOne />
      <AboutUs />
      <Services />
      <Projects />
      <Testimonials />
      <MailUs />
    </>
  );
}
export default TivePage
