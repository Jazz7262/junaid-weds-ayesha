import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="timeline-wrapper">
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    ></div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                    >
                        <h1>Nikaah</h1>
                        <p>
                            On Sunday, 16<sup>th</sup> October, 2022,
                            <br />
                            19<sup>th</sup> Rabi-ul-Awwal, 1443 Hijri,
                            <br />
                            Time: 11:30 AM.
                        </p>
                        <h2>Venue:</h2>
                        <p>
                            Railway Institute,
                            <br /> Prabhath Nagar,
                            <br /> Guntakal - 515 801.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 left next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    >
                        <h1>Valima</h1>

                        <p>
                            On Tuesday, 18<sup>th</sup> October, 2022,
                            <br />
                            21<sup>st</sup> Rabi-ul-Awwal, 1443 Hijri,
                            <br />
                            Time: 08:30 PM.
                        </p>

                        <h2>Venue:</h2>
                        <p>
                            Karnataka Function Hall,
                            <br /> Hospet Road, Cantonment,
                            <br /> Bellari - 583 104.
                        </p>
                    </div>
                    <div
                        className="col-lg-6 right next"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="100"
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
