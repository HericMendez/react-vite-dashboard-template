import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { AuthProvider } from "./contexts/AuthContext";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </Router>
  );
};

export default App;
