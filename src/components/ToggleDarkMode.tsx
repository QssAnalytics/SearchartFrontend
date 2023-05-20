import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
const ToggleDarkMode = () => {
  const [isDark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.removeAttribute("class");
  }, [isDark]);

  const handleToggleBtn = () => setDark(!isDark);

  console.log(isDark);
  return (
    <button
      onClick={handleToggleBtn}
      className="relative p-2.5 flex-center border rounded-lg"
    >
      <Icon
        icon="ph:sun-bold"
        className={`
        transition-all duration-300
        ${isDark ? " scale-0" : "scale-100"} w-5 h-5 text-gray-900`}
      />
      <Icon
        icon="ph:moon-fill"
        className={` transition-all duration-300 absolute ${
          isDark ? "scale-100" : "scale-0"
        } w-5 h-5 text-white`}
      />
    </button>
  );
};

export default ToggleDarkMode;
