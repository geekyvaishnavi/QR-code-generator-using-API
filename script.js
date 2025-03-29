let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");
function GenerateQR(){
    if(qrtext.value.length>0){
    let qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    qrimg.src=qrCodeURL;
    // console.log("QR Code URL:", qrimg.src); 
    imgbox.classList.add("show_img");
    }else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error")},1000
        );
    }
}
