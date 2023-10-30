import { FORMDATA } from "./formData";
import { useState } from "react";

export function Form({ setIsSubmit, setRating }) {
  const [data] = useState(FORMDATA);
  const [radioClicked, setRadioClicked] = useState(null);

  function handleSubmitClick(e) {
    e.preventDefault();
    setIsSubmit(true);
  }

  return (
    <form className="form">
      <div className="radio-wrapper">
        {data.map((d, i) => (
          <div
            className={
              radioClicked === i
                ? "input-container input-container-clicked"
                : "input-container"
            }
            key={d.id}
            onClick={() => setRadioClicked(i)}
          >
            <input
              type={d.type}
              id={d.id}
              value={d.value}
              name={d.name}
              onChange={() => setRating(d.value)}
            />
            <label className="label" htmlFor={d.value}>
              {d.value}
            </label>
          </div>
        ))}
      </div>
      <input type="submit" onClick={handleSubmitClick} />
    </form>
  );
}
