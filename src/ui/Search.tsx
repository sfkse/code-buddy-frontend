import { useState } from "react";
import Input from "./Input";

function Search() {
  const [search, setSearch] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <Input
      placeholder="Search notes..."
      //   type="text"
      value={search}
      onChange={handleSearch}
    />
  );
}

export default Search;

