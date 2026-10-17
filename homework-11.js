const emailForm = document.querySelector("#email-form")
emailForm.addEventListener("submit", (event)=>{
  event.preventDefault()
  const form = event.target;
  const formData = new FormData(form)
  const data = Object.fromEntries(FormData.entries());
  console.log(data)
})