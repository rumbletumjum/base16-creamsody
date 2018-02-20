var palette = {
  "turquoise4":            "#61ACBB", "turquoise4-xterm":      "#5fafaf",
  "bright_red": "fb4933",
  "bright_blue": "#419foo",
  "neutral_blue": "#499cb0"
};

window.onload=function(){
  var app = new Vue({
    el: "#app",
    data: {
      paletteGroups: [
        {
          title: "BRIGHT COLORS",
          prefix: "bright_",
          colors: [
            "bright_red",
            "bright_blue",
            "neutral_blue"
          ]
        },
      ]
    }
  });
};

Vue.component("palette-group", {
  props: ["title", "colors", "prefix"],
  template: `<div class="palette-group" v-on:click="makeImg">
               <h3>{{title}}</h3>
               <swatch v-for="swatch in colors"
                       v-bind:prefix="prefix"
                       v-bind:content="swatch">
               </swatch>
               <div class="separator"></div>
               <swatch v-for="swatch in colors"
                       is-xterm="true"
                       v-bind:prefix="prefix"
                       v-bind:content="swatch">
               </swatch>
               <div class="group-separator"></div>
             </div>
`,
  methods:{
    makeImg: function(e){
      html2canvas(e.target, {
        onrendered: function(canvas) {
          document.body.appendChild(canvas);
        },
        background: undefined
      });
    }
  }
});

Vue.component("swatch", {
  props: ["content", "isXterm", "prefix"],
  template: `<div class="creamsody-swatch">
               <div v-bind:class="cssClass">
                 <div class="content">{{unprefixed}}</div>
                 <div class="color-label">{{color}}</div>
                 <div class="xterm" v-if="isXterm">Xterm 256</div>
               </div>
               <div v-bind:class="cssClassAfter"></div>
             </div>
`,
  computed: {
    cssClass: function(){
      return `creamsody-${this.content}${this.isXterm == "true" ? "-xterm" : ""}`;
    },
    cssClassAfter: function(){
      return `${this.cssClass}-after`;
    },
    color: function(){
      return palette[`${this.content}${this.isXterm == "true" ? "-xterm" : ""}`];
    },
    unprefixed: function(){
      return this.content.replace(this.prefix, "");
    }
  }
});
