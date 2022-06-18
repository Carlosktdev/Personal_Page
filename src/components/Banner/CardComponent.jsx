const CardComponent = ({ cardName, cardText, cardIcon }) => {
  return (
    <div className="row align-items-center bg-secondary cardItem">
      <div className="col ">
        <img src={cardIcon} alt="" className="icons" />
      </div>
      <div className="col">
        <h4 className="text-primary">{cardName}</h4>
        <h5 className="text-light">{cardText}</h5>
      </div>
      <div className="col">
        <h5 className="text-light">></h5>
      </div>
    </div>
  );
};

export default CardComponent;
