<template>
<section>
    <div aria-labelledby="main-title" class="home">
        <header class="hero"><img src="https://attachments.cbd.int/cbd-logo-en.svg" alt="hero">
          <h1 id="main-title">Action Agenda Components </h1>
          <p class="description">
            Is a modular system of independent <b>(copy and paste)</b> software components which together form an Action platform. <i>Installed in the same manner as an embeded youtube video.</i> The Action platform can be used to acquire, filter and showcase Actions for your initiative, programme or organization's environmental cause
          </p>
          <p class="action"><a href="/action-agenda-components/components/" class="nav-link action-button">Get Started →</a></p>
        </header>
        <div class="features">
          <div class="feature">
            <h2>Simplicity First</h2>
            <p>Set up your own platform, in minutes without any technical knowledge.  As easy as a couple of facebook posts.</p>
          </div>
          <div class="feature">
            <h2>Open Source</h2>
            <p>Need a new feature?  Contribute to the open source project, instead of developing an entire platform to suit one need. </p>
          </div>
          <div class="feature">
            <h2>Efficiency &amp; Sustainability</h2>
            <p>Thousans of organizations are aquiring Actions for thier environmental causes.  100's have created thier own tools and displays.  Lets utalize the same tool saving resources and reducing waiste.</p>
          </div>
        </div>
    </div>

    <ClientOnly>
        <div class="particlesCont">
          <vue-particles class="particles"
            color="#000000"
            :particleOpacity="0.7"
            linesColor="#000000"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="5"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push">
          </vue-particles>
        </div>
      </ClientOnly>
    </section>
</template>

<script>

export default {
  name:'Particles'
}
</script>

<style type="text/css">
.footer{
  min-width: 100%;
}
.noUnderLine {text-decoration: none;}
.outer-cont {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  border: red solid 1px;
}
.inner-cont {
  background-color: rgba(255,255,255,.8);
  padding: 15px 25px;
  width: 100%;
  max-width: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 40%;
  z-index: 10;
}
.particles-cont {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

.particles {
  width: 100%;
  height: 1100px;
}


.home {
  position:absolute;
  background-color: rgba(255,255,255,.8);
  padding: 0 0 0 0;
  max-width: 960px;
  /* margin: 0px auto; */
  display: block;
left: 0;
right: 0;
margin-top: -20px;
margin-left: auto;
margin-right: auto;
}
.home .hero {
  text-align: center;
}
.home .hero img {
  max-width: 100%;
  max-height: 280px;
  display: block;
  margin: 3rem auto 1.5rem;
}
.home .hero h1 {
  font-size: 3rem;
}
.home .hero h1,
.home .hero .description,
.home .hero .action {
  margin: 1.8rem auto;
}
.home .hero .description {
  max-width: 35rem;
  font-size: 1.6rem;
  line-height: 1.3;
  color: #6a8bad;
}
.home .hero .action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  -webkit-transition: background-color 0.1s ease;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
.home .hero .action-button:hover {
  background-color: #4abf8a;
}
.home .features {
  border-top: 1px solid #eaecef;
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: start;
          align-items: flex-start;
  align-content: stretch;
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.home .feature {
  -webkit-box-flex: 1;
          flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
}
.home .feature h2 {
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: none;
  padding-bottom: 0;
  color: #3a5169;
}
.home .feature p {
  color: #4e6e8e;
}
.home .footer {
  padding: 2.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  color: #4e6e8e;
}
@media (max-width: 719px) {
.home .features {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
}
.home .feature {
    max-width: 100%;
    padding: 0 2.5rem;
}
}
@media (max-width: 419px) {
.home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.home .hero img {
    max-height: 210px;
    margin: 2rem auto 1.2rem;
}
.home .hero h1 {
    font-size: 2rem;
}
.home .hero h1,
  .home .hero .description,
  .home .hero .action {
    margin: 1.2rem auto;
}
.home .hero .description {
    font-size: 1.2rem;
}
.home .hero .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
}
.home .feature h2 {
    font-size: 1.25rem;
}
}
</style>