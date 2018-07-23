console.log("Hello!")

const advisor = Object.create(null, {

   company: {
       value: "GreenGot$$$",
       enumerable: true,
       writeable: true

   },

   specialty: {
       value: "Goblins",
       enumerable: true,
       writeable: true
   },

   name: {
       value:  "Bill Weasley",
       enumerable: true,
   },

   portfolio:{
       value:[

           {
           symbol: "CBR",
               name: "Curse Breaking Inc",
               shares: 450,
               valuation: 34567891
           },
           {
               symbol:  "FDE",
               name: "Fighting Death Eaters, LLC",
               shares: 231,
               valuation: 4563728
           },
           {
               symbol: "SWA",
               name:   "Survivina a werewolf attack, LLC",
               shares: 798,
               valuation: 89000
           },

           {
               symbol: "WWW",
               name:   "Weasley's Wizarding Wheezes, INC",
               shares: 2300,
               valuation: 100000000
           }
       ],
       enumerable: true,
       writable: true
   },

   worth: {
       value: function(){
        let total = 0;
        for (let i = 0; i < advisor.portfolio.length; i++) {
            let stockValue = advisor.portfolio[i].shares * advisor.portfolio[i].valuation;
            total += stockValue;
            return total

        }

        // console.log(advisor.worth())
       },
       enumerable: false
   },
   purchase:{
       value: function(symbol, quantity, price){
        advisor.portfolio.push({
            symbol: symbol,
            name: name,
            shares: quantity,
            valuation: price
        })
       },
       enumerable: false,
   },
   sell:{
       value: function(symbol, name, quantity, price ){
        let portfolio = advisor.portfolio;
        for (let i = 0; i < portfolio.length; i++) {
           if( portfolio[i].symbol === symbol &&
               portfolio[i].name === name &&
               portfolio[i].shares === quantity &&
               portfolio[i].valuation === price
        ){
               console.log("got one", i);
               portfolio.splice(i, 1)
           }

        }
    },

       enumberable: false
    }


});
// worth of all stock
console.log(advisor.worth())

// sell
advisor.sell("FDE", "Fighting Death Eaters, LLC", 231, 4563728)
advisor.sell("WWW", "Weasley's Wizarding Wheezes, INC", 2300, 100000000 )
console.log(advisor)

// purchase
advisor.purchase("gup", "growing up poor", 1, 10)

