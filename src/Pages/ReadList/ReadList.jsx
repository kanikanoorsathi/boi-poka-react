import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book";



const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const storedBookData = getStoredBook();
    //console.log(storedBookData);
    const ConvertedStoredBook = storedBookData.map((id) => parseInt(id));
    //console.log(ConvertedStoredBook);
    const myReadList = data.filter((book) =>
      ConvertedStoredBook.includes(book.bookId));
    //console.log(myReadList)
    setReadList(myReadList);
  }, [data]);

  const handleSort =(type) =>{
    setSort(type)
    if(type === "pages"){
      const sorteByPages =[...readList].sort((a,b)=>a.totalPages - b.totalPages);
      setReadList(sorteByPages)
    }
    if(type === "ratings"){
      const sorteByrating=[...readList].sort((a,b)=>a.rating - b.rating);
      setReadList(sorteByrating)
    }
  }
  return (
    <div> 
      <div className="my-16">
        <details className="dropdown my-8 flex justify-center items-center">
          <summary className="btn m-1">Sort By : {sort?sort:""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={()=>handleSort("pages")}>pages</a>
            </li>
            <li>
              <a onClick={()=>handleSort("ratings")}>ratings</a>
            </li>
          </ul>
        </details>
        <Tabs>
          <TabList>
            <Tab>Read Book List</Tab>
            <Tab>My Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2>Book i read{readList.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {readList.map((b) => (
                <Book key={b.bookId} singleBook={b}></Book>
              ))}
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
