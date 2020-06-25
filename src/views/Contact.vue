<template>
    <div class="contact">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('contact.contact') }}</h1>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/veit.jpg" alt="Prof. Dr. Joachim Veit" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">Prof. Dr. Joachim Veit</div>
                            <div class="card-subtitle text-gray">{{ $t('contact.coordinator') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('contact.coordinator_contact')"></p>
                        </div>
                        <div class="card-footer">
                            <!--Social Media-->
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/roewenstrunk.jpg" alt="Dipl. Wirt.-Inf. Daniel Röwenstrunk" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">Dipl. Wirt.-Inf. Daniel Röwenstrunk</div>
                            <div class="card-subtitle text-gray">{{ $t('contact.project_manager') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('contact.project_manager_contact')"></p>
                        </div>
                        <div class="card-footer">
                            <div itemscope itemtype="https://schema.org/Person" title="ORCID iD of Daniel Röwenstrunk">
                                <a itemprop="sameAs" content="https://orcid.org/0000-0001-6271-2095" href="https://orcid.org/0000-0001-6271-2095" target="orcid.widget" rel="noopener noreferrer" style="vertical-align:top;">
                                    <img src="/pix/orcid_32x32.png" alt="ORCID iD of Daniel Röwenstrunk">
                                </a>
                            </div>
                            <div title="GitHub account of Daniel Röwenstrunk">
                                <a href="https://github.com/roewenstrunk" target="_blank">
                                    <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                                </a>
                            </div>
                            <div title="Twitter account of Daniel Röwenstrunk">
                                <a href="https://twitter.com/roewenstrunk" target="_blank">
                                    <img src="/pix/twitter.png" alt="Twitter account of Daniel Röwenstrunk">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact.vue"
    }
</script>

<style scoped>
    .contact .mainContent {
        margin-top: 5rem;
    }
    .contact.card {
        box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
    }

    .contact.card .card-image {
        background-color: #f3f3f3;
        border-bottom: 1px solid #335480;
    }

    .contact.card img {
        max-height: 200px;
        margin: 0 auto;
    }
    
    .contact.card .card-footer > div {
        float: left;
        margin-right: 1rem;
    }

    .contact.card .card-footer img {
        width: 32px;
        height: 32px;
    }
</style>