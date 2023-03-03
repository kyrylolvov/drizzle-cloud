export const modalBackdrop: CSSWithTheme = () => ({
  backdropFilter: 'blur(3px)',
  backgroundColor: 'hsla(0, 0%, 100%, 0.07) !important',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modal: CSSWithTheme = () => ({
  background: 'var(--main-bg-color)',
  borderRadius: '10px',
  width: '600px',
  padding: '32px',
  boxSizing: 'border-box',
});

export const modalHeader: CSSWithTheme = () => ({
  position: 'relative',
  textAlign: 'center',

  svg: {
    width: '24px',
    cursor: 'pointer',
    position: 'absolute',
    top: -20,
    right: 0,

    line: {
      stroke: 'var(--light-text-color) !important',
    },
  },
});

export const modalBody: CSSWithTheme = () => ({
  marginTop: '36px',
});

export const twoColumnContainer: CSSWithTheme = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px',
});
