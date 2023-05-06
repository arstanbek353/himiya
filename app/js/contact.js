
const ApiContact = (url, data) => {
  return fetch(url, {
    method: 'POST',
    body: data,
  })
}

export default function () {
  const contactForms = document.querySelectorAll('.js-contact-form')
  contactForms.forEach(form => {
    const button = form.querySelector('.js-contact-btn')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const action = form.getAttribute('action')

      const btnText = button.textContent
      button.setAttribute('disabled', true)
      button.textContent = 'Загрузка...'
      ApiContact(action, formData).then((res) => {
        console.log('contact success')
        if (res.status === 400) {
          window.modalApplicatioAccepted.open()
          console.log('contact success')
        } else {
          throw res
        }
      }).catch(() => {
        alert('contact error')
      }).finally(() => {
        button.textContent = btnText
        button.removeAttribute('disabled')
      })
    })
  })
}