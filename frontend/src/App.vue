<template>
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Qubiotech.ai</title>
        </head>

        <body>
            <div id="app">
                <nav class="navbar navbar-expand-md navbar-expand-lg-md-sm" style="background: linear-gradient(to right, #AC92EC, #ABC7FF);">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="https://www.qubiotech.com/"  target="_blank" style="color:lightgray">Qubiotech.ai</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#"><router-link to="/">About</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><router-link to="/Login">Log In</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><router-link to="/Signup">Sign Up</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Analyses"><router-link to="/Analyses">Analyses</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Upload"><router-link to="/Upload">Upload</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Stats"><router-link to="/Stats">Stats</router-link></a>
                            </li>
                            </ul>
                            <span class="navbar-text">
                            AI assited imaging analysis
                            </span>
                        </div>
                    </div>
                </nav>
                

                <div id="container">
                    <router-view></router-view>
                </div>

                <footer class="footer mt-auto py-3 bg-light">
                    <div class="container">
                        <span class="text-muted">Place sticky footer content here.</span>
                    </div>
                </footer>

            </div>

        </body>
    </html>
</template>

<style>

    html, body {
        height: 100vh;
    }

    h1, h2, h3, h4, h5, h6, p {
        text-align: left;
        color: black;
    }

    #container {
        margin: 0 auto;
        align-content: center;
        width: 100%;
    }


    /* Bootstrap navbar elements */
    nav li:hover,
    nav li.router-link-active,
    nav li.router-link-exact-active > li > a:focus {
        cursor: pointer;
        /*background-color: white;*/
        border-radius: 4px;
        padding: 0px 0px;
        border: 1px solid mediumpurple;
        color: black;
    }

    /* Vue router elements */
    .router-link-exact-active {
        cursor: pointer;
        border-radius: 4px;
        padding: 0px 0px;
        /*border: 1px solid mediumpurple;*/
        color: black;
        text-decoration: none !important;
    }

    li a {
        text-decoration: none;
        color: white;
    }
    a:hover {
        text-decoration: none;
        color: black;
    }

/* TODO RESPONSIVE ADJUSTMENTS */
    
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}

</style>