
const Square = (props) => {
    
  return (
    <div
     onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="square">
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
