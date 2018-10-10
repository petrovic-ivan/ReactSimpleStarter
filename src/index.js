import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD3ADH0_zU07bn3SVDSIupuQHrhhhp6lO8'; // youtube key

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };

        YTSearch({key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
        });
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        });
    }

    render() {
        return (<div>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
             onVideoSelect={selectedVideo => this.setState({selectedVideo})}
             videos={this.state.videos} />
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));