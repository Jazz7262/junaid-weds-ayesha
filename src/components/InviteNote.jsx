import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. Jeelani Hundekar & Family</h2>

                <h5 className="mt-3">
                    H.No.: 171, Ward No.: 29,
                    <br /> Gopal Gowda Nagar, 2<sup>nd</sup> Stage,
                    <br /> Cowl Bazaar,
                    <br />
                    Bellari - 583 102.
                </h5>
                <p className="address">
                    Contact: +91 97421 28512,
                    <br /> +91 70195 31426,
                    <br /> +91 76763 72767.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
