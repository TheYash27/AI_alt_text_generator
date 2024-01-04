/** uncomment one of these **/
import OpenAI from "openai"
// import { HfInference } from '@huggingface/inference'

const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')
const submitButton = document.getElementById('submitButton')

/** show dialog on load **/
dialogModal.show()

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
 **/   
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialogModal.close(); // Close the browser dialog

  imageContainer.innerHTML = `<img src="./merChrhapnewyea.gif" alt="I wish U a merry Christmas and a happy new year!">`
});