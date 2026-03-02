import React from "react";
import Motion from "./Motion";

export default function Reviews() {
  return (
    <section className="reviewsWrap" id="reviews" aria-label="Client Reviews">
      <div className="reviewsBg" aria-hidden="true" />
      <div className="reviewsOverlay" aria-hidden="true" />

      <div className="container">
        <div className="reviewsGrid">
          {/* Review 1 */}
          <Motion>
            <article className="reviewsCard" aria-label="Client testimonial">
              <span className="reviewsQuoteLeft" aria-hidden="true">“</span>

              <p className="reviewsText">
                <strong>TCIEXPRESS</strong> always delivers on time.
                <br />
                Our trusted logistics partner for years!
              </p>

              <p className="reviewsAuthor">
                — <span>Rahul Mehta</span>, Operations Manager
              </p>

              <span className="reviewsQuoteRight" aria-hidden="true">”</span>

              <span className="reviewsTail" aria-hidden="true"></span>
            </article>
          </Motion>

          {/* Review 2 */}
          <Motion delay={0.1}>
            <article className="reviewsCard" aria-label="Client testimonial">
              <span className="reviewsQuoteLeft" aria-hidden="true">“</span>

              <p className="reviewsText">
                <strong>TCIEXPRESS</strong> always delivers on time.
                <br />
                Our trusted logistics partner for years!
              </p>

              <p className="reviewsAuthor">
                — <span>Rahul Mehta</span>, Operations Manager
              </p>

              <span className="reviewsQuoteRight" aria-hidden="true">”</span>

              <span className="reviewsTail" aria-hidden="true"></span>
            </article>
          </Motion>

          {/* If you later enable logos card, wrap it too */}
          {/* <Motion delay={0.2}>
            <div className="reviewsLogoCard" aria-label="Client logos">
              <div className="reviewsLogoRow">
                <img src="/temp-logo-1.png" alt="Client logo 1" />
                <img src="/temp-logo-2.png" alt="Client logo 2" />
                <img src="/temp-logo-3.png" alt="Client logo 3" />
                <img src="/temp-logo-4.png" alt="Client logo 4" />
              </div>
            </div>
          </Motion> */}
        </div>
      </div>
    </section>
  );
}