import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-green-900">
        Hello world armani t!
      </h1>
    </div>
  );
}

export default App;
