/*global AudioContext*/

"use strict";

class Oscillator {
    constructor(type, frequency, audioContext) {
        this.oscillator = audioContext.createOscillator();
        this.gain = audioContext.createGain();
        this.oscillator.type = type;
        this.oscillator.frequency.value = frequency;
        this.oscillator.start(0);
    }
    
    start() {
        this.oscillator.connect(this.gain);
        this.gain.connect(CTX.destination);
    }
    
    stop() {
        this.oscillator.disconnect();
    }
    
    set frequency(frequency) {
        this.oscillator.frequency = frequency;
    }
}

const START_BTN = document.getElementById("start");
const STOP_BTN = document.getElementById("stop");

const CTX = new AudioContext();

let oscillators = [];
oscillators.push(new Oscillator("sine", 440.0, CTX));

START_BTN.addEventListener("click", function() {
    for (let i = 0; i < oscillators.length; i++) {
        oscillators[i].start();
    }
});
STOP_BTN.addEventListener("click", function() {
    for (let i = 0; i < oscillators.length; i++) {
        oscillators[i].stop();
    }
});