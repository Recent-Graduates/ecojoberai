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
				<label htmlFor="zone">Zone:</label>
				<select id="zone" name="zone">
					<option value="high">Zone A</option>
					<option value="medium">Zone B</option>
				</select>
				<label htmlFor="deadline">Deadline:</label>
				<input type="date" id="deadline" name="deadline" />
				<label htmlFor="kind">Kind:</label>
				<input type="text" id="kind" name="kind" />
				<label htmlFor="distributable">Distributable:</label>
				<input type="checkbox" id="distributable" name="distributable" />
				<button type="submit">Add Job</button>
			</form>
			<h1>Jobs</h1>
			<table border={1}>
				<thead>
					<tr>
						<th>Job ID</th>
						<th>Urgency</th>
						<th>Originating zone</th>
						<th>Deadline</th>
						<th>Kind</th>
						<th>Distributable</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>High</td>
						<td>Zone A</td>
						<td>2024-06-15</td>
						<td>Print</td>
						<td>No</td>
						<td>Scheduling in progress</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Medium</td>
						<td>Zone A</td>
						<td>2024-06-20</td>
						<td>Print</td>
						<td>No</td>
						<td>Not scheduled</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Low</td>
						<td>Zone B</td>
						<td>2024-06-25</td>
						<td>Print</td>
						<td>No</td>
						<td>Scheduled</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Low</td>
						<td>Zone B</td>
						<td>2024-06-25</td>
						<td>Print</td>
						<td>No</td>
						<td>Completed</td>
					</tr>
				</tbody>
			</table>
			<h1>Machines</h1>
			<table border={1}>
				<thead>
					<tr>
						<th>Machine ID</th>
						<th>Name</th>
						<th>Zone</th>
						<th>Capabilities</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Printer 1</td>
						<td>Zone A</td>
						<td>Print, Scan</td>
						<td>Ready</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Printer 2</td>
						<td>Zone B</td>
						<td>Print, Scan</td>
						<td>Not Ready</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
