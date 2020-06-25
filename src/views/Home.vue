<template>
    <div class="home">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <h1>{{ $t('home.home_title') }}</h1>
                    <div class="site-img">
                        <img src="/pix/Querband_1.jpg"/>
                    </div>
                    <h2>{{ $t('home.home_subtitle') }}</h2>
                    <div v-html="$t('home.home_text')"></div>
                    <h2 class="margin-top">{{ $t('home.hint_new_website_title') }}</h2>
                    <div v-html="$t('home.hint_new_website_text')"></div>
                </div>
                <!--<div class="column col-12 newsColumn">
                    <div class="news">
                        <h3>{{ $t('news') }}</h3>
                        <div class="tile " v-for="(news, index) in getFirstNews()"
                             :key="`news${index}`">
                            <div class="tile-icon">
                                <font-awesome-icon :icon="['far', 'check-circle']" size="3x"/>
                            </div>
                            <div class="tile-content">
                                <p class="tile-title"><a :href="'/news#' + news.date">{{
                                    getNewsByCurrentLang(news).title }}</a></p>
                                <p class="tile-date">{{ getDate(news.date) }}</p>
                            </div>
                        </div>
                        <div class="all_news">
                            <p><a href="/news">{{ $t('all_news') }}</a></p>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import News from "../data/news";
    import i18n from '@/plugins/i18n';
    import Date from '@/utils/date';

    export default {
        name: 'home',
        data() {
            return {
                News: News
            };
        },
        methods: {
            getFirstNews: function () {
                return News.slice(0, 3);
            },
            getNewsByCurrentLang: function (news) {
                return news[i18n.locale];
            },
            getDate: function (date) {
                return Date.getDate(date);
            }
        }
    }
</script>

<style scoped>
    .home .mainContent {
        margin-top: 5rem;
        background-color: #fff;
        padding: 2rem;
    }

    .site-img {
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .site-img img {
        max-width: 96%;
    }

    .news p {
        margin-bottom: 0.5rem;
    }

    .news > div {
        margin-top: 1rem;
    }

    .news .tile-icon {
        color: #666;
    }

    .news .tile-date {
        color: #999;
        margin-top: -0.3rem;
    }

    .all_news {
        text-align: right;
    }

    .margin-top {
        margin-top: 2em;
    }

</style>

