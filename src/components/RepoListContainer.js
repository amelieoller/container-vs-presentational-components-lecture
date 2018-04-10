import React, { Component } from 'react';
import RepoList from './RepoList';

class RepoListContainer extends Component {
	constructor() {
		super();

		this.state = {
			repos: [],
			totalVotes: 0
		};
	}

	componentDidMount() {
		fetch('https://api.github.com/search/repositories?q=topic:react')
			.then(res => res.json())
			.then(response => {
				this.setState({
					repos: response.items
				});
			});
	}

	handleUpvote = () => {
		this.setState({
			totalVotes: this.state.totalVotes + 1
		});
	};

	render() {
		return (
			<RepoList
				totalVotes={this.state.totalVotes}
				repos={this.state.repos}
				handleUpvote={this.handleUpvote}
			/>
		);
	}
}

export default RepoListContainer;
