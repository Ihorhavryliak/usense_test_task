import { useState } from "react"
import "./App.css"

function App() {

  const [passwordStrength, setPasswordStrength] = useState("")
  const [color, setColor] = useState("")
  const [lengthField, setLengthField] = useState("")

  const onChangeField = (text: string) => {
    setLengthField(text)
    //check
    const isLetters = /[A-Z]/gi.test(text)
    const isDigits = /[0-9]/g.test(text)
    const isSymbols = /[!@#$%^&*(),.?":{}|<>]/g.test(text)

    if (text.length === 0) {
      setPasswordStrength("")
    } else if (isSymbols && !isDigits && !isLetters) {
      setPasswordStrength("easy")
    } else if (!isSymbols && isDigits && !isLetters) {
      setPasswordStrength("easy")
    } else if (!isSymbols && !isDigits && isLetters) {
      setPasswordStrength("easy")
    } else if (isSymbols && !isDigits && isLetters) {
      setPasswordStrength("medium")
    } else if (!isSymbols && isDigits && isLetters) {
      setPasswordStrength("medium")
    } else if (isSymbols && isDigits && !isLetters) {
      setPasswordStrength("medium")
    } else {
      setPasswordStrength("strong")
    }

    if (text.length === 0) {
      setColor("gray")
    } else if (text.length < 8) {
      setColor("red")
    } else {
      setColor("")
    }
  }

  return (
    <div className="center">
      <div>
        <div className="mb-2">
          <input type="text" onChange={(e) => onChangeField(e.target.value)} />
        </div>
        <div className="mb-2">
          <div
            className={
              color === "gray"
                ? "gray"
                : color === "red"
                ? "red"
                : passwordStrength === "easy"
                ? "red"
                : passwordStrength === "strong"
                ? "green"
                : passwordStrength === "medium"
                ? "yellow"
                : color
            }
          >
            the password is easy
          </div>
          <div
            className={
              color === "gray"
                ? "gray"
                : color === "red"
                ? "red"
                : passwordStrength === "easy"
                ? "gray"
                : passwordStrength === "strong"
                ? "green"
                : passwordStrength === "medium"
                ? "yellow"
                : color
            }
          >
            the password is medium
          </div>
          <div
            className={
              color === "gray"
                ? "gray"
                : color === "red"
                ? "red"
                : passwordStrength === "easy"
                ? "gray"
                : passwordStrength === "strong"
                ? "green"
                : passwordStrength === "medium"
                ? "gray"
                : color
            }
          >
            the password is strong
          </div>
        </div>
        <div>Password is: {passwordStrength}</div>
        <div>Length is: {lengthField.length}</div>
      </div>
    </div>
  )
}

export default App
