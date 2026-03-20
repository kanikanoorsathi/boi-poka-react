import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
    const [readList, setReadList]= useState([])
    const data = useLoaderData();
    console.log(data)
    useEffect(()=>{
        const storedBookData = getStoredBook();
        //console.log(storedBookData);
        const ConvertedStoredBook = storedBookData.map(id => parseInt(id));
        //console.log(ConvertedStoredBook);
        const myReadList = data.filter(book => ConvertedStoredBook.includes(book.bookId));
        // console.log(myReadList)
         setReadList (myReadList)
    },[data])
  return (
    <div>
      <div className="my-16">
        <Tabs>
          <TabList>
            <Tab>Read Book List</Tab>
            <Tab>My Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2>Book i read{readList.length}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             {
                readList.map(b=> <Book key={b.bookId} singleBook={b}></Book>)
            }
           </div>
          </TabPanel>
          <TabPanel>
            <h2>My Wish List</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
