export default function Scheduler() {
	return (
		<>
			<h1>Scheduler</h1>
			<h1>Add a job</h1>
			<form>
				<label htmlFor="urgency">Urgency:</label>
				<select id="urgency" name="urgency">
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
				<label htmlFor="deadline">Deadline:</label>
				<input type="date" id="deadline" name="deadline" />
				<label htmlFor="kind">Kind:</label>
				<input type="text" id="kind" name="kind" />
				<button type="submit">Add Job</button>
			</form>
			<h1>Jobs</h1>
			<table border={1}>
				<thead>
					<tr>
						<th>Job ID</th>
						<th>Urgency</th>
						<th>Deadline</th>
						<th>Kind</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>High</td>
						<td>2024-06-15</td>
						<td>Print</td>
						<td>Scheduling in progress</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Medium</td>
						<td>2024-06-20</td>
						<td>Print</td>
						<td>Not scheduled</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Low</td>
						<td>2024-06-25</td>
						<td>Print</td>
						<td>Scheduled</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Low</td>
						<td>2024-06-25</td>
						<td>Print</td>
						<td>Completed</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
