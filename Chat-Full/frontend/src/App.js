// Router
import { Routes, Route, useNavigate } from "react-router-dom";

// Components
import Container from "./components/Container/Container";

// Pages
import Home from "./pages/Home";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate("/sign-in")
    }
  }, []);
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Container>
  );
};

export default App;
