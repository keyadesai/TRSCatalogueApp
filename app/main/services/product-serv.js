'use strict';
angular.module('main')
.service('Product', function ($log, $http, $timeout, $q, lodash) {

     this.favoriteProducts = [];

     this.removeFromFavorite = function(product){
        lodash.remove(this.favoriteProducts, function (product) {
            return product.OfferID !== product.OfferID;
        });
      }

      this.addToFavorites = function(product){
        this.favoriteProducts.push(product)

      }

      this.getFavorites = function(){
        return this.favoriteProducts;
      }

      this.fetchOffersFromServer = function () {
        return $http({
          url: 'http://catalogue.rejectshop.com.au/XMLFeed?clientkey=therejectshop&RecordType=Offer&OfferOnPage:500;&No=0&Nipp=99999',
          method: 'GET'
        })
          .success(function (data) {
            // console.log('fetched this stuff from server:', data);
          })
          .error(function (error) {
            console.log('an error occured', error);
          });
      };

      


this.inspirations = [{
  id: 1,
  name: 'Budget bedroom makeover with The Stylist Splash',
  title: 'Budget bedroom makeover with The Stylist Splash',
  image: 'main/assets/images/home.jpg',
  description: 'When it comes to home styling, blogger Yvette Wilson from The Stylist Splash, knows how to shop savvy. We set Yvette the challenge to create a chic, on trend bedroom makeover ...'
},
{
  id: 2,
  name: 'Kit Kat Maltesers Cake',
  title: 'Kit Kat Maltesers Cake',
  image: 'main/assets/images/recipe.png',
  description: 'Birthday coming up? This vanilla chocolate cake is sure to make an impression. Firstly, it’s incredibly easy #winning. Secondly, it looks the part. Thirdly, it’s ...'
},
  {
  id: 3,
  name: 'One Party In A Box, Two Different Themes',
  title: 'One Party In A Box, Two Different Themes',
  image: 'main/assets/images/party.jpg',
  description: 'Looking to create a stunning party on a budget? Look no further than The Reject Shop for the ultimate in savvy saving’s for the latest in party supplies. The Reject Shop ...'
},
{
  id: 4,
  name: 'Bathroom Styling Tips To Get Big Results Without Spending Big',
  title: 'Bathroom Styling Tips To Get Big Results Without Spending Big',
  image: 'main/assets/images/bathroom-style.jpg',
  description: 'This week I set myself the challenge to style my bathroom for under $100, proving you don’t have to spend big bucks to get fab results. Following my five bathroom styling ...'
}
];
});
