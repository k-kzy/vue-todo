Vue.component('editor-view', {
  data() {
    return {
      input: {
        text: '',
        date: '',
        tags: ''
      }
    }
  },
  template: `
    <div class="editor-view">
      <div>
        <label>内容：</label>
        <input v-model="input.text" placeholder="メモのタイトル">
      </div>
      <div>
        <label>日付：</label>
        <input type="date" v-model="input.date">
      </div>
      <div>
        <label>タグ：</label>
        <input v-model="input.tags" placeholder="空白区切りで指定">
      </div>
      <div>
        <button @click="save">保存</button>
      </div>
    </div>
  `,
  computed: {
    tagsArr() {
      return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
    }
  },
  methods: {
    save() {
      const data = Object.assign({}, this.input, {tags: this.tagsArr})
      this.$emit('add', data)
    }
  }
})
