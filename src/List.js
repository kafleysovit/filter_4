import "./list.css";
export default function List({ data, handledelete }) {
  return (
    <div className="list">
      <h3> {data.data} </h3>
      <button onClick={() => handledelete(data.id)}>Delete</button>
    </div>
  );
}
