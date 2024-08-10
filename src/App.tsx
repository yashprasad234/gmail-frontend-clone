import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import EmailContainer from "./components/emailContainer/EmailContainer";

function App() {
  const [expanded, isExpanded] = useState(true);

  return (
    <div className="bg-slate-50 h-screen">
      <Navbar isExpanded={isExpanded} expanded={expanded} />
      <div className="flex gap-4 py-2">
        <Menu expanded={expanded} />
        <EmailContainer />
      </div>
    </div>
  );
}

export default App;
