export const button: CSSWithTheme = ({ iconPosition, secondary }: { iconPosition: string; secondary: boolean }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: secondary ? '#FFFFFF' : 'var(--cta-button-color)',
  color: '#010101',
  fontWeight: 600,

  borderRadius: '8px',
  border: secondary ? '2px solid #DDE2E9' : 'none',

  cursor: 'pointer',
  textDecoration: 'none',

  svg: {
    width: '24px',
    height: '24px',
    margin: iconPosition === 'before' ? '0 16px 0 0' : '0 0 0 16px',
  },

  ':hover': {
    background: secondary ? '#FFFFFF' : 'var(--cta-button-color)',
  },

  ':disabled': {
    background: '#22262D',
    color: '#666671',
  },
});
