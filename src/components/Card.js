function Card(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "10px",
      borderRadius: "8px",
      width: "250px"
    }}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;