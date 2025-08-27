import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBgVisible(true);
    }, 100);
  }, []);

  return (
    <div
      className={`fixed inset-0 min-h-screen w-screen transition-colors duration-1000 ${bgVisible ? 'bg-black' : 'bg-transparent'}`}
    >
      <Navbar />
      {/* Other sections */}
    </div>
  );
}

export default App;
