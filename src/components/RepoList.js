import React from 'react';

const RepoList = ({ totalVotes, repos, handleUpvote }) => (
	<div>
		<h1>Total Votes: {totalVotes}</h1>
		<ul>
			{repos.map(repo => (
				<li key={repo.id}>
					<a href={repo.html_url} target="_blank">
						{repo.name}
					</a>
					<button onClick={handleUpvote}>+</button>
				</li>
			))}
		</ul>
	</div>
);

export default RepoList;
