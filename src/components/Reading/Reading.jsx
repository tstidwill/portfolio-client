import "./Reading.scss";

export default function Reading() {
  return (
    <section className="reading">
      <h2 className="reading__header">LATEST READS</h2>
      <div className="reading__books">
        <section className="reading__card card">
          <h5>Less is More: How Degrowth will Save the World</h5>
          <h5 className="card__author">Jason Hickel</h5>
          <img src="/images/Less_is_more.jpeg" className="card__image" />
        </section>
        <section className="reading__card card">
          <h5>A Future We Can Love</h5>
          <h5 className="card__author">Susan Bauer-Wu</h5>
          <img src="/images/future_we_can_love.jpg" className="card__image" />
        </section>
      </div>
    </section>
  );
}
