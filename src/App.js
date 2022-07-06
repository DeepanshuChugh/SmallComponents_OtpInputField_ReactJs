import { useState } from "react";
import "./App.css";
import Pin from "./components/Pin";

function App() {
  const [otp, setOtp] = useState();
  return (
    <div className="App">
      <form>
        <Pin
          inputLength={5}
          setOtpHandler={(value) => {
            setOtp(value);
          }}
        ></Pin>
        <button className="button-31">Submit</button>
      </form>
      <h1>Your OTP is: {otp}</h1>
    </div>
  );
}

export default App;
