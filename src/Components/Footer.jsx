import styled from '@emotion/styled'

const Background = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral[900]};
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 40px;
`

const Container = styled.div`
  display: flex;
  padding: 0px 20px 40px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`
const LogoDivider = styled.div`
  height: 48px;
  align-self: stretch;
`

const LogoImg = styled.img`
  width: 10%;
  height: auto;
`

const HrDivider = styled.hr`
  width: 100%;
  height: 1px;
  opacity: 0.10000000149011612;
  background: #fff;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Rights = styled.p(({ theme }) => ({
  color: theme.colors.neutral[400],
  fontSize: theme.fonts.Body.size['sm'],
  fontWeight: theme.fonts.weight.medium,
  lineHeight: theme.fonts.Body.lineHeight['sm'],
  letterSpacing: theme.fonts.Body.spacing['sm'],
  margin: '0 0 16px 0',
}))

const Contact = styled.p(({ theme }) => ({
    color: theme.colors.neutral[400],
    fontSize: theme.fonts.Body.size['sm'],
    fontWeight: theme.fonts.weight.medium,
    lineHeight: theme.fonts.Body.lineHeight['sm'],
    letterSpacing: theme.fonts.Body.spacing['sm'],
    margin: 0,
    }))
const Mail = styled.a`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fonts.Body.size['sm']};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    line-height: ${({ theme }) => theme.fonts.Body.lineHeight['sm']};
    letter-spacing: ${({ theme }) => theme.fonts.Body.spacing['sm']};
    margin: 0;
    &:hover {
        color: ${({ theme }) => theme.colors.neutral[400]};
    }
`

export default function Footer() {
  return (
    <Background>
      <Container>
        <LogoDivider>
          <LogoImg src='/images/defaultLogomark.svg' alt='Hubilo Logo' />
        </LogoDivider>
        <HrDivider />
      </Container>
      <ContentContainer>
        <Rights>© RegiM 2022. Made with love by Landify</Rights>
        <Contact>For further details, drop a mail to</Contact>
        <Mail href='mailto:hello@landify.design' >hello@landify.design</Mail>
      </ContentContainer>
    </Background>
  )
}
