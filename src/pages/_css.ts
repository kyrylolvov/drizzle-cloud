export const centeredPageContainer: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

export const pageContainer: CSSWithTheme = () => ({
  height: '100%',
  width: '50%',
  margin: '0 auto',
  paddingTop: '24px',
});

export const header: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const body: CSSWithTheme = () => ({
  marginTop: '24px',
  display: 'grid',
  gap: '16px',
});
