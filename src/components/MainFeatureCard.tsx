import React from "react";

const MainFeatureCard = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-bottom h-full"
      style={{
        backgroundImage: `url("main-card.png")`,
      }}
    >
      <p>
        Variety of charcoal types: Offering a range of options to suit different
        grilling needs
      </p>
      <p>
        Eco-friendly packaging: Use recyclable or biodegradable packaging
        materials. Highlight any initiatives to reduce plastic use or carbon
        footprint in the production and distribution process.
      </p>
    </div>
  );
};

export default MainFeatureCard;
