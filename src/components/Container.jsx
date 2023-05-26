import React from 'react';

const Container = ({ sectionContent, classGlow }) => {
    return (
        <div className={`container ${classGlow || ""}`}>
            <div className="inner-container">
                {sectionContent}
            </div>
        </div>
    );
};

export default Container;