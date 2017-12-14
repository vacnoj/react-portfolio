import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';


class App extends Component {
  state = {
    currentPage: "Home"
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }
  renderPage = () => {
    switch(this.state.currentPage) {
      case "Home":
        return <Home />;
      case "Projects": 
        return <Projects />;
      case "Contact": 
        return <Contact />;
      default: return <Home />; 
    }
  }
  render() {
    return (
      <div className="App">
        <Header 
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
        />
        <div className="page">{this.renderPage()}</div>
      </div>
    );
  }
}

export default App;
