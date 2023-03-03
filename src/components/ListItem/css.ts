export const listItem: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '6px',
  border: '1px solid var(--secondary-text-color)',
  padding: '16px 16px',
  transition: 'all 0.1s',
  cursor: 'pointer',

  ':hover': {
    border: '1px solid #494F57',
    background: '#171B21',
  },
});

export const name: CSSWithTheme = () => ({
  color: 'va(--light-text-color)',
});

export const region: CSSWithTheme = () => ({
  color: 'var(--secondary-text-color)',
  marginLeft: '8px',
  paddingLeft: '8px',
  borderLeft: '2px solid var(--secondary-text-color)',
});
