//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach((question)=>{
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click',()=>{
        questions.forEach((item)=>{
            if(item !== question)
            {
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
})
})


// traversing the dom

// const btn = document.querySelectorAll('.question-btn')

// btn.forEach((btn)=>{
// btn.addEventListener('click',(e)=>{
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text')
// })
// })
