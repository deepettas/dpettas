<template>
    <svg class="LightPanelsvg" >
      <defs>
        <filter id="glow" x="-50%" y="-50%" height="500%" width="500%">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
        </filter>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
      <path id="path" fill="none" stroke="var(--bg-color)"  stroke-width="20" filter="url(#glow)" />
      <path
        id="path2"
        fill="none"
        stroke="var(--bg-color)"
        stroke-opacity="0.0"
        stroke-linejoin="round"
        stroke-linecap="round"
        filter="url(#goo)"
      />
    </svg>

    <!-- <div id="setLight">
      set Light length/speed
      <select onchange="setLLenght(this)">
        <option value="7">7</option>
        <option selected="selected" value="25">20</option>
        <option value="50">50</option>
      </select>
    </div> -->
</template>



<script>
export default {
  mounted() {
    /* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */

    var p1 = document.getElementById("path"),
      p2 = document.getElementById("path2"),
      np = 100,
      M = "M",
      ptdata = [];
    document.addEventListener("mousemove", function() {
      move(event);
    });
    document.addEventListener("touchmove", function() {
      event.preventDefault();
      move(event.targetTouches[0]);
    });
    function move(e) {
      ptdata.push([e.pageX, e.pageY]);
      if (ptdata.length > np) {
        removeD();
      }
      pUpdate();
    }
    var ticker = new com.greensock.Ticker(45);
    ticker.addEventListener("tick", removeD);
    function removeD() {
      if (ptdata.length > 1) {
        ptdata.shift();
        pUpdate();
      }
    }
    function pUpdate() {
      p2.setAttribute("stroke-width", (ptdata.length / np) * 4.5);
      var pathD = M + ptdata.join(" ");
      p1.setAttribute("d", pathD);
      p2.setAttribute("d", pathD);
    }
    function setLLenght(X) {
      np = X.value;
    }
    /* a Pen by Diaco m.lotfollahi  : https://diacodesign.com */
  }
};
</script>


<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Oswald);
.LightPanelsvg {
    user-select: none;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/Logo_black.png');
    background-color: var(--bg-color);
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    cursor: none;
}

// #text {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   font-family: "Oswald", tahoma;
//   color: rgb(10, 10, 10);
//   font-size: 110px;
//   text-align: center;
//   white-space: nowrap;
//   text-shadow: -3px -3px 0 rgba(10, 10, 10, 0.5),
//     3px -3px 0 rgba(10, 10, 10, 0.5), -3px 3px 0 rgba(10, 10, 10, 0.5),
//     3px 3px 0 rgba(10, 10, 10, 0.5);
// }



#setLight {
  position: absolute;
  left: 20px;
  top: 15px;
  font-size: 1em;
  color: #fff;
  font-family: sans-serif;
  line-height: 30px;
}
#setLight span {
  color: silver;
}

#DiacoDesignLink,
#pens {
  color: #fff;
}
</style>