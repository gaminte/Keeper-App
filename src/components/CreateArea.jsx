import React, { useState } from "react";
import { v4 } from "uuid";

function CreateArea(props) {
	let [note, setNote] = useState({
		id: v4(),
		title: "",
		content: ""
	});

	function createNote(event) {
		let { name, value } = event.target;
		setNote((preValue) => {
			return name === "title"
				? {
						id: v4(),
						title: value,
						content: preValue.content
				  }
				: {
						id: v4(),
						title: preValue.title,
						content: value
				  };
		});
	}

	return (
		<div>
			<form>
				<input
					name="title"
					placeholder="Title"
					onChange={createNote}
					value={note.title}
				/>
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					onChange={createNote}
					value={note.content}
				/>
				<button
					onClick={(event) => {
						event.preventDefault();
						props.shwnote(note);
						setNote({
							title: "",
							content: ""
						});
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;
