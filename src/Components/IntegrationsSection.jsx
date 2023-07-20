import styled from '@emotion/styled'
import { baseSectionStyling } from './common/baseSectionStyling'

const Container = styled.section(() => ({
  ...baseSectionStyling,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
}))

const Title = styled.h2(({ theme }) => ({
  color: theme.colors.neutral[900],
  textAlign: 'center',
  fontSize: theme.fonts.Display.size['md'],
  fontWeight: theme.fonts.weight.semiBold,
  lineHeight: theme.fonts.Display.lineHeight['md'],
  letterSpacing: theme.fonts.Display.spacing['md'],
  margin: 0,
}))

const Description = styled.p(({ theme }) => ({
  color: theme.colors.neutral[700],
  textAlign: 'center',
  fontSize: theme.fonts.Body.size['md'],
  fontWeight: theme.fonts.weight.regular,
  lineHeight: theme.fonts.Body.lineHeight['md'],
  letterSpacing: theme.fonts.Body.spacing['md'],
  margin: 0,
}))

const LogoImg = styled.img`
  width: 10%;
  height: auto;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border-radius: 100px;
`

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 32px;
`

const logosArray = [
  'slack.svg',
  'quickbooks.svg',
  'mailchimp.svg',
  'hubspot.svg',
  'zapier.svg',
  'google-analytics.svg',
  'marketo.svg',
]

export default function Section() {
  return (
    <Container>
      <Title>Integrate with your favorite tools</Title>
      <Description>
        Connect RegiM with your most favorite sales and marketing tools
      </Description>
      <LogosWrapper>
        {logosArray.map((logo) => (
          <LogoImg src={`/images/${logo}`} alt={logo} />
        ))}
      </LogosWrapper>
    </Container>
  )
}
