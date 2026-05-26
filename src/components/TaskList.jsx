import TaskItem from "./TaskItem";

export default function TaskList({tasks}) {
    console.log('Рендер list');

    return(
        <div>
            <h2>Список задач:</h2>
            {tasks.map((task, index) => (
                <TaskItem key = {index} text={task} />
            ))}
        </div>
    );
}