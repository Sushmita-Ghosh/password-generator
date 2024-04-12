import iconCopy from "./assets/images/icon-copy.svg";
import "./App.css";
import { useState } from "react";
import useGeneratedPassword from "./hooks/useGeneratedPassword";
import StrengthBasedOnCheckbox from "./components/StrengthBasedOnCheckbox";
// import Strength from "./components/Strength";

function App() {
  // states - character length & checkbox data
  const [length, setLength] = useState(0);
  const [fill, setFill] = useState(0);

  // to set the text of the copy button
  const [copy, setCopy] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    {
      title: "Include Uppercase Letters",
      state: false,
    },
    {
      title: "Include Lowercase Letters",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include Symbols",
      state: false,
    },
  ]);

  // custom hook
  const { password, errorMessage, generatePassword } = useGeneratedPassword();

  // functions
  // for changing the checkbox state
  const handleCheckBoxChange = (index) => {
    const newCheckboxData = [...checkboxData];
    newCheckboxData[index].state = !newCheckboxData[index].state;
    setCheckboxData(newCheckboxData);
  };

  // to copy the generated password

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);

    // after 1 second, set the copy to false
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  // generate password
  const handleGeneratePassword = () => {
    // first generate password
    generatePassword(length, checkboxData);
  };

  return (
    <div className="h-auto bg-darkest-grey flex justify-center items-center text-center w-full p-10 ">
      <div className="w-full md:w-9/12 lg:w-4/12">
        {/* Password Generator Text */}

        <h1 className="text-2xl text-gray pb-8 font-semibold">
          Password Generator
        </h1>

        {/* Password placeholder & copy */}

        <div className="p-4 mb-4 flex justify-between items-center bg-dark-gray">
          <div
            className={`${
              !password ? "text-gray" : "text-almost-white"
            } text-2xl`}
          >
            {password ? password : "jhdkskdgskgs"}
          </div>
          <div onClick={handleCopy} className="text-neon-green cursor-pointer">
            {copy ? (
              <span className="text-lg">Copied</span>
            ) : (
              <img src={iconCopy} alt="copy icon" />
            )}
          </div>
        </div>

        <div className="p-4 bg-dark-gray">
          {/* Character length text - value */}
          <div className="flex justify-between items-center">
            <p className="text-almost-white">Character Length</p>
            <p className="text-neon-green text-3xl">{length}</p>
          </div>

          {/* Character length slider */}

          <div className="py-4 relative">
            {/* fill bar */}
            <div
              className="absolute top-0 bottom-0 my-auto bg-neon-green h-2 w-full"
              style={{ width: `${fill}%` }}
            />
            {/* range bar */}
            <input
              type="range"
              className="appearance-none w-full h-2 cursor-pointer select-none bg-darkest-grey"
              step="1"
              value={length}
              min="0"
              max="20"
              onChange={(e) => {
                // percentage of the range
                setFill((e.target.value / 20) * 100);
                setLength(e.target.value);
              }}
            />
          </div>

          {/* Checkbox -4 */}

          <div className="py-4">
            {checkboxData.map((data, index) => (
              <div className="text-md flex items-center py-2" key={data.title}>
                <input
                  type="checkbox"
                  className="cursor-pointer relative"
                  checked={data.state}
                  onChange={() => handleCheckBoxChange(index)}
                />
                <p className="pl-4 text-almost-white">{data.title}</p>
              </div>
            ))}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red text-sm pb-2">{errorMessage}</p>
          )}

          {/* strength - value */}

          <div className="flex justify-between items-center bg-darkest-grey p-4">
            <p className="text-gray uppercase font-bold text-lg">Strength</p>
            {/* Strength based on password length */}
            {/* <Strength password={password} /> */}
            {/* Strength based on checkbox data */}
            <StrengthBasedOnCheckbox checkBoxData={checkboxData} />
          </div>

          {/* Password Generator Button */}
          <div className="pt-4">
            <button
              onClick={handleGeneratePassword}
              className="p-4 border font-bold bg-neon-green hover:fill-neon-green text-darkest-grey hover:border-neon-green hover:bg-darkest-grey transition-transform hover:text-neon-green w-full  uppercase"
            >
              Generate
              <svg
                className="ml-2 inline"
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
