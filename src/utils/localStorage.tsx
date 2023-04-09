export const authenticate = (user: {}, next: () => void) => {
  try {
    localStorage.setItem("user", JSON.stringify(user) as string);
    next();
  } catch (error) {
    console.log(error);
  }
};
