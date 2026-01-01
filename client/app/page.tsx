import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-card">
          <h1 className="hero-title">WELCOME</h1>

          <p className="hero-text">
            "Not stitched in bulk. Stitched in meaning."
          </p>
          <p className="hero-text">
            "Not ordinary. Originated."
          </p>

          <Link href="/shop">
            <button className="hero-btn">Start Now</button>
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-left">
            <h2>Our<br />Story</h2>
          </div>

          <div className="about-right">
            <h3>ABOUT US</h3>
            <p>
              At Adhanya Creations, we believe that every outfit should tell a story. We are a boutique dedicated to creating beautiful, high-quality traditional clothing that is tailored specifically for you. Whether you are looking for something classic or a modern twist on ethnic wear, our mission is to make you feel confident and elegant in every piece we design.
            </p>

            <h4>WHAT WORK WE PROVIDE</h4>
            <p>
              We offer a range of personalized fashion services to ensure you get the perfect look for any occasion:            
            </p>
            <ul>
              <li>Custom-made ethnic wear</li>
              <li>Bespoke designing</li>
              <li>Personalized fashion consultation</li>
              <li>Quality craftsmanship</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
