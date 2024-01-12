import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([
    { desc: "haircut", cate: "utilities", val: 200, id: uuid() },
    { desc: "tiffin", cate: "food", val: 150, id: uuid() },
    { desc: "dinner", cate: "food", val: 500, id: uuid() },
    { desc: "bus", cate: "travel", val: 150, id: uuid() },
  ]);

  const [desc, setDesc] = useState("");
  const [val, setVal] = useState("");
  const [cate, setCate] = useState("");

  const getCategory = (e) => {
    setCate(e.target.text);
  };

  const getValues = () => {
    if (desc !== "" && val !== "") {
      setList([...list, { desc: desc, cate: cate, val: val, id: uuid() }]);
      setDesc("");
      setVal("");
    }
  };

  const deleteing = (id) => {
    var lis = list.filter((li) => li.id !== id);
    setList(lis);
  };

  const editing = (id) => {
    var tar = list.find((li) => li.id === id);
    setDesc(() => tar.desc);
    setVal(() => tar.val);
    setCate(() => tar.cate);
    deleteing(tar.id);
    // tar.desc = desc;
    // tar.cate = cate;
    // tar.val = val;
    // tar.id = id;
    // setList([...list, { tar }]);
  };

  return (
    <>
      <div>
        <form action="">
          description:
          <input
            type="text"
            // onKeyUp={description}
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          amount:
          <input
            type="number"
            // onKeyUp={amount}
            value={val}
            onChange={(e) => setVal(() => e.target.value)}
          />
        </form>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            category:
          </button>
          <ul className="dropdown-menu" onClick={getCategory}>
            <li>
              <a className="dropdown-item" href="#">
                food
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                travel
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                utilities
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={getValues}>add</button>

      {list.map((li, index) => {
        return (
          <div key={index}>
            {li.desc} {li.cate} {li.val}
            <button onClick={() => editing(li.id)}>edit</button>
            <button onClick={() => deleteing(li.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
