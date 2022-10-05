import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// High Order Components example
// function App({ saludo, nombre }) {
//   return (
//     <h1>
//       {saludo}, {nombre}!
//     </h1>
//   );
// }
// function withSaludo(WrappedComponent) {
//   return function WrappedComponentWithSaludo(saludo) {
//     return function ComponenteDeVerdad(props) {
//       return (
//         <>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Wrapped component con Saludo</p>
//         </>
//       );
//     };
//   };
// }
// const HOCSaludo = withSaludo(App)("Que onda");

root.render(<App />);
