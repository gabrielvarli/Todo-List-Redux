import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../redux/todoSlice";

export const ToDoList = () => {
    const dispatch = useDispatch(); // Få tillgång till dispatch-funktionen
    const todos = useSelector((state) => state.toDo.todos); // Hämta todos från Redux-tillståndet

    // useState för att hantera inmatning av titel och beskrivning
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // State för att hantera redigering av ToDo
    const [editIndex, setEditIndex] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");

    // Funktion för att hantera tillägg av en ny todo
    const handleAddTodo = () => {
        if (title.trim() && description.trim()) { // Kontrollera att titel och beskrivning inte är tomma
            dispatch(addTodo({
                title: title,
                description: description,
            }));
            setTitle(""); // Rensa title efter tillägg
            setDescription(""); // Rensa description efter tillägg
        }
    };

    // Funktion för att hantera sparande av en redigerad todo
    const handleEditTodo = (index) => {
        dispatch(editTodo({
            index: index,
            title: editTitle,
            description: editDescription,
        }));
        setEditIndex(null); // Avsluta redigering
        setEditTitle(""); // Rensa editTitle
        setEditDescription(""); // Rensa editDescription
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <input
                type="text"
                placeholder="Enter your todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // Använd onChange för att uppdatera title
            />
            <br />
            <input 
                type="text" 
                placeholder='Description'       
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Använd onChange för att uppdatera description
            />
            <br />
            <button onClick={handleAddTodo}>Add Todo</button> {/* Anropa handleAddTodo när knappen klickas */}
            <br />
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        {editIndex === index ? (
                            <>
                                <input 
                                    type="text"
                                    placeholder='Edit Todo Title'
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)} // Hantera titelredigering
                                />
                                <br />  
                                <input 
                                    type="text"
                                    placeholder='Edit Todo Description'
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)} // Hantera beskrivningsredigering
                                />
                                <br />
                                <button onClick={() => handleEditTodo(index)}>Save</button> {/* Anropa handleEditTodo för att spara ändringar */}
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    setEditIndex(index); // Sätt redigeringsindex
                                    setEditTitle(todo.title); // Fyll i redigeringsfältet med aktuell titel
                                    setEditDescription(todo.description); // Fyll i redigeringsfältet med aktuell beskrivning
                                }}
                            >
                                Edit
                            </button>
                        )}
                        <br />
                        <button onClick={() => dispatch(deleteTodo(index))}>Delete</button> {/* Dispatcha deleteTodo för att ta bort todo */}
                    </li>
                ))}
            </ul>      
        </div>
    );
};
