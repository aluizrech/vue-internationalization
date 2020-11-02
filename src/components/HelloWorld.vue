<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{$t('home.description')}}
      <br>
      {{$t('home.sub-description.initial')}} <a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener">{{$t('home.sub-description.link')}}</a>.
    </p>

    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      languages: ['br', 'en']
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
