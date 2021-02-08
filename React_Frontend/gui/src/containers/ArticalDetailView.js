import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'antd';


class ArticleDetail extends React.Component {
	state = {
		article: {}
	}

	componentDidMount() {
		const id = this.props.match.params.articleID;
		axios.get(`http://localhost:8080/api/${id}`)
			.then(res => {
				this.setState({
					article: res.data
				})
			});
	}

	render() {
		return (
			<Card title={this.state.article.title}>
				<Link to={{
						pathname: `/$article/${this.state.article.id}/`,
						state: this.state
					}}>
					<Button type="primary" size={ 'large' }>
						Edit
					</Button>
				</Link>
				
				<p>{this.state.article.content}</p>
			</Card>
		);
	}
}

export default ArticleDetail;