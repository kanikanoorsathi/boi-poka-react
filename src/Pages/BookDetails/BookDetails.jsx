import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDB";

import { ToastContainer, toast } from 'react-toastify';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  //console.log(singleBook)
  // console.log(data);
  const { bookName, image, publisher, review } = singleBook;

  const handleMarkRead = (id) => {
    // Store with Id
    // where to store
    // array or collectin
    // if book already exist the show a alart
    // if book exist then push in the collectin or array

    // MySwal.fire({
    //   title: <p>Hello World</p>,
    //   didOpen: () => {
    //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    //     MySwal.showLoading();
    //   },
    // }).then(() => {
    //   return MySwal.fire(<p>Shorthand works too</p>);
    // });


    toast("Wow so easy!")


    addToStoredDB(id);
  };
  return (
    <div className="">
      <div className="card card-side bg-base-200 mx-w-96 shadow-lg p-6 my-24">
        <figure>
          <img
            className="max-w-60 bg-base-300 shadow-lg p-8"
            src={image}
            alt="Book"
          />
        </figure>
        <div className="card-body w-3xl">
          <h2 className="card-title">{bookName}</h2>
          <p>Book By : {publisher}</p>
          <p>{review}</p>

          <ToastContainer />


          <div className="card-actions justify-start gap-6">
            <button
              onClick={() => handleMarkRead(id)}
              className="btn btn-accent"
            >
              Mar as Read
            </button>
            <button className="btn btn-info">Add To WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
