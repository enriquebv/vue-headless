export default {
  props: {
    dateView: {
      type: Date,
      default: () => new Date()
    },
    locale: {
      type: String,
      default: "en"
    },
    multiPanMonths: {
      type: Number,
      default: 0
    },
    multiPanCurrentPosition: {
      type: String,
      validator: value => ["start", "end", "position"].includes(value)
    }
  },
  computed: {
    yearsList() {
      return [];
    },
    monthsList() {
      return [];
    },
    daysGrid() {}
  }
};
