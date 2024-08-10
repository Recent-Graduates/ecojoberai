import { toast } from "react-toastify";
import { Button, Collapse, Form, Input, Select, Switch } from "antd";
import { useForm } from "antd/lib/form/Form";
const { Option } = Select;
import zones from "../../mockdata/Zones.json";
import axios from "axios";
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
	const [form] = useForm();

	const onFinish = async (values) => {
		const requestBody = {
			urgency: values.urgency,
			originatingZone: values.zone,
			creationTime: new Date().toISOString(),
			deadline: values.deadline + "T00:00:00.000",
			scheduledTime: new Date().toISOString(),
			kind: values.kind,
			distributable: values.distributable,
		};
		console.log("Received values of form: ", values);
		try {
			const response = await axios.post(
				"https://ecojoberai-backend-adxywvifka-el.a.run.app/api/v1/jobs/",
				requestBody
			);
			toast.success(`Job ID ${response.data.jobId} successfully created`);
			form.resetFields();
		} catch (error) {
			toast.error("Failed to create job");
			console.error("There was an error creating the job", error);
		}
	};

	const onReset = () => {
		form.resetFields();
	};

	const jobForm = (
		<>
			<Form
			form={form}
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
						{Object.keys(zones).map((key) => (
							<Option key={key} value={key}>
								{zones[key].zoneName}
							</Option>
						))}
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
					<Button danger onClick={onReset} style={{ marginLeft: "10px" }}>
					Reset
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
