import { useState } from 'react';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Home /> */}
      <SignUp />
    </div>
  );
}

export default App;
