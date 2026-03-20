const getStoredBook =()=>{
    const storedBookStR = localStorage.getItem("readList")

    if(storedBookStR) {
        const storedBookData = JSON.parse(storedBookStR);
        return storedBookData;
    }
    else{
        return[];
    }
}

const addToStoredDB = (id) => {

    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert("id already exist")
    }
    else{
        storedBookData.push(id);
        const data =JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
        //console.log(storedBookData)
    }

}
export {addToStoredDB, getStoredBook};