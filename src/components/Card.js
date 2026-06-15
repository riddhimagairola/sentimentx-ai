function Card({ title = "Untitled", description = "No description available" }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "10px",
      borderRadius: "8px",
      width: "250px"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}