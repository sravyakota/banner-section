import './index.css'

const BannerProfile = props => {
  const {card} = props
  const {headerText, description, className} = card
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p>{description}</p>
      <div>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerProfile
