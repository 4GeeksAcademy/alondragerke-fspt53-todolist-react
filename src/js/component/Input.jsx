import React, { useState } from "react";
import '/workspaces/alondragerke-fspt53-todolist-react/src/styles/index.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { VscTrash } from "react-icons/vsc";

const Input = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);
    const [taskCount, setTaskCount] = useState(0);

    const validate = (value) => {
        if (value !== ' ') {
            setInputValue(value);
        } else {
            alert('The input is not valid')
        }
    }

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setList([...list, inputValue]);
            setTaskCount(taskCount + 1);
            setInputValue('');
        } else {
            alert('Please enter a valid input');
        }
    }

    const removeItem = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
        setTaskCount(taskCount - 1);
    };

    return (
        <Container className="text-center note-style">
            <InputGroup className="mb-3 input-style">
                <Form.Control
                    placeholder="Cultivate greatness: what will bloom on your path to success?"
                    aria-label="Add your task"
                    aria-describedby="basic-addon2"
                    type="text" 
                    onChange={e => validate(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addItem();
                        }
                    }}
                    value={inputValue} 
                />
                {/* <Button variant="outline-secondary" id="button-addon2" onClick={() => addItem()}>
                    Make it happen!
                </Button> */}
            </InputGroup>
            {list.length > 0 ? (
                <ul className="list-unstyled">
                    {list.map((el, i) => (
                        <li key={i} className="task-item">
                            <div className="line">
                                <p>{el}</p>
                            </div>
                            <Button className="bg-white" onClick={() => removeItem(i)}>
                                <VscTrash />
                            </Button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="default-style p-5"> No tasks yet, let's make today amazing! ✨ Add some tasks and conquer your goals! 🔥
                </p>
            )}
            <div className="footer">
                <p className="text-left mt-3">Total tasks left: {taskCount}</p>
            </div>
        </Container>
    );
};

export default Input;