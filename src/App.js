import "antd/dist/antd.css";
import "./App.css";

import { Button, Form, Input, Modal, Row, Space, Upload } from "antd";
import React, { useEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ProfileCard } from "./ProfileCard";
import { UploadOutlined } from "@ant-design/icons";
import avatar from "./img/avatar.jpg";

const formItemLayout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};

const formTailLayout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18, offset: 6 },
};

function Profile() {
	this.name = "";
	this.avatar = "";
	this.description = "";
}

function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [profile, setProfile] = useState({
		name: "",
		avatar: "",
		description: "",
	});

	const showModal = () => {
		setIsModalVisible(true);
	};

	const onFinish = (values) => {
		values.avatar = avatar;
		// Pass profile data to children component
		setProfile(values);
		setIsModalVisible(false);
	};

	const fetchDescription = (event, editor) => editor.getData();

	useEffect(() => {
		console.log("fetchProfileFromApi: No data exist at first");
	}, []);

	return (
		<Space direction="vertical">
			<Row justify="center" align="middle">
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
			<Row justify="center">
				<ProfileCard profile={profile}></ProfileCard>
			</Row>
		</Space>
	);
}

export default App;
