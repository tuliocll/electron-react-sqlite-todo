import { useState } from 'react';
import styles from './Modal.module.css';
import { TODO } from '../TaskArea';
export type Modal = {
  initialData: TODO | undefined;
  onClose: () => void;
  onSave: (item: TODO) => void;
};

export default function Modal({ onClose, initialData, onSave }: Modal) {
  const [title, setTitle] = useState(initialData?.title || '');

  function handleOnSave() {
    if (title === '') {
      alert('Invalid title');
      return;
    }

    onSave({
      title,
      date: initialData?.date || new Date().toJSON(),
      status: initialData?.status || 0,
      id: initialData?.id,
    });
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>New task</h2>
        <div className={styles.formGroup}>
          <label>Title</label>
          <input value={title} onChange={(el) => setTitle(el.target.value)} />
        </div>
        <button className="button" onClick={handleOnSave}>
          Save
        </button>
        <button className="button secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
