import styled from '@emotion/styled'

const baseStyling = {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  borderRadius: '6px',
}

export const PrimaryButtonMD = styled.button(({ theme }) => ({
  ...baseStyling,
  padding: '10px 16px',
  maxWidth: '145px',
  maxHeight: '40px',
  backgroundColor: theme.colors.primary[600],
  color: theme.colors.white,
  border: 'none',
}))

export const PrimaryButtonLG = styled.button(({ theme }) => ({
  ...baseStyling,
  padding: '12px 16px',
  maxWidth: '161px',
  maxHeight: '48px',
  backgroundColor: theme.colors.primary[600],
  color: theme.colors.white,
  border: 'none',
}))
