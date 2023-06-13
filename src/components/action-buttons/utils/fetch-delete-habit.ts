export const fetchDeleteHabit = async (habitId: string) => {
  try {
    await fetch(`http://localhost:3001/habits/${habitId}`, { mode: 'cors', method: 'delete' });
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
};
