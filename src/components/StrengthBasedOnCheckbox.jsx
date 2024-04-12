/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const StrengthBasedOnCheckbox = ({ checkBoxData }) => {
  const [strength, setStrength] = useState("");
  const [fillBar, setFillBar] = useState(-1);

  const passwordStrengthBackground = [
    { message: "TOO WEAK!", color: "bg-red border-red" },
    { message: "WEAK", color: "bg-orange border-orange" },
    { message: "MEDIUM", color: "bg-yellow border-yellow" },
    { message: "STRONG", color: "bg-neon-green border-neon-green" },
  ];

  const generatePasswordStrength = () => {
    // get the selected options

    const selectedOption = checkBoxData.filter((item) => item.state);
    console.log(selectedOption.length);
    if (selectedOption.length === 0) {
      setStrength("SELECT AT LEAST 1");
      setFillBar(-1);
      return;
    }
    // if  2 options are selected, set the fillbar to "0 1"
    setFillBar(selectedOption.length - 1);

    // set strength tp "WEAK"
    setStrength(passwordStrengthBackground[selectedOption.length - 1].message);
  };

  //whenever the checkbox data changes, run the generatePasswordStrength function

  useEffect(() => {
    generatePasswordStrength();
  }, [checkBoxData]);

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-almost-white uppercase text-2xl">{strength}</p>
      <div className="bars flex justify-center items-center gap-2">
        {fillBar >= 0 &&
          passwordStrengthBackground.map((value, index) => (
            <div
              key={index}
              className={`bar border border-almost-white w-2 h-10  ${
                index <= fillBar
                  ? passwordStrengthBackground[fillBar].color
                  : ""
              }`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default StrengthBasedOnCheckbox;
