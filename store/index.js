const initialState = {
  hackerApplication: {
    birthdate: Date(),
    city: '',
    education: '',
    email: '',
    ethnicity: '',
    firstname: '',
    gender: '',
    gradyear: Date(),
    interestfornwhacks: '',
    iscodeofconductchecked: false,
    isdatareportingchecked: false,
    isdeveloper: false,
    isdocumentchecked: false,
    isfirsthackathon: false,
    ishardware: false,
    isprivacypolicychcked: false,
    lastname: '',
    linkedinlink: '',
    major: '',
    phonenumber: '',
    recentProject: '',
    resumelink: '',
    school: '',
    source: '',
    travel: ''
  },
  signUpPage: 0
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
  },
  goToPage(state, page) {
    if (page > 2 || page < 0) {
      return
    }
    state.signUpPage = page
  }
}
