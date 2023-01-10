import { useState } from 'react';
import Button from './components/Button/Button';
import PriceCard from './components/Card/PriceCard';
import TimeCard from './components/Card/TimeCard';
import Heading from './components/Texts/Heading';
import Paragraph from './components/Texts/Paragraph';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      {/* <div className="text-center mt-10 w-[171px] mx-auto">
        <Button btnType="blue" applyShadow={true}>
          Get Started
        </Button>
      </div> */}
      {/* <div className="mt-10 w-[171px] mx-auto relative">
        <Button btnType="light-blue">Try for Free</Button>
      </div> */}

      {/* <div className="mt-10 h-20 text-center bg-primary-blue">
        <div className="w-[171px] mx-auto pt-3">
          <Button btnType="white">Try for Free</Button>
        </div>
      </div> */}

      {/* main heading */}
      {/* <div className="text-center mt-20">
        <Heading type="main-heading">
          A simple solution to complex tasks is coming soon
        </Heading>
      </div> */}

      {/* Heading on form page */}
      {/* <div className="text-center mt-20">
        <Heading type="main-heading">Work smarter. Save time.</Heading>
      </div> */}

      {/* <div className="text-center mt-10">
        <Heading type="price-label" styles="text-primary-dark">
          Free
        </Heading>
      </div> */}

      {/* <div className="text-center mt-10">
        <Heading type="secondary-heading" styles="text-primary-dark">
          Basic
        </Heading>
      </div> */}

      {/* <div className="text-center mt-10">
        <Paragraph type="primary">
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </Paragraph>
      </div> */}

      {/* <div className="text-center mt-10">
        <Paragraph type="secondary" styles="text-primary-dark">
          Up to 5 users for free
        </Paragraph>
      </div> */}

      {/* <div className="text-center mt-10">
        <Paragraph type="secondary" styles="text-primary-gray">
          Basic document collaboration
        </Paragraph>
      </div> */}

      {/* <div className="text-center mt-10 bg-secondary-dark h-60">
        <div className="max-w-[700px] mx-auto pt-10">
          <TimeCard theme={true} time={56} unit="min" />
        </div>
      </div> */}

      {/* <div className="text-center mt-10 bg-[#f2f2f2]">
        <div className="max-w-[700px] mx-auto pt-10">
          <TimeCard theme={false} time={56} unit="min" />
        </div>
      </div> */}

      {/* price cards */}
      {/* <div className="mt-10 bg-black py-10 flex justify-center sm:px-6">
        <PriceCard
          premium={false}
          heading="Basic"
          price="Free"
          billCycle="Up to 5 users for free"
          benefit="Basic document collaboration"
          storage={2}
          support="Great security and support"
        />
      </div> */}

      {/* <div className="mt-10 mb-10 flex justify-center sm:px-6">
        <PriceCard
          premium={true}
          heading="Pro"
          price="$9.99"
          billCycle="Per user, billed monthly"
          benefit="All essential integrations"
          storage={50}
          support="More control and insights"
        />
      </div> */}

      {/* <div>somehting</div> */}
    </div>
  );
}

export default App;
