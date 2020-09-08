class Prices extends React.Component {
  state = {
    currency: "USD",
    name: "",
    search: [],
  };
  handleSubmit = async () => {
    const name = this.state.name;
    console.log(name);
    const response =await fetch(`http://localhost:3000/api/users/${name}`);
    const search =await response.json();
    this.setState({ search });
    console.log("if",this.state.search)     
  };
  render() {
    return (
      <div>
        <select onChange={(e) => this.setState({ currency: e.target.value })}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        <br />
        
        <br />
        <br />
        <ul>
          <li>
            Bitcoin rate for {this.props.bpi[this.state.currency].description}:
            <h4>{this.props.bpi[this.state.currency].code}</h4>
            <strong>{this.props.bpi[this.state.currency].rate}</strong>
          </li>
          
        </ul>
        <br />
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <br />
            <h1 style={{'textAlign':'center'}}>Employee Details</h1>
            {this.state.search.map((item) => (
                <div>
                    <ul>
                    <li> ID : {item.Emp_id}<br/>
                    Firstname : {item.Firstname}<br/>
                     Lastname : {item.Lastname}<br/>
                     Email : {item.Email}<br/>
                    Skills : {item.Skills}</li>
                    </ul>
                </div>
              ))}
        <br />
      </div>
    );
  }
}
export default Prices;
