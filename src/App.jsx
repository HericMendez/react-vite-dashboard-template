import { BrowserRouter as Router } from "react-router-dom";
import Layouts from "./layouts";
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Layouts />

      </AuthProvider>
    </Router>
  );
};

export default App;
