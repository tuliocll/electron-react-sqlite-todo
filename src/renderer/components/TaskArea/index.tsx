import TaskItem from '../TaskItem';

import styles from './TaskArea.module.css';

export type TODO = {
  id?: number;
  title: string;
  date: string;
  status: number;
};

export default function TaskArea({
  todos,
  onCheck,
  onDelete,
  onEdit,
}: {
  todos: TODO[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) {
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TaskItem
          checked={todo.status === 1 ? true : false}
          date={todo.date}
          label={todo.title}
          key={todo.id}
          id={todo.id}
          onChange={onCheck}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
