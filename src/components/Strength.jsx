/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Strength = ({ password }) => {
  const [strength, setStrength] = useState("");
  const [fillBar, setFillBar] = useState(0);
  // to set background color of the password strength
  const passwordStrengthBackground = {
    "TOO WEAK!": "bg-red border-red",
    WEAK: "bg-orange border-orange",
    MEDIUM: "bg-yellow border-yellow",
    STRONG: "bg-neon-green border-neon-green",
  };

  const generatePasswordStrength = (password) => {
    if (password.length < 4) {
      setStrength("TOO WEAK!");
      setFillBar(0);
    } else if (password.length < 8) {
      setStrength("WEAK");
      setFillBar(1);
    } else if (password.length < 15) {
      setStrength("MEDIUM");
      setFillBar(2);
    } else if (password.length < 20) {
      setStrength("STRONG");
      setFillBar(3);
    }
  };

  useEffect(() => {
    generatePasswordStrength(password);
  }, [password]);

  // generate password strength

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-almost-white uppercase text-2xl">{strength}</p>
      <div className="bars flex justify-center items-center gap-2">
        {Object.keys(passwordStrengthBackground).map((value, index) => (
          <div
            key={index}
            className={`bar border border-almost-white w-2 h-10  ${
              index <= fillBar ? passwordStrengthBackground[strength] : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Strength;
