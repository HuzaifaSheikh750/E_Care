import Link from "next/link";
import { useState } from "react";
import Main from "../../../components/home-page/home-6/Hero";

const Hero = () => {
  const features = [
    "Online Consultation",
    "Easy Billing",
    "Clinical Efficiency",
  ];

  const buttons = [
    {
      // platform: "Google play",
      icon: "images/field/app_store.png",
      className: "windows-button",
    },
    {
      // platform: "App store",
      icon: "images/field/google_play.png",
      className: "ios-button",
    },
  ];

  return (
    <>
      <div className="hero-banner-two position-relative pt-150 lg-pt-200 md-pt-150 " >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 m-auto text-center"
              data-aos="fade-up"
            >
              <h2 className="tx-dark mb-20" style={{fontWeight:"bold"}}>Empowering Health Care Professionals with KAISPE Care </h2>
              <p className="text-lg tx-dark opacity-75 mb-0 lg-mb-20 mainText" style={{ fontSize: "20px", fontStyle: "" }}>
               Empowering healthcare professionals is at the core of KAISPE Care's mission. By seamlessly integrating advanced 
               technology with the expertise of medical practitioners, we revolutionize patient care. Our platform offers real-time 
               insights, streamlining workflows, and informed decision-making. Through intuitive interfaces and predictive analytics, 
               KAISPE Care enhances diagnostics and treatment planning. It's more than just a tool; it's a supportive companion for 
               healthcare professionals, promoting collaboration and reducing burnout..
              </p>
              </div>
          </div>
        </div>
      </div>

      <div className="hero-banner-two position-relative pt-100 lg-pt-200 md-pt-150 " >
        <div className="container">
          {/* <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 m-auto text-center"
              data-aos="fade-up"
            >

              </div>
          </div> */}
           <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="block-style-seven wow fadeInLeft">
            <div className="title-style-one">
              {/* <div className="sc-title text-uppercase">MOBILE APP</div> */}
              <h3 className=" fw-500 tx-dark m0" style={{fontSize:"40px", fontWeight:"bold"}}>
              How can KAISPECare help Individuals and Health Care providers?
              </h3>
            </div>
            <p className="fs-20 pt-30 pb-30 lg-pb-20">
            No more paperwork; say yes to efficacy and time-saving with KAISPE Care
            </p>
            <ul className="style-none list-item fs-18">
              {features.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="col-lg-6 wow fadeInRight">
          <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80 mainPic_div" style={{width:"180%"}}>
            <img
              src="images/care/mainPic.png"
              alt=""
              // width={600}
              style={{width:"100%"}}
              className="lazy-img main-img ms-auto mainPic "
            />
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
