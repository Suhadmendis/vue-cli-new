<template>
  <v-container>
    <v-row

      justify="space-between"
    >
      <v-col
        cols="12"
        md="4"
      >
        <v-form ref="form">
          <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="First name"
          ></v-text-field>
        </v-form>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-slider
          v-model="max"
          label="Max characters"
        >
        </v-slider>

        <v-checkbox
          v-model="allowSpaces"
          label="Allow spaces"
        ></v-checkbox>

        <v-text-field
          v-model="match"
          label="Value must match"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script src="./inputform2.js"></script>
<style src="./inputform2.scss" scoped lang="scss"></style>

