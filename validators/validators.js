import { required, email, requiredIf } from 'vuelidate/lib/validators'
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
    phonenumber: {
      required,
      isPhoneNumberFormat(v) {
        const re = /\d{3}-\d{3}-\d{4}/
        // Because the result is not a boolean, using double bang to make it into boolean
        return !!re.exec(v)
      }
    },
    gender: {
      required,
      matchesDropDown(v) {
        return isOneOf(v, [
          'female',
          'male',
          'non-binary',
          'prefer not to specify',
          'other'
        ])
      }
    },
    genderother: {
      required: requiredIf(function (hacker) {
        return hacker.gender === 'other'
      })
    },
    ethnicity: {
      required,
      matchesDropDown(v) {
        return isOneOf(v, [
          'american indian',
          'alaskan native',
          'asian / pacific islander',
          'black or african american',
          'hispanic',
          'white / caucasian',
          'multiple ethnicity',
          'other',
          'prefer not to answer'
        ])
      }
    },
    ethnicityother: {
      required: requiredIf(function (hacker) {
        return hacker.ethnicity === 'other'
      })
    },
    over19: {
      required,
      matchesRadio(v) {
        return isOneOf(v, ['yes', 'no'])
      }
    },
    education: {
      required,
      matchesDropDown(v) {
        return isOneOf(v, ['high school', 'undergraduate', 'graduate'])
      }
    },
    school: {
      required
    },
    schoolother: {
      required: requiredIf(function (hacker) {
        return hacker.school === 'Other'
      })
    },
    major: {
      required
    },
    gradyear: {
      required,
      withinValidRange(v) {
        return v >= 2015 && v <= 2027
      }
    },
    city: {
      required
    },
    travel: {
      required,
      matchesRadio(v) {
        return isOneOf(v, ['no', 'travel reimbursement', 'shuttle bus'])
      }
    },
    source: {
      required,
      matchesDropDown(v) {
        return isOneOf(v, [
          'mlh',
          'social media',
          'website',
          'word of mouth',
          'club newsletter',
          'faculty newsletter',
          'prof/in class',
          'other'
        ])
      }
    },
    sourceother: {
      required: requiredIf(function (hacker) {
        return hacker.source === 'Other'
      })
    },
    isPrivacyPolicyChecked: {
      required,
      checked(v) {
        return v
      }
    },
    isCodeOfConductChecked: {
      required,
      checked(v) {
        return v
      }
    },
    isDataReportingChecked: {
      required,
      checked(v) {
        return v
      }
    }
  }
}

function isOneOf(v, array = []) {
  let isMatch = false
  for (const elem of array) {
    if (v && v.toLowerCase() === elem) isMatch = true
  }
  return isMatch
}
