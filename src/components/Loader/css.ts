export const container: CSSWithTheme = () => ({
  position: 'absolute',
  zIndex: 100,
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'var(--main-bg-color:)',
  backdropFilter: 'blur(4px)',

  img: {
    width: '150px',
  },
});

export const childrenContainer: CSSWithTheme = () => ({
  height: '100%',
  width: '100%',
});
