<template>
  <q-page class="relaive-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="row items-end q-col-gutter-md q-py-lg q-px-md">
        <div class="col">
          <q-input
            bottom-slots
            v-model="newQweetConent"
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
            :disable="!newQweetConent"
            color="primary"
            label="Qweet"
            class="q-mb-lg"
            @click="addNewQweet"
          />
        </div>
      </div>
      <q-separator size="5px" color="grey-2" />
      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item v-for="qweet in qweets" :key="qweet.date" class="q-py-md">
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Bahareh Zeinali</strong>
                <span class="text-grey-7">
                  @zeinali_bahareh &bull; <br class="lt-md" />{{
                    formatDistance(qweet.date, new Date())
                  }}
                </span>
              </q-item-label>
              <q-item-label class="text-body1">
                {{ qweet.content }}
              </q-item-label>
              <div class="row justify-between q-mt-sm qweet-icons">
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="far fa-comment"
                  size="sm"
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fas fa-retweet"
                  size="sm"
                />
                <q-btn flat round color="grey" icon="far fa-heart" size="sm" />
                <q-btn
                  flat
                  round
                  color="grey"
                  icon="fas fa-trash"
                  size="sm"
                  @click="deleteQweet(qweet)"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { formatDistance } from "date-fns";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newQweetConent: "",
      qweets: [],
      formatDistance,
    };
  },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetConent,
        date: Date.now(),
      };
      this.qweets.unshift(newQweet);
      this.newQweetConent = "";
    },
    deleteQweet(qweet) {
      let dateToDelete = qweet.date;
      let index = this.qweets.findIndex((qweet) => qweet.date === dateToDelete);
      this.qweets.splice(index, 1);
    },
  },
});
</script>
<style lang="sass">
.qweet-icons
  margin-left: -5px
</style>
