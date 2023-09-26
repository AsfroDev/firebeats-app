export function FeedBox(params) {
  return <FeedCard />;
}

export function FeedCard() {
  return (
    <>
      <div className="Container">
        <div className="Space"></div>

        <h1>Em Alta</h1>
      </div>

      <div className="Container">
        <div
          className="BoxMedia Feedbox"
          style={{ backgroundImage: `url(GSint2.png)` }}
        >
          <h1>Amortecendo</h1>
          <h2>Essa prévia vai mudar o seu dia</h2>
        </div>
      </div>

      <div className="Container">
        <div
          className="BoxMedia Feedbox"
          style={{ backgroundImage: `url(ClBoys.png)` }}
        >
          <h1>CL Boys</h1>
          <h2>Conheça os principais destaques da área</h2>
        </div>
      </div>

      <div className="Container">
        <div className="Space"></div>
        <h1>Desconto Hoje</h1>
      </div>

      <div className="Container">
        <div
          className="BoxMedia Feedbox"
          style={{
            backgroundImage: `url(promotion.png)`,
            backgroundSize: `contain`,
          }}
        >
          <h1>Produção completa 50% off</h1>
          <h2>Aproveite a chance de fazer sua prod</h2>
        </div>
      </div>

      <div className="Container">
        <div
          className="BoxMedia Feedbox"
          style={{
            backgroundColor: `#FFA500`,
            backgroundImage: `url(musicp.png)`,
            backgroundSize: `auto`,
          }}
        >
          <h1>Beats Consolidados</h1>
          <h2>Até 20% off no primeiro pedido</h2>
        </div>
      </div>
    </>
  );
}
