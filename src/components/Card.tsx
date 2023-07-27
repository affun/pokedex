interface IPokemon {
  pname: string
  pid: number
  pimg: string
}

const Card = (props: IPokemon) => {
  return (
    <div className="card" id={`${props.pid}`}>
      <img src={props.pimg} alt="" />
      <div className="pokename small-text">{props.pname}</div>
    </div>
  );
};

export default Card;
