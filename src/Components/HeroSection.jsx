import styled from '@emotion/styled'
import { PrimaryButtonLG } from './Button'
import { baseSectionStyling } from './common/baseSectionStyling'

const HeroSectionContainer = styled.section(() => ({
  ...baseSectionStyling,
  display: 'flex',
  flexDirection: 'column',
}))

const HeroSectionTitle = styled.h2(({ theme }) => ({
  fontSize: theme.fonts.Display.size['md'],
  fontWeight: theme.fonts.weight.semiBold,
  lineHeight: theme.fonts.Display.lineHeight['md'],
  margin: '0 0 16px 0',
  color: theme.colors.neutral[900],
}))

const HeroSectionText = styled.p(({ theme }) => ({
  fontSize: theme.fonts.Body.size['md'],
  fontWeight: theme.fonts.weight.regular,
  lineHeight: theme.fonts.Body.lineHeight['md'],
  margin: '0 0 40px 0',
}))

const Mocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroSectionTitle>Event Registration Reimagined</HeroSectionTitle>
      <HeroSectionText>
        Manage your event registrations hassle free and without any dependency
        with the technical team. Isn’t it sounds amazing?
      </HeroSectionText>
      <PrimaryButtonLG>Get Early Access</PrimaryButtonLG>
      <Mocks>
      </Mocks>
    </HeroSectionContainer>
  )
}
