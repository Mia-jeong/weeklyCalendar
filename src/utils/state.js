export const mapStateToPropsForWeek = state => {
  return {
    standardDay: state.day,
    increment: state.increment
  };
};

export const mapStateToPropsForSchedule = (state, ownProps) => {
  const { date, start } = ownProps.match.params;
  const schedule = state.scheduleList;

  return {
    schedule: schedule[date][start]
  };
};
