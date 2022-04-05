export const handleEmailChange = (state, setState, newValue) => {
    setState({
      ...state,
      email: newValue,
    });
  };
  export const handlePasswordChange = (state, setState, newValue) => {
    setState({
      ...state,
      password: newValue,
    });
  };