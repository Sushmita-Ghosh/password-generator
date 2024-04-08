import iconCopy from "./assets/images/icon-copy.svg";
import "./App.css";

function App() {
  // checkbox data
  const checkboxData = [
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
  ];

  return (
    <div className="min-h-screen flex justify-center items-center text-center w-full p-10">
      <div className="w-4/12">
        {/* Password Generator Text */}

        <h1 className="text-xl text-gray p-4">Password Generator</h1>

        {/* Password placeholder & copy */}

        <div className="p-4 mb-4 flex justify-between items-center bg-dark-gray">
          <div className="text-gray text-2xl">edeuigdgd</div>
          <div className="text-neon-green">
            <img src={iconCopy} alt="copy icon" />
          </div>
        </div>

        <div className="p-4 bg-dark-gray">
          {/* Character length text - value */}
          <div className="flex justify-between items-center">
            <p className="text-almost-white">Character Length</p>
            <p className="text-neon-green text-3xl">0</p>
          </div>

          {/* Character length slider */}

          <div className="py-4">
            <input
              type="range"
              className="appearance-none w-full h-2 cursor-pointer select-none bg-darkest-grey"
              step="0.1"
              value="0"
              min="0"
              max="20"
              onChange={() => {}}
            />
          </div>

          {/* Checkbox -4 */}

          <div className="py-4">
            {checkboxData.map((data) => (
              <div className="text-md flex items-center py-2" key={data.title}>
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={data.state}
                  onChange={() => {}}
                />
                <p className="pl-4 text-almost-white">{data.title}</p>
              </div>
            ))}
          </div>

          {/* strength - value */}

          <div className="flex justify-between items-center bg-darkest-grey p-4">
            <p className="text-gray uppercase font-bold text-lg">Strength</p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-almost-white uppercase text-2xl">Weak</p>
              <div className="bars flex justify-center items-center gap-2">
                <div className="bar border border-almost-white w-2 h-10"></div>
                <div className="bar border border-almost-white w-2 h-10"></div>
                <div className="bar border border-almost-white w-2 h-10"></div>
                <div className="bar border border-almost-white w-2 h-10"></div>
              </div>
            </div>
          </div>

          {/* Password Generator Button */}
          <div className="pt-4">
            <button className="p-4 border font-bold bg-neon-green hover:fill-neon-green text-darkest-grey hover:border-neon-green hover:bg-darkest-grey transition-transform hover:text-neon-green w-full  uppercase">
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
