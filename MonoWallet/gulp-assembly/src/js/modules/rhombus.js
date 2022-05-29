function rhombus() {
  const $rhombus = document.querySelector('.rhombus'),
    $rhombusFields = document.querySelectorAll('.rhombus__field'),
    $fstRhombusField = document.querySelector('.rhombus__field:first-child')
  const rhombusNum = 4,
    fstRhombusMargin = $fstRhombusField.style.marginTop,
    lastRhombusMargin = 400,
    rhombusSize = 1228

  if ($rhombus) {
    const pageHeight = document.documentElement.scrollHeight

    $rhombus.style.height = pageHeight + 'px'
    const margin = (pageHeight - fstRhombusMargin - lastRhombusMargin - rhombusSize * rhombusNum) / (rhombusNum - 1) + 'px'
    $rhombusFields.forEach(field => {
      field.style.marginBottom = margin
    })
  }
}

export { rhombus }