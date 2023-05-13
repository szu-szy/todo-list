import { useState } from "react";
import { ToDoList } from "../ToDoList";
import { Form } from "../Form";
import { SearchForm } from "../SearchForm";

const mockList: ToDoListType[] = [
  { _id: "123-a", text: "list item 1" },
  { _id: "123-b", text: "list item 2" },
  { _id: "123-c", text: "list item 3" },
];

export type ToDoListType = {
  _id: string;
  text: string;
};

export const ToDo = () => {
  const [toDoList, setToDoList] = useState<ToDoListType[]>(mockList);
  const [searchText, setSearchText] = useState("");

  const generateRandomID = () => `123-${Math.floor(Math.random() * 100000)}`;

  const handleDelete = (id: string) =>
    setToDoList((prev) => prev.filter(({ _id }) => _id !== id));

  const handleChangeItem = (id: string, newText: string) =>
    setToDoList((prev) =>
      prev.map(({ _id, text }) => {
        if (id !== _id) return { _id, text };

        return {
          _id,
          text: newText,
        };
      })
    );

  const handleAddItem = (text: string) => setToDoList(prev => [...prev, {
    _id: generateRandomID(),
    text
  }]);

  const handleChangeSearchText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setSearchText(value);

  return (
    <div>
      <SearchForm searchText={searchText} handleChange={handleChangeSearchText}/>
      <ToDoList
        list={toDoList}
        searchText={searchText}
        handleDelete={handleDelete}
        handleChangeItem={handleChangeItem}
      />
      <Form addItem={handleAddItem}/>
    </div>
  );
};
