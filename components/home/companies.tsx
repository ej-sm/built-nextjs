"use client";
import Image from "next/image";
import React from "react";

import c1 from "/public/assets/c1.svg";
import c2 from "/public/assets/c2.svg";
import c3 from "/public/assets/c3.svg";
import c4 from "/public/assets/c4.svg";
import c5 from "/public/assets/c5.svg";
import c6 from "/public/assets/c6.svg";
import Section from "../shared/common/Section";

type Props = {};
const companies = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
];
const TrustedBySection = (props: Props) => {
    return (
        <Section>
            <div className="md:py-20 py-10 lg:px-24 md:px-12 px-5">
              

                <div className="slider">
                    <div className="slide-track">
                        {companies.map((company, i) => (
                            <div key={i} className="md:mx-10 mx-4">
                                <Image src={company} alt="" className="w-3/4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TrustedBySection;