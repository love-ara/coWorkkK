import React, { useState } from 'react';
import { Box, Text, Checkbox, VStack, HStack, IconButton, Input } from "@chakra-ui/react";
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "", completed: false },
        { id: 2, text: "", completed: false },
    ]);
    const [newTaskText, setNewTaskText] = useState("");

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const addTask = () => {
        if (newTaskText.trim() === "") return;
        const newTask = { id: tasks.length + 1, text: newTaskText, completed: false };
        setTasks([...tasks, newTask]);
        setNewTaskText("");
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const editTask = (taskId, newText) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, text: newText } : task
        ));
    };

    return (
        <Box>
            <HStack justifyContent="space-between" mb={4}>
                <Text color="black" fontSize="xl" fontWeight="bold">
                    To-do
                </Text>
                <HStack>
                    <Input
                        placeholder="Add a new task"
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        size="sm"
                        colorScheme="teal"
                    />
                    <IconButton
                        aria-label="Add task"
                        icon={<AddIcon />}
                        onClick={addTask}
                        colorScheme="teal"
                        size="sm"
                    />
                </HStack>
            </HStack>
            <VStack spacing={3} align="stretch">
                {tasks.map((task) => (
                    <HStack key={task.id} justifyContent="space-between">
                        <Checkbox
                            isChecked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            colorScheme="teal"
                            size="lg"
                        >
                            <Text as={task.completed ? "del" : "span"} color="black">
                                {task.text || "New Task"}
                            </Text>
                        </Checkbox>
                        <HStack spacing={2}>
                            <IconButton
                                aria-label="Edit task"
                                icon={<EditIcon />}
                                size="sm"
                                colorScheme="blue"
                                onClick={() => editTask(task.id, prompt("Edit task", task.text))}
                            />
                            <IconButton
                                aria-label="Delete task"
                                icon={<DeleteIcon />}
                                size="sm"
                                colorScheme="red"
                                onClick={() => deleteTask(task.id)}
                            />
                        </HStack>
                    </HStack>
                ))}
            </VStack>
        </Box>
    );
};

export default TodoList;
