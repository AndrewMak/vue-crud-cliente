<template>
  <v-container grid-list-xs >
      <form class="mx-5 my-5">
        <v-layout row wrap>
          <v-flex mx-2>
            <v-text-field
              v-model="firstname"
              v-validate="'required'"
              :error-messages="errors.collect('firstname')"
              label="First Name"
              data-vv-name="firstname"
              required
            ></v-text-field>
          </v-flex>
          <v-flex mx-2>
            <v-text-field
              v-model="lastname"
              v-validate="'required'"
              :error-messages="errors.collect('lastname')"
              label="Last Name"
              data-vv-name="lastname"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
  
        <v-layout row wrap>
          <v-flex mx-2>
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>
          </v-flex>
          <v-flex mx-2>
            <v-text-field
              v-model="phone"
              v-validate="'required'"
              :error-messages="errors.collect('phone')"
              label="Phone"
              data-vv-name="phone"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        
        <v-layout>
          <v-flex lg6 offset-lg3>
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
          </v-flex>
        </v-layout>

        <v-layout align-center justify-center row>
          <v-btn color="red" dark @click="submit">submit</v-btn>
        </v-layout>
        
      </form>
    </v-container>
</template>

<script>
    export default {
        $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address'
      },
      custom: {
        firstname: {
          required: () => 'First Name can not be empty'
        },
        lastname: {
          required: () => 'Last Name can not be empty'
        }
      }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
    }
  }
    }
</script>

<style lang="css" scoped>
.item {
  margin: 0;
  padding: 0;
  height: 10px;
}
</style>