import { required, email } from 'vuelidate/lib/validators'
export default {
  hacker: {
    firstname: {
      required
    },
    lastname: {
      required
    },
    email: {
      required,
      email
    },
    travel: {
      required,
      matchesDropDown(v) {
        return (v.toLowerCase() === 'yes' || v.toLowerCase() === 'no')
      }
    },
    gender: {
      required
    },
    ethnicity: {
      required
    }
  }
}
