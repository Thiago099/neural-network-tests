import * as tf from '@tensorflow/tfjs';

// Define a model for addition
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [2]}));

// Compile the model
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training
const xs = tf.tensor2d([[1, 1], [2, 2], [3, 3], [4, 4]], [4, 2]);
const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);

// Train the model using the data
model.fit(xs, ys, {
  epochs: 10,
  callbacks: {
    onEpochEnd: (epoch, log) => {
      new element("div")
      .parent(document.body)
      .html(`Epoch ${epoch+1}: loss = ${log.loss}`)
    }
  }
})
.then(() => {
  // Use the model to do inference on a new data point
  var prediction = model.predict(tf.tensor2d([[3, 2]], [1, 2]))
  
    new element('div')
    .parent(document.body)
    .html(prediction.dataSync())
});