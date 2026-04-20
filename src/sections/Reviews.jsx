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
                <strong>TCI Express</strong> is known for its innovation, transparency, and on-time delivery. 
                At Tata Hitachi, our vision is to contribute to nation-building, and having a partner like TCI Express supports us in achieving that goal efficiently.
              </p>

              <p className="reviewsAuthor">
                — <span>Mr. Satender</span>, Divisional Manager, TATA Hitachi
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
                Lifelong Meditech Private Limited deals in essential healthcare and hygiene products.
                <strong>TCI Express</strong> consistently ensures prompt, safe, and timely deliveries, and we are highly satisfied with their services.
              </p>

              <p className="reviewsAuthor">
                — <span>Mr. Manoj Bhardwaj</span>, Logistics head, Lifelong Meditech
              </p>

              <span className="reviewsQuoteRight" aria-hidden="true">”</span>
              <span className="reviewsTail" aria-hidden="true"></span>
            </article>
          </Motion>

        </div>
      </div>
    </section>
  );
}