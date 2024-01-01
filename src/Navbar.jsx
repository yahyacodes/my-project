import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <div className="mt-4">
      <header className="max-w-3xl mx-auto">
        <div
          className={`bg-transparent text-gray-100 text-2xl md:hidden ${
            state ? "mx-2 pb-5" : "hidden"
          }`}
        >
          <h1 className="text-gray-100 text-2xl">Yahya</h1>
        </div>
        <nav
          className={`pb-5 md:text-sm ${
            state
              ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
              : ""
          }`}
        >
          <div className="bg-divBg p-4 rounded-lg gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <h1 className="text-gray-100 text-xl">Yahya</h1>
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-100 hover:text-gray-900">About</li>
                <li className="text-gray-100 hover:text-gray-900">Projects</li>
                <li className="text-gray-100 hover:text-gray-900">Contact</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
