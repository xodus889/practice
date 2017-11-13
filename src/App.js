import React, { Component } from 'react'


class App extends Component {
 
    state = {}

    _callApi = () => {
        return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=download_count')
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    render() {
        
        // const { movie } = this.state;
        return (
            <h1>lkkkk</h1>
       );
    }
}


export default App