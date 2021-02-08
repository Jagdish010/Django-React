import React, { Component } from 'react';
// import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, Button,
	// TimePicker, Cascader, Checkbox
	Select, InputNumber } from 'antd';
import moment from 'moment';
import axios from 'axios';

import EditableTagGroup from '../components/Tag';


const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;

class CustomForm extends Component {
	constructor(props) {
		super(props);
		// this.wrapper = React.createRef();
		const id = this.props.match.params.articleID;
		if (id) {
			this.state = this.props.location.state;
			this.state.article.posting_date = moment(this.state.article.posting_date, 'YYYY-MM-DD');
		}
		else {
			this.state = {
				article: {
					title: null,
					content: null,
					posting_date: moment('2020-02-10', 'YYYY-MM-DD'),
					category: null,
					timeline: 0,
					tag: ['Tag 2', 'Tag 3']
				}
			};
		}
		
		this.dateFormat = 'DD-MM-YYYY';
	
		// this.handleChange = this.handleChange.bind(this);
		// this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	// async componentDidMount() {
	// 	const id = this.props.match.params.articleID;
	// 	if (!id) return

	// 	await axios.get(`http://localhost:8080/api/${id}`)
	// 		.then(res => {
	// 			this.setState({
	// 				article: res.data
	// 			});
	// 		});
	// }

	// handleChange = (event) => {
	// 	const target = event.target;
	// 	const value = target.type === 'checkbox' ? target.checked : target.value;
	// 	const name = target.name;
		
	// 	this.setState({
	// 	  [name]: value 
	// 	});

	// 	console.log(this.state);
	// }
	 
	// handleFormSubmit = async (event) => {
	// 	event.preventDefault();
	// 	console.log('Success:', this.state);
	// };

	onFinish = (values, requestType, userID) => {
		this.setState({
			article: values
		});
		console.log(this.state.article, requestType, userID);

		switch(requestType) {
			case 'post':
				return axios.post('http://localhost:8080/api/article/', this.state)
					.then(res => console.log(res))
					.catch(err => console.error(err));
			
			case 'put':
				return axios.post(`http://localhost:8080/api/article/${userID}/`, this.state)
					.then(res => console.log(res))
					.catch(err => console.error(err));
			
		}
	}

	render() {
		return (
			<Form 
			initialValues={this.state.article}
			onFinish={ (values) => this.onFinish(values, this.props.requestType, this.props.match.params.userID) } >
				<FormItem
				label="Title"
				name="title"
				// --------------------
				// display icon based on validatestatus
				hasFeedback
				validateStatus="error"
				// ---------------------
				rules={[
					{
						required: true,
						message: 'Please input your nickname',
					},
				]}
				// ----------------------
				help="Should be combination of numbers & alphabets">
					<Input placeholder="Title"
					// display icon
					// prefix={<SmileOutlined />}
					/>
				</FormItem>

				<FormItem label="Content"
				name="content">
					<TextArea rows={4}/>
				</FormItem>
				
				{/* <FormItem label="Warning" hasFeedback validateStatus="warning">
					<TimePicker style={{ width: '100%' }} />
				</FormItem> */}
		
				{/* <FormItem
				label="Validating"
				hasFeedback
				validateStatus="validating"
				help="The information is being validated..."
				>
					<Cascader options={[{ value: 'xx', label: 'xx' }]} allowClear />
				</FormItem> */}
		
				<FormItem style={{ marginBottom: 0 }}>
					<FormItem
					label="Posting Date"
					name="posting_date"
					hasFeedback
					validateStatus="success">
						<DatePicker style={{ width: '100%' }}
						format={this.dateFormat} />
					</FormItem>
					
					<span style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}> - </span>
		
					<FormItem
					label="Category"
					name="category"
					hasFeedback
					validateStatus="warning">
						<Select 
						// clear field option
						allowClear
						// ---------------------
						// multiple={true}
						>
							<Option value="HL">Head Line</Option>
							<Option value="MP">Middle Page</Option>
							<Option value="A">Advertization</Option>
						</Select>
					</FormItem>
		
				</FormItem>
		
				<FormItem
				label="TimeLine"
				name="timeline"
				hasFeedback
				validateStatus="success">
					<InputNumber style={{ width: '100%' }}
					 />
				</FormItem>
		
				{/* <FormItem label="Warning" hasFeedback validateStatus="warning">
					<Input.Password placeholder="with input password" />
				</FormItem> */}

				<FormItem>
					<EditableTagGroup data={this.state.article.tag} ></EditableTagGroup>
				</FormItem>
		
				<FormItem>
					<Button
					type="primary" 
					htmlType="submit">
						{ this.props.requestType === 'post' ? 'Create' : 'Update' }
					</Button>
				</FormItem>
		
			</Form>
		);
	}
};

export default CustomForm;