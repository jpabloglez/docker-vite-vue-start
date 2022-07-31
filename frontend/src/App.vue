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
                <nav class="navbar navbar-expand-lg" style="background: linear-gradient(to right, #AC92EC, #ABC7FF);">
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






</style>