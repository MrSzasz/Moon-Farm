
const ContentCard = ({ thisClass="", img }) => {
  return (
    <div className="contentCard">
    <img className={`productN1 ${thisClass}`} src={img}></img>
    <p>x</p>
    <p>20</p>
  </div>
  )
}

export default ContentCard