import styled from '@emotion/styled'
import FeatureItem from './FeatureItem'
import { baseSectionStyling } from './common/baseSectionStyling'

const FeaturesContainer = styled.section(() => ({
  ...baseSectionStyling,
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
}))

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

const ContentTitle = styled.h2(({ theme }) => ({
  color: theme.colors.neutral[900],
  textAlign: 'center',
  fontSize: theme.fonts.Display.size['md'],
  fontWeight: theme.fonts.weight.semiBold,
  lineHeight: theme.fonts.Display.lineHeight['md'],
  letterSpacing: theme.fonts.Display.spacing['md'],
  margin: 0,
}))

const ContentText = styled.p(({ theme }) => ({
  color: theme.colors.neutral[700],
  textAlign: 'center',
  fontSize: theme.fonts.Body.size['md'],
  fontWeight: theme.fonts.weight.regular,
  lineHeight: theme.fonts.Body.lineHeight['md'],
  letterSpacing: theme.fonts.Body.spacing['md'],
  margin: 0,
}))

const VideoContainer = styled.div`
  width: 100%;
  height: 400px;
`
const Video = styled.img`
  width: 100%;
`

const VideoAction = styled.div`
  display: inline-flex;
  padding: 12px 16px 12px 12px;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`

const VideoActionText = styled.p(({ theme }) => ({
  color: theme.colors.neutral[900],
  fontSize: theme.fonts.Body.size['sm'],
  fontWeight: theme.fonts.weight.medium,
  lineHeight: theme.fonts.Body.lineHeight['sm'],
  letterSpacing: theme.fonts.Body.spacing['sm'],
}))

const features = [
  {
    title: 'Event Metrics',
    description:
      'Track your ticket sales, attendees count and more with much ease.',
    image: '/images/event-metrics.svg',
  },
  {
    title: 'Registration & Ticketing',
    description:
      'Manage your Event registrations and ticket sales easier and receive payments instantly.',
    image: '/images/registration-ticketing.svg',
  },
  {
    title: 'Branded Badges',
    description:
      'Create your custom branded badges for your events and get them printed.',
    image: '/images/branded-badges.svg',
  },
  {
    title: 'Organiser App',
    description:
      'Manage your events at the palm of your hand with our Oragniser App.',
    image: '/images/oragniser-app.svg',
  },
  {
    title: 'Attendee Engagement',
    description: 'Engage with your attendees via email, surveys and much more.',
    image: '/images/attendee-engagement.svg',
  },
  {
    title: 'Add to Calendar',
    description:
      'Effortless way to add your events to registered users calendars by 1-click.',
    image: '/images/add-to-calendar.svg',
  },
]

export default function Features() {
  return (
    <FeaturesContainer>
      <ContentContainer>
        <ContentTitle>All-in-one Event Platform</ContentTitle>
        <ContentText>Deliver an exceptional event experience</ContentText>
      </ContentContainer>
      <VideoContainer>
        <Video src='/images/video-thumbnail.png' alt='Video' />
        <VideoAction>
          <img src='/images/play-icon.svg' alt='Play Icon' />
          <VideoActionText>See it in action (2 min)</VideoActionText>
        </VideoAction>
      </VideoContainer>
      {features.map((feature) => (
        <FeatureItem key={feature.title} {...feature} />
      ))}
    </FeaturesContainer>
  )
}
