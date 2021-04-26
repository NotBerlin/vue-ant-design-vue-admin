<template>
  <div id="animation">
    <div>
      <h1>使用vue过渡状态</h1>
      <transition name="fade-delay">
        <div v-show="!show">
          <input />
          <button v-on:click="show = true">Toggle</button>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="show">
          <div>hello</div>
          <Animation id="12345678" @close="show = false" />
        </div>
      </transition>
    </div>
    <div style="position: relative">
      <h1>使用css3样式过渡</h1>
      <div class="toggle" refs="div1" id="div1">
        <input />
        <button v-on:click="toggle">Toggle</button>
      </div>
      <div class="toggle" refs="div2" id="div2">
        <div>hello</div>
        <Animation id="12345678" @close="toggle" />
      </div>
    </div>
  </div>
</template>

<script>
import Animation from "./module/animation";

export default {
  name: "animation",
  components: {
    Animation,
  },
  data() {
    return {
      show: false,
      css3show: true,
      div2: document.getElementById("div2"),
      div1: document.getElementById("div1"),
    };
  },
  mounted() {
    this.div2 = document.getElementById("div2");
    this.div1 = document.getElementById("div1");
    this.div2.style.opacity = 0;
    this.div2.style.transform = 'translateX(12px)';
  },
  methods: {
    toggle() {
      this.css3show = !this.css3show;
      if (this.css3show) {
        this.div1.style.opacity = 1;
        this.div2.style.opacity = 0;
        this.div2.style.transform = 'translateX(12px)';
      } else {
        this.div1.style.opacity = 0;
        this.div1.style.transform = 'translateX(12px)';
        this.div2.style.opacity = 1;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-delay-enter-active,
.fade-delay-leave-active {
  transition: opacity 0.5s;
}
.fade-delay-enter, .fade-delay-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.toggle {
  position: absolute;
  transition: all 0.5s;
  -webkit-transition: all 0.5s; /* Safari */
}
</style>