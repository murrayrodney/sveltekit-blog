<!-- prettier-ignore-file -->
<script lang="ts">
	import { theme } from '$lib/theme.svelte';
	import ProjectCarousel from '$lib/components/ProjectCarousel.svelte';

	let { data } = $props();
</script>

<main>
	<div class="hero">
		<img src="/rodney_italy.jpg" alt="Rodney Murray" class="background-photo" />
		<div class="hero-content">
			<div class="profile-circle">
				<img src="/IMG_5984.jpeg" alt="Rodney Murray" />
			</div>
			<div class="text-content">
				<h1>Rodney Murray</h1>
				<div class="grid w-15 grid-cols-2">
					<a
						href="https://www.linkedin.com/in/rodney-murray-308780a2/"
						target="_blank"
						rel="noopener noreferrer"
						style="display: flex; align-items: center; text-decoration: none;"
					>
						<img
							src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
							alt="LinkedIn"
							style="width: 24px; height: 24px; margin-right: 8px;"
						/>
					</a>

					<a
						href="https://github.com/murrayrodney"
						target="_blank"
						rel="noopener noreferrer"
						style="display: flex; align-items: center; text-decoration: none;"
					>
						<img
							src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
							alt="GitHub"
							style="width: 24px; height: 24px; margin-right: 8px;"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>

	<h2>Engineer/Data Scientist</h2>

	<!-- prettier-ignore-start -->
	<p>
		I am a data scientist who started off as a petroleum engineer in Alaska after graduating from
		the University of Wyoming with a degree in Chemical Engineering. After working as an engineer
		for several years I discovered my love for working with data problems which lead me to a senior
		data scientist at ConocoPhillips. After several months of working in that position and
		recognizing an opportunity to build a better foundation in statistics I got a Master of Applied
		Statistics from Colorado State University.
	</p>
	<!-- prettier-ignore-end -->

	<!-- Projects Carousel -->
	<ProjectCarousel projects={data.projects} />

	<h2>Experiences</h2>

	<dl>
		<div class="experience">
			<h3>Senior Data Scientist</h3>
			<p class="company">ConocoPhillips</p>
			<p class="date-location">June 2020 – Present | Helena, MT (Remote)</p>
			<p class="description">
				Lead data science initiatives to optimize oilfield operations, production, and data
				infrastructure using advanced analytics, machine learning, and cloud technologies.
			</p>
			<ul class="responsibilities">
				<li>
					Utilized reinforcement learning with a custom reservoir model for waterflood optimization
					resulting in &gt;$9 million annual increase in revenue.
				</li>
				<li>
					Performed reliability analysis on ESP runtime variations across vendors, providing
					data-driven insights for vendor selection for future wells.
				</li>
				<li>
					Led a team to trial and deploy a machine learning model and optimizer in AWS integrated
					with process control systems for use by operations increasing revenue by &gt;$6 million
					annually.
				</li>
				<li>
					Led a team and developed a model to forecast production rates. Implemented with
					distributed computing to reduce time to insights by &gt;30x.
				</li>
				<li>
					Established as a technical authority in data warehousing technologies (Snowflake, AWS
					Athena, dbt), reducing technical debt and accelerating time to insights. Mentored and
					upskilled engineers, promoting a culture of data excellence.
				</li>
			</ul>
		</div>

		<div class="experience">
			<h3>Voidage Management Coordinator</h3>
			<p class="company">ConocoPhillips</p>
			<p class="date-location">January 2019 – June 2020 | Anchorage, AK</p>
			<p class="description">
				Coordinated waterflood and gas injection operations, leveraging analytics and optimization
				to maximize production and efficiency across assets.
			</p>
			<ul class="responsibilities">
				<li>
					Developed and deployed a surface network model utilizing machine learning and genetic
					algorithms to optimize daily production and injection increasing revenue by &gt;$5 million
					annually from operational changes to injection systems. Presented in <a
						href="https://onepetro.org/SPEATCE/proceedings-abstract/20ATCE/20ATCE/D021S006R002/451260"
						target="_blank"
						rel="noopener noreferrer">SPE-201760-MS.</a
					>
				</li>
				<li>
					Implemented custom optimization algorithms to allocate resources for water alternating gas
					injection conversions leading to improved production and reduced time spent by &gt;4
					hrs./week.
				</li>
				<li>
					Actively shared new data analysis processes with two international business units, leading
					to adoption and implementation of the process in Norwegian assets.
				</li>
			</ul>
		</div>

		<div class="experience">
			<h3>Reservoir Engineer</h3>
			<p class="company">ConocoPhillips</p>
			<p class="date-location">July 2014 – January 2019 | Anchorage, AK</p>
			<p class="description">
				Provided reservoir engineering support for waterflood optimization, project economics, and
				simulation studies to drive value in mature assets.
			</p>
			<ul class="responsibilities">
				<li>
					Evaluated economics and received approval for expense projects totaling &gt;$2 million
					NPV.
				</li>
				<li>
					Utilized an HPC cluster and reservoir simulation to analyze performance of 500 injector
					wells.
				</li>
				<li>
					Led pattern health reviews resulting in decisions leading to a &gt; $6 million annual
					revenue increase.
				</li>
			</ul>
		</div>

		<div class="experience">
			<h3>Engineer</h3>
			<p class="company">ConocoPhillips</p>
			<p class="date-location">July 2014 - October 2016 | Anchorage, AK</p>

			<p class="description">
				Studied historical fill clean outs done with coiled tubing to optimize selection of future
				candidates.
			</p>
			<ul class="responsibilities">
				<li>
					Utilize type pattern and full field reservoir models to optimize selection of current and
					future EOR targets.
				</li>
			</ul>
		</div>
	</dl>

	<h2>Skills</h2>

	<ul class="skills">
		<li class="skill">
			<h3>Python</h3>
			<p>
				Use of Python for scientific computing, machine learning, and data science workflows.
				Familiar with libraries such as Numpy, Pandas, Keras/Tensorflow/ PyMC, Scikit-learn
			</p>
		</li>
		<li class="skill">
			<h3>R</h3>
			<p>
				Use of R for statistical modeling and analysis of experiments. Familiar with the Tidyverse,
				survival modeling, and mixed modeling libraries.
			</p>
		</li>
		<li class="skill">
			<h3>SQL</h3>
			<p>Querying, summarizing, and manipulating large datasets</p>
		</li>
		<li class="skill">
			<h3>Statistics</h3>
			<p>
				Application of statistics in the engineering domain to uncover important relationships and
				inform decisions. Significant utilization of both tradtional (frequentist) and Bayesian
				methods for modeling and analysis.
			</p>
		</li>
		<li class="skill">
			<h3>Maching learning</h3>
			<p>
				Implementation of machine learning algorithms to make better and faster predictions with an
				emphasis in integration of physics based processes.
			</p>
		</li>
		<li class="skill">
			<h3>Reinforcement Learning</h3>
			<p>Leveraged for waterflood optimization with custom built environments.</p>
		</li>
		<li class="skill">
			<h3>AWS</h3>
			<p>
				Use AWS services to integrate new data sources into datalakes and make available to other
				engineers.
			</p>
		</li>
		<li class="skill">
			<h3>Reservoir Engineering</h3>
			<p>
				Expertise in optimization of existing production and injection patterns as a part of complex
				integrated surface networks and extremely faulted reservoirs.
			</p>
		</li>
		<li class="skill">
			<h3>Production Engineering</h3>
			<p>
				Optimization of producing and injecting wells with a focus on complex integrated surface
				networks.
			</p>
		</li>
	</ul>
</main>

<style>
	h2 {
		margin-top: 30px;
		padding-top: 15px;
		border-top: 2px solid var(--border);
		width: 100vw;
		font-size: 50px;
	}

	.skills {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;

		.skill {
			border: 2px solid var(--border);
			padding: 15px;
			border-radius: 15px;
			background-color: var(--surface-4); /* Fallback color added */
		}

		.skill:hover {
			transform: scale(1.05);
		}
	}
	.experience {
		margin-bottom: 20px;
		padding: 15px;
		border: 2px solid var(--border);
		border-radius: 10px;
		background-color: var(--surface-4); /* Fallback color added */
	}

	.experience h3 {
		font-size: 1.5rem;
		margin-bottom: 5px;
		color: var(--primary);
		width: 100%;
	}

	.company {
		font-weight: bold;
		font-size: 1.2rem;
		color: var(--secondary);
	}

	.date-location {
		font-style: italic;
		color: var(--text-muted);
		margin-bottom: 10px;
	}

	.description {
		margin-bottom: 10px;
		line-height: 1.6;
	}

	.responsibilities {
		list-style-type: disc;
		padding-left: 20px;
	}

	.responsibilities li {
		margin-bottom: 8px;
		line-height: 1.5;
	}

	.hero {
		position: relative;
		width: 100%;
		height: 50vh;
		margin-bottom: 2em;
	}

	.hero .background-photo {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
		filter: blur(4px);
		transform: scale(1.1);
	}

	.hero-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		text-align: left;
		color: var(--color-gray-900);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		gap: 2rem;
		background-color: rgba(255, 255, 255, 0.7);
		padding: 1.5rem;
		border-radius: 1.5rem;
	}

	.hero-content .profile-circle {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid white;
		flex-shrink: 0;
	}

	.hero-content .profile-circle img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-content .text-content {
		flex-grow: 1;
	}

	.hero-content h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.background-photo {
		display: block;
		margin-left: auto;
		margin-right: auto;
		object-fit: cover;
		border-radius: 15px;
		height: 50vh;
	}
	.profile-photo {
		display: block;
		margin-left: auto;
		margin-right: auto;
		object-fit: cover;
		border-radius: 15px;
		height: 50vh;
		margin-top: 125px;
	}
</style>
