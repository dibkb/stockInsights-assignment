import React from "react";
const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-sky-50 py-3">
        <div className="sm:container max-w-[90%] mx-auto">
          <section className="flex gap-3 items-center">
            <p className="font-medium text-stone-900">StockInsights</p>
            <p className="bg-stone-900 rounded-md text-white px-3 py-1 text-xs font-base">
              Beta
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
