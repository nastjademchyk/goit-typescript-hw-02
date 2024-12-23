import React, { FC, useState, useRef, FormEvent, ChangeEvent } from "react";
import s from "./SearchBar.module.css";
import { MdOutlineImageSearch } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.currentTarget.value);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(query);
    setQuery("");
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <header>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />

      <form onSubmit={handleSubmit} className={s.searchForm} ref={formRef}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.searchInput}
          onChange={handleChange}
        />
        <button type="submit" className={s.btn}>
          <MdOutlineImageSearch size={42} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
