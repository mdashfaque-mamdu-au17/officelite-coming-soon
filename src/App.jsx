import { useState } from 'react';
import Button from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="text-center mt-10 w-[171px] mx-auto">
        <Button btnType="blue" applyShadow={true}>
          Get Started
        </Button>
      </div>
      <div className="mt-10 w-[171px] mx-auto relative">
        <Button btnType="light-blue">Try for Free</Button>
      </div>

      <div className="mt-10 h-20 text-center bg-primary-blue">
        <div className="w-[171px] mx-auto pt-3">
          <Button btnType="white">Try for Free</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
