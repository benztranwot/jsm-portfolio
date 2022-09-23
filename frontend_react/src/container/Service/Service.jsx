import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Service.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'services'] | order(order asc)";

    client.fetch(query).then((data) => setServices(data));
  }, []);

  return (
    <>
      <h2 className="head-text">My Services</h2>

      <div className="app__profiles">
        {services.map((service, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="app__profile-item"
            key={service.title + index}
          >
            <img src={urlFor(service.imgUrl)} alt={service.title} />
            <h2 className="bold-text text-center" style={{ marginTop: 20, width: "100%" }}>
              {service.title}
            </h2>
            <p className="p-text text-center" style={{ marginTop: 10 }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <a href="#work" className="mt-2">
        <button type="button" className="p-text">
          View my projects
        </button>
      </a>
    </>
  );
};

export default AppWrap(MotionWrap(Service, "app__service"), "service", "app__whitebg");
