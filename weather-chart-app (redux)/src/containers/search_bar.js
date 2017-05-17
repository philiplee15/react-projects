import React, {Component} from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'
//understand component level vs redux level stat
class SearchBar extends Component {
  //using constructor function to set initial state
  constructor(props){
    super(props);

    this.state = {term: ''};
    //callback to this we need to bind the contexts
    this.onInputChange = this.onInputChange.bind(this);
  }
  //below is a vanilla Javascript thing not react thing (all handlers come with event)
  onInputChange(event){
      this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    //We need to fetch weather data once form is submitted

  }
  render(){
    return(
      //controlled field, a form field that has a value set by the state of the component
      <form onSubmit ={this.onFormSubmit} className ="input-group">
        <input
          placeholder="Get a five day forecast in selected cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
