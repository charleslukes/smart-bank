export const SignInValidation = {
  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Must be a valid email',
    },
  },

  password: {
    required: {value: true, message: 'Password is required'},
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      message:
        'Password must contain at least, one uppercase, one lowercase, one special character, one number, minimum of eight characters and max of thirty characters',
    },
  },
};
