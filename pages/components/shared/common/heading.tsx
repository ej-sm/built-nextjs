import React from "react";

interface Props {
    text: string;
    styles?: string; // If you want to pass additional styles
}

const Heading: React.FC<Props> = ({ text, styles }) => {
    return (
        <div>
            <h1 className={`text-[#000640] font-bold  md:text-[48px] text-[36px]  ${styles}`}>
                {text}
            </h1>
        </div>
    );
};

export default Heading;