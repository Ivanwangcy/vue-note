import Vue from 'vue'
import './style.scss'

export default {
  name: 'back-top',
  data: () => ({
    visible: false
  }),
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    }
  },
  methods: {
    getScroll(){
      return window.pageYOffset
    },
    handleScroll() {
      const scroll = this.getScroll()

      this.visible = scroll > this.visibilityHeight
    },
    scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  render(h) {
    const data = {
      on: {
        click: (e) => {
          this.scrollToTop()
        }
      }
    }
    return (
      <div class="back-top" v-show={this.visible} {...data}>
        <i class="fa fa-arrow-circle-up fa-3x"></i>
      </div>
    )
  }
}
