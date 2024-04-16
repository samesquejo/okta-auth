import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Protected from "./pages/protected";
import Login from "./pages/login";
import { LoginCallback } from "@okta/okta-react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login/callback" element={<LoginCallback />} />
      <Route path="/home" element={<Home />} />
      {/* <SecureRoute path="/protected" element={<Protected />} /> */}
    </Routes>
  );
};

export default App;
