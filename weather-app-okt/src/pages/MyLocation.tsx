import { useEffect, useState } from "react";

export const MyLocation = ({ locationData }) => {
  return (
    <div className="container">
      <div className="bottom">
        <p>last updated: {locationData.data.current.last_updated}</p>
      </div>
    </div>
  );
};
