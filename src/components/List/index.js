import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { uniqueKey } from "../../assets/utils";
import { useQuery } from "../../hooks";
import { useSelector } from "react-redux";
import EmptyContent from "../Empty";
import styles from "../../assets/styles/cards/Card.module.css";
import { useActions } from "../../redux/actions/useActions";

export default function List() {
  const { category } = useParams();
  const query = useQuery();
  const { data } = useSelector((state) => state.star_wars);

  const { cards, card, text, label } = styles;

  const { get_data_by_search } = useActions();

  useEffect(() => {
    get_data_by_search(category, query.get("q"));
  }, [category, query.get("q")]);

  return (
    <div className={cards}>
      {data.length > 0 ? (
        data?.map((item) => {
          return (
            <div className={card} key={uniqueKey()}>
              {Object.keys(item).map((key, i) =>
                typeof item[key] === "string" && item[key].length < 20 ? (
                  <h3 key={i} className={text}>
                    {key}: <span className={label}>{item[key]}</span>
                  </h3>
                ) : null
              )}
            </div>
          );
        })
      ) : (
        <EmptyContent />
      )}
    </div>
  );
}
