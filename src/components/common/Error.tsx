import React from 'react';

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-red-500 text-4xl">{message}</p>
  </div>
);

export default ErrorMessage;
