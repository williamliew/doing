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

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.isNew ? this.props.addTopic(this.state.topic) : null
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">new topic</label>
                <input type="text" name="topic" id="topic" onChange={this.handleChange} />
                <button type="submit">add</button>
            </form>
        )
    }
}

export default AddTopic;