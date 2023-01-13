var imageLeft = document.querySelector('#image-left');
var imageRight = document.querySelector('#image-right');
var imageDirectContainer = document.querySelector('.image-direct-container');

var buttonBigger = document.querySelector('#button-bigger');
var buttonSmaller = document.querySelector('#button-smaller');

var sliderImagesTotal = document.getElementById("images-total-size");
var output = document.getElementById("size");
output.innerHTML = sliderImagesTotal.value;

sliderImagesTotal.oninput = function() {
  output.innerHTML = this.value;
  updateDirectContainerSize(this.value);
}




function updateDirectContainerSize(sliderValue) {
  imageDirectContainer.style.width = (sliderValue * 8) + "px";
  imageDirectContainer.style.height = (sliderValue * 8) + "px";
  console.log(sliderValue);
}

function download(canvas, filename) {
    const data = canvas.toDataURL("image/png;base64");
    const downloadLink = document.querySelector("#download");
    downloadLink.download = filename;
    downloadLink.href = data;
  }
  
  html2canvas(document.querySelector(".image-direct-container")).then((canvas) => {
    // document.body.appendChild(canvas);
    download(canvas, "asd");
  });
  





