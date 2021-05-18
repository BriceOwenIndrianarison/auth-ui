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
            />
            <q-input
                rounded
                outlined
                label="Mot de passe"
                type="password"
                class="q-mb-md"
                dense
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
        <q-btn rounded color="primary">Connexion</q-btn>
      </div>
    </div>
    </q-page>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>