<template>
  <v-app>
    <v-toolbar app >
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue-crud-cliente</span>        
      </v-toolbar-title>
      <v-btn
        flat
      >
       <router-link to="/">Lista</router-link> 
      </v-btn>
        <v-btn
        flat
      >
       <router-link to="/create-customer">Novo</router-link> 
      </v-btn>
    </v-toolbar>

    <v-content>
<router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
