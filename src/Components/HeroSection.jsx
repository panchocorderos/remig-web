import React from 'react'
import styled from '@emotion/styled'

const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const HeroSectionTitle = styled.h2(({ theme }) => ({
  fontSize: theme.fonts.Display.size['md'],
  fontWeight: theme.fonts.weight.semiBold,
  lineHeight: theme.fonts.Display.lineHeight['md'],
  margin: '0 0 16px 0',
}))

const HeroSectionText = styled.p(({ theme }) => ({
  fontSize: theme.fonts.Body.size['md'],
  fontWeight: theme.fonts.weight.regular,
  lineHeight: theme.fonts.Body.lineHeight['md'],
  margin: 0,
}))

export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroSectionTitle>Event Registration Reimagined</HeroSectionTitle>
      <HeroSectionText>
        Manage your event registrations hassle free and without any dependency
        with the technical team. Isn’t it sounds amazing?
      </HeroSectionText>
    </HeroSectionContainer>
  )
}
