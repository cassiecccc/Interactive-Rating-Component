export function Form({ setIsSubmit, setRating }) {
  function handleClick(e) {
    e.preventDefault();
    setIsSubmit(true);
  }
  return (
    <form className="form">
      <div className="radio-wrapper">
        <div className="input-container">
          <input
            type="radio"
            id="1"
            value="1"
            name="rate"
            onChange={(e) => setRating(e.target.value)}
          />
          <label className="label" htmlFor="one">
            1
          </label>
        </div>
        <div className="input-container">
          <input
            type="radio"
            id="2"
            value="2"
            name="rate"
            onChange={(e) => setRating(e.target.value)}
          />
          <label className="label" htmlFor="two">
            2
          </label>
        </div>
        <div className="input-container">
          <input
            type="radio"
            id="3"
            value="3"
            name="rate"
            onChange={(e) => setRating(e.target.value)}
          />
          <label className="label" htmlFor="three">
            3
          </label>
        </div>
        <div className="input-container">
          <input
            type="radio"
            id="4"
            value="4"
            name="rate"
            onChange={(e) => setRating(e.target.value)}
          />
          <label className="label" htmlFor="four">
            4
          </label>
        </div>
        <div className="input-container">
          <input
            type="radio"
            id="5"
            value="5"
            name="rate"
            defaultChecked
            onChange={(e) => setRating(e.target.value)}
          />
          <label className="label" htmlFor="five">
            5
          </label>
        </div>
      </div>
      <input type="submit" onClick={handleClick} />
    </form>
  );
}
