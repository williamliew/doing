import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
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

	componentDidMount() {
		console.log('Component mounted');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Component updated');
		console.log(prevProps, prevState);
	}

	render() {
		return (
			<div className="app">
				<header className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
				</header>
				<div className="app-body">
					<div className="topics-list">
						<h1 className="page-heading">Topics list</h1>
						<TopicsList list={this.state.topics} removeTopic={this.removeTopic} />

						<AddTopic addTopic={this.addTopic} currentTopics={this.state.topics} />
					</div>
					
				</div>
			</div>
		);
	}
    
}

export default App;
