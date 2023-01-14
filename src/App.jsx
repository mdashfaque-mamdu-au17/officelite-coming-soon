import { useState } from 'react';
import Button from './components/Button/Button';
import PriceCard from './components/Card/PriceCard';
import TimeCard from './components/Card/TimeCard';
import Heading from './components/Texts/Heading';
import Paragraph from './components/Texts/Paragraph';
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
