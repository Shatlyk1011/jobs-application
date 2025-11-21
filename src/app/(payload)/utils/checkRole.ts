export const checkRole = (allRoles: ("admin" | "author" | "guest" | "user")[] = [], user?: any | null): boolean => {
  if (user) {
    if (
      allRoles.some((role) => {
        return user?.roles?.some((individualRole: any) => {
          return individualRole === role;
        });
      })
    )
      return true;
  }

  return false;
};
