<template>
  <div>
    <template>
      <v-container>
        <v-card elevation="3" class="mx-auto my-12" max-width="600">
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Correo Electronico"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                @click:append="show1 = !show1"
                required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="buttonLogin"
              >
                Ingresar
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </template>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data: () => ({
    email: "",
    password: "",
    emailRules: [
      (v) => !!v || "Ingresa un correo correcto",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    rules: {
      required: (value) => !!value || "Ingresa una contraseña correcta",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    buttonLogin() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$store.dispatch("defineCurrentUser", {
            email: response.user.email,
          });
          this.$router.push("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
