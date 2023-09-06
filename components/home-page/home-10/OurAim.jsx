import Link from "next/link";

const OurAim = () => {
  const aimItems = [
    {
      title: "About us",
      heading: "Boost Your Business and Empower Your Employees with KAISPE Loan Management App",
      text: "The app even caters to different payment scenarios, such as insurance payments, partial payments, and refunds, offering flexibility and catering to diverse needs. ",
      list: [
        "Streamlined Appointment Booking Process",
        "Efficient Billing Automation",
        "Diverse Payment Methods",
        "Improved Patient Management",
        "Enhanced Clinical Workflow",
        "Data-Driven Insights",
      ],
      link: "/pages-menu/about-us-v1",
    },
  ];

  const imageItems = [
    { src: "/images/care/tabDashboard.png", alt: "shape" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 ms-auto order-lg-last text-point">
        {aimItems.map((item, index) => (
          <div
            className="block-style-one "
            data-aos="fade-left"
            key={index}
          >
            <div className="sc-title" style={{marginBottom:"30px", color:"#9648FD"}}>Benefits</div>
            <div className="title-style-one">
              {/* <div className="sc-title text-uppercase">{item.title}</div> */}
              {/* <h3 className="main-title fw-bold tx-dark m0"><span style={{ color: "#6A3197" }}></span></h3> */}
            <h3 className="  fw-bold tx-dark m0 appBannerHeading" style={{ fontSize: "38px", fontWeight:"bold" }}>
               Key Benefits of KAISPE Care 
            </h3>
            </div>
            <p className="text-md tx-dark pt-35 pb-40 lg-pb-20">{item.text}</p>
            <ul className="style-none list-item fs-18">
              {item.list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-md-12 order-lg-first " data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 md-mt-50 sm-mt-80" style={{width:"120%"}}>
          {imageItems.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={"tab_Dashboard"}
              style={{ width: "100%", height: "100%", position: "relative", right:"100px", top:"-130px" }}
            />
          ))}
        </div>
      </div>


    </div>
  );
};

export default OurAim;
