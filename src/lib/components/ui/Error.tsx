import React from 'react';
import { ErrorProps } from '../../../types';

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <p className="text-center text-red-600">{message}</p>;
};

export default Error;
