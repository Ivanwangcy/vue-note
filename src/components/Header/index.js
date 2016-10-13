import Vue from 'vue'
import './style.scss'

import { getters, actions } from 'vuex'

export default {
  name: 'note-header',

  render(h) {

    var className = `fa fa-th-${this.viewModel}`;

    return (
      <div class="note-header">
        <h1>
           VNOTE
          <i class={className}></i>
          {/* <i class="fa fa-th-large"></i> */}
        </h1>
      </div>
    )
  }
}
