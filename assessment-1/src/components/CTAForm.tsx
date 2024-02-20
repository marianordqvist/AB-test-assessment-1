import { useState } from "react";
import { useEffect } from "react";
import skateboardCalm from "../Images/example-image.jpg";
import skateboardAction from "../Images/example-2.jpg";

export default function FormCTA() {
  const [visitor, setVisitor] = useState(0);
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    const randomizeVisitor = Math.random();
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }
  }, []);

  useEffect(() => {
    const sendTrackingData = () => {
      const payload = {
        event: "signed_up " + JSON.stringify(signedUp),
        email: email,
        variant: visitor === 0 ? "control" : "variantB",
      };

      console.log("tracking:" + JSON.stringify(payload));
    };
    if (signedUp) {
      sendTrackingData();
    }
  }, [signedUp, email]);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitForm = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setSignedUp(true);
  };

  return (
    <>
      <div className="dynamic">
        {visitor === 0 ? (
          <div className="control-version" style={{ marginBottom: "1rem" }}>
            <img
              src={skateboardCalm}
              alt="image of guy walking"
              height="300"
              width="450"
            />
          </div>
        ) : (
          <div className="variant-B" style={{ marginBottom: "1rem" }}>
            <img
              src={skateboardAction}
              alt="image of guy walking"
              height="300"
              width="200"
            />
          </div>
        )}
      </div>

      <div className="form-container">
        <h2>Join our gang by signing up for the newsletter!</h2>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="email">
            Your email address:
            <br />
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              onChange={(e) => onChangeEmail(e)}
              required
            />
          </label>
          <button type="submit">Subscribe</button>

          <div className="gdpr-text">
            <p>By subscribing you consent to Shred Haven storing your email:</p>

            <ul>
              <li>
                We will use your email for the purpose of delivering the newsletter
                to your inbox, and will track your email for statistical purposes.
              </li>
              <li>
                Your email address will not be shared with third parties, and you can
                unsubscribe at any time by clicking the unsubscribe link in the
                newsletter.
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}
