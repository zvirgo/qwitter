<template>
  <q-page>
    <div class="row items-end q-col-gutter-md q-py-lg q-px-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newQweet"
          placeholder="what's happening"
          counter
          autogrow
          maxlength="280"
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          unelevated
          rounded
          no-caps
          :disable="!newQweet"
          color="primary"
          label="Qweet"
          class="q-mb-lg"
        />
      </div>
    </div>
    <q-separator  size="10px" color="grey-2" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newQweet: "",
    };
  },
});
</script>
