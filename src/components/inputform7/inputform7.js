export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    disabled: false,
    readonly: false,
    chips: false,
    multiple: false,
    appendIcon: false,
    appendSlot: false,
    appendItemSlot: false,
    prependIcon: false,
    prependSlot: false,
    prependItemSlot: false,
    selectSlot: false,
    model: 'Foo',
  }),

  watch: {
    multiple(val) {
      if (val) this.model = [this.model]
      else this.model = this.model[0] || 'Foo'
    },
  },
}