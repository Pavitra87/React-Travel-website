import React from "react";
import { tour } from "../component/dummydata/Data";
import Title from "../pages/Title";

const Tour = () => {
  return (
    <div>
      <section className="tour-container">
        <div className="tour-title">
          <Title title="Tour Package" />
        </div>
        <div className="tour-content">
          {tour.map((val) => (
            <div className="img">
              <img src={val.img} alt="" />
              <h1>{val.title}</h1>
              <span>{val.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tour;
