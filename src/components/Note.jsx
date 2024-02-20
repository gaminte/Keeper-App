import React from "react";

function Note(props) {
	return (
		<div>
			{props.notes.map((item, index) => (
				<div className="note" key={index}>
					<h1>{item.title}</h1>
					<p>{item.content}</p>
					<button
						id={item.id}
						onClick={(event) => {
							props.del(event.currentTarget.id);
						}}
					>
						DELETE
					</button>
				</div>
			))}
		</div>
	);
}

export default Note;
