/* dark mode stuff */
const toggleSwitch = document.querySelector('#checkbox');

if(localStorage.darkmode == 'true'){
  toggleSwitch.checked = 'true';
  document.body.className = 'dark';
};

toggleSwitch.addEventListener('click', function(e){
  const {checked} = toggleSwitch;
  document.body.className = checked ? 'dark' : '';
  localStorage.darkmode = checked;
});

/* begin assignment */
const memeForm = document.querySelector('#form1');
const topText = document.querySelector('#top-text');
const botText = document.querySelector('#bot-text');
const image = document.querySelector('#image');
const memeStorage = document.querySelector('#meme-storage');


// builds the meme: creates the HTML elements, reads the file, sets the classes
// and the builds out the tree via the meme-storage node
function addMemeToStorage(){

    newMeme = document.createElement('div'); // holds the image, text, and button
    newImg = document.createElement('img');
    newTopText = document.createElement('div');
    newBotText = document.createElement('div');
    newButton = document.createElement('button');
    newButton.innerText = 'remove';
    newTopText.innerText = topText.value;
    newTopText.setAttribute('class', 'top-meme-text');
    newBotText.innerText = botText.value;
    newBotText.setAttribute('class', 'bot-meme-text');

    // the uploaded image file
    const imageFile = image.files[0];
    if (imageFile) {
        // Create a FileReader object to read the uploaded image
        const reader = new FileReader();

        reader.onload = function (event) {
            // Set the source of the img element to the uploaded image data
            newImg.src = event.target.result;
        };

        // Read the image as a data URL
        reader.readAsDataURL(imageFile);
    }

    newImg.alt = 'Generated meme from meme generator';
    newImg.setAttribute('class', 'image-src');
    newMeme.setAttribute('class', 'meme-to-store');
    newMeme.append(newImg);
    newMeme.append(newTopText);
    newMeme.append(newBotText);
    newMeme.append(newButton);

    memeStorage.append(newMeme);
    topText.value = '';
    botText.value = '';
    image.value='';
}


memeForm.addEventListener('submit', function(e){
    e.preventDefault();
    addMemeToStorage();
});


// remove the div which contains the image, text, and button.
memeStorage.addEventListener('click', function(e){
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
     }
});
