let names = document.querySelector('#name');
console.log(names)
let repeat_names = document.querySelector('.name_text');
let sex = document.querySelectorAll('.rb');
let sex_cur = document.querySelector('#sex_current');
let birthDate = document.querySelector('.input_date')
let age=document.querySelector('#age')

names.addEventListener('input',()=>{
    repeat_names.textContent = names.value
})
sex.forEach((elem) => {addEventListener('click',()=>{
    sex_cur.textContent = document.querySelector('.rb:checked').value;
})})

birthDate.addEventListener("change", function() {
    let today = new Date();
    let birthday = birthDate.value;
    let birth_data = new Date(birthday);
    let years = (today.getFullYear() - birth_data.getFullYear());
    if (today.getMonth() < birth_data.getMonth() || 
    today.getMonth() == birth_data.getMonth() && today.getDate() < birth_data.getDate()) {
        years--;
    }
    age.textContent=years
});
