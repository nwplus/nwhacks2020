const initialState = {
  hackerApplication: {
    birthdate: Date(),
    city: '',
    education: '',
    email: '',
    ethnicity: '',
    firstname: '',
    gender: '',
    gradyear: 2019,
    interestfornwhacks: '',
    isCodeOfConductChecked: false,
    isDataReportingChecked: false,
    hackerRoleDeveloper: false,
    hackerRoleDesigner: false,
    hackerRoleHardware: false,
    hackerRoleOther: false,
    linkGithub: '',
    linkPortfolio: '',
    linkLinkedin: '',
    linkResume: '',
    longTechnology: '',
    longProject: '',
    firstHackathon: false,
    attendedLHD: false,
    isResumeSharingChecked: false,
    ishardware: false,
    isPrivacyPolicyChecked: false,
    lastname: '',
    major: '',
    phonenumber: '',
    school: '',
    source: '',
    travel: ''
  },
  signUpPage: 0,
  comingFromSuccessPage: false
}

export const state = () => ({
  hackerApplication: { ...initialState.hackerApplication },
  signUpPage: initialState.signUpPage
})

export const mutations = {
  updateApplication(state, app) {
    state.hackerApplication = {
      ...state.hackerApplication,
      ...app
    }
  },
  ApplicationClosed(state) {
    state.signUpPage = -1
  },
  ApplicationOpen(state) {
    if (state.signUpPage < 0) {
      state.signUpPage = 0
    }
  },
  clearState(state) {
    state.hackerApplication = { ...initialState.hackerApplication }
    state.comingFromSuccessPage = true
  },
  resetToFirstPage(state) {
    state.comingFromSuccessPage = false
    state.signUpPage = 0
  },
  goToPage(state, page) {
    if (page > 3 || page < 0) {
      return
    }
    state.signUpPage = page
  }
}
