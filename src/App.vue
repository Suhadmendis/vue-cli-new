<template>
  <v-app app>
    <!-- <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
    >
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    > -->
      <!-- <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    <!-- </v-navigation-drawer> -->

    <!-- <v-navigation-drawer
      v-model="left"
      fixed
      temporary
    ></v-navigation-drawer> -->

    <br><br><br><br>

    
      <HelloWorld>
       </HelloWorld>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    ></v-navigation-drawer>
   



    <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>



<script>
import HelloWorld from './components/inputform';
// import HelloWorld from './components/inputform1';
// import HelloWorld from './components/inputform2';
// import HelloWorld from './components/inputform3';
// import HelloWorld from './components/inputform4';
// import HelloWorld from './components/inputform5';
// import HelloWorld from './components/inputform6';
// import HelloWorld from './components/inputform7';
// import HelloWorld from './components/inputform8';
// import HelloWorld from './components/inputform9';


// import HelloWorld from './components/header';
// import HelloWorld from './components/footer';
// import HelloWorld from './components/HelloWorld';
  export default {
    name: 'App',
  components: {
    HelloWorld
  },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false
    }),
  }
</script>
