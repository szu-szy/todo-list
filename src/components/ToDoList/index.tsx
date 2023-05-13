import { ToDoListType } from "../ToDo";
import { ToDoListItem } from "../ToDoListItem";

type ToDoListProps = {
  list: ToDoListType[];
  searchText: string;
  handleDelete: (id: string) => void;
  handleChangeItem: (id: string, newText: string) => void;
};

export const ToDoList = ({
  list,
  searchText,
  handleDelete,
  handleChangeItem,
}: ToDoListProps) => (
  <ul>
    {list
      .filter(({ text }) => text.includes(searchText))
      .map(({ _id, text }) => (
        <ToDoListItem
          key={_id}
          _id={_id}
          text={text}
          handleDelete={handleDelete}
          handleChangeItem={handleChangeItem}
        />
      ))}
  </ul>
);
