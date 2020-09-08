class Prices extends React.Component {
  state = {
    currency: 'USD',
  };
  render() {
    return (
      <div>
        <select onChange={e =>this.setState({currency : e.target.value})}>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
        </select>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>
            Bitcoin rate for {this.props.bpi[this.state.currency].description}:
            <h4>{this.props.bpi[this.state.currency].code}</h4>
            <strong>{this.props.bpi[this.state.currency].rate}</strong>
          </li>
        </ul>
        <br/>
      </div>
    );
  }
}
export default Prices;
