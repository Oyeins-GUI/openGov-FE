import { ThemeProvider, CssBaseline } from "@mui/material/";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateProposal from "./pages/CreateProposal";
import ViewProposals from "./pages/ViewProposals";
import Treasury from "./pages/Treasury";
import About from "./pages/About";
import { userSession, authenticate } from "./components/ConnectWallet";

function App() {
   const signedIn = userSession.isUserSignedIn();

   return (
      <>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
               <Route
                  path="/"
                  element={signedIn ? <Home /> : <NotSignedIn />}
               />
               <Route
                  path="/create-proposal"
                  element={signedIn ? <CreateProposal /> : <NotSignedIn />}
               />
               <Route
                  path="/treasury"
                  element={signedIn ? <Treasury /> : <NotSignedIn />}
               />
               <Route
                  path="/about"
                  element={signedIn ? <About /> : <NotSignedIn />}
               />
            </Routes>
         </ThemeProvider>
      </>
   );
}

export default App;

function NotSignedIn() {
   return (
      <div
         style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
         <button
            style={{
               paddingInline: "16px",
               paddingBlock: "16px",
               fontWeight: "bold",
               fontSize: "22px",
               borderRadius: "8px",
               cursor: "pointer",
            }}
            onClick={authenticate}
         >
            Connect Hiro/Xverse Wallet To Continue With This App
         </button>
      </div>
   );
}
