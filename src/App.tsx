import HomePage from "@/pages/HomePage";
import "@styles/styles.css";
import "@styles/fonts.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/vite-react-ts-template">
      <div className="h-full p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
