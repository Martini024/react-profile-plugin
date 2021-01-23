import "antd/dist/antd.css";
import "./App.css";

import { Button, Form, Input, Modal, Row, Upload } from "antd";
import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ProfileCard } from "./ProfileCard";
import { UploadOutlined } from "@ant-design/icons";

const formItemLayout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};

const formTailLayout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18, offset: 6 },
};

function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const onFinish = (values) => {
		values.avatar =
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Favatar-people-person-business-tie-boy-child-brown-hair%2F120516&psig=AOvVaw1RnyKr7h9ZUxff10Lm47bA&ust=1611459023713000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKi__eyOse4CFQAAAAAdAAAAABAE";
		localStorage.setItem("profile", JSON.stringify(values));
		setIsModalVisible(false);
	};

	const fetchDescription = (event, editor) => editor.getData();

	return (
		<>
			<Row justify="center" align="middle" style={{ height: "100%" }}>
				<Button type="primary" onClick={showModal}>
					Create Profile
				</Button>
				<Modal title="Create Profile" visible={isModalVisible} footer={null} width="50%">
					<Form {...formItemLayout} name="profile" onFinish={onFinish}>
						<Form.Item label="Avatar" name="avatar">
							<Upload>
								<Button icon={<UploadOutlined />}>Click to Upload</Button>
							</Upload>
						</Form.Item>
						<Form.Item
							label="Name"
							name="name"
							rules={[{ required: true, message: "Please input your profile name!" }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label="Description"
							name="description"
							rules={[
								{
									required: true,
									message: "Please input your profile description!",
								},
							]}
							getValueFromEvent={fetchDescription}
							valuePropName="data"
							initialValue="<p>Hello from CKEditor 5!</p>"
						>
							<CKEditor editor={ClassicEditor} data="" />
						</Form.Item>
						<Form.Item {...formTailLayout}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</Row>
			<Row>
				<ProfileCard></ProfileCard>
			</Row>
		</>
	);
}

export default App;
