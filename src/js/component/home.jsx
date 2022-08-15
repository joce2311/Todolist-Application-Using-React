import React, { useState} from 'react';

export const TodoList = () => {
	const [list, setlist] = useState([]);
	const [valor, setvalor] = useState();

	const addList = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			
			for(let i = 0; i < e.target.value.length ; i++){
				if(e.target.value[i] != " "){
					setlist([...list, e.target.value]);
					setvalor("");
					break
				

				}
			}
		}
	};
	const DeleteItems = (indexItem) => {
		setlist((prevState) =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};
	return (
		<div className="container text-center">
			<h1 className="container d-flex justify-content-center text-center col-5 bi bi-x-lg">TODOOlist.. (tarea)</h1>
			<div className="container shadow p-1 bg-white rounded col-5 bi bi-x-lg">
				<input
					onChange={(e)=>{ setvalor(e.target.value)}}
					type="text"
					placeholder="Dolor de cabeza :D"
					className="col-8 border none text-center"
					onKeyPress={addList}
					value = {valor}
				/>
			</div>

			<div className="text-center">
				<ul class="list-group">
					{list.map((item, index) => (
						<li 
							class="container list-group-item p-1 col-5 bi bi-x-lg d-flex justify-content-between"
							key={index}>
								{item}
							<button className="btn-close" onClick={() => DeleteItems(index)}>
						
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default TodoList;
