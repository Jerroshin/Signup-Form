import React from "react";
import fail from "./lotti/animation_ln5mcx5p.json";
import { Player } from "@lottiefiles/react-lottie-player";
import "./form.scss";
function Fail() {
  return (
    <section>
      <Player
        autoplay
        loop
        src={fail}
        style={{ height: "60px", width: "60px" }}
      >
        <h1 className="Fail">Passwords do not match</h1>
      </Player>
    </section>
  );
}

export default Fail;
