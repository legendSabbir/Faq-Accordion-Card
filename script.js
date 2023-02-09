const accordions = document.querySelectorAll(".accordion")
let activeAccordion = null

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    const clicked_element_active = this.classList.contains("active")
    
    if (activeAccordion) {
      activeAccordion.classList.remove("active")
      activeAccordion.nextElementSibling.style.maxHeight = "0px"
    }
    
    if (!clicked_element_active) {
      this.classList.add("active")
      this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px"
    }
    
    activeAccordion = this
  })
}