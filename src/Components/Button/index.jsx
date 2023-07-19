import styled from "@emotion/styled"

export const PrimaryButton = styled.button(({ theme })) => ({
  backgroundColor: theme.colors.primary,
  color: theme.colors.white,
  border: "none",
})
