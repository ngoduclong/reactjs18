export const RoutePaths = {
  // non auth
  LOGIN: '/login',

  // auth
  HOME: '/',
  USER: (id = ':userId') => `/user/${id}`,
};
