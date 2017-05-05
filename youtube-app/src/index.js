//explicitly connect component to dependencies
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



const API_KEY = "AIzaSyBA8ALcsr_F2rkV-LoGT2uPtFB0RJLRrcg";

//Create a new component. This component should product some html
//ES6 const - variable will not change
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, videos => { //ES6 arrow syntax
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //ES6 syntax when key & prop same name
    });
  }

  render(){
    const videoSearch = _.debounce(term=> {this.videoSearch(term)}, 500)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
//Once created, we explicitly place it into React's DOM
ReactDOM.render(<App />, document.querySelector('.container'));
