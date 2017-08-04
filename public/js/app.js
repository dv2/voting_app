class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        Hello from React Component!.
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
