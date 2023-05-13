import { useState } from "react";
import { ToDoListType } from "../ToDo";

type ToDoListItemProps = {
  _id: string;
  text: string;
  handleDelete: (id: string) => void;
  handleChangeItem: (id: string, newText: string) => void;
};

export const ToDoListItem = ({
  _id,
  text,
  handleDelete,
  handleChangeItem,
}: ToDoListItemProps) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  const toggleReadOnly = () => setIsReadOnly((prev) => !prev);
  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => handleChangeItem(_id, value);

  return (
    <li>
      <input value={text} onChange={handleChange} disabled={isReadOnly} />
      <button onClick={toggleReadOnly}>
        {isReadOnly ? "Edytuj" : "Zapisz"}
      </button>
      <button onClick={() => handleDelete(_id)} disabled={isReadOnly}>
        Usuń
      </button>
    </li>
  );
};
