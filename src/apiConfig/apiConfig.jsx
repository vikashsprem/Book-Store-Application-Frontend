import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../main";

function apiConfig(API_URL) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL + API_URL);
        // console.log("response", response);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [API_URL]);


  return { books };
}

export default apiConfig;