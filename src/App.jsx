import { useState } from 'react';
import Button from './components/Button/Button';
import Heading from './components/Texts/Heading';

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

      {/* main heading */}
      <div className="text-center mt-20">
        <Heading type="main-heading">
          A simple solution to complex tasks is coming soon
        </Heading>
      </div>

      {/* Heading on form page */}
      <div className="text-center mt-20">
        <Heading type="main-heading">Work smarter. Save time.</Heading>
      </div>

      <div className="text-center mt-10">
        <Heading type="price-label" styles="text-primary-dark">
          Free
        </Heading>
      </div>

      <div className="text-center mt-10">
        <Heading type="secondary-heading" styles="text-primary-dark">
          Basic
        </Heading>
      </div>
    </div>
  );
}

export default App;
