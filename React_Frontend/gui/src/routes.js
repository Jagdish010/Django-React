import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticalListView';
import ArticleDetail from './containers/ArticalDetailView';
import CustomForm from './containers/FormView';


const BaseRouter = () => {
	return(<div>
		<Route exact path='/' component={ ArticleList } />
		<Route exact path='/article/:articleID' component={ ArticleDetail } />
		<Route exact path='/$article'
		// component={() => <CustomForm requestType={ 'Post' } />}
		render={(props) => (
			<CustomForm {...props} requestType={ 'post' } />
		  )} />
		<Route exact path='/$article/:articleID'
		render={(props) => (
			<CustomForm {...props} requestType={ 'put' } state={ {1:1, 2:2} }/>
		  )} />
	</div>);
}

export default BaseRouter;