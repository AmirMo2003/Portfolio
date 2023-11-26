const faqs = document.querySelectorAll(".detail_List_Question");


faqs.forEach(faq => {
  faq.addEventListener("click", () =>{
    faq.classList.toggle("active");
  })
})


