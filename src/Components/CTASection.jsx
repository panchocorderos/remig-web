import styled from '@emotion/styled'
import { baseSectionStyling } from './common/baseSectionStyling'
import { PrimaryButtonLG } from './Button'

const Background = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral[900]};
`

const Container = styled.div(({ theme }) => ({
  ...baseSectionStyling,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px'
}))

const Title = styled.h2(({ theme }) => ({
  color: theme.colors.white,
  textAlign: 'center',
  fontSize: theme.fonts.Display.size['sm'],
  fontWeight: theme.fonts.weight.semiBold,
  lineHeight: theme.fonts.Display.lineHeight['sm'],
  letterSpacing: theme.fonts.Display.spacing['sm'],
  margin: 0,
}))

const Description = styled.p(({ theme }) => ({
  color: theme.colors.white,
  textAlign: 'center',
  fontSize: theme.fonts.Body.size['md'],
  fontWeight: theme.fonts.weight.regular,
  lineHeight: theme.fonts.Body.lineHeight['md'],
  letterSpacing: theme.fonts.Body.spacing['md'],
  margin: 0,
}))

export default function CTASection() {
  return (
    <Background>
      <Container>
        <Title>Get Early Access</Title>
        <Description>Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.</Description>
      <PrimaryButtonLG>Get Early Access</PrimaryButtonLG>
      </Container>
    </Background>
  )
}
