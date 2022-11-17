var imageAreaLeft = document.querySelector('#image-area-left');
var imageAreaRight = document.querySelector('#image-area-right');
var imageArea = document.querySelector('.image-area');

var buttonBigger = document.querySelector('#button-bigger');
var buttonSmaller = document.querySelector('#button-smaller');
var theScale = 10;
var scaleIncrements = 1;

buttonBigger.addEventListener("click", function() {
    theScale += scaleIncrements;
    imageAreaLeft.style.width = theScale + "%";
    imageAreaRight.style.width = theScale + "%";
    console.log(theScale);
});

buttonSmaller.addEventListener("click", function() {
    theScale -= scaleIncrements;
    imageAreaLeft.style.width = theScale + "%";
    imageAreaRight.style.width = theScale + "%";
    console.log(theScale);
});








function download(canvas, filename) {
    const data = canvas.toDataURL("image/png;base64");
    const downloadLink = document.querySelector("#download");
    downloadLink.download = filename;
    downloadLink.href = data;
  }
  
  html2canvas(document.querySelector(".image-area")).then((canvas) => {
    // document.body.appendChild(canvas);
    download(canvas, "asd");
  });
  