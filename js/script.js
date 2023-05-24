// Get The Form 
let form = document.getElementById('generat-form');
// bring The QR COde DIv 
let qr = document.getElementById('qrcode');
const onGenerateSubmit = (e) => {
    e.preventDefault();
    clearUI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    if (url === ''){
        swal("Please Enter A URL");
    } else{
        // show the spinner before generating the qr code
        showSpinner();
        // hide the spinner and show the generated qr code
        setTimeout(() => {
            hideSpinner();
            generatQrCode(url,size);
            setTimeout(() => {
                let saveTheImg = qr.querySelector('img').src;
                CreateSaveBtn(saveTheImg);
            }, 50)
        }, 1000);
    }
};


const generatQrCode = (url,size) =>{
    let qrCode = new QRCode("qrcode",{
        text: url,
        width: size,
        height:size,
        correctLevel : QRCode.CorrectLevel.H
    })
}

const showSpinner = () => {
document.getElementById('spinner').style.display = 'block'
} 
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none'
}  

const clearUI = () => {
    qr.innerHTML = '';
    // saveImg.innerHTML = '';
    let saveBtn = document.getElementById('save-img');
    if (saveBtn) saveBtn.remove();
}

const CreateSaveBtn = (saveUrl) => {
    let saveImg = document.createElement('a');
    saveImg.href = saveUrl;
    saveImg.id = 'save-img';
    saveImg.download = '';
    saveImg.classList = 'bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    saveImg.innerHTML = 'Save Img';
    document.getElementById('generated').appendChild(saveImg);
}

    hideSpinner();
form.addEventListener('submit', onGenerateSubmit)