import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/FeaturesHeader";
import Link from "next/link";
import Footer from '../components/footer/Footer'
import Features from '../components/home-page/home-6/Features'
const contact = () => {

  const FeatureData = [
    {
      id: 1,
      iconSrc: "/images/care/registration.png",
      title: "Patient Registration Procedure",
      description:
        "Effortlessly onboard patients into the system with a streamlined and user-friendly registration process, ensuring accurate capture of essential information.",
    },
    {
      id: 2,
      iconSrc: "/images/care/appointment.png",
      title: "Appointment Management",
      description:
        "Efficiently organize and manage appointments, reducing scheduling conflicts and optimizing medical center resources for enhanced patient care.",
    },
    {
      id: 3,
      iconSrc: "/images/care/consultation.png",
      title: "Onsite and Online Consultation",
      description:
        "Empower patients to book appointments according to their preferences, whether for in-person consultations or virtual visits, fostering flexibility and convenience.",
    },
    {
      id: 4,
      iconSrc: "/images/care/attendence.png",
      title: "Easy Access for Patients and Attendants",
      description:
        "Extend accessibility beyond the healthcare facility's premises by providing a secure web portal, granting patients and their attendants the ability to access relevant information and services remotely.  ",
    },
    {
      id: 5,
      iconSrc: "/images/care/profile.png",
      title: "Patient and Attendant Profile Management    ",
      description:
        "Enable patients and attendants to manage their profiles, ensuring that personal information, medical history, and preferences are up-to-date and easily accessible.",
    },

    {
      id: 6,
      iconSrc: "/images/care/insite.png",
      title: "Valuable Insights for Medical Centers and Patients",
      description:
        "Leverage data-driven insights to provide medical centers with valuable analytics for informed decision-making while offering patients a deeper understanding of their health trends and treatment progress.",
    },
    {
      id: 7,
      iconSrc: "/images/care/communication.png",
      title: "Real-Time Communication ",
      description:
        "Facilitate seamless communication between healthcare providers, patients, and attendants through integration with popular tools like Microsoft Teams and Outlook, promoting timely information exchange.",
    },
    {
      id: 8,
      iconSrc: "/images/care/payment.png",
      title: "Secure Payments",
      description:
        "Ensure a secure and hassle-free payment process for patients by integrating Stripe, a trusted payment gateway catering to the unique financial requirements of the healthcare sector.",
    },
  ];

  return (
    <>
      <Seo pageTitle="KAISPE E-Care | Features" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
    <div className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80 mb-200">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                    {/* Let’s <br />
                    <span className="d-inline-block position-relative">
                      Discover
                      <span
                        className="mark-bg"
                        style={{ backgroundColor: "#E1EDFF" }}
                      />
                    </span> */}
                  Features of KAISPE E-Care 
                </h2>
              </div>
              {/* /.title-style-three */}
              {/* <Link
                href="/pages-menu/service-v1"
                className="btn-five tran3s fw-500 fs-17 text-decoration-underline"
              >
                Click here for more info <i className="bi bi-chevron-right" />
              </Link> */}
            </div>
            {/* <Features /> */}
            {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 mt-40"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three">
            <div className="icon d-flex align-items-end">
              <img src={feature.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-50">{feature.description}</p>
            {/* <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link> */}
          </div>
        </div>
      ))}
          </div>
        </div>
        {/* End .container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_36.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three rounded-circle" />
      </div>


      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
          {/* <div className="footer-style-ten theme-basic-footer zn2 position-relative backthree" style={{paddingTop:"0px"}}>
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between" style={{marginTop:"100px"}}>
              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/recruitment/hubWhite.png" alt="logo" width={200} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#4980FF"}}>KAISPE</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500 poppins">Email Address</h5>
                  
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                <i className="fa fa-envelope text-white fs-18" style={{marginRight:"15px"}}/>info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500 poppins">Contact Number</h5>
             
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/> USA : (+1)-315-791-4472 <br></br>
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/>   PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div> */}

<div className="footer-style-ten theme-basic-footer zn2 position-relative back">
        <div className="container ">
          <div className="inner-wrapper">
            <div className="row justify-content-between">

            <div className="col-lg-12 row align-items-center" style={{display:"flex", alignItems:"center", justifyContent:"center",}}>
                  <h2 style={{textAlign:"center", fontFamily:"Poppins"}}>Get it from Microsoft AppSource</h2>
                  <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspmpportal?tab=Overview" target="_blank" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <div className=" fw-500 tran3s" style={{marginTop:"50px", marginBottom:"250px"}} >
                    <img src="/images/field/download.png" style={{width:"100%", height:"100%"}}/>
                  </div>
                  </a>
                </div> 

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/care/careWhite.png" alt="logo" width={160} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                KAISPE has been providing solutions and services to customers using Microsoft Dynamics, Azure, Power platform, Oracle NetSuite, mobile and web app development. 
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block poppins">
                  © {new Date().getFullYear()} {" "}
                  <a  href="https://www.kaispe.com/" target="_blank" style={{color:"#fff", textDecoration:"underline"}}>KAISPE</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-lg-4 footer-intro mb-40">
                <div className="logo">
                  <h5 className="footer-title text-white fw-500 poppins">Email Address</h5>
                  
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10 poppins">
                <i className="fa fa-envelope text-white fs-18" style={{marginRight:"15px"}}/>info@kaispe.com
                </p>
                <h5 className="footer-title text-white fw-500 poppins">Contact Number</h5>
             
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/> USA : (+1)-315-791-4472 <br></br>
                <i className="fa fa-phone text-white fs-18 " style={{marginRight:"15px"}}/>   PAK : (+92)-213-432-6085
                </p>
              
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {/* <DefaultFooter /> */}
    </>
  );
};

export default contact;
