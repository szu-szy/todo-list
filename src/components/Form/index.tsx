import { useState } from "react";

type FormProps = {
  addItem: (text: string) => void;
};

export const Form = ({ addItem }: FormProps) => {
  const [text, setText] = useState("");

  const handleText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setText(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length < 3) alert("za krotki tekst");
    else addItem(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newItemInput">
        Nowy task
        <input
          id="newItemInput"
          type="text"
          placeholder="type what you need to do"
          value={text}
          onChange={handleText}
          required
        />
      </label>
      <button type="submit">Dodaj</button>
    </form>
  );
};
