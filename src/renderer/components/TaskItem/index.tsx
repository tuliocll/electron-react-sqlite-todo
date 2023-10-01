import { format } from 'date-fns';
import styles from './TaskItem.module.css';

export type TaskItem = {
  label: string;
  date: string;
  id: number;
  checked: boolean;
  onChange: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({
  date,
  label,
  id,
  checked,
  onChange,
  onDelete,
  onEdit,
}: TaskItem) {
  function handleCheck() {
    onChange(id);
  }

  function handleEdit() {
    onEdit(id);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <div
      className={`${styles.container} ${checked ? styles['task-finish'] : ''}`}
      id={`${id}`}
    >
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
      <div className="col">
        <p className={styles['task-label']}>{label}</p>
        <p className={styles['task-date']}>
          {format(new Date(date), "E., dd 'de' MMM")}
        </p>
        <div>
          <button className="button" onClick={handleEdit}>
            Editar
          </button>
          <button className="button secondary" onClick={handleDelete}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
