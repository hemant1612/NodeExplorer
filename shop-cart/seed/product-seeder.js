var Product = require('../models/product');
mongoose.connect('mongodb://hemant:12345@ds247327.mlab.com:47327/orion', { useMongoClient: true });


var products = [new Product({
  imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  title : 'Gothic Video Game',
  description : ' Awesome Game!!',
  price: 10
}),
new Product({
  imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  title : 'Gothic Video Game',
  description : ' Awesome Game!!',
  price: 10
}),
new Product({
  imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  title : 'Gothic Video Game',
  description : ' Awesome Game!!',
  price: 10
}),
new Product({
  imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  title : 'Gothic Video Game',
  description : ' Awesome Game!!',
  price: 10
})
];

var done=0;
for(var i=0;i< products.length;i++){
  products[i].save( (err,result) =>{
    done++;
    if(done === products.length ){
      exit();
    }
  })
}



function exit() {
  mongoose.disconnet();
}
