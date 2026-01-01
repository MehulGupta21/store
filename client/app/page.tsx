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
    </main>
  );
}
