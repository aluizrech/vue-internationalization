<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Apenas uma demonstração simples de como funciona a internacionalização no VueJS
      <br>
      Confira a documentação oficial <a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener">vue-i18n</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
