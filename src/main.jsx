
function print(...text)
{
    new element("div")
  .parent(document.body)
  .html(text.join(", "))
}
// Define the SGD function
function sgd(x,y,weights, learningRate) {
  // Make a prediction using the current weights and biases
  for(var i = 0; i < x.length; i++)
  {
    // make the prediction
    const prediction = predict(x[i],weights)
    // calculate the error
    const error = []
    for(var j = 0; j < prediction.length; j++)
    {
      error[j] = y[i][j] - prediction[j]
    }
    // update the weights
    for(var j = 0; j < weights.length; j++)
    {
        for(var k = 0; k < weights[j].length; k++)
        {
          weights[j][k] += learningRate * error[j] * x[i][k]
        }
    }

  }
}
function initializeWeights(x,y)
{
  const weights = new Array(y[0].length).fill(0).map(()=> new Array(x[0].length).fill(1))
  return weights
}
function predict(x,weights)
{
  var y = []
  for(var i = 0; i < weights.length; i++)
  {
    y[i] = 0
    for(var j = 0; j < weights[i].length; j++)
    {
      y[i] += weights[i][j] * x[j]
    }
  }
  return y
  // let y1hat = x1 * w1 + x2 * w2 + b1;
  // let y2hat = x1 * w3 + x2 * w4 + b2;
  // return [y1hat, y2hat]
}
const x =[[1, 2], [2, 1]]
const y =[[2, 1], [1, 2]]
const weights = initializeWeights(x,y)
console.log(weights)
// Train the model using the SGD function
for (let i = 0; i < 1000; i++) {
  // Use a small learning rate

  for(let j = 0; j < x.length; j++)
  {
    let learningRate = 0.1;
    // Run the SGD function to update the weights and biases
    sgd(x, y, weights, learningRate);
  }
}

// Use the trained model to make a prediction

print(predict([1, 2], weights))