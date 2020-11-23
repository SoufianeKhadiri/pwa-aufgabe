if('serviceWorker' in navigator){
    console.log("Here Serviceworker accepted");
    navigator.serviceWorker.register('serviceWorker.js')
        .then((reg)=> console.log("Serviceworker registered",reg))
        .catch((err)=> console.log("Serviceworker not registered",err));

}else{
    console.log("Serviceworker not accepted in this browser");
}