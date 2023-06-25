### **APPLYING THE THEME TO THE TAILWIND**

---

In the world of web development, maintaining a consistent and visually appealing design across a project can be challenging. Making widespread design changes or customizations often involves manually updating numerous CSS properties, which can be time-consuming and error-prone. This is where theming in Tailwind CSS comes to the rescue.

Theming in Tailwind CSS provides a powerful solution to this problem by allowing we to define variables in our CSS and seamlessly integrate them into our project's design system. With theming, we can easily modify colors, typography, spacing, and more, all in one central place. In this comprehensive and descriptive step-by-step guide, we will explore the process of creating a robust theming system in Tailwind CSS.

Let us consider the below example.

![theming-tailwind-1](https://github.com/geekysid/Namaste-React/assets/59141234/009d72c4-730a-412e-8c74-d35ff5e081d0)

<!--
```javascript
const App = () => {
  return (
    <div class="sm:m-6 space-y-6">
      <div class="theme-swiss relative bg-blue-700 max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-700-hue via-blue-700 to-transparent opacity-90"></div>
        <div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="block">Theming in Tailwind.</span>
            <span class="block">because Colors matter.</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <button
                href="#"
                class="text-blue-700 bg-white hover:bg-blue-700 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"
              >
                Get started
              </button>
              <button
                href="#"
                class="text-white bg-blue-300 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Live demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
``` -->

![image](https://github.com/geekysid/Namaste-React/assets/59141234/28367395-c27a-4cfa-8c62-82f09a9f2652)

Now let us assume, we need to change the color _blue-700_ to _blue-300_. For doing so, we will need to change the color at all the places where we have used it. If it is used in one component, then it is achievable but doing so in a big application that has 100s of components, turns out to be a challenge. Again if we want to add another theme for our application, let's say red, then we will have to add the red color to all the places which is not possible.

One of the best solutions for this is to create our themes in the tailwind configuration file (_tailwind-config.js_) and use those themes to define our colors in the component. So, whenever we want to change our color in a given theme, we can do it by simply changing it in the tailwind configuration file only. This will save us from changing the color in all the instances where it is used.

Theming in Tailwind CSS begins with defining variables that will hold the values we want to customize. By creating a dedicated CSS file, such as theme.css. This establishes a central repository for all our theming needs.

In our, we declare CSS custom properties in our CSS file to represent these color names. We'll define default values for these variables, such as "color-text-primary" for the base text color (set to white), "color-text-secondary" for the muted text color, and "color-text-inverted" for the inverted text color. Similarly, we'll define variables for background colors like "color-bg-primary" and button colors like "color-button-accent.". Below is how our index.css looks

![theming-tailwind-2](https://github.com/geekysid/Namaste-React/assets/59141234/cc1e1a64-84e7-4590-be70-9c635e5f6177)

<!-- ```css theme.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-text-primary: #ffffff;
    --color-text-secondary: #c7d2fe;
    --color-text-inverted: #4f46e5; /* represents the color of text contrasting to the primary color */
    --color-bg-primary: #4338ca;
    --color-button-accent: #ffffff;
    --color-button-accent-hover: #eef2ff;
    --color-button-muted: #6366f1;
  }
}
``` -->

Once the variables are in place, we can create a themeable utility class in Tailwind CSS. By using a single key, such as "skin", we can define utility classes that rely on the CSS variable values. For example, we can extend the text color utility and use the "theme-base" class to apply the base text color defined by the CSS variable. By replacing the hard-coded colors in our components with these themeable utility classes, we can achieve dynamic theming.

![theming-tailwind-3](https://github.com/geekysid/Namaste-React/assets/59141234/5e2e6f19-6f3f-4e76-bf25-5f3bfa3c935b)

<!--```javascript tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      textColor: {
        /* colors for text */
        skin: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        /* colors for background */
        skin: {
          primary: "var(--color-bg-primary)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
        },
      },
      gradientColorStops: {
        /* colors for gradients */
        skin: {
          hue: "var(--color-bg-primary)",
        },
      },
    },
  },
};
``` -->

Now if we replace these new color utilities in our component in _App.js_ with the hardcoded ones, we will get the same desired result.

![theming-tailwind-3 5](https://github.com/geekysid/Namaste-React/assets/59141234/db3e6eb6-60b4-4454-a32e-b319ee8136fa)

<!-- ```javascript App.js
const App = () => {
  return (
    <div class="sm:m-6 space-y-6">
      <div class="relative bg-skin-primary max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">
        <div class="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
        <div class="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-skin-primary sm:text-4xl">
            <span class="block">Theming in Tailwind.</span>
            <span class="block">because Colors matter.</span>
          </h2>
          <p class="mt-4 text-lg leading-6 text-skin-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <button
                href="#"
                class="text-text-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"
              >
                Get started
              </button>
              <button
                href="#"
                class="text-skin-primary bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              >
                Live demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
``` -->

Not that our setup is complete, if we need to change our base color from _blue-700_ to _blue-300_, we only need to do it in the theme.css file and it will be reflected at all places where that variable is used. This has not only saved our lives by eliminating the need of changing the color at all places but, but also gives us the freedom of creating any number of themes we want with a minimal number of code changes. All we will have to do is add a new theme in _theme.css_ and use those themes in our component. Let us create multiple themes in our _theme.css_ file.

![theming-tailwind-4](https://github.com/geekysid/Namaste-React/assets/59141234/ec15d9f4-0417-4cd1-b705-3840f0c2b01d)

<!-- ```css theme.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-text-primary: #ffffff;
    --color-text-secondary: #c7d2fe;
    --color-text-inverted: #4f46e5; /* represents the color of text contrasting to the primary color */
    --color-bg-primary: #4338ca;
    --color-button-accent: #ffffff;
    --color-button-accent-hover: #eef2ff;
    --color-button-muted: #6366f1;

    /* FONT TYPES */
    --header-font: "League Spartan";
    --normal-font: "Roboto";
    --digit-font: "Orbitron";

    /* TEXT SIZES */
    --text-3xl: 1.5rem;
    --text-2xl: 1.25rem;
    --text-xl: 1.1rem;
    --text-medium: 1rem;
    --text-small: 0.9rem;
    --text-xs: 0.8rem;
  }

  .theme-red {
    --color-text-primary: #ffffff;
    --color-text-secondary: #fecaca;
    --color-text-inverted: #dc2626; /* represents the color of text contrasting to the primary color */
    --color-bg-primary: #b91c1c;
    --color-button-accent: #ffffff;
    --color-button-accent-hover: #fef2f2;
    --color-button-muted: #ef4444;
  }

  .theme-dark {
    --color-text-primary: #f1f2f6;
    --color-text-secondary: #dfe4ea;
    --color-text-inverted: #57606f; /* represents the color of text contrasting to the primary color */
    --color-bg-primary: #2f3542;
    --color-button-accent: #f1f2f6;
    --color-button-accent-hover: #dfe4ea;
    --color-button-muted: #57606f;
  }

  .theme-light {
    --color-text-primary: #2f3542;
    --color-text-secondary: #57606f;
    --color-text-inverted: #f1f2f6; /* represents the color of text contrasting to the primary color */
    --color-bg-primary: #f1f2f6;
    --color-button-accent: #2f3542;
    --color-button-accent-hover: #dfe4ea;
    --color-button-muted: #cfd4da;
  }
}
``` -->

In the above CSS file, we simply created 3 additional themes, _theme-red_, _theme-dark_, _theme-light_. In these themes all we did change the values of color variable that are being used in _tailwind.config.js_ file. This will allow us to change the theme without changing anything in our tailwind configuration file or component file.

![theming-tailwind-5](https://github.com/geekysid/Namaste-React/assets/59141234/d4327650-546c-4315-beb8-d1133f8c299b)

<!-- ```javascript App.js
import { useState } from "react";

const Calculator = () => {
  const [theme, setTheme] = useState("");
  console.log(theme);
  return (
    <>
      <div className="flex w-100 justify-center m-5 p-5 ">
        <button
          className="mx-2 px-3 py-2 bg-blue-700 text-white rounded-lg"
          onClick={() => setTheme("")}
        >
          Blue Theme
        </button>
        <button
          className="mx-2 px-3 py-2 bg-red-700 text-white rounded-lg"
          onClick={() => setTheme("theme-red")}
        >
          Red Theme
        </button>
        <button
          className="mx-2 px-3 py-2 bg-gray-800 text-white rounded-lg"
          onClick={() => setTheme("theme-dark")}
        >
          Dark Theme
        </button>
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
                  <button
                    href="#"
                    className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm sm:px-8"
                  >
                    Get started
                  </button>
                  <button
                    href="#"
                    className="text-skin-primary bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
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
``` -->

Now all we need to do is add the theme class to the parent div element and buttons to change that class when clicked. Below is the updated _App.js_ file with buttons and theme class.

![image](https://github.com/geekysid/Namaste-React/assets/59141234/ac280bba-2084-401d-9752-b1fcdcdad747)

Theming in Tailwind CSS empowers we to create a consistent and customizable design system by utilizing variables and integrating them seamlessly into our project. By defining variables, applying them in our stylesheets, and integrating them into the Tailwind config file, we can efficiently update and modify our theme across our entire project. Embrace the flexibility and convenience that theming in Tailwind CSS brings to our web development workflow, and enjoy the benefits of a visually harmonious and easily maintainable design system.
