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

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.qubiotech.com/">Qubiotech.ai</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><router-link to="/">About</router-link></a>
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

        </body>
    </html>
</template>

<style>

    h1, h2, h3, h4, h5, h6, p {
        text-align: left;
        color: black;
    }

    #container {
        margin: 0 auto;
        align-content: center;
        width: 100%;
    }

</style>