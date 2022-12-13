function sgd(trainingData, learningRate, numIterations) {
    // Initialize the model parameters
    let params = {
      weights: Array(trainingData[0].length).fill(0),
      bias: 0,
    };
  
    // Loop over the number of iterations
    for (let i = 0; i < numIterations; i++) {
      // Shuffle the training data
      shuffle(trainingData);
  
      // Loop over the training data
      for (let j = 0; j < trainingData.length; j++) {
        // Extract the features and label for the current example
        let features = trainingData[j].slice(0, -1);
        let label = trainingData[j][trainingData[j].length - 1];
  
        // Make a prediction using the current model parameters
        let prediction = predict(features, params);
  
        // Update the model parameters
        params.weights = params.weights.map((weight, index) => {
          return weight + learningRate * (label - prediction) * features[index];
        });
        params.bias += learningRate * (label - prediction);
      }
    }
  
    // Return the optimized model parameters
    return params;
  }
  
