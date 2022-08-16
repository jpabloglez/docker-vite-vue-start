<template>      
    <main class="main">
      
      <div id="card_round">
        <section id="aside_section">
          <div>
          <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
        </section>
      </div>
  </main>
</template>

<style lang="scss" scoped>

html { 
    background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
    background-image: linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgb(137, 214, 255) 91.1% );
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}


#card_round{
  border: 2px solid white;
  border-radius: 20px;
  background-color: black;
  color: white;
  width: 50%;
}

.main{
  display: block;
  max-width: 90%;
  margin: 0 auto;
  padding: 10px 10px;

}

#aside_section {
  max-width: 50%;
  margin: auto;
  padding: 20px 20px
}

.content {
  max-width: 60%;
  margin: auto;
}



</style>