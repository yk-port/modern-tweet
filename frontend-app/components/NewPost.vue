<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline mx-auto">Post new Tweet!!</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title"
                  required
                  v-model="postData.title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Body"
                  required
                  v-model="postData.body"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            depressed
            color="error"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            depressed
            color="primary"
            @click="postTweet"
          >
            Post
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'NewPost',
  data () {
    return {
      postData: {
        title: null,
        body: null,
      },
      dialog: false,
    }
  },
  methods: {
    postTweet () {
      this.$store.dispatch(('post/post'), {　params: this.postData }, { root: true })
    },
  },
}
</script>