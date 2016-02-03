Template.DatePicker.onRendered(function(){
    $.fn.datepicker.dates['pl'] = {
        days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        daysShort: ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"],
        daysMin: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"],
        months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        monthsShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
        today: "Dzisiaj",
        clear: "Czyść",
        format: "yyyy-mm-dd",
        titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
        weekStart: 0
    };

    this.$('.input-group.date').datepicker({
        showOnFocus: false,
        language: 'pl'
    }).on('changeDate', (e) => {
        window[this.data.collection].update(this.data._id,{$set: {[this.data.field]: +(e.date)}});
    });
});

Template.DatePicker.helpers({
    value() {
        return moment(Template.parentData()[this.field]).format('YYYY-MM-DD');
    }
});