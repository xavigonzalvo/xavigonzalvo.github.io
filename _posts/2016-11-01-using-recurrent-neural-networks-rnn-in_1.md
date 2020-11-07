---
layout: post
title: Using Recurrent neural networks (RNN) in Tensorflow
date: '2016-11-01T12:17:00.002Z'
author: Xavi
tags:
- Tensorflow
- Coding
modified_time: '2016-12-01T15:34:48.407Z'
---

# Introduction

In the following notebook I present a simple example to use recurrent neural network based on [LSTM](https://en.wikipedia.org/wiki/Long_short-term_memory) units to predict a triangular signal. The input to the system is the current sample and the neural network has to predict the next sample in regression mode.


# Example of an LSTM to predict a triangular signal

Requirements: Tensorflow >= 1.0

# Generate triangular data


```python
# Generate data.
core = np.arange(100)
TIME_STEP = 5

features = np.expand_dims(
    np.concatenate([core] * 100), 1).astype(np.float32)

targets = features[1:]
targets = np.append(targets, features[0])

def rnn_data(data, time_steps, labels=False):
    """
    creates new data frame based on previous observation
      * example:
        l = [1, 2, 3, 4, 5]
        time_steps = 2
        -> labels == False [[1, 2], [2, 3], [3, 4]]
        -> labels == True [2, 3, 4, 5]
    """
    rnn_df = []
    for i in range(len(data) - time_steps):
        if labels:
            try:
                rnn_df.append(data.iloc[i + time_steps].as_matrix())
            except AttributeError:
                rnn_df.append(data.iloc[i + time_steps])
        else:
            data_ = data.iloc[i: i + time_steps].as_matrix()
            rnn_df.append(data_ if len(data_.shape) > 1 else [[i] for i in data_])

    return np.array(rnn_df, dtype=np.float32)

features = rnn_data(pd.DataFrame(features), TIME_STEP)

print ('features.shape:', features.shape)
print ('targets.shape:', targets.shape)
plt.plot(features[:200, 0, 0])
print ('features:', features.T)
print ('targets:', targets.T)
```

    features.shape: (9995, 5, 1)
    targets.shape: (10000,)
    features: [[[  0.   1.   2. ...,  92.  93.  94.]
      [  1.   2.   3. ...,  93.  94.  95.]
      [  2.   3.   4. ...,  94.  95.  96.]
      [  3.   4.   5. ...,  95.  96.  97.]
      [  4.   5.   6. ...,  96.  97.  98.]]]
    targets: [  1.   2.   3. ...,  98.  99.   0.]



![png]({{ "/assets/posts/images/lstm_triangular_files/lstm_triangular_3_1.png" | absolute_url }})


# Build an estimator


```python
RNN_NUM_NEURONS = 7  #@param
DROPOUT = 1.0  #@param
NUM_RNN_LAYERS = 1  #@param
HIDDEN_LAYER_SIZE = []  #@param
STEPS = 5000  #@param
LEARNING_RATE = 0.02  #@param
BATCH_SIZE = 10  #@param

#
# Define estimator.
#
def model_builder():

  def model_fn(features, targets, mode):
    # Define the RNN.
    cell = tf.nn.rnn_cell.LSTMCell(RNN_NUM_NEURONS, state_is_tuple=True)
    cell = tf.nn.rnn_cell.DropoutWrapper(cell, output_keep_prob=DROPOUT)
    stacked_cell = tf.nn.rnn_cell.MultiRNNCell([cell] * NUM_RNN_LAYERS,
                                               state_is_tuple=True)
    features = tf.unstack(features, axis=1)
    output, state = tf.contrib.rnn.static_rnn(stacked_cell, features, dtype=tf.float32)

    # Add DNN.
    last_layer = output[-1]
    for layer_size in HIDDEN_LAYER_SIZE:
      last_layer = tf.contrib.layers.fully_connected(last_layer, layer_size,
                                                     activation_fn=tf.nn.relu)

    # Final prediction using a linear regression.
    prediction, loss = tf.contrib.learn.models.linear_regression(
        last_layer, targets)

    # Handle model operations.
    if mode == tf.contrib.learn.ModeKeys.INFER:
      return prediction, None, None
    train_op = None
    if mode == tf.contrib.learn.ModeKeys.TRAIN:
      train_op = tf.contrib.layers.optimize_loss(
          loss=loss,
          global_step=tf.contrib.framework.get_global_step(),
          learning_rate=LEARNING_RATE,
          optimizer="Adam")
    return prediction, loss, train_op

  return model_fn

estimator = tf.contrib.learn.Estimator(model_fn=model_builder())
estimator.fit(features, targets, steps=STEPS, batch_size=BATCH_SIZE)
estimator.evaluate(features, targets, steps=1)

```
```
INFO:tensorflow:Finished evaluation at 2017-11-26-20:11:08
INFO:tensorflow:Saving dict for global step 5000: global_step = 5000, loss = 0.480172
```

```python
predicted = estimator.predict(features[20:200], as_iterable=False)

plt.plot(features[20:200][:, 0, 0], label='Original')
plt.plot(predicted, label='Predicted')
plt.legend()
```
```
INFO:tensorflow:Restoring parameters from /var/folders/45/x8q_d2jd1nb2xy6kf8qhlj40003vm7/T/tmpi6_mcgqc/model.ckpt-5000
<matplotlib.legend.Legend at 0x1114b2550>
```
![png]({{ "/assets/posts/images/lstm_triangular_files/lstm_triangular_6_2.png" | absolute_url }})
