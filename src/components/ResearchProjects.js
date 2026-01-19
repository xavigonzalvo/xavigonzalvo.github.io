import * as React from "react";
import ResearchProjectCard from "./ResearchProjectCard";

function ResearchProjects() {
  const ttsData = {
    title: "TTS",
    summary: "Developed high-quality text-to-speech synthesis systems, focusing on HMM-based and unit selection methods for real-time speech generation.",
    papers: [
      {
        title: "Recent Advances in Google Real-time HMM-driven Unit Selection Synthesizer",
        description: "Real-time speech synthesis combining HMM and unit selection for production-quality TTS.",
        url: "https://www.researchgate.net/publication/304335754_Recent_Advances_in_Google_Real-time_HMM-driven_Unit_Selection_Synthesizer"
      },
      {
        title: "Towards high-quality next-generation text-to-speech synthesis: A multidomain approach by automatic domain classification",
        description: "Multi-domain TTS approach using automatic domain classification for improved synthesis quality.",
        url: null
      }
    ]
  };

  const automlData = {
    title: "AutoML",
    summary: "Pioneered adaptive neural architecture learning through ensemble methods and automated machine learning frameworks.",
    papers: [
      {
        title: "AdaNet: Adaptive Structural Learning of Artificial Neural Networks",
        description: "Framework for automatically learning neural network architectures through adaptive ensemble learning.",
        url: "http://proceedings.mlr.press/v70/cortes17a.html"
      },
      {
        title: "AdaNet: A Scalable and Flexible Framework for Automatically Learning Ensembles",
        description: "Scalable implementation of AdaNet for production machine learning systems.",
        url: "https://arxiv.org/abs/1905.00080"
      },
      {
        title: "Agnostic Learning with Multiple Objectives",
        description: "Multi-objective optimization framework for agnostic learning scenarios.",
        url: "https://proceedings.neurips.cc//paper/2020/hash/ebea2325dc670423afe9a1f4d9d1aef5-Abstract.html"
      }
    ]
  };

  const llmsData = {
    title: "LLMs",
    summary: "Research on efficient training methods and understanding the theoretical foundations of large language models and transformers.",
    papers: [
      {
        title: "Deep Fusion: Efficient Network Training via Pre-trained Initializations",
        description: "Novel approach to efficiently train deep networks by fusing pre-trained model initializations.",
        url: "https://proceedings.mlr.press/v235/mazzawi24a.html"
      },
      {
        title: "Learning without training: The implicit dynamics of in-context learning",
        description: "Theoretical insights into how transformers learn in-context without explicit parameter updates.",
        url: "https://arxiv.org/abs/2507.16003"
      },
      {
        title: "Transmuting prompts into weights",
        description: "Understanding the relationship between prompts and model parameters in modern transformers.",
        url: "https://arxiv.org/abs/2510.08734"
      }
    ]
  };

  return (
    <div class="sm:px-8 mt-24 md:mt-28">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <header class="max-w-2xl mb-12">
              <h2 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Research projects
              </h2>
              <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                My research spans across speech synthesis, automated machine learning, and large language models.
              </p>
            </header>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <ResearchProjectCard {...ttsData} />
              <ResearchProjectCard {...automlData} />
              <ResearchProjectCard {...llmsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchProjects;
