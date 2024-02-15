import React from 'react';

interface Props {
    text: string;
    styles?: string; // If you want to pass additional styles
}

const SubHeading: React.FC<Props> = ({ text, styles }) => {
    return (
        <div>
            <h3 className={`text-[#000640]  md:text-[20px] text-[16px]  ${styles}`}>{text}</h3>
        </div>
    );
};

export default SubHeading;