import i18n from '@/plugins/i18n';

export default {

    /*
        date: string in the form '2019-11-24'
        return a sentence
     */
    getDate: function(date) {
        var year = date.substring(0, 4);
        var month = date.substring(5, 7);
        var day = date.substring(8, 10);

        var day_numeral = i18n.t('numeral', { number: (day.substring(0, 1) === '0'?day.substring(1, 2):day) });
        if(day === '01') day_numeral = i18n.t('first');
        else if(day === '02') day_numeral = i18n.t('second');
        else if(day === '03') day_numeral = i18n.t('third');

        var month_name = i18n.t('month_' + month);

        return i18n.t('date_format', { year: year, month: month_name, day: day_numeral});
    }
}