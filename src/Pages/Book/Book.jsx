// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise)
  //console.log(data);
  //console.log(singleBook);

  const {bookName,author,bookId,image,yearOfPublishing,category,rating,publisher,totalPages,tags} = singleBook;

  
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-lg border p-6">
          <figure className="p-6 bg-gray-100 w-2/3 mx-auto">
            <img className="h-\[166px\] w-4/6" src={image} alt="Book" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center gap-10">
              {tags.map((tag) => (
                <button>{tag}</button>
              ))}
            </div>
            <div className="flex justify-between text-green-600">
              <h5>{author}</h5>
              <h5>{totalPages}</h5>
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p className="font-semibold">Book By : {publisher}</p>
            <div className="`border-t-1` border-dotted"></div>
            <div className="card-actions flex justify-between mt-2">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">
                {rating} <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
