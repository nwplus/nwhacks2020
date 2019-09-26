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
  }
}

export const state = () => ({
  hackerApplication: { ...initialState.hackerApplication }
})

export const mutations = {
  updateApplication(state, app) {
    state.hackerApplication = {
      ...state.hackerApplication,
      ...app
    }
  },
  clearState(state) {
    state.hackerApplication = { ...initialState.hackerApplication }
  }
}
