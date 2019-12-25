<template>
  <Layout>
    <div class="text-center">
      <g-image src="~/assets/images/profile_new.png" class="profile_picture green mx-2 noselect" />

      <g-image src="~/assets/images/profile_new.png" class="profile_picture blue mx-2 noselect" />
      <g-image src="~/assets/images/profile_new.png" class="profile_picture red mx-2 noselect" />
    </div>

    <p class="about_text mt-10">
      My name is Dionisis (Διονύσης, IPA [ðˌionˈɪsis]), and I'm currently on a journey around Data and Intelligence.
      <br />I am interested in naturally emergent & artificially derived intelligence, human-oriented cybernetics & interfaces and
      generative and algorithmic design and privacy.
      <br />
    </p>
    <p class="about_text mt-2">
      In my spare time I make things that convolve
      <a href="/tag/art" style="text-decoration:none;">art</a> and
      <a>technology</a>. I like to think about post-humanism, existentialism, and cyberoptimism.
      I am exporting some of this neural output in my
      <a
        class="more"
        href="https://www.subneural.space"
        style="text-decoration:none;"
      >subneural space.</a>
    </p>
    <p class="about_text mt-2" style="line-height: 2;">
      I also like to do some of:
      <g-image src="~/assets/images/snow.png" class="activity_icon mx-3" />
      <g-image src="~/assets/images/kite.png" class="activity_icon mx-3" />
      <g-image src="~/assets/images/sky.png" class="activity_icon mx-3" />and have a
      <g-image src="~/assets/images/shiba_inu.png" class="activity_icon mx-3" />named
      <g-image src="~/assets/images/cookie.png" class="activity_icon mx-3" />

      <!-- <span style="font-size: 1.5em;">&circledast;</span> [ ] -->
    </p>
    <br />

    <h2>Work Experience</h2>
    <ul class="work_list">
      <li>
        <p class="work_text">
          <span class="work_date mr-10">06/2019 - 10/2019</span> Research Associate -
          <a
            href="http://biosignal.med.upatras.gr/wordpress/research"
            style="text-decoration:none;"
            target="_blank"
          >Biosignal Lab</a> &
          <a href="http://www.vvr.ece.upatras.gr/" style="text-decoration:none;">VVR Lab</a>
        </p>
      </li>
      <li>
        <p class="work_text">
          <span class="work_date mr-10">08/2018 - 10/2019</span> Research Associate -
          <a
            href="https://www.researchgate.net/lab/Christos-Makris-Lab-2"
            style="text-decoration:none;"
            target="_blank"
          >Data Science Lab</a>
        </p>
      </li>
      <li>
        <p class="work_text">
          <span class="work_date mr-11">01/2017 - 10/2019</span> Application Software Engineer -
          <a
            href="https://www.phenom-world.com/"
            style="text-decoration:none;"
            target="_blank"
          >Thermofisher Scientific</a>
        </p>
      </li>
    </ul>
    <h2>Education</h2>
    <ul class="work_list">
      <li>
        <p class="work_text">
          <span class="work_date mr-10">10/2012 - 09/2019</span>
          <a
            href="https://www.ceid.upatras.gr/"
            style="text-decoration:none;"
            target="_blank"
          >Integrated MSc Computer Science | University of Patras Greece</a>
        </p>
      </li>
      <li>
        <p class="work_text">
          <span class="work_date mr-10">08/2019 - 11/2019</span>
          <a
            href="https://graduation.udacity.com/confirm/CLUFES3C"
            style="text-decoration:none;"
            target="_blank"
          >Google's Artificial Intelligence Nanodegree | Google & Udacity</a>
        </p>
      </li>
      <li>
        <p class="work_text">
          <span class="work_date mr-5">06/2008 - 08/2008</span>
          Stanford University Summer School | London England
        </p>
      </li>
    </ul>
    <h2>Research Experience</h2>
    <ul class="work_list">
      <li>
        <p class="work_text">
          <span class="work_date mr-12">October - 2019</span>
          <a
            href="https://www.researchgate.net/publication/335135907_Recognition_of_breathing_activity_and_medication_adherence_using_LSTM_Neural_Networks"
            style="text-decoration:none;"
            target="_blank"
          >
            Pettas D.*, Nousias S.,* Zacharaki T., Moustakas K., Recognition of breathing activity and medication adherence using LSTM Neural Networks.
            IEEE. BIBE 2019. International Conference on BioInformatics and BioEngineering.
          </a>
        </p>
      </li>
      <li>
        <p class="work_text">
          <span class="work_date mr-12">May - 2019</span>
          <a
            href="https://link.springer.com/chapter/10.1007%2F978-3-030-19823-7_42"
            style="text-decoration:none;"
            target="_blank"
            class="ml-7"
          >
            Makris C., Pettas D.*, Pispirigos G.* Distributed Community Prediction for Social Graphs Based on Louvain Algorithm.
            Springer. AIAI 2019. Artificial Intelligence Applications and Innovations. IFIP Advances in Information and Communication Technology.
          </a>
        </p>
      </li>
    </ul>
    <h5>
      Detailed resume
      <a
        href="https://drive.google.com/file/d/1pPUYv7y6r-7N1GaxZ7LLy2w3kaSfKtKz/view"
        style="text-decoration:none;"
        target="_blank"
      >here.</a>
    </h5>
  </Layout>
</template>


<script>
export default {};
</script>

<style lang="scss">
.work_list {
  list-style-type: none;
}
.work_date {
  font-weight: 100;
}
.work_text {
  font-size: 0.9em;
}
.profile_picture {
  width: 100px;

  border-radius: 50%;
}
.canvas {
  width: 100px;
  height: auto;
}
.blue {
  filter: sepia(100%) hue-rotate(165deg) saturate(250%);
}

.red {
  filter: sepia(100%) hue-rotate(310deg) saturate(250%);
}
.green {
  filter: sepia(100%) hue-rotate(69deg) saturate(250%);
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
.activity_icon {
  height: 30px;
  width: auto;
}
.about_text {
  font-size: 0.9em;
  font-weight: 500;
}
</style>