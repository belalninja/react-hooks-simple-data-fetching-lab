// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");
  useEffect(
    () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((r) => setImage(r)),
    []
  );

  return image ? (
    <img src={image.message} alt="A Random Dog" />
  ) : (
    <p>Loading...</p>
  );
}

export default App;
