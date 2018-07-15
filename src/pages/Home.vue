<template>
  <div>
    <div>
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="1024"
                  img-height="480"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide"
                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="https://picsum.photos/1024/480/?image=55" alt="image slot">
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
            ut lacus vel interdum.
          </p>
        </b-carousel-slide>

      </b-carousel>
    </div>
    <div>
      <b-card-group>
        <b-card title="Title"
                img-src="https://placekitten.com/g/300/450"
                img-alt="Img"
                img-top>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>
        <b-card title="Title"
                img-src="https://placekitten.com/g/300/450"
                img-alt="Img"
                img-top>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to additional content.
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>
        <b-card title="Title"
                img-src="https://placekitten.com/g/300/450"
                img-alt="Img"
                img-top>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content
            than the first to show that equal height action.
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>
      </b-card-group>
    </div>
    <v-foot></v-foot>
  </div>

</template>

<script>
  import vFoot from '../components/Footer.vue'
  export default {
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    components: {
      vFoot
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>
