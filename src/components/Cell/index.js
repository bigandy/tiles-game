const Cell = ({ location, handleClick, activeCell }) => {
  const cellClassName = activeCell ? "cell cell--active" : "cell";

  return (
    <div className={cellClassName} onClick={() => handleClick(location)}>
      {location + 1}
    </div>
  );
};

export default Cell;
