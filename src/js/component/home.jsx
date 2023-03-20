import React, { useState, useEffect } from "react";
import { array } from "prop-types";


import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/todolist.css";



const ToDoList = () => {
	const [arrTemp, setArrTemp] = useState([
		{ tarea: "Make the bead", done: false },
		{ tarea: "Wash my hands", done: false },
		{ tarea: "Eat", done: false },
		{ tarea: "Walk the dog", done: false }
	])

	const eliminarTarea = (indice) => {
		setArrTemp(
			arrTemp.filter((item, index) => {
				return index != indice
			})
		)
	}


	useEffect(() => {
		console.log("se reenderizó el componente Home")
	}, [arrTemp])

	return (
		<>
			<div className="container">
				<h1 className="text-center title-todo mt-5">todos</h1>
				<div className="container-todo">
					<div className="container-input fs-4 ps-5">
						<input
							placeholder="What needs to be done?"
							onKeyDown={(e) => { 
								if (e.keyCode == "13") {
									console.log("Presionaste el Enter: ", e.target.value)
									setArrTemp([...arrTemp, { tarea: e.target.value, done: false }])
								}
							}}
						/>
					</div>

					<div className="list-group fs-4">
						{arrTemp && arrTemp.length > 0 ?
							<>{arrTemp.map((item, index) => {
								return <li key={index} className="tasks d-flex justify-content-between ps-5 pe-3 align-items-center">
									{item.tarea} {item.done ? "Realizada" : ""}
									<div
										className="ocultar"
										type="button"
										onClick={() => {
											eliminarTarea(index)
										}}
									>
										<i className="fa-solid fa-x"></i>
									</div>

								</li>



							})}</>
							:
							<><div className="thereAreNotTaks d-flex justify-content-center"><p className="notTasks d-flex justify-content-center mt-3">There are not tasks, add a new task</p></div>

							</>

						}

					</div>
					<h3 className="itemLeft d-flex justify-content-between align-items-center ps-3">{arrTemp.length} item left</h3>
				</div>

				<div className="container-todo-shadow">
					<div className="container-todo-shadow1"></div>
					<div className="container-todo-shadow2"></div>
				</div>
			</div>

		</>
	);
};

export default ToDoList;
