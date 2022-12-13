
// Initialize weights and bias
let weights = [1, 1, 1];
let bias = 0;

// Initialize learning rate
let lr = 0.1;

// Define input and output data
let inputs = [[1, 2], [2, 1]];
let outputs = [1, 2];

// Perform SGD for a number of epochs
for (let epoch = 0; epoch < 100; epoch++) {
    // Loop over all examples
    for (let i = 0; i < inputs.length; i++) {
        // Calculate the predicted output
        let prediction = bias;
        for (let j = 0; j < inputs[i].length; j++) {
            prediction += inputs[i][j] * weights[j];
        }

        // Calculate the error
        let error = outputs[i] - prediction;

        // Update the bias
        bias += lr * error;

        // Update the weights
        for (let j = 0; j < weights.length; j++) {
            weights[j] += lr * error * inputs[i][j];
        }
    }
}


// predict the output for a new input
let newInput = [1, 2];
let prediction = bias;
for (let i = 0; i < newInput.length; i++) {
    prediction += newInput[i] * weights[i];
}

new element(document.body)
.html(Math.round(prediction))