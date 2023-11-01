import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Connect } from "@stacks/connect-react";
import { userSession } from "./components/ConnectWallet.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Connect
         authOptions={{
            appDetails: {
               name: "Stacks Open Gov",
               icon: window.location.origin + "/logo.png",
            },
            redirectTo: "/",
            onFinish: () => {
               window.location.reload();
            },
            userSession,
         }}
      >
         <App />
      </Connect>
   </BrowserRouter>
);
