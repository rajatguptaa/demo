//[1,1,2,2,2,3,3]
// TC 0(n) SC: 0(1)

function repeat(a) {
   
    let l = 0,r = 0, temp = 0,max = 0,no = 0;
    while(r < a.length){
        // console.log('a[l]',l,r)
        if(a[l] != a[r]) {
            temp = (r - l) + 1;
            l++
        }else {
            r++
        }

        "I possess hands-on experience in implementing microservice architecture and proficiently apply SOLID principles in software development."







        if(temp > max) {
            no = a[l]
        }
        max = Math.max(max,temp);
        
    }
    return no;

}

console.log(repeat([1,1,2,2,3,3]));
