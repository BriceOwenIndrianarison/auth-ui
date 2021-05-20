<template>
  <q-page class="flex flex-center">
    <q-card
      square
      style="width: 400px; padding:50px"
    >
      <q-card-section>
        <div class="text-h6 text-center" style="font-family: 'Arima'; opacity: 0.7; font-size: 20px;">
          Vos identifiants d'accès
        </div>
      </q-card-section>

      <q-form
        class="q-gutter-md"
        @submit.prevent="onSubmit"
      >
        <q-card-section>
          <q-input
            id="email"
            v-model.trim="email"
            type="email"
            label="Email"
            :rules="validations['email']"
            lazy-rules
            autofocus
            rounded
            outlined
            dense
            class="full-width q-mb-md"
          />
          <q-input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Mot de passe"
            :rules="validations['password']"
            lazy-rules
            rounded
            outlined
            dense
            class="full-width q-mb-md"
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
          <br>
        </q-card-section>
        <router-link to="/password/forgot">
          <a class="forgottenPass">Forgot password</a>
        </router-link>
        <q-card-actions>
          <q-btn
            rounded
            dense
            label="Connexion"
            color="primary"
            :loading="loading"
            type="submit"
            class="full-width"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import isEmail from 'validator/es/lib/isEmail'

export default {
    setup() {
        const email = ref('')
        const password = ref('')
        const loading = ref(false)
        const showPassword = ref(false)
        const validations = {
          email: [
            val => !!val || "L'adresse email doit être fourni",
            val => isEmail || 'Email non valide'
          ],
          password: [
            val => !!val || 'Le mot de passe doit être fourni'
          ]
        }

        const onSubmit = async () => {
            console.log('submit...')
            const data = {
                auth: { email: email.value, password: password.value },
            }

            console.log(data)
            let response = "";
            try {
                response = await axios.post("https://api.sowellapp.com/tokens", data);
                if (response.status == "201") {
                    console.log(response)
                }
            } catch (err) {
                
            }
        }

        return {
            email,
            password,
            loading,
            showPassword,
            validations,
            onSubmit
        }
    },
}
</script>