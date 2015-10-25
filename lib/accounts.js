AccountsTemplates.configure({
  // Behavior
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: true,
  lowercaseUsername: false,
  focusFirstInput: true,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use // TODO
  // privacyUrl: 'privacy',
  // termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/',
  redirectTimeout: 4000,

  // Hooks

  // Texts
  texts: {
    button: {
      signUp: 'Register Now'
    },
    title: {
      forgotPwd: 'Recover Your Password'
    },
  },
});

AccountsTemplates.configureRoute('changePwd', {
  name: 'atChangePassword',
  redirect: '/sign-in'
});

AccountsTemplates.configureRoute('enrollAccount', {
  name: 'atEnrollAccount',
  redirect: '/sign-in'
});

AccountsTemplates.configureRoute('forgotPwd', {
  name: 'atForgotPassword',
  redirect: '/sign-in'
});

AccountsTemplates.configureRoute('resetPwd', {
  name: 'atResetPassword',
  redirect: '/sign-in'
});

AccountsTemplates.configureRoute('signIn', {
  name: 'atSignIn',
  redirect: '/profile'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'atSignUp',
  redirect: '/profile'
});