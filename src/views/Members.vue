<template>
    <div class="members">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('members.title') }}</h1>
                    <h2>{{ $t('members.professors') }}</h2>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/bock.jpg" :alt="$t('members.prof_bock_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_bock_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_bock_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_bock_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/engels.jpg" :alt="$t('members.prof_engels_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_engels_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_engels_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_engels_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/grotjahn.jpg" :alt="$t('members.prof_grotjahn_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_grotjahn_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_grotjahn_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_grotjahn_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/hadjakos.jpg" :alt="$t('members.prof_hadjakos_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_hadjakos_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_hadjakos_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_hadjakos_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/keil.jpg" :alt="$t('members.prof_keil_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_keil_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_keil_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_keil_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/meister.jpg" :alt="$t('members.prof_meister_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_meister_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_meister_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_meister_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/mueller_lietzkow.jpg" :alt="$t('members.prof_mueller_lietzkow_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_mueller_lietzkow_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_mueller_lietzkow_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_mueller_lietzkow_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/muenzmay.jpg" :alt="$t('members.prof_muenzmay_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_muenzmay_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_muenzmay_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_muenzmay_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/oevel.jpg" :alt="$t('members.prof_oevel_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_oevel_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_oevel_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_oevel_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/szwillus.jpg" :alt="$t('members.prof_szwillus_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_szwillus_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_szwillus_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_szwillus_vita')"></p>
                        </div>
                    </div>
                </div>
                <div class="column col-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact card">
                        <div class="card-image">
                            <img src="/pix/veit.jpg" :alt="$t('members.prof_veit_name')" class="img-responsive">
                        </div>
                        <div class="card-header">
                            <div class="card-title h5">{{ $t('members.prof_veit_name') }}</div>
                            <div class="card-subtitle text-gray">{{ $t('members.prof_veit_affiliation') }}</div>
                        </div>
                        <div class="card-body">
                            <p v-html="$t('members.prof_veit_vita')"></p>
                        </div>
                    </div>
                </div>

                <div class="column col-12">
                    <h2>{{ $t('members.employees') }}</h2>
                </div>
                <div class="column col-12">
                    <h2>{{ $t('members.alumni') }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'members'
    }
</script>

<style scoped>
    .members .mainContent {
        margin-top: 5rem;
        background-color: #fff;
        padding: 2rem;
    }

    .contact.card {
        margin-top: 2rem;
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

