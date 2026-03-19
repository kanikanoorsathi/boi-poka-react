import React from "react";
import bookimage from "../../assets/book.ico";

const Banner = () => {
  return (
    <div className="hero bg-base-200 shadow-sm p-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookimage}
          className="w-6/12"
        />
        <div>
          <h1 className="text-5xl font-bold py-6">Books to freshen up your bookshelf</h1>
          <button className='btn btn-success'>View The List</button>
        </div>
      </div>
    </div>
    // <div className='hero bg-base-200 min-h-screen '>
    //     <div className='hero-content flex-col lg:flex-row-reverse'>
    //         <img className='max-w-sm rounded-lg shadow-2xl' src={bookimage} alt="" />
    //     </div>
    //     <h1 className='font-bold text-4xl text-black mb-6'>Books to freshen up your bookshelf</h1>
    //     <button className='btn btn-success'>View The List</button>
    // </div>
  );
};

export default Banner;
