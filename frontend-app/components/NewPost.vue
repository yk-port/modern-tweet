<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <pre>{{ $data.postData }}</pre>
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
    async postTweet () {
      // [actionsを使った投稿方法]moduleで作ったstoreに対してdispatchする方法
      // 第一引数：module名/actions名　第二引数：actionsに渡す情報（オプション型）　第三引数：moduleにしたstoreにdispatchしたい時に指定する　　
      // this.$store.dispatch(('post/post'), { params: this.postData }, { root: true })
      const url = '/api/posts';
      const post = {
        title: this.postData.title,
        body: this.postData.body,
      }
      await this.$axios.$post(url, {post})
        .then(res => console.log(res))
        .catch(error => console.log(error));
      this.dialog = false;
    },
  },
}
</script>