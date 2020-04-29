import React, { Component } from "react";

class AddTopic extends Component {
    state =  {
        topic: null,
        isNew: false
    }

    handleChange = (e) => {
        const newTopic = e.target.value;
        const currentTopicsList = this.props.currentTopics

        if(currentTopicsList.includes(newTopic)) {
            this.setState({
                topic: null,
                isNew: false
            });
        }
        else {
            this.setState({
                topic: newTopic,
                isNew: true
            });
        };
        
    }

    invalidEntry = () => {
        this.setState({
            topic: null,
            isNew: false
        });
        console.log('invalid brah');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.isNew) {
            this.props.addTopic(this.state.topic);
            this.setState({
                topic: null,
                isNew: false
            });
            document.getElementById('topic').value = "";
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">new topic</label>
                <input 
                    type="text"
                    name="topic"
                    id="topic"
                    autoComplete="off"
                    onChange={this.handleChange} />
                <button type="submit">add</button>
            </form>
        )
    }
}

export default AddTopic;