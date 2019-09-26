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
    }
  }
}
