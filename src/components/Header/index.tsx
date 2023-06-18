import { HeaderContainer, InsideHeaderContainer } from './styles'
import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <InsideHeaderContainer>
        <img src={logoImage} alt="Logo do GitHub Blog" />
      </InsideHeaderContainer>
    </HeaderContainer>
  )
}
