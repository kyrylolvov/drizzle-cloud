export const selectLabel: CSSWithTheme = () => ({
  fontSize: '14px',
  fontWeight: 600,
});

export const select: CSSWithTheme = () => ({
  '.react-select__control': {
    marginTop: '4px',
    height: '54px',
    width: '100%',
    fontFamily: 'Inter',
    fontSize: '14px',
    borderRadius: '4px',
    outline: 'none !important',
    border: '1px solid var(--secondary-text-color)',
    background: 'var(--main-bg-color)',
    color: 'var(--input-text-color)',
    boxSizing: 'border-box',

    '.react-select__single-value': {
      color: 'var(--input-text-color)',
    },

    '.react-select__input-container': {
      color: 'var(--input-text-color)',
    },

    '.react-select__indicators': {
      '.react-select__indicator-separator': {
        display: 'none',
      },

      '.react-select__dropdown-indicator': {
        color: 'var(--secondary-text-color)',
      },
    },

    ':hover': {
      border: '1px solid var(--secondary-text-color)',
    },
  },

  '.react-select__control--is-focused': {
    border: 'none !important',
    boxShadow: '0 0 0 1px var(--cta-button-color)',
  },

  '.react-select__menu': {
    background: 'var(--main-bg-color)',

    '.react-select__option--is-selected': {
      background: 'var(--secondary-bg-color)',
    },

    '.react-select__option--is-focused': {
      background: 'var(--secondary-bg-color)',
    },

    '.react-select__option': {
      cursor: 'pointer',

      ':not(:first-child)': {
        marginTop: '6px',
      },
    },
  },
});
