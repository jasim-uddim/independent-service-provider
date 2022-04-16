import React, { useEffect, useState } from "react";
import Group from "../Group/Group";
import "./GroupServices.css";

const GroupServices = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetch("group.json")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);
  return (
    <div>
      <h1 className="mt-5 text-center">Groups service</h1>
      <div className="group-service">
        {groups.map((group) => (
          <Group key={group.id} group={group}></Group>
        ))}
      </div>
    </div>
  );
};

export default GroupServices;
