import "../styles/index.scss";
import "prismjs/themes/prism-tomorrow.css";
import "react-h5-audio-player/lib/styles.css";
import React, { useEffect } from "react";
import sal from "sal.js";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    document.querySelectorAll(".notion-h1").forEach( (heading) => {
      if(heading.querySelectorAll(".mask").length == 0)
        heading.innerHTML = heading.innerHTML.replace(/[A-Za-z0-9\-_.,!?äöüßÄÖÜ]+/g, `<span class="mask"><span class="text">$&</span></span>`);
    });
    console.log("effect");
    sal();
  });

  return (
    <Component {...pageProps} />
  );
}