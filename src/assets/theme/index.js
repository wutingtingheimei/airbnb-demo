const LightTheme = {
  color: {
    primaryColor: "#484848",
    secondColor: "#222",
    colorTextLink: "#008489",
    lightColor: "#FF385C",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }`,
  },
};

const DarkTheme = {
  color: {},
};

export { DarkTheme, LightTheme };
