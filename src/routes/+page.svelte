<!-- prettier-ignore-file -->
<script lang="ts">
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

	<h2>Data Scientist/Engineer</h2>

	<!-- prettier-ignore-start -->
	<p>
		Senior Data Scientist with 11+ years of experience and a petroleum engineering background,
		skilled at architecting scalable data platforms (Snowflake, dbt, AWS) and deploying ML/AI
		solutions that drive multimillion-dollar impacts. Holds a degree in Chemical Engineering from
		the University of Wyoming and a Master of Applied Statistics from Colorado State University.
	</p>
	<!-- prettier-ignore-end -->

	<!-- Projects Carousel -->
	<div style="width: 100vw;">
		<ProjectCarousel projects={data.projects} />
	</div>

	<h2>Experiences</h2>

	<dl>
		<div class="experience">
			<h3>Senior Data Scientist</h3>
			<p class="company">ConocoPhillips</p>
			<p class="date-location">07/2014 - Present | Helena, MT (Remote)</p>
			<p class="description">
				Lead data science initiatives across multiple functions to optimize oilfield operations,
				production, and data infrastructure using advanced analytics, machine learning, and cloud
				technologies.
			</p>
			<ul class="responsibilities">
				<li>
					Increased annual revenue by &gt;$9 million through utilization of reinforcement learning
					with a Python based environment for waterflood optimization.
				</li>
				<li>
					Added &gt;$6 million of annual revenue by deploying a neural network combined with a
					genetic algorithm for optimization of production wells. Developed a robust deployment
					pipeline integrating the AWS Sagemaker deployment and process control environments for
					seamless operational use.
				</li>
				<li>
					30x increase in speed of production rate forecasting while maintaining forecast accuracy
					enabled engineers to analyze access results in near real-time for field analysis. This was
					accomplished through the development of a deep learning model deployed via Ray for
					distributed computing and utilizing AWS S3 and Athena for data storage and querying.
				</li>
				<li>
					Reduced code volume and complexity by 30% and developed robust CI/CD pipelines for 5 key
					projects by refactoring Python-based data pipelines to leverage Snowflake and dbt. The
					effort streamlined processes and established a culture of technical excellence in the team
					through targeted mentorship and upskilling.
				</li>
				<li>
					Projected 40-60 hours/month time savings through implementation of simplified well
					performance workflows built in SvelteKit and JavaScript.
				</li>
				<li>
					Identified and piloted dbt Cloud for Snowflake data transformations, driving corporate
					approval to standardize dbt workflows with GitHub for version control and robust CI/CD
					pipelines.
				</li>
			</ul>
		</div>
		<div class="experience">
			<h3>Voidage Management Coordinator</h3>
			<p class="company">ConocoPhillips</p>
			<p class="date-location">Anchorage, AK</p>
			<p class="description">
				Coordinated waterflood and gas injection operations, leveraging analytics and optimization
				to maximize production and efficiency across assets.
			</p>
			<ul class="responsibilities">
				<li>
					&gt;$5 million annual increase in revenue from operational changes. Accomplished by
					collaborating in a multidisciplinary team to deploy a deep learning network coupled with a
					genetic algorithm for production optimization analysis by engineers. Published in <a
						href="https://onepetro.org/SPEATCE/proceedings-abstract/20ATCE/20ATCE/D021S006R002/451260"
						target="_blank"
						rel="noopener noreferrer">SPE-201760-MS</a
					>.
				</li>
				<li>
					Implemented custom optimization algorithms to allocate resources for water alternating gas
					injection conversions leading to improved production and reduced time spent by &gt;4
					hrs./week.
				</li>
				<li>
					Shared data analysis processes and BI tools for analysis of streamlines simulation results
					with two international business units resulting in adoption in Norwegian assets.
				</li>
				<li>
					Provide data-driven insights to engineers for injector performance through the maintenance
					and analysis of results from a reservoir simulation model.
				</li>
			</ul>
		</div>
		<div class="experience">
			<h3>Reservoir Engineer</h3>
			<p class="company">ConocoPhillips</p>
			<p class="date-location">Anchorage, AK</p>
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
					Reduced time to insight of &gt;1000 wells via utilization of reservoir simulation on a HPC
					cluster.
				</li>
				<li>
					Led pattern health reviews resulting in decisions leading to a &gt; $6 million annual
					revenue increase.
				</li>
			</ul>
		</div>
	</dl>

	<h2>Education</h2>
	<ul class="skills">
		<li class="skill">
			<h3>Master of Applied Statistics</h3>
			<p>Colorado State University &bull; GPA: 4.0 &bull; 08/2021 - 05/2024</p>
		</li>
		<li class="skill">
			<h3>B.S. Chemical Engineering</h3>
			<p>University of Wyoming &bull; GPA: 3.74 &bull; 08/2010 - 05/2014</p>
		</li>
	</ul>

	<h2>Skills</h2>

	<ul class="skills">
		<li class="skill">
			<h3>AWS (Sagemaker, Athena, S3)</h3>
			<p>
				Integrated S3, Athena, and Sagemaker to build scalable data pipelines, deploy ML models, and
				enable real-time analytics for oilfield operations.
			</p>
		</li>
		<li class="skill">
			<h3>CI/CD</h3>
			<p>
				Developed and maintained CI/CD pipelines for automated testing and deployment of data
				science and analytics projects, ensuring rapid and reliable delivery.
			</p>
		</li>
		<li class="skill">
			<h3>dbt</h3>
			<p>
				Designed and managed data transformation workflows in dbt for Snowflake, standardizing
				analytics engineering and enabling robust version control and CI/CD processes with GitHub.
			</p>
		</li>
		<li class="skill">
			<h3>Distributed Computing</h3>
			<p>
				Leveraged Ray to accelerate model training and inference, reducing time to insight for large
				datasets.
			</p>
		</li>
		<li class="skill">
			<h3>Docker</h3>
			<p>
				Containerized data science applications for consistent development, testing, and deployment
				across environments.
			</p>
		</li>
		<li class="skill">
			<h3>Python</h3>
			<p>
				Developed machine learning and Bayesian models for production optimization and forecasting
				using PyMC, scikit-learn, and Keras/TensorFlow.
			</p>
		</li>
		<li class="skill">
			<h3>Snowflake</h3>
			<p>
				Architected and optimized cloud data warehouses in Snowflake to support analytics,
				reporting, and machine learning workflows.
			</p>
		</li>
		<li class="skill">
			<h3>SQL</h3>
			<p>
				Designed and executed complex SQL queries for data extraction, transformation, and analysis
				across large-scale datasets.
			</p>
		</li>
		<li class="skill">
			<h3>SvelteKit</h3>
			<p>
				Built interactive web applications and internal tools for engineering workflows using
				SvelteKit and JavaScript.
			</p>
		</li>
		<li class="skill">
			<h3>Git</h3>
			<p>
				Used Git, GitHub, and GitLab for version control, collaboration, and CI/CD integration in
				analytics and engineering projects.
			</p>
		</li>
		<li class="skill">
			<h3>Terraform</h3>
			<p>
				Provisioned and managed cloud infrastructure as code using Terraform for reproducible and
				scalable deployments of ML infrastructure.
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
		font-size: var(--font-size-fluid-2);
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
</style>
