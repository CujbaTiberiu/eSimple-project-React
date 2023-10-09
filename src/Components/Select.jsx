import React, { useEffect, useState } from "react";
import { useIdContext } from "./IdContext";
import { NativeSelect } from "@mantine/core";

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

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    console.log(selectedId);
    setId(selectedId);
  };

  return (
    <NativeSelect
      w={300}
      px={30}
      py={10}
      radius="md"
      label="Select Item"
      onChange={handleSelectChange}
      value={data.id}
    >
      {data.map((item, index) => (
        <option key={item.id} value={item.id}>
          Item {index + 1}
        </option>
      ))}
    </NativeSelect>
  );
};

export default Select;
