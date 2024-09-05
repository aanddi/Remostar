const deleteAuthTokens = () => {
  const accessToken = localStorage.removeItem('accessToken');
  const refreshToken = localStorage.removeItem('refreshToken');

  return { accessToken, refreshToken };
};

export default deleteAuthTokens;
