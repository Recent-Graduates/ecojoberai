import { toast } from "react-toastify";
import { Button, Collapse, Form, Input, Select, Switch } from "antd";
const { Option } = Select;
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 8,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};
const commonRules = {
	rules: [
		{
			required: true,
		},
	],
};
export default function NewJob() {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
		toast.success(`Job added: ${JSON.stringify(values)}`);
	};
	const jobForm = (
		<>
			<Form
				name="addjob"
				{...formItemLayout}
				onFinish={onFinish}
				initialValues={{ distributable: false }}
			>
				<Form.Item label="Urgency" name="urgency" {...commonRules}>
					<Select placeholder="Please select an Urgency">
						<Option value="low">Low</Option>
						<Option value="medium">Medium</Option>
						<Option value="high">High</Option>
					</Select>
				</Form.Item>
				<Form.Item label="Zone" name="zone" {...commonRules}>
					<Select placeholder="Please select a Zone">
						<Option value="a">Zone A</Option>
						<Option value="b">Zone B</Option>
					</Select>
				</Form.Item>
				<Form.Item label="Deadline" name="deadline" {...commonRules}>
					<Input type="date" />
				</Form.Item>
				<Form.Item label="Kind" name="kind" {...commonRules}>
					<Select placeholder="Please select a Job Kind">
						<Option value="print">Print</Option>
					</Select>
				</Form.Item>
				<Form.Item name="distributable" label="Distributable" {...commonRules}>
					<Switch />
				</Form.Item>
				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">
						Add Job
					</Button>
				</Form.Item>
			</Form>
		</>
	);
	return (
		<>
			<Collapse items={[{ key: "1", label: "Add a new job", children: jobForm }]} />
		</>
	);
}
