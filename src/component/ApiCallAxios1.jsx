import axios from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

const ApiCallAxios1 = () => {
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    const getUsefetch = async () => {
      const data = await api.get("/launches");
      setUserState(data.data);
      console.log("Full API Response:", data);
      data.data.forEach((launch) => {
        console.log("Mission Name:", launch.name);
        console.log("Launch Date:", launch.date_utc);
        console.log("Success Status:", launch.success);
      });
    };

    getUsefetch();
  }, []);

  return (
    <div>
      <h1>This is Fetch API1</h1>
    </div>
  );
};

export default ApiCallAxios1;