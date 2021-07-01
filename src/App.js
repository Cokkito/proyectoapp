import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout';
import EntryList from './components/entry-list';
import Input from './components/input';
import NavBar from './components/nav-bar';
import TotalBalance from './components/totalBalance';

const { Component } = require('react');

class App extends Component {
  constructor(props) {
     super(props)
     this.state = {
        newEntry: "",
        entries: [],
        totalBalance: 0,
     }
  }

  handleInputChange = (event) => {
    this.setState({
      newEntry: event.target.value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newEntries = this.state.entries;
    newEntries.push(parseInt(this.state.newEntry))
    
    this.setState({
      newEntry: "",
      entries: newEntries,
      totalBalance: newEntries.reduce((accumulator, currentValue) => accumulator + currentValue),
    })
  };

  handleDelete = (id) => {
    let newEntries = this.state.entries;
    newEntries.splice(id, 1);

    let totalBalance = newEntries.length ? newEntries.reduce((accumulator, currentValue) => accumulator + currentValue) : 0;
    this.setState({
      entries: newEntries,
      totalBalance: totalBalance,
    })
  };

  getRowClass = (value) => {
    if (value > 0) return "table-success";
    else if (value < 0) return "table-danger";
    else return "table-secundary";
  };

  getBalanceClass = (value) => {
    if (value > 0) return "alert alert-success";
    else if (value < 0) return "alert alert-danger";
    else return "alert alert-secondary";
  };

  render() {
    return (
      <Layout>
        <NavBar />
        <br/>
        <Input
          handleSubmit = {this.handleSubmit}
          handleInputChange = {this.handleInputChange}
          value = {this.state.newEntry}
        />
        <br/>
        <TotalBalance
          value = {this.state.totalBalance}
          getBalanceClass = {this.getBalanceClass}
        />
        <br/>
        <EntryList
          entries = {this.state.entries}
          handleDelete = {this.handleDelete}
          getRowClass = {this.getRowClass}
        />
      </Layout>
    );
  }
}

export default App;
