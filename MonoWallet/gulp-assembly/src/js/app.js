// Импорт bootstrap
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import { header } from "./modules/header.js"
import { rhombus } from "./modules/rhombus.js"

header()

window.addEventListener("load", function () {
  rhombus()
})