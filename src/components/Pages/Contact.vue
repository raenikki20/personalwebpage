<template>
  <div id="Contact">
    <b-row align-h="center">
      <b-col cols="11" class="titleBox">
        <h1>Go Ahead, Ask Me Something</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center formBoxRow " align-w="center">
      <b-col cols="10" class="formBox">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col sm="12" md="12" lg="6">
              <b-form-group>
                <div class="formLabels">First Name</div>
                <b-form-input id="firstname" type="text" v-model="form.first" required placeholder="John"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="12" lg="6">
              <b-form-group>
                <div class="formLabels">Last Name</div>
                <b-form-input id="lastname" type="text" v-model="form.last" required placeholder="Doe"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="12" lg="12">
              <b-form-group>
                <div class="formLabels">Email</div>
                <b-form-input id="email" type="email" v-model="form.email" required placeholder="johndoe@example.com"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" md="12" lg="12">
              <b-form-group>
                <div class="formLabels">Message</div>
                <b-form-textarea id="message" type="text" v-model="form.message" required placeholder="Lets have a chat..." :rows="6" :max-rows="12">></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button type="submit" class="formLabels submit">Send</b-button>
            </b-col>
          </b-row>
        </b-form>
        <p>Don't worry, your email is safe with me</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Go Ahead, Ask Me Something',
      form: {
        first: '',
        last: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.onReset()
    },
    onReset () {
      /* Reset our form values */
      this.form.first = ''
      this.form.last = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>

<style scoped>
  #Contact{
    text-align: center;
  }
  p {
    color: white;
  }
  .formBox {
    background-color: #D3D3D3;
    padding: 50px;
    border-radius: 50px;
    margin: 0px 20px 50px 20px;
  }
  .formLabels {
    background-color: #5D99B6;
    margin: 15px 0px 15px 0px;
    padding: 7px;
    border-radius: 25px;
    color: white;
    font-size: 20px;
  }
  .form-control {
    border-radius: 25px;
    padding: 7px 7px 7px 17px;
    font-size: 16px;
  }
  .form-group {
    margin-bottom: 0px;
  }
  .submit {
    background-color: #5D99B6;
    width: 100%;
    border-radius: 25px;
  }
</style>
