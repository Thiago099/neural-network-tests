import * as tf from '@tensorflow/tfjs';

const model = compile()
const tensors = training_data()
train(tensors)

function compile()
{
  // Define a model for addition
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 2, inputShape: [2]}));

  
  // Compile the model
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  return model
}


function training_data()
{
  const data = effect({x: '[[1, 2], [2, 1]]', y: '[[2, 1], [1, 2]]'})
  const tensors = {}
  const ref = {}
  const inputs = 
  <div parent={document.body}>
    <div>
      <label>X:</label>
      <input type="text" id="x" ref={ref} />
    </div>
    <div>
      <label>Y:</label>
      <input type="text" id="y" ref={ref} />
    </div>
  </div>

  ref.x
  .effect(data)
  .model(()=> data.x, (v)=> 
  {
    updateXs(v)
    data.x = v
  })

  ref.y
  .effect(data)
  .model(()=> data.y, (v)=>
  {
    updateYs(v)
    data.y = v
  })

  function updateXs(value)
  {
    tensors.xs = JSON.parse(value)
  }

  function updateYs(value)
  {
    tensors.ys = JSON.parse(value)
  }
  updateXs(data.x)
  updateYs(data.y)
  return tensors

}

function train(tensors)
{
  const progress = new element("div")
  .parent(document.body)

  const fitButton = new element("button")
  .parent(document.body)
  .html("Fit")
  .event("click", ()=>{

    model.fit(tf.tensor2d(tensors.xs), tf.tensor2d(tensors.ys), {
      epochs: 1000,
      callbacks: {
        onEpochEnd: (epoch, log) => {
          progress.html(`Epoch ${epoch+1}: loss = ${log.loss}`)
        }
      }
    })
    .then(async() => {
      // Use the model to do inference on a new data point
      var prediction = model.predict(tf.tensor2d([[2, 1]], [1, 2]))
      
        new element('div')
        .parent(document.body)
        .html(prediction.dataSync())
    });
  })

  // Train the model using the data
}
