import { Description } from "./components/Description";
import { Form } from "./components/Form";
import { ThankYou } from "./components/ThankYou";

import { useState } from "react";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [rating, setRating] = useState("5");
  return (
    <>
      {isSubmit ? (
        <ThankYou rating={rating} />
      ) : (
        <div className="wrapper">
          <Description />
          <Form setIsSubmit={setIsSubmit} setRating={setRating} />
        </div>
      )}
    </>
  );
}

export default App;
