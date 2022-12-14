// import tf
import * as tf from '@tensorflow/tfjs'
import * as mnist from 'mnist'
import './style.css'

async function main()
{
const dataset = mnist.set(99999, 0);
const x = dataset.training.map((d) => d.input);


// Create a model for the autoencoder



const encoder = tf.sequential();
encoder.add(tf.layers.dense({ inputShape: [28 * 28], units: 128, activation: 'relu' }));
encoder.add(tf.layers.dense({ units: 128, activation: 'relu' }));
encoder.add(tf.layers.dense({ units: 64, activation: 'relu' }));

const decoder = tf.sequential();
decoder.add(tf.layers.dense({ inputShape:64, units: 64, activation: 'relu' }));
decoder.add(tf.layers.dense({ units: 128, activation: 'relu' }));
decoder.add(tf.layers.dense({ units: 28 * 28, activation: 'sigmoid' }));

const model = tf.sequential();
model.add(encoder);
model.add(decoder);

// Compile the model
model.compile({
  loss: 'meanSquaredError',
  optimizer: 'adam'
});

const progress = new element("div")
.parent(document.body)
// Train the model on the MNIST dataset
await model.fit(tf.tensor(x), tf.tensor(x), {
  epochs: 5,
  batchSize: 32,
  callbacks: {
    onEpochEnd: (epoch, log) => {
      progress.html(`Epoch ${epoch+1}: loss = ${log.loss}`)
    }
  }
  //batch


});



// get the encoded image

const encoded  = encoder.predict(tf.tensor([x[0]]));

// get the decoded image

const decoded = decoder.predict(encoded);
displayImage(decoded.dataSync());
displayImage(x[0]);



function displayImage(mnistArray)
{

    // Create a canvas element
    var canvas = document.createElement("canvas");
    canvas.width = 28;
    canvas.height = 28;
    var ctx = canvas.getContext("2d");
    var imgData = ctx.createImageData(28, 28);

    // Fill the canvas with the MNIST image
    for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = mnistArray[i / 4] * 255;
        imgData.data[i + 1] = mnistArray[i / 4] * 255;
        imgData.data[i + 2] = mnistArray[i / 4] * 255;
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);

    // Display the canvas
    document.body.appendChild(canvas);

}

// print the encoded image

}

main()

