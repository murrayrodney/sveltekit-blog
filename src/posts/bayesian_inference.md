---
title: Bayesian Inference
description: Explanation of Bayesian inference
date: '2025-05-08'
categories:
  - statistics
published: true
---

<script>
    import MeanInference from '../lib/components/mean-inference.svelte'
</script>

# Bayesian Inference: Estimating a Mean with a Normal Prior

If you've read some of my other posts, you know I enjoy digging into statistical models and understanding what they can tell us about the world. One of the most powerful tools I've come across is Bayesian inference. While it can sound intimidating, the core idea is actually pretty intuitive: you start with what you already know (a prior distribution), update that with new data, and end up with a more complete picture (the posterior distribution). This is something I've used in a variety of settings, from analyzing crop yields to forecasting production in petroleum engineering projects.

This all stems from Bayes' Rule, which provides a mathematical framework for updating our beliefs in light of new evidence. Bayes' Rule relates the probability of a hypothesis given observed data (the posterior) to our initial belief about the hypothesis (the prior) and the likelihood of observing the data under that hypothesis. The key equation is:

$$
P(\theta \mid x) = \frac{P(x \mid \theta) P(\theta)}{P(x)}
$$

where $P(\theta \mid x)$ is the posterior probability of the model parameter $\theta$ given our data $x$, $P(x \mid \theta)$ is the likelihood of the data given $\theta$, $P(\theta)$ is the prior probability of $\theta$, and $P(x)$ is the marginal likelihood (a normalizing constant). This rule is the foundation of Bayesian inference, allowing us to **update our knowledge as new data becomes available**.

## The Setup

In this simple example we'll walk though how to estimate the mean value of a distribution. In real life we'll never know the true value, but the beauty of simulations is that we can construct a case that we do and see how close we get. Suppose you have a handful of measurements—maybe it's the yield from a few test plots, or the output from a new process. You suspect the data are normally distributed, but you're not sure what the true mean is. You might have some prior knowledge (maybe from past years, or similar experiments), or you might want to start with a vague guess.

In Bayesian inference, we express our prior belief about the mean as a probability distribution. For the normal distribution, the conjugate prior for the mean (when variance is known) is also a normal distribution. This makes the math work out nicely, and it's easy to update as new data comes in.

For those who are still wondering what it means to be using a distribution for conjugate prior, all we really mean is then we know the posterior distribution also has a closed form. In this case the conjugate prior for the mean of a Normal likelihood, is a normal distribution, which results in another normal distribution for the posterior. In practice we often cannot directly use conjugate distributions since we may not want to make the assumption that our prior knowledge for the mean can be represented with a normal distribution, or more often our model is too complex. This is where samplers from libraries like [PyMC](https://www.pymc.io/welcome.html) or [Stan](https://mc-stan.org/) come into play, to help us generate an approximate sample from the posterior distribution.

## The Model

Here's how it works:

- **Prior:** $\mu \sim N(\mu_0, \sigma_0^2)$ (our belief about the mean before seeing the data)
- **Likelihood:** $x_i \sim N(\mu, \sigma^2)$ (the data, given the mean)
- **Posterior:** $\mu | x \sim N(\mu_n, \sigma_n^2)$ (our updated belief after seeing the data)

Where:

- $\mu_0$ is the prior mean and $\sigma_0^2$ is the prior variance
- $\mu_n$ is the posterior mean and$\sigma_n^2$ is the posterior variance
- $\sigma^2$ is the known variance of the data
- $n$ is the number of data points, $\bar{x}$ is the sample mean

The updated (posterior) parameters are:

$$
\sigma_n^2 = \left( \frac{n}{\sigma^2} + \frac{1}{\sigma_0^2} \right)^{-1}
$$

$$
\mu_n = \sigma_n^2 \left( \frac{n \bar{x}}{\sigma^2} + \frac{\mu_0}{\sigma_0^2} \right)
$$

### Key Takeaways

Some key takeaways that we can get from looking at the equations above (outside of the obvious prior information has an influence on posterior inference):

- As the number of samples grows, our estimate of the posterior for both the mean and the variance rely more on the data gathered than on our prior estimates. Conversely small sample sizes indicate that the posterior will look more like our prior.
- The posterior variance ($\sigma_n^2$) always decreases as we collect more data, reflecting increased certainty in our estimate of the mean.
- If the prior variance ($\sigma_0^2$) is very large (a vague prior), the posterior is dominated by the data, making the Bayesian estimate more similar to the frequentist sample mean.

## Why Use Bayesian Inference?

- **Full Distribution:** Instead of just a point estimate, you get a full distribution for the mean. This is incredibly useful for understanding uncertainty and making better decisions.
- **Incorporate Prior Knowledge:** If you have previous experience or data, you can include it directly in your model. If not, you can use a vague prior (a large prior variance) and let the data speak for itself.
- **Flexible Models:** Bayesian methods let you build models that fit your problem, not the other way around. You can handle missing data, hierarchical structures, or combine multiple sources of information.
- **Cohesive Understanding:** It's easy to update your beliefs as new data comes in, or to combine different datasets for a more complete picture. I've found this especially helpful when working with real-world data that comes from different sources or changes over time.

## A Simple Example: Estimating Incremental Value After a Well Intervention

To make this a bit more concrete, let's consider a scenario from my work in reservoir engineering. Suppose we're interested in the incremental oil production rate after a well intervention. We might have some prior belief about the expected increase based on similar interventions in the past—maybe we think the average uplift is around 40 bopd, but we're not very certain, so we use a prior standard deviation of 10.

Now, after the intervention, we collect 10 **independent** measurements of the incremental value. These measurements are noisy, but we can use them to update our belief about the true mean uplift. The Bayesian approach lets us combine our prior knowledge (from previous wells) with the new data from this well, resulting in a posterior distribution that reflects both sources of information.

This is exactly what the interactive component below is simulating based on the equations above: you can adjust the prior mean and standard deviation, as well as the sample size, to see how your beliefs about the mean change as you gather more data. The prior pulls the estimate toward what you already know, but as you collect more measurements, the data starts to dominate, and your uncertainty decreases.

<MeanInference />

This approach is powerful because it allows you to:

- Quantify uncertainty in your estimates
- Incorporate prior experience or expert knowledge
- Update your understanding as new data arrives
- Make better decisions under uncertainty

I've found this especially useful when working with small sample sizes or when combining information from multiple wells, fields, or even different types of interventions. Bayesian inference gives you a principled way to bring all that information together.

## Final Thoughts

Bayesian inference has become one of my go-to tools for data analysis, whether I'm working on agricultural data, engineering problems, or just trying to make sense of new data. The ability to represent uncertainty, incorporate prior knowledge, and update models as new data arrives makes it a powerful approach for many real-world problems. If you're interested in seeing more code or examples, let me know—I'm always happy to share more!
