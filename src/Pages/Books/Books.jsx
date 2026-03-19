import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    //1st items

    // useEffect(()=>{
    //     fetch("booksData.json").then(res=> res.json())
    //     .then(data =>{
    //         //console.log(data);
    //         setAllBooks(data);
    //     })
    // })

    //2nd items

    const bookPromise =fetch("./booksData.json").then (res => res.json())


    return (
        <div>
            <h1 className='text-3xl text-center p-6'>book pages</h1>
            <Suspense fallback={<span>loading.....</span>}>
                {
                      <Book bookPromise={bookPromise}></Book>
                }
            </Suspense>
        </div>
    );
};

export default Books;