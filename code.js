var ans=new Promise(function(res,rej){
    return res("1");
})
var p2=ans.then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
        return res("2");
    })
})
var p3=p2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("3")
    })
})
p3.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("4")
    })
})


// async function abcd(){
//     await fetch(`https://randomuser.me/api/`)
// }
// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// abcd();
async function abcd(){
    var raw=await fetch(`https://randomuser.me/api/`)
    var ans=await raw.json();
    console.log(ans);
}
abcd();