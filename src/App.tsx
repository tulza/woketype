import HomePage from "@/components/pages/HomePage";
import "@styles/styles.css";
import "@styles/fonts.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router basename="/woketype">
      <div className="h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
