import { useState } from "react";

type SearchFormProps = {
  searchText: string;
  handleChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm = ({searchText, handleChange}: SearchFormProps) => {

  return (
    <div>
      <input
        type="text"
        placeholder="What are you looking for?"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};
