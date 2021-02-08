import React from 'react';
import axios from 'axios';
import { Button } from 'antd';

import Articles from '../components/Article';


const listData = [];
for (let i = 0; i < 23; i++) {
	listData.push({
	href: 'https://ant.design',
	title: `ant design part ${i}`,
	avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
	content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	});
}

class ArticleList extends React.Component {
	state = {
		articles: []
	}

	componentDidMount() {
		axios.get('http://localhost:8080/api/')
			.then(res => {
				this.setState({
					articles: res.data
				})
			});
	}

	render() {
		return (
			<div>
				 <Button type="primary" size={ 'large' } href={`/$article`}>
					Create
				</Button>
				<Articles data = {this.state.articles}/>
			</div>
			
		);
	}
}

export default ArticleList;