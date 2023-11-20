import React, { useContext, useEffect, useRef, useState } from "react";

export default function useFetch(updatedShelfData, setLoading, setData, myId) {
  const data = useState(null);
  const error = useRef(null);

  useEffect(() => {
    const postAndFetchData = async () => {
      try {
        const res = await fetch(
          `https://script.google.com/macros/s/${myId}/exec`,
          {
            method: "POST",
            body: JSON.stringify(updatedShelfData),
          }
        );
        const dat = await res.json();
        setData(dat);
      } catch (err) {
        error.current = (err, "Could not post nor fetch data");
      } finally {
        setLoading(false);
      }
    };
    postAndFetchData();
  }, []);

  return { error: error.current };
}
