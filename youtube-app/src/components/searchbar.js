//need react to use JSX
//Look into below syntax
import React, { Component } from 'react';
//creating component w/ a class (Functional Component)
// const SearchBar = () => {
//   return <input />;
// };

//React Componenet w/ ES6 Class Declarations
//Every react component that is class based must
//have a render method
class SearchBar extends Component{
  //initialize state in a class based component
  //first and only function called instantly when instance is created
    constructor(props){
      super(props);

      this.state = { term: '' };
    }

    render(){
      //wrap real JS in JSX/react with curly braces
      //onChange react defined property
      return (
        //controlled component has it's value set by state
        <div className="search-bar">
          <input
            value = {this.state.term}
            onChange={event=>this.onInputChange(event.target.value)} />
          </div>
      );
    }

    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
    //event handler
    // onInputChange(event){
    //   console.log(event.target.value);
    // }
}

export default SearchBar;
