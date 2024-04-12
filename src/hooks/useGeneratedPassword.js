import { useState } from "react";

const useGeneratedPassword = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (length, checkboxData) => {
    let charset = "";
    let generatedPassword = "";

    //   if length is 0
    if (length === 0) {
      setErrorMessage("Please enter a valid length");
      setPassword("");
      return;
    }

    // for filtering out the checked boxes by user
    const selectedOption = checkboxData.filter((item) => item.state);

    //edge cases
    if (selectedOption.length === 0) {
      setErrorMessage("Please select at least one option");
      setPassword("");
      return;
    }

    selectedOption.forEach((item) => {
      switch (item.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
      }
    });
    // suppose a person has selected included upper case and symbols his charset will be
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"

    // for generating password - we will go till length of the password to generate
    // we will generate a random number between 0 and charset length
    // math.floor will make it a whole number
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return {
    password,
    errorMessage,
    generatePassword,
  };
};

export default useGeneratedPassword;
