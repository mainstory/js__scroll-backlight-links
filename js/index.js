const headerLinks = document.querySelectorAll('.menu__link')
const sections = document.querySelectorAll('.section')

document.addEventListener('scroll', () => {

   sections.forEach((section) => {
      const top = section.getBoundingClientRect().top

      if (top <= 0) {

         const attribut = section.getAttribute('data-name')
         headerLinks.forEach((headerLink) => {
            const id = headerLink.getAttribute('id')
            if (id === attribut) {
               headerLink.classList.add('_active')
            } else {
               headerLink.classList.remove('_active')
            }


         })

      }
   })


})





