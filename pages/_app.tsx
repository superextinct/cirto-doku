import "../styles/index.scss";
import "prismjs/themes/prism-tomorrow.css";
import "react-h5-audio-player/lib/styles.css";
import React, { useEffect } from "react";
import sal from "sal.js";

// export const useIntersect = ({ root = null, rootMargin, threshold = 0}) => {
//   const [entry, updateEntry] = React.useState({});
//   const [node, setNode] = React.useState(null);

//   const observer = React.useRef(null);

//   React.useEffect(
//     () => {
//       if (observer.current) observer.current.disconnect();

//       observer.current = new window.IntersectionObserver(
//         ([entry]) => updateEntry(entry),
//         {
//           root,
//           rootMargin,
//           threshold
//         }
//       );

//       const { current: currentObserver} = observer;

//       if (node) currentObserver.observe(node);

//       return () => currentObserver.disconnect();
//     },
//     [node, root, rootMargin, threshold]
//   );

//   return [setNode, entry];
// };



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