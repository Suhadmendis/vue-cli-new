<template>
  <form>
    <v-text-field
      v-model="name"
      v-validate="'required|max:10'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      v-validate="'required'"
      :items="items"
      :error-messages="errors.collect('select')"
      label="Select"
      data-vv-name="select"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      v-validate="'required'"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="Option"
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>
<script src="./inputform4.js"></script>
<style src="./inputform4.scss" scoped lang="scss"></style>

