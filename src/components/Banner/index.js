const Banner = ({ title, para }) => {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h2 className="hero__content--heading mb-13">{title}</h2>
          <p className="hero__content--para mb-32">{para}</p>
        </div>
      </section>
    </>
  );
};

export default Banner;
