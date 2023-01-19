import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="mb-20">
        <h1 className="text-center text-red-900 font-bold">
          Oops something went wrong
        </h1>
      </div>

      <div>
        <ul className="flex flex-col items-center justify-center">
          <li>
            <Link
              to="/"
              className="hover:underline text-primary-black font-bold"
            >
              back to home
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="hover:underline text-primary-black font-bold"
            >
              signup page
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
