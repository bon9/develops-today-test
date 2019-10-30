import { useState } from "react";

export default (title = "", body = "") => {
  const [titlePost, setTitle] = useState(title);
  const [bodyPost, setBody] = useState(body);

  const handleChange = (e, type) => {
    if (type === "title") {
      setTitle(e.target.value);
    }
    if (type === "body") {
      setBody(e.target.value);
    }
    if (type === "reset") {
      setBody("");
      setTitle("");
    }
  };

  return [titlePost, bodyPost, handleChange];
};
