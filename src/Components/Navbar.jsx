import { styled } from 'styled-components'
import { PrimaryButtonMD } from './Button'
import { baseSectionStyling } from './common/baseSectionStyling'

const Container = styled.nav(() => ({
  ...baseSectionStyling,
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'row',
  gap: '48px',
  justifyContent: 'center',
  alignItems: 'center',
}))

const LogoImg = styled.img`
  width: 30%;
  height: auto;
`

export default function Navbar() {
  return (
    <Container>
      <LogoImg src='/images/defaultLogo.svg' alt='logo' />
      <PrimaryButtonMD>Get Early Access</PrimaryButtonMD>
    </Container>
  )
}
