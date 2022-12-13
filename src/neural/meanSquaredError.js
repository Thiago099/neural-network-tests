  function mse(trueValues, predictedValues) {
    // Calculate the differences between the true and predicted values
    const differences = trueValues.map((value, index) => value - predictedValues[index]);
  
    // Square the differences
    const squaredDifferences = differences.map(difference => difference ** 2);
  
    // Take the average of the squared differences
    return squaredDifferences.reduce((sum, value) => sum + value, 0) / squaredDifferences.length;
  }