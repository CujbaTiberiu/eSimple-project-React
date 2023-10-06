import React, { useEffect, useState } from "react";
import { useIdContext } from "./IdContext";

const Select = () => {
  const [data, setData] = useState([]);
  const { setId } = useIdContext();

  const fetchData = async () => {
    try {
      const data = await fetch(
        "http://localhost:8080/api/glb"
        //"https://livemote-live.s3.amazonaws.com/up/db/data3d.json"
      );
      const fecthedData = await data.json();
      console.log(fecthedData);
      setData(fecthedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClickId = (id) => {
    console.log(id);
    setId(id);
  };

  return (
    <>
      <h1>Select item</h1>
      <ul>
        {data &&
          data.map((item, index) => (
            <li onClick={() => handleClickId(item.id)} key={item.id}>
              Item n.{index + 1}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Select;
