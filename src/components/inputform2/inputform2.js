export default {
  data: () => ({
    allowSpaces: false,
    match: 'Foobar',
    max: 0,
    model: 'Foobar',
  }),

  computed: {
    rules() {
      const rules = []

      if (this.max) {
        const rule =
          v => (v || '').length <= this.max ||
            `A maximum of ${this.max} characters is allowed`

        rules.push(rule)
      }

      if (!this.allowSpaces) {
        const rule =
          v => (v || '').indexOf(' ') < 0 ||
            'No spaces are allowed'

        rules.push(rule)
      }

      if (this.match) {
        const rule =
          v => (!!v && v) === this.match ||
            'Values do not match'

        rules.push(rule)
      }

      return rules
    },
  },

  watch: {
    match: 'validateField',
    max: 'validateField',
    model: 'validateField',
  },

  methods: {
    validateField() {
      this.$refs.form.validate()
    },
  },
}