import React from "react";
import anmi from "./lotti/successfully-done.json";
import { Player } from "@lottiefiles/react-lottie-player";
import "./form.scss";
function Success() {
  return (
    <section>
      <Player
        autoplay
        loop
        src={anmi}
        style={{ height: "60px", width: "60px" }}
      >
        <h1 className="Succes">Successful</h1>
      </Player>
    </section>
  );
}

export default Success;
