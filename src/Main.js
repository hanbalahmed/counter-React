const Main = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <h1 className="counter__number">{count}</h1>

      <div className="counterButtons">
        <button onClick={() => setCount(count + 1)}>Increase Counter</button>
        <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("app"));
