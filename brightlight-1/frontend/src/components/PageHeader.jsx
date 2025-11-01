import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="relative bg-gradient-primary text-white py-20 pt-28">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{title}</h1>
        <p className="text-lg md:text-xl text-gray-200 animate-fade-in-delay">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;