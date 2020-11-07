---
layout: post
title: Reinforcement learning for a Tic-Tac-Toe game
date: '2015-05-26T11:56:00.000+01:00'
author: Xavi
tags:
- Coding
modified_time: '2015-05-26T11:56:37.603+01:00'
---

![screenshot]({{ "/assets/posts/images/rl_screenshot.png" | absolute_url }})

[Reinforcement learning (RL)](http://en.wikipedia.org/wiki/Reinforcement_learning) is a type of machine learning system that learns based of a trial and error approach and a <i>reward</i>. An agent interacts with a <i>world</i> executing certain <i>actions</i> (e.g. moving an elevator, increasing acceleration of a car).

The agent gets a reward that tells the system whether the action was good or bad. After a lot of training episodes the agent is capable to know whether an action in a specific time instant is going to be good to fulfill a specific objective.

RL has been used in many different areas (including [dialogue management](http://www.xavigonzalvo.com/dialogue-systems)) and what I'm showing you here is a simple RL C++ library to train an agent that learns to play the famous Tic-Tac-Toe game. This library is part of my [software section](http://www.xavigonzalvo.com/software).

You can have a look at the [C++ implementation in github](https://github.com/xavigonzalvo/tictactoe). You can build this code very easily following the instructions in the repository.

Basically, you can train an agent to play against himself and learn the best strategies. Once you've built the code you can make the agent learn as follows:

```
./learner --config_path ../config/sarsa_vs_sarsa.pb --epochs 1000000
```

Configuration in `../config/sarsa_vs_sarsa.pb` is for the [Sarsa agent](http://en.wikipedia.org/wiki/SARSA) and it's based on [protocol buffers](https://github.com/google/protobuf/"). It contains the basic learning parameters:

```
alpha: 0.8
gamma: 0.9
epsilon: 0.1
agents {
  learner: "SarsaAgent"
  opponent: "SarsaAgent"
}
```

What this is telling us is that both the <i>learner</i> and the <i>opponent</i> are both RL agents, so they are compete against themselves. If you run the previous command you'll get something like this:

```
Percentage of won games: 0.991816
Percentage of draw games: 0.003221
Percentage of lost games: 0.004963
```

If you decrease the number of training episodes (i.e. games) to 100 win percentages decreases noticeably and lost games increase:

```
Percentage of won games: 0.78
Percentage of draw games: 0.07
Percentage of lost games: 0.15
```

You can play against the agent and you'll see that it's pretty good:

```
./learner --config_path ../config/human_vs_sarsa.pb --epochs 10 --load_learner_agent_model_path ../models/random_vs_sarsa_epochs2000000.model
```
