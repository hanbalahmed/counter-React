const Main = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = count;
  });

  const increment = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1 className="counter__number">{count}</h1>

      <div className="counterButtons">
        <button onClick={increment}>Increase Counter</button>
        <button onClick={decreament}>Decrease Counter</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("app"));
