<template>
    <div class="news">

        <div class="container grid-lg mainContent">
            <div class="columns">
                <div class="column col-12">
                    <div class="news">
                        <h1>{{ $t('news') }}</h1>
                        <div class="tile " v-for="(news, index) in News"
                             :key="`news${index}`">
                            <div class="tile-icon">
                                <font-awesome-icon :icon="['far', 'check-circle']" size="3x"/>
                            </div>
                            <div class="tile-content" :id="news.date">
                                <p class="tile-title">{{ getNewsByCurrentLang(news).title }}</p>
                                <p class="tile-date">{{ getDate(news.date) }}</p>
                                <p class="tile-desc" v-html="getNewsByCurrentLang(news).desc"></p>
                            </div>
                        </div>
                    </div>
                </div>
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
        name: 'news',
        data() {
            return {
                News: News
            };
        },
        methods: {
            getNewsByCurrentLang: function(news) {
                return news[i18n.locale];
            },
            getDate: function(date) {
                return Date.getDate(date);
            }
        }
    }
</script>

<style scoped>
    .news .mainContent {
        margin-top: 5rem;
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

</style>

