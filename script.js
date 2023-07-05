// Create the audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Initialize Tone.js
Tone.setContext(audioContext);

// Create an array to store the connected pedals
const connectedPedals = [];

// Function to add a pedal to the pedalboard
function addPedal(pedalType) {
  // Create a new instance of the desired pedal
  let pedal;

  if (pedalType === "distortion") {
    pedal = new Tone.Distortion();
  } else if (pedalType === "delay") {
    pedal = new Tone.FeedbackDelay();
  } else if (pedalType === "reverb") {
    pedal = new Tone.JCReverb();
  }

  // Connect the pedal to the audio output
  pedal.toDestination();

  // Store the pedal in the connectedPedals array
  connectedPedals.push(pedal);
}
