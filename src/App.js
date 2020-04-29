import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopicsList from './modules/TopicsList';
import AddTopic from './modules/AddTopic';


class App extends Component {
	state = {
		topics: [
			'Family', 'Friends', 'Career'
		]
	}

	addTopic = (topic) => {
		let newTopics = [...this.state.topics, topic];

		this.setState({
			topics: newTopics
		});
	}

	removeTopic = (topicToRemove) => {
		let newTopics = this.state.topics.filter(topic => {
			return topic !== topicToRemove
		})

		this.setState({
			topics: newTopics
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="page-heading">Topics list</h1>
				</header>
				<div className="topics-list">
					<TopicsList list={this.state.topics} removeTopic={this.removeTopic} />
				</div>
				<div className="add-topic">
					<h2>Hello</h2>
					<AddTopic addTopic={this.addTopic} currentTopics={this.state.topics} />
				</div>
			</div>
		);
	}
    
}

export default App;
