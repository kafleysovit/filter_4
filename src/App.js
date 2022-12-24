import "./App.css";
import { useState } from "react";
import List from "./List";

function App() {
  const [alldata, setalldata] = useState([]);
  const [focus, setfocus] = useState(true);
  const [data, setdata] = useState("");
  const [searchdata, setsearchdata] = useState("");
  const hadletoggle = () => {
    setfocus(!focus);
    setdata("");
    setsearchdata("");
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const id = alldata.length > 0 ? alldata[alldata.length - 1].id + 1 : 1;
    setalldata([...alldata, { id: id, data: data }]);

    setdata("");
  };
  // const handlesearch = (e) => {
  //   e.preventDefault();
  //   setsearchdata(e.target.value);
  //   // alldata.filter((data) => data.data === searchdata);
  // };
  const handledelete = (id) => {
    setalldata(alldata.filter((data) => data.id !== id));
  };

  return (
    <div className="App">
      <div className="title">
        {focus ? (
          <h2 onClick={hadletoggle}>Add To List</h2>
        ) : (
          <h2 onClick={hadletoggle}>Search List</h2>
        )}
      </div>
      <div className="input">
        {focus ? (
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              value={data}
              placeholder="Add Data..."
              onChange={(event) => setdata(event.target.value)}
              required
            />
            {/* <button>submit</button> */}
          </form>
        ) : (
          <>
            <input
              type="text"
              value={searchdata}
              placeholder="Search..."
              // onChange={handlesearch}
              onChange={(event) => setsearchdata(event.target.value)}
            />
            {/* <button>search</button> */}
          </>
        )}
      </div>
      <div className="all-list">
        {alldata
          .filter((val) => {
            if (searchdata === "") {
              return val;
            } else if (
              val.data.toLowerCase().includes(searchdata.toLowerCase())
            ) {
              return val;
            }
          })
          .map((data) => (
            <List data={data} key={data.id} handledelete={handledelete} />
          ))}
      </div>
    </div>
  );
}

export default App;
