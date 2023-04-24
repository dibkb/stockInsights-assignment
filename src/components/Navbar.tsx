import React from "react";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-sky-50 py-3">
        <div className="container mx-auto">
          <section className="flex gap-3">
            <p className="font-medium text-stone-900">StockInsights</p>
            <p className="bg-stone-800 rounded-md text-white px-3 py-1 text-xs font-base">
              Beta
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
