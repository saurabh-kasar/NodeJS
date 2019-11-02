// setTimeout (() => {
// console.log('Two seconds are up')
// },2000)

// const time = () => console.log('Two seconds are up')

// setTimeout(time,2000)

const add = (a,b, callback) => {

        callback(a+b)
}

add(1,4, (sum) => {
    console.log(sum)
})