export const mapStateToPropsForWeek = state => {
  return {
    standardDay: state.day,
    increment: state.increment
  };
};
