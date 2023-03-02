export const container: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

export const button: CSSWithTheme = () => ({
  padding: '10px 24px',
  textTransform: 'none',
  background: '#FFFFFF',
  color: '#010101',
  borderRadius: '8px',
  border: '2px solid #DDE2E9',
  fontWeight: 600,

  '.MuiButton-startIcon': {
    marginRight: '16px',

    svg: {
      width: '30px',
      height: '30px',
    },
  },

  ':hover': {
    background: '#FFFFFF',
  },
});
