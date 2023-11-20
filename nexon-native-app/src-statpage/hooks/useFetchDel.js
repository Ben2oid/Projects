import { useEffect } from "react";

export default function useFetchDel(numToDel, myId) {
  console.log(numToDel);
  let responseMessage;
  const delData = async () => {
    try {
      const res = await fetch(
        `https://script.google.com/macros/s/${myId}/exec`,
        {
          method: "POST",
          body: JSON.stringify(numToDel),
        }
      );
      responseMessage = await res.json();
    } catch (err) {
      console.log("Error", err);
    } finally {
      console.log(responseMessage);
    }
  };
  delData();
}
