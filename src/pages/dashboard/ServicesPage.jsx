import "../../styles/services.css";

const services = [
  {
    title: "Brand Strategy",
    duration: "60 mins",
    price: "$120",
    description:
      "Deep strategic session focused on positioning and identity.",
  },
  {
    title: "Consultation",
    duration: "30 mins",
    price: "$80",
    description:
      "Quick business consultation and planning session.",
  },
  {
    title: "Design Session",
    duration: "90 mins",
    price: "$220",
    description:
      "Collaborative design workshop for product and brand systems.",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-wrapper">

      {/* HEADER */}
      <div className="services-header">

        <div>

          <h1>Services</h1>

          <p>
            Manage your business offerings and booking sessions.
          </p>

        </div>

        <button className="add-service-btn">
          Add Service
        </button>

      </div>

      {/* GRID */}
      <div className="services-grid">

        {services.map((service) => (

          <div
            key={service.title}
            className="service-card"
          >

            {/* TOP */}
            <div className="service-card-top">

              <div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>

              <span className="service-price">
                {service.price}
              </span>

            </div>

            {/* BOTTOM */}
            <div className="service-card-bottom">

              <div className="service-duration">
                {service.duration}
              </div>

              <div className="service-actions">

                <button>Edit</button>

                <button>Delete</button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ServicesPage;