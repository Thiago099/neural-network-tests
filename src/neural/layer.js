function singleLayerNN(inputs, weights, biases) {
    // Calculate the dot product of the inputs and weights
    const dotProduct = inputs.map((input, i) => input * weights[i]);
  
    // Add the biases to the dot product
    const layerOutput = dotProduct.map((value, i) => value + biases[i]);
  
    // Use an activation function to transform the output
    const activationOutput = layerOutput.map(sigmoid);
  
    // Return the output of the layer
    return activationOutput;
  }