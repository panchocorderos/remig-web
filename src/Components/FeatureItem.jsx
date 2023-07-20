import styled from '@emotion/styled';

const FeatureItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Title = styled.h3(({ theme }) => ({
  color: theme.colors.neutral[900],
  fontSize: theme.fonts.Body.size['xl'],
  fontWeight: theme.fonts.weight.semiBold,
  lineHeight: theme.fonts.Body.lineHeight['xl'],
  letterSpacing: theme.fonts.Body.spacing['xl'],
  margin: 0,
}));

const Text = styled.p(({ theme }) => ({
  color: theme.colors.neutral[700],
  fontSize: theme.fonts.Body.size['sm'],
  fontWeight: theme.fonts.weight.regular,
  lineHeight: theme.fonts.Body.lineHeight['sm'],
  letterSpacing: theme.fonts.Body.spacing['sm'],
  margin: 0,
}));

const FeatureItem = ({ title, image, description }) => {
  return (
    <FeatureItemContainer>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Content>
    </FeatureItemContainer>
  );
};

export default FeatureItem;
