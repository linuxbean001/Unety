// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { anchorate } from 'anchorate'

export const onRouteUpdate = () => {
  anchorate({
    scroller: function (element) {
      if (!element) return false
      element.scrollIntoView({ behavior: 'smooth' })
      return true
    }
  })
}
