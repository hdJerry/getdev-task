
// console.log(process.env);

export default {
    data(){
        return {
            size: 10,
            currentPage: 0,
            from: 1,
            to: 10,
            ranges: [10, 25, 50, 100],
            search: ''
        }
    },
 computed: {
         pageCount() {
              let i = Number(this.datas.length),
                  s = Number(this.size);

              return Math.floor((i + s - 1) / s);
         },
         paginationData() {
        //
         let start = Number(this.currentPage) * Number(this.size),
             end = start + Number(this.size);


         this.from = start - (Number(this.size) - 1);
         this.to = Math.min(end-1, this.datas.length);

        return this.datas.filter(val => {
            return val.email.match(this.search)
        }).slice(start, end)

      },

     },
     methods: {
         nextPage(val) {
             this.currentPage++;
            this.from += Number(val);
            this.to += Number(val);


         },
         prevPage(val) {
             this.currentPage--;
             this.from -= Number(val);
             this.to -= Number(val);
         },
         intlFormat(num) {
             return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
         },
          abbreviateNumber(value) {
              let num = Math.floor(value);
              if (num >= 10000000000000)
                  return this.intlFormat(num / 1000000000000) + 'T';
              if (num >= 1000000000)
                  return this.intlFormat(num / 1000000000) + 'B';
              if (num >= 1000000)
                  return this.intlFormat(num / 1000000) + 'M';
              if (num >= 1000)
                  return this.intlFormat(num / 1000) + 'k';
              return this.intlFormat(num);
          },


     }


}
