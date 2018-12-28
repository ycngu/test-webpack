import sass from './style.scss'

let a = "这里用的是let而不是var"

setTimeout(() => {
    var temp = document.querySelector('.test2')
    temp.innerHTML = a
}, 100)

let fn = () => console.log('fn = () => console.log()，这是个箭头函数')

fn()