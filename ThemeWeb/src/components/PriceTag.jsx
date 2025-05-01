import React from "react";
import PricingCard from "./PricingCard";
import FAQ from "./FAQ";

const PriceTag = () => {
  return (
    <section className="bg-[#fdf0e9] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-start mt-8">
          <h2 className="text-lg text-[#ef6d58] uppercase font-medium mb-4 tracking-[2px]">
            Pricing
          </h2>
          <h1 className="text-6xl text-[#391400] font-bold mb-8">
            Check Our <br />
            Pricing Plans
          </h1>
        </div>

        {/* Price Tag */}
        <PricingCard />

        {/* FAQ */}
        <FAQ />
      </div>
    </section>
  );
};

export default PriceTag;
