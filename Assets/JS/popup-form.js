
// const formContainer = document.querySelector('.form-popup .container')
// const signupButton = document.querySelector('.signup-section header')
// const loginButton = document.querySelector('.login-section header')


//     loginButton.addEventListener('click', () => {
//         formContainer.classList.add('active');
//     })


//   signupButton.addEventListener('click', () => {
//         formContainer.classList.remove('active');
//     })





// ========================= Login/Signup Form ===============================
// Get the form


// function activeFormAcc () {
//     btnAcc.addEventListener('click', () => {
//         form.classList.add('open');
//     })
// }

// form.addEventListener('click', ()=> {
//     form.classList.remove('open');
// })
// formContainer.addEventListener('click', (event)=>{
//     event.stopPropagation
// } )



const formPopup = document.querySelector('.form-popup');
const btnAccount = document.querySelector('.btn-account');
const formContainer = document.querySelector('.form-popup .container');

// Kiểm tra nếu đã có nút đóng hay chưa, nếu chưa thì tạo
let closePopup = document.querySelector('.close-popup');
if (!closePopup) {
    closePopup = document.createElement('div');
    closePopup.classList.add('close-popup');
    closePopup.style.position = 'absolute';
    closePopup.style.top = '10px';
    closePopup.style.right = '15px';
    closePopup.style.cursor = 'pointer';
    closePopup.style.fontSize = '24px';
    closePopup.innerHTML = '&times;';
    formPopup.appendChild(closePopup);
}

// Khi click vào nút btn-account, hiển thị popup
btnAccount.addEventListener('click', () => {
    formPopup.classList.add('open'); // Mở popup
    formContainer.classList.remove('active'); // Đặt lại trạng thái về form đăng ký ban đầu
});

// Khi click vào nút đóng hoặc bên ngoài form, đóng popup
closePopup.addEventListener('click', () => {
    formPopup.classList.remove('open'); // Ẩn popup
});

formPopup.addEventListener('click', (e) => {
    if (e.target === formPopup) {
        formPopup.classList.remove('open'); // Ẩn popup khi click ra ngoài
    }
});


