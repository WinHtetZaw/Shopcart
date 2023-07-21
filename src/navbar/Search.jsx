import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useGetProductsBySkipAndLimitQuery } from "../redux/services/productApi";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isSuccess } = useGetProductsBySkipAndLimitQuery({
    skip: 0,
    limit: 150,
  });
  const navigate = useNavigate();
  // console.log("data in search ---> ", data);

  // * handles
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/products/search",
      search: `?q=${searchQuery}`,
    });
    console.log("search ---> ", searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 md:py-2 md:px-4 rounded-full hidden sm:flex items-center bg-gray-100"
    >
      <input
        value={searchQuery}
        onChange={handleInputChange}
        className=" outline-none bg-transparent hidden md:block"
        type="text"
        placeholder="Search . . . "
      />
      <GoSearch className=" text-xl opacity-70" />
    </form>
  );
};

export default Search;
