import Link from "next/link";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer/Footer";
import DefaulHeader from "../../components/header/Header2";
import Customer from "../../components/home-page/home-1/Blog";
import Hero from "../../components/home-page/home-3/Hero";
import IntroVideo from "../../components/home-page/home-4/IntroVideo";
import Partners from "../../components/home-page/home-6/Partners";
import OurAim from "../../components/home-page/home-10/OurAim";
import Aims from "../../components/home-page/home-10/Aims";
import Services from "../../components/home-page/home-10/Services";
import Features from "../../components/home-page/home-6/Features";
import Counter from "../../components/home-page/home-4/Counter";
import Main from "../../components/home-page/home-6/Hero";


const Insurance = () => {
  return (
    <>
      <Seo pageTitle="KAISPE E-Care" />
      {/* <!-- 
      =============================================
			Theme Default Menu
			============================================== 	
      --> */}
      
      <DefaulHeader />  
      {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}

      <Hero />

       {/* <!-- 
			=============================================
			Theme Hero Banner
			============================================== 
			--> */}

      <Main/>


      <div className="fancy-feature-two position-relative pt-100 mt-40 lg-pt-100 sm-pt-60">
        <div className="container">
          <OurAim />
        </div>
      </div>

        {/* <div className="fancy-feature-seven pt-150 lg-pt-100" >
          <div className="container" >
            <div className="row align-items-center">
            <div
                className="col-lg-12 col-md-12  m-auto text-center"
                data-aos="fade-up"
              >
                <h3 className="tx-dark mb-20 poppins care_head " style={{fontWeight:"bolder", fontSize:"55px"}}>Empowering Health Care Professionals with KAISPE Care </h3>

                <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20 poppins" style={{ fontSize: "20px", fontStyle: "" }}>
                Empowering healthcare professionals is at the core of KAISPE Care's mission. By seamlessly integrating advanced 
                technology with the expertise of medical practitioners, we revolutionize patient care. Our platform offers real-time 
                insights, streamlining workflows, and informed decision-making. Through intuitive interfaces and predictive analytics, 
                KAISPE Care enhances diagnostics and treatment planning. It's more than just a tool; it's a supportive companion for 
                healthcare professionals, promoting collaboration and reducing burnout.
                </p>
                </div>
            </div>
          </div>
        </div> */}

      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}

      <div className="fancy-feature-one pt-100 lg-pt-140 mb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className=" fw-bold tx-dark m0" style={{textAlign:"center"}}>
                Key Features of KAISPE Care 
                </h2>
                <p style={{textAlign:"center", marginTop:"40px"}} className="text-lg">No more communication breaks and access to health care for all  </p>
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="inner-content pt-0 lg-pt-60 md-pt-30">
          <div className="row gx-xxl-5">
            <Services />
          </div>
        </div>
        {/* /.inner-content */}
      </div>


{/* <div className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                  Features of Recruitment Hub 
                </h2>
              </div>
              <Link
                href="/Features"
                className="btn-five tran3s fw-500 fs-17 text-decoration-underline"
              >
                Click here for more info <i className="bi bi-chevron-right" />
              </Link>
            </div>
            <Features />
          </div>
          <img src="/images/recruitment/featureMain.png" alt="image" className="lazy-img" style={{width:"80%", height:"80%", marginTop:"100px", marginLeft:"auto", marginRight:"auto"}}/>
        </div>


        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_36.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three rounded-circle" />
      </div> */}


      {/* <!-- 
			=============================================
				Feature Section Thirty Four
			============================================== 
			--> */}


      <div
        className="  mt-130 lg-mt-80 tag_line"

        style={{height:"auto", padding:"50px 0px", width:"90%", margin:"auto", marginTop:"100px"}}
        data-aos="fade-up"
      >
        <div className="container  ">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40 ">
            <div className="row ">
              <div className="col-xl-12 col-md-11 m-auto ">
                <div className="row align-items-center">
                  <div className="col-lg-12"  style={{display:"grid", placeItems:"center", justifyContent:"center"}}>
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <h2 className="main-title fw-700 text-white m0 poppins text-lg" style={{fontSize:"40px", textAlign:"center", fontWeight:"bold"}}>
                      Streamline Health care by providing support at every step 
                      </h2>
                      <p style={{color:"white", fontSize:"20px", marginTop:"10px", fontFamily:"Poppins", textAlign:"center"}} className="text-lg">
                      Get instant access to patient records and doctors available, and book appointments without waiting for long calls to be attended. 
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      

      {/* /.fancy-feature-thirtyEight */}
   
      <div className="fancy-feature-fifteen  mt-140 lg-mt-70">
        <img
          src="/images/shape/shape_76.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <div className="container">
          {/* <IntroAction /> */}
          <IntroVideo />
          <Counter /> 
        </div>
      </div>

    <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0 poppins">Customer Stories</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* /.row */}
            <div className="row gx-xxl-5">
              <Customer />
            </div>
             
            {/* /.row */}
            <div className="text-center xs-mt-40">
              <Link
                href="https://www.kaispe.com/resources/blogs/"
                className="btn-twentyTwo fw-500 tran3s poppins"
                data-aos="fade-left"
                target="_blank"
                style={{backgroundColor:"black"}}
              >
                Go to Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="partner-section-one position-relative mt-225 lg-mt-100 mb-200">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div
                className="title-style-three text-center mb-100 lg-mb-30"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Our partners</div>
                <h2 className="main-title fw-500 tx-dark m0 poppins">
                  Our Trusted Partners.
                </h2>
                <p className="fs-20 pt-30 pe-xxl-5 poppins">
              KAISPE always believe in building strategic business relationship with partners around the world. Together with 
              our partners, we can provide the solutions our customers are looking for to grow their business and capture the 
              market.
              </p>
              </div>
              {/* /.title-style-three */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <Partners />
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

          {/* <img
            src="/images/shape/shape_38.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_39.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          /> */}
      </div>

      {/* <div
        className=" pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 microsoftButton"
        data-aos="fade-up"
      >
        <div className="container ">
            <div className="row">
                <div className="col-lg-12 row align-items-center" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <h2 style={{textAlign:"center", fontFamily:"Poppins"}}>Get it from Microsoft AppSource</h2>
                  <a href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspetapp?tab=Overview" target="_blank" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <div className=" fw-500 tran3s" style={{marginTop:"50px"}} >
                    <img src="/images/field/download.png" style={{width:"100%", height:"100%"}}/>
                  </div>
                  </a>
                </div>                                              
              </div>
        </div>
      </div> */}
    
      {/*
			=====================================================
				Footer
			=====================================================
			*/}

      {/* add images */}
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
      {/* /.footer-style-ten */}
    </>
  );
};

export default Insurance;
