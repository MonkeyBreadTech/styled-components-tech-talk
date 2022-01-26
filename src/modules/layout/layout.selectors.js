export const selectTheme = state => {
  console.log('STATE', state);
  return state.layout.theme;
};
