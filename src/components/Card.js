function Card(props){
  const {titleText, descText} = props;
    return     <div className = "card">
    <h1 className = "cardt itle">{props.titleText}</h1>
    <p className = "carddes">{props.descText}</p>
    <p className = "cardfooter">{titleText}</p>
    <p className = "cardfooter">{descText}</p>
  </div>
  }
  export default Card;