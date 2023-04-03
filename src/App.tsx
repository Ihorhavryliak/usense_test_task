import { useState } from "react";
import "./App.css";
import { Field } from "./Components/Field/Field";
import { Sections } from "./Components/Sections/Sections";
import { PasswordType } from "./Components/PasswordType/PasswordType";
import { FieldLength } from "./Components/FieldLength/FieldLength";

function App() {
  const [passwordStrength, setPasswordStrength] = useState("");
  const [color, setColor] = useState("");
  const [lengthField, setLengthField] = useState("");

  const onChangeField = (text: string) => {
    setLengthField(text);
    //check
    const isLetters = /[A-Z]/gi.test(text);
    const isDigits = /[0-9]/g.test(text);
    const isSymbols = /[!@#$%^&*(),.?":{}|<>]/g.test(text);

    if (text.length === 0) {
      setPasswordStrength("");
    } else if (isSymbols && !isDigits && !isLetters) {
      setPasswordStrength("easy");
    } else if (!isSymbols && isDigits && !isLetters) {
      setPasswordStrength("easy");
    } else if (!isSymbols && !isDigits && isLetters) {
      setPasswordStrength("easy");
    } else if (isSymbols && !isDigits && isLetters) {
      setPasswordStrength("medium");
    } else if (!isSymbols && isDigits && isLetters) {
      setPasswordStrength("medium");
    } else if (isSymbols && isDigits && !isLetters) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("strong");
    }

    if (text.length === 0) {
      setColor("gray");
    } else if (text.length < 8) {
      setColor("red");
    } else {
      setColor("");
    }
  };

  return (
    <div className="center">
      <div>
        <div className="mb-2">
          <Field onChangeField={onChangeField} />
        </div>
        <Sections color={color} passwordStrength={passwordStrength} />
        <PasswordType passwordStrength={passwordStrength} />
        <FieldLength lengthField={lengthField} />
      </div>
    </div>
  );
}

export default App;
