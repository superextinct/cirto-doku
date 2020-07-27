import "../styles/index.scss";
import "prismjs/themes/prism.css";
import "react-h5-audio-player/lib/styles.css";
import { init } from "@socialgouv/matomo-next";
import React, { useEffect } from "react";
import sal from "sal.js";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    init({url: "//matomo.niklassonnenschein.de", siteId: 5});
    document.querySelectorAll(".notion-h1").forEach( (heading) => {
      if(heading.querySelectorAll(".mask").length == 0)
        heading.innerHTML = heading.innerHTML.replace(/[A-Za-z0-9\-_.:,!?äöüßÄÖÜ]+/g, `<span class="mask"><span class="text">$&</span></span>`);
    });
    sal();
  });

  return (
    <Component {...pageProps} />
  );
}