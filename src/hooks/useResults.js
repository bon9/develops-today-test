import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = searchTerm => {
    yelp
      // .get(`/search?limit=30&term=${searchTerm}&location='san jose'`)
      .get("/search", {
        params: {
          limit: 30,
          term: searchTerm,
          location: "san jose"
        }
      })
      .then(res => setResults(res.data.businesses))
      .catch(err => setErrorMessage(err.message));
  };

  return [searchApi, results, errorMessage];
};
