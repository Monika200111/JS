let a =  [12, -11, 5, -6, -2, 7]

for(let i =0; i<a.length; i++){

  if(a[i]<0){
    
    let current = a[i]
    let j = i-1
    
    while(a[j] >= 0 && j>=0){
      a[j+1] = a[j]
      j--
    }
    
    a[j+1] = current
  }
}

console.log(a)
