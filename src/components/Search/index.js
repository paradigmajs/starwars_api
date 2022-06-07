import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../../redux/actions/useActions";
import { uniqueKey } from "../../assets/utils";
import logo_img from "../../assets/images/logo.png";
import { useQuery } from "../../hooks";
import styles from "../../assets/styles/form/Form.module.css";
export default function Search({ top }) {
  const {
    _search,
    top_search,
    logo,
    form,
    input,
    ddown,
    btn,
    items,
    top_logo,
    top_form,
  } = styles;
  const ref = useRef(null);
  const { categories } = useSelector((state) => state.star_wars);
  const navigate = useNavigate();
  const { category } = useParams();
  const { get_data_by_search } = useActions();
  const query = useQuery();
  const [data, setData] = useState({
    category: category || categories[0] || "people",
    query: query ? query.get("q") : "",
  });

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const search = (event) => {
    event.preventDefault();
    get_data_by_search(data.category, data.query);
    navigate(`/search/${data.category}?q=${data.query}`);
  };
  const changeData = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  return (
    <div className={top ? top_search : _search}>
      <Link to="/" className={top ? top_logo : logo}>
        <h1>SWAPI</h1>
      </Link>
      <form className={top ? top_form : form} onSubmit={search}>
        <input
          ref={ref}
          placeholder="enter a search"
          className={input}
          value={data.query}
          onChange={changeData("query")}
          type="text"
        />
        <select
          className={ddown}
          value={data.category}
          onChange={changeData("category")}
        >
          {categories?.map((category) => (
            <option className={items} key={uniqueKey()}>
              {category}
            </option>
          ))}
        </select>
        <button className={btn}>Search</button>
      </form>
    </div>
  );
}
