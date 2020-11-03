<template>
  <div class="router-container">
    <div class="tool-bar">
      <button
        :class="['btn', { 'is-actived': hideVertical }]"
        @click="activedChange('hideVertical')"
      >
        隐藏竖向滚动条
      </button>
      <button
        :class="['btn', { 'is-actived': hideHorizontal }]"
        @click="activedChange('hideHorizontal')"
      >
        隐藏横向滚动条
      </button>
      <button
        :class="['btn', { 'is-actived': hoverScroll }]"
        @click="activedChange('hoverScroll')"
      >
        hover显示滚动条
      </button>
      <button
        :class="['btn']"
        :style="{ background: color }"
        @click="colorChange"
      >
        滚动条color
      </button>
    </div>
    <div class="container">
      <z-scrollbar
        size="6"
        :min-length-v="0.15"
        right
        :color="color"
        :hoverScroll="hoverScroll"
        :hideVertical="hideVertical"
        :hideHorizontal="hideHorizontal"
        :scroll-left.sync="scrollLeft"
        :scroll-top.sync="scrollTop"
        bigger-move-h="start"
        smaller-move-h="end"
        @vertical-start="start"
        @vertical-end="end"
        @horizontal-start="start"
        @horizontal-end="end"
        @scroll="scrollEvent"
        resize
      >
        <ul class="text-box">
          <li>
            回答 -
            北岛。诗中展现了悲愤之极的冷峻，以坚定的口吻表达了对暴力世界的怀疑。
          </li>
          <li v-for="index in length" :key="index">
            {{ text[index % text.length] }}
          </li>
        </ul>
      </z-scrollbar>
    </div>
  </div>
</template>

<script>
import ZScrollbar from './src/scrollbar.vue'
export default {
  data() {
    return {
      hideHorizontal: false,
      hideVertical: false,
      hoverScroll: false,
      color: 'rgba(0,0,0,0.5)',
      length: 12,
      scrollTop: 0,
      scrollLeft: 0,
      text: [
        '卑鄙是卑鄙者的通行证，',
        '高尚是高尚者的墓志铭。',
        '看吧，在那镀金的天空中，',
        '飘满了死者弯曲的倒影。',
        '冰川纪过去了，',
        '为什么到处都是冰凌？',
        '好望角发现了，',
        '为什么死海里千帆相竞？',
        '我来到这个世界上，',
        '只带着纸、绳索和身影，',
        '为了在审判之前，',
        '宣读那些被判决了的声音：',
        '告诉你吧，世界，',
        '我——不——相——信！',
        '纵使你脚下有一千名挑战者，',
        '那就把我算做第一千零一名。',
        '我不相信天是蓝的，',
        '我不相信雷的回声；',
        '我不相信梦是假的，',
        '我不相信死无报应。',
        '如果海洋注定要决堤，',
        '就让所有的苦水都注入我心中；',
        '如果陆地注定要上升，',
        '就让人类重新选择生存的峰顶。',
        '新的转机和闪闪的星斗，',
        '正在缀满没有遮拦的天空，',
        '那是五千年的象形文字，',
        '那是未来人们凝视的眼睛。',
        '🗣'
      ],
      functionConfig: [
        {
          name: '隐藏横向滚动条',
          value: 'hideVertical',
          onEvent: this.activedChange
        },
        {
          name: '隐藏竖向滚动条',
          value: 'hideHorizontal',
          onEvent: this.activedChange
        }
      ]
    }
  },
  components: {
    ZScrollbar
  },
  methods: {
    start(offset) {
      console.log('到头部了', offset)
    },
    end(offset) {
      console.log('到尾部了', offset)
    },
    scrollEvent(offset) {
      console.log('滚动中', offset)
    },
    activedChange(key) {
      this[key] = !this[key]
    },
    colorChange() {
      this.color =
        '#' +
        (function(color) {
          return new Array(7 - color.length).join('0') + color
        })(((Math.random() * 0x1000000) | 0).toString(16))
    }
  }
}
</script>

<style scoped>
.router-container {
  position: relative;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.container {
  width: 300px;
  height: 280px;
  background: #f6f6f6;
  border: 20px solid #4fc08d;
  white-space: nowrap;
}

.text-box {
  display: inline-block;
}
.text-box > li {
  font-size: 14px;
  line-height: 28px;
}
.text-box > li:nth-child(odd) {
  background-color: #eee;
}
</style>
