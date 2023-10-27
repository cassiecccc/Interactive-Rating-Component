export function ThankYou({ rating }) {
  return (
    <div className="thank-you">
      <img
        src="/assets/icons/illustration-thank-you.svg"
        alt="thank you illustration"
      />
      <p className="rating-p">
        You selected <span>{rating}</span> out of 5
      </p>
      <h2>Thank you!</h2>
      <p className="thank-you-p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
