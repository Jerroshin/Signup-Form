import React from "react";
import anmi from "./lotti/successfully-done.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
function Success() {
  return (
    <section>
      <Player
        autoplay
        loop
        src={anmi}
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </section>
  );
}

export default Success;
