<template>
  <div id="app">
    <header id="nav" class="navbar">
      <section class="navbar-section">
        <router-link id="home" to="/"><img src="/pix/ZenMEM_hell.png" alt="ZenMEM"></router-link>
      </section>
      <!--<section class="navbar-section">
        <div class="dropdown">
          <div class="btn-group">
            <a href="#" class="btn-link">{{ $t('the_center') }}</a>
            <a href="#" class="btn-link dropdown-toggle" tabindex="0">
              <i class="icon icon-caret"></i>
            </a>

            <ul class="menu">
              <li><router-link id="members" to="/members">{{ $t('members.members') }}</router-link></li>
            </ul>
          </div>
        </div>
      </section>-->
      <section class="navbar-section">
        <div id="flags" class="input-group input-inline">
          <button v-if="!isLocale('de')" class="btn btn-primary" key="de" @click="changeLocale('de')">
            DE
          </button>
          <button v-if="!isLocale('en')" class="btn btn-primary" key="en" @click="changeLocale('en')">
            EN
          </button>
        </div>
      </section>
    </header>

    <router-view/>

    <footer id="footer" class="container">
        <div class="columns">
          <div class="column col-3 col-xl-6 col-md-12">
            <h3>Kontakt</h3>
            <p>Zentrum Musik – Edition – Medien<br>Musikwissenschaftliches Seminar Detmold/Paderborn<br>Hornsche Str. 39<br>32756 Detmold<br><br>Tel.: +49 5231 975-662<br>Email: <a href="mailto:info@zenmem.de">info@zenmem.de</a></p>
            <div class="footer-links">
              <router-link to="/imprint">{{ $t('imprint') }}</router-link>
              <router-link to="/contact">{{ $t('contact.contact') }}</router-link>
            </div>
          </div>
          <div class="column col-3 col-xl-6 col-md-12">
            <h3>Partner</h3>
            <p>
              <a href="http://www.uni-paderborn.de/" target="_blank"><img class="footerlogo" src="/pix/upb-logo_rgb.png" :alt="$t('UPB')"></a></p>
            <p><a href="http://www.hfm-detmold.de/" target="_blank"><img class="footerlogo" src="/pix/hfm-logo.png"></a></p>
            <p><a href="https://www.hs-owl.de" target="_blank"><img class="footerlogo" src="/pix/th-owl-logo.png"></a></p>
          </div>
          <div class="column col-3 col-xl-6 col-md-12">
            <h3>Gefördert vom</h3>
            <p><img class="footerlogo" src="/pix/Gefoerdert-vom-BMBF_mwei.png"><br/><span style="padding-top: 10px; display: inline-block;">Kennzeichen: 01UG1714A–B<br/>Kennzeichen: 01UG1414A–C</span></p>
          </div>
          <div class="column col-3 col-xl-6 col-md-12">
            <h3>Letzte Tweets</h3>
            <a class="twitter-timeline" data-lang="de" data-theme="light" data-height="230" href="https://twitter.com/ZentrumMEM">Tweets by ZentrumMEM</a>
          </div>
        </div>
    </footer>
  </div>
</template>

<script>
  import i18n from '@/plugins/i18n';
  import router from '@/router/index.js';

  export default {
    methods: {
      changeLocale: function(locale) {
        i18n.locale = locale;
        this.$store.dispatch('language/setLanguage', locale);
      },
      isLocale: function(locale) {
        return i18n.locale === locale;
      },
      getCurrentRoute: function () {
        return router.currentRoute.name;
      }
    }
  }

</script>

<style>

@import "assets/spectre/spectre.min.css";
@import "assets/spectre/spectre-exp.min.css";
@import "assets/spectre/spectre-icons.min.css";

#app {
  background-color: #ededed;
}

a, a:hover, a:visited {
  color: #666;
}

header {
  padding: .7rem .5rem .3rem;

}

footer {
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 0.7rem;
  background-color: #333;
  color: #ededed;
}

footer .columns {
  padding: 0 3rem;
}

footer .column {
  margin-top: 1rem;
}

footer .footerlogo {
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  max-width: 300px;
}

footer .footer-links {
  margin: 0.5rem 0;
}

footer .footer-links a {
  padding-right: 2rem;
}

#nav {
  background-color: #333;
  padding: 2rem 1rem;
}

#nav .btn.btn-primary {
  background: #ededed;
  border-color: #ededed;
  color: #333;
}

#nav a {
  color: #fff;
  padding-right: 1.5rem;
}

#nav a.dropdown-toggle {
  color: #fff;
  margin-left: -1.3rem;
  margin-top: -0.1rem;
}

#nav a:focus {
  box-shadow: none;
}

#nav a:hover {
  color: #ccc;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ccc;
}

  #flags {
    margin-left: 1rem;
  }

  #home img {
    max-height: 100px;
    max-width: 300px;
  }
</style>
