let a = [1, 2, 3, 2, 4, 5, 3,4]

let b = []

let c = []

for(let i =0; i<a.length; i++){
    if(b.includes(a[i])){
        if(!c.includes(a[i]){
            c.push(a[i])
        }
      
    }
    else{
      b.push(a[i])
    }
}
console.log(c)
