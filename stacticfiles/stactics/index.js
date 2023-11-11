const email = prompt('enter your email')
const checking = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2-5})$/

if (checking.test(email)) {
    alert('you have loged in succesfully')
} else {
    alert('wrong email')
}