<template>
<html>
  <body id="bootstrap-overrides">
      
    <main class="main">

        <section class="section">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <div id="container-round">
          <vue-pdf-embed 
          :page="page"
          :source="pdf_url" />
        </div>


      <!-- CARGA ANÁLISIS A) -->
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        +Analysis
      </button>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CARGA ANÁLISIS B) -->
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          Hola Caracola
        </div>
      </div>

      <!-- Notification -->

      <button type="button" class="btn btn-primary" @click="showAlert()">Show alert</button>
      <div v-show="alertIsOpen" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeAlert()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>


      </main>
  </body>
</html>

</template>

<script lang="js">


    import VuePdfEmbed from 'vue-pdf-embed';

    // OR THE FOLLOWING IMPORT FOR VUE 2
    // import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

    export default {
      components: {
        VuePdfEmbed,
      },
      data() {
        return {
          page: null,
          pdf_url: '../../public/envoy_vol_report.pdf',
          /*source2: 'data:application/pdf;base64,<BASE64_ENCODED_PDF>',*/
          showAllPages: false,
          pageCount: 1,
          alertIsOpen: false,
          timeout: 2000,
        }
        
      },
      methods: {
        showAlert() {
          this.alertIsOpen = true;
        },
        closeAlert() {
          this.alertIsOpen = false;
        },
                
      },
      mounted() {
        setTimeout(() => this.alertIsOpen = false, 3000);
      },

      watch: {
        showAllPages() {
          this.page = this.showAllPages ? null : 1;
        },
    },
  }

</script>



<style lang="scss">

//@import "../../node_modules/bootstrap/scss/_accordion.scss"; 

$offcanvas-bg-color: rgb(212, 206, 255);
$offcanvas-color: red;

.offcanvas-header{
  background-color: magenta;
}

.dropdown-menu{
  background-color: green;
}

.accordion{
  border: 2px solid $offcanvas-bg-color;
  border-radius: 20px;
  background-color: #00cdac;
  color: black;
}
.accordion-body{
  border: 2px solid $offcanvas-bg-color;
  border-radius: 20px;
  background-color: #000000;
  color: white;
}

html { 
    background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
    background-image: linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgb(137, 214, 255) 91.1% );
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
h1, h2, h3, h4, h5, h6 {
    color: lightcyan;
}
p, li {
    color: lightcyan;
}

.main{
  display: block;
  max-width: 90%;
  margin: 0 auto;

}

.section {
  max-width: 90%;
  margin: auto;
  padding: 10px 10px
}

.content {
  max-width: 60%;
  margin: auto;
}

/*
#bootstrap-overrides nav {
  border: 2px solid #00cdac;
  border-radius: 20px;
  background-color: #00cdac;
}
*/

#container-round{
  border: 2px solid #00cdac;
  border-radius: 20px;
  background-color: white;
  padding: 8px 8px;
}


</style>