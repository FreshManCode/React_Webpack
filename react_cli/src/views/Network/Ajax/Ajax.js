import axios from 'axios'
import React from 'react'
import style from './Ajax.scss'

const URL ="https://api.github.com/users/octocat/gists"
class Ajax extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            lastGistUrl: ''
        }
    }

    componentDidMount() {
        axios.get(URL).then(res=>{
            var lastGist = res.data[0];
            this.setState({
                username:lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            })
        }).catch(error=>{

        })
    }

    render() {
        return (
            <div>
               {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>
            </div>
        )
    }

}

export default Ajax
