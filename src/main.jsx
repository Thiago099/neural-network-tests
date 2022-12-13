
// Initialize the weights and biases for the two outputs
let w1 = 1;
let w2 = 1;
let w3 = 1;
let w4 = 1;
let b1 = 0;
let b2 = 0;
function print(...text)
{
  new element("div")
.parent(document.body)
.html(text.join(", "))
}
// Define the SGD function
function sgd(x1, x2, y1, y2, learningRate) {
  // Make a prediction using the current weights and biases
  let [y1hat,y2hat] = predict(x1, x2)
  // print(y1hat, y2hat)
  
  // Calculate the error between the predicted and actual values
  let error1 = y1 - y1hat;
  let error2 = y1 - y1hat;
  let error3 = y2 - y2hat;
  let error4 = y2 - y2hat;

  // Adjust the weights and biases based on the error and learning rate
  w1 += error1 * learningRate * x1;
  w2 += error2 * learningRate * x2;
  w3 += error3 * learningRate * x1;
  w4 += error4 * learningRate * x2;
  // b1 += error1 * learningRate;
  // b2 += error2 * learningRate;
}
function predict(x1, x2)
{
  let y1hat = x1 * w1 + x2 * w2 + b1;
  let y2hat = x1 * w3 + x2 * w4 + b2;
  return [y1hat, y2hat]
}
const x =[[1, 2], [2, 1]]
const y =[[2, 1], [1, 2]]
// Train the model using the SGD function
for (let i = 0; i < 1000; i++) {
  // Use a small learning rate

  for(let j = 0; j < x.length; j++)
  {
    let learningRate = 0.1;
    // Run the SGD function to update the weights and biases
    sgd(x[j][0],x[j][1], y[j][0], y[j][1], learningRate);
  }
}1

// Use the trained model to make a prediction

print(predict(1, 2))