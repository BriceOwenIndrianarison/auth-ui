<template>
    <q-page padding class="row justify-center">
        <div class="row q-pt-lg justify-center" ref="top">
      <div class="col-12 text-center q-pt-xl">
        <p style="font-family: 'Arima'; opacity: 0.7; font-size: 20px;">
          Veuillez saisir vos identifiants d'accès
        </p>
      </div>
      <div class="col-10 offset-1 q-pb-sm">
        <form>  
            <q-input
                rounded
                outlined
                label="Email"
                type="email"
                class="full-width q-mb-md"
                dense
                v-model="email"
            />
            <q-input
                rounded
                outlined
                label="Mot de passe"
                type="password"
                class="q-mb-md"
                dense
                v-model="password"
            />
          <div class="forgottenPass">
            <q-btn
              no-caps
              flat
              dense
              label="Mot de passe oublié ?"
            />
          </div>
        </form>
      </div>
      <div class="col-12 text-center">
        <q-btn rounded color="primary" @click="submit">Connexion</q-btn>
      </div>
    </div>
    </q-page>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const email = ref('')
        const password = ref('')
        const isLoading = ref(false)

        const submit = async () => {
          isLoading.value = true
          await store.dispatch('auth/login', { email: email.value, password: password.value })
          isLoading.value = false
        }

        return {
          email,
          password,
          submit
        }
    },
}
</script>