import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ResearchProjectCard from "./ResearchProjectCard";
import Container from "./Container";

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
    <Container sx={{ mt: { xs: 12, md: 14 } }}>
      <Box component="header" sx={{ maxWidth: "42rem", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2.25rem", sm: "3rem" }, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, color: "text.primary" }}
        >
          Research projects
        </Typography>
        <Typography sx={{ mt: 3, fontSize: "1rem", color: "text.secondary" }}>
          My research spans across speech synthesis, automated machine learning, and large language models.
        </Typography>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" }, gap: 4 }}>
        <ResearchProjectCard {...ttsData} />
        <ResearchProjectCard {...automlData} />
        <ResearchProjectCard {...llmsData} />
      </Box>
    </Container>
  );
}

export default ResearchProjects;
