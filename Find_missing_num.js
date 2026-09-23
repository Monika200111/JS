let a = [1, 2, 3, 5, 6]
let b
let n = a.length+1

for(let i =1; i<=n; i++){
    if(!a.includes(i)){
      b = i
    }
}
console.log(b)
