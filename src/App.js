import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("");
  return (
    <>
      {/* THEME BUTTONS */}
      <div className="flex w-100 justify-center m-5 p-5 ">
        {/* BUTTON FOR ORIGINAL THEME */}
        <button
          className="mx-2 px-3 py-2 bg-blue-700 text-white rounded-lg"
          onClick={() => setTheme("")}
        >
          Blue Theme
        </button>
        {/* BUTTON FOR RED THEME */}
        <button
          className="mx-2 px-3 py-2 bg-red-700 text-white rounded-lg"
          onClick={() => setTheme("theme-red")}
        >
          Red Theme
        </button>
        {/* BUTTON FOR DARK THEME */}
        <button
          className="mx-2 px-3 py-2 bg-gray-800 text-white rounded-lg"
          onClick={() => setTheme("theme-dark")}
        >
          Dark Theme
        </button>
        {/* BUTTON FOR LIGHT THEME */}
        <button
          className="mx-2 px-3 py-2 bg-gray-200 rounded-lg border-black-700"
          onClick={() => setTheme("theme-light")}
        >
          Light Theme
        </button>
      </div>
      <div className={theme}>
        <div className="sm:m-6 space-y-6">
          <div className="relative bg-skin-primary max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
            <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-skin-primary sm:text-4xl">
                <span className="block">Theming in Tailwind.</span>
                <span className="block">because Colors matter.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-skin-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <button className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm sm:px-8">
                    Get started
                  </button>
                  <button className="text-skin-primary bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                    Live demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
