import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Journey</span>
      </h1>
      <p className={headerStyles.description}>
        Let's explore together!
      </p>
    </div>
  )
}

export default Header
