//Focus Helper


//Define variables
let serial;
let fromSerial=0;
let archiving
let button;

let lang = navigator.language || 'en-US'
let speechRec = new p5.SpeechRec(lang);
speechRec.continuous = true;
speechRec.interim = false;
speechRec.interimResults = false;
// speechRec.start();

let speechRecStart = false;

let input1;
let input2;
let nameForInput1;
let nameForInput2;
let nameA;
let nameB;
let and;
let newDiv;
let newFile;



function setup() {
  noCanvas();

  
  //Serial communication
  serial = new p5.SerialPort();
  serial.on('data', serialEvent); // callback function for serialport list event
  serial.open("/dev/cu.usdmodem1411"); //open a port

  speechRec.onResult = showResult;
  speechRec.onStart = function(){
    console.log('starting speech rec');
  };

  speechRec.onEnd = function(){
    console.log('speech rec ended');
  };

  speechRec.onError = function(e){
    console.log(e);
  }

//Names input

input1 = createInput('Name #1');
input2 = createInput('Name #2');
button = createButton('Start a New Conversation');
button.mousePressed(newDoc)
input1.class('input');
input2.class('input');
button.class('input');
button.id('button');

}///Setup ended

function newDoc() {


   newDiv = createDiv(input1.value() + ' & ' +input2.value());
   newDiv.class('newDoc');
   newDiv.position(random(50, 1400), random(320,400));
   let random_color = color(int(random(180, 250)), int(random(180, 230)), int(random(180, 230)));
   newDiv.style('background-color', random_color);




}






// Serial communication
// Buttons from Arduino
function showResult() {
  console.log('result');
  let result= speechRec.resultString;

  console.log(speechRec);

  if(speechRec.resultValue == true){
    // nameA.parent(newDiv);
    //  nameB.parent(newDiv);
        archiving = createP(speechRec.resultString);
        archiving.class('archive');
        archiving.parent(newDiv);

  }
}


function serialEvent() {
  fromSerial = serial.read();
  console.log(fromSerial);

if(fromSerial == 2 || fromSerial ==3) {
  if(speechRecStart == false){
    speechRec.start();
    speechRecStart = true;
    if(fromSerial == 2 ) {
       nameA = createP('# '+input1.value());
       nameA.parent(newDiv);
     }
    if(fromSerial == 3) {
       nameB = createP('# '+input2.value());
       nameB.parent(newDiv);
    }
}
}
  else if(fromSerial == 0){
    speechRec.rec.abort();
    speechRecStart = false;

  }
}











// function mousePressed() {
// speechRec.start();
// }





//Failure

// button.mousePressed(newName);

//Input & Button css
  // input1.class('input');
  // input2.class('input');
  // button.class('input');
  // name1.class('input');
  // name2.class('input');

// function updateNameForInput1 (){
//   nameForInput1.html(input1.value());
//   // nameForInput1.hide();
// }
//
// function updateNameForInput2 (){
//   nameForInput2.html(input2.value());
//   // nameForInput2.hide();
// }


// function newName(){
//     nameForInput1 = createP(input1.value());
//     and = createP('&');
//     and.style('font-size:10pt');
//     nameForInput2 = createP(input2.value());
//     input1.changed(updateNameForInput1);
//     input2.changed(updateNameForInput2);
// }



// if(fromSerial == 2 && speechRecStart == false){
//     //console.log('start speech rec');
//     speechRec.start();
//     speechRecStart = true;
//   }
//
//   if(fromSerial == 3 && speechRecStart == false){
//
//     speechRec.start();
//     speechRecStart = true;
//   }
//   else if(fromSerial == 0 && speechRecStart == false){
//     speechRec.rec.abort();
//     speechRecStart = false;
//   }
// }

// if(speechRec.resultValue==true) {
//   if(fromSerial == 1){
//     let archiving = createP(speechRec.resultString);
//     archiving.class('archive');
//   }else{
//     console.log(speechRec.resultString);
//   }
//
// }

// function goRec (serialEvent) {
// speechRec.start();
// }
//
//
