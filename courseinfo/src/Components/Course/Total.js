const Total = (props) => {
  const total = props.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises :{total}</p>
    </div>
  );
};

export default Total;
