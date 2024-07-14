import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Inbox from "./components/inbox/Inbox";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inbox />} />
      </Routes>
    </Router>
  )
}

export default App
