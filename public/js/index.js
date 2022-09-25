$ (document).ready (function () {

    display_products()
})


// Types of variables 
//  var color="black"
//  var age=30
//  var name;

// //  Arrays = variable type
//     var product = ["Appartment", "Bedroom", "Chalet"]
//     var product = {"name":"zoubir","age":"33",}
//     var products = [{"name":"zoubir","age":"30",},{"name":"zoubir","age":"32",},{"name":"zoubir","age":"34",}] 



// now we will declare the function
function display_products(){
    // This line mean that we are removing what we wrote in this html section and will replace it by the html elements...
    $(".products-container").html("")
    var products=[
        {"name": "casa nicole", "host_name":"robert", "location":"mojacar, spain", "location_detail":"playa la parata", "host_type":"Particulier", "price":"37"},
    
        {"name": "Apartamento Mojacar", "host_name":"miguel angel", "location":"malaga, andalousie, spain", "location_detail":"playa torrecilla", "host_type":"Particulier", "price":"210"},
    
        {"name": "golden oasis at the beach torre del mar malaga", "host_name":"araceli", "location":"torre del mar", "location_detail":"Playa sidi fredj", "host_type":"Particulier", "price":"500"},

        {"name": "Charming appartment", "host_name":"Jean", "location":"Jersey City, New Jersey", "location_detail":"Journal squate", "host_type":"Professional", "price":"1200"},
    
        {"name": "One bed room", "host_name":"Angel Di Maria", "location":"Newark, New Jersey", "location_detail":"Airport location", "host_type":"Particulier", "price":"1200"},
    
        {"name": "Studio at Hoboken", "host_name":"Mark", "location":"Hoboken, New Jersey", "location_detail":"West of New York", "host_type":"Particulier", "price":"2000"},

        {"name": "One bed room", "host_name":"Angel Di Maria", "location":"Newark, New Jersey", "location_detail":"Airport location", "host_type":"Particulier", "price":"1200"},
    
        {"name": "Studio at Hoboken", "host_name":"Mark", "location":"Hoboken, New Jersey", "location_detail":"West of New York", "host_type":"Particulier", "price":"2000"},

        {"name": "casa nicole", "host_name":"robert", "location":"mojacar, spain", "location_detail":"playa la parata", "host_type":"Particulier", "price":"37"},
    
        {"name": "Apartamento Mojacar", "host_name":"miguel angel", "location":"malaga, andalousie, spain", "location_detail":"playa torrecilla", "host_type":"Particulier", "price":"210"},
    
        {"name": "golden oasis at the beach torre del mar malaga", "host_name":"araceli", "location":"torre del mar", "location_detail":"Playa sidi fredj", "host_type":"Particulier", "price":"500"},

        {"name": "Charming appartment", "host_name":"Jean", "location":"Jersey City, New Jersey", "location_detail":"Journal squate", "host_type":"Professional", "price":"1200"},
    
        {"name": "One bed room", "host_name":"Angel Di Maria", "location":"Newark, New Jersey", "location_detail":"Airport location", "host_type":"Particulier", "price":"1200"},
    
        {"name": "Studio at Hoboken", "host_name":"Mark", "location":"Hoboken, New Jersey", "location_detail":"West of New York", "host_type":"Particulier", "price":"2000"},
        
        {"name": "One bed room", "host_name":"Angel Di Maria", "location":"Newark, New Jersey", "location_detail":"Airport location", "host_type":"Particulier", "price":"1200"},
    
        {"name": "Studio at Hoboken", "host_name":"Mark", "location":"Hoboken, New Jersey", "location_detail":"West of New York", "host_type":"Particulier", "price":"2000"},
    ]
    
// Here we are looping for defining the elements of each objects
    for(var element of products) {

        var html;

        var name=element.name
        var host_name=element.host_name
        var location=element.location
        var location_detail=element.location_detail
        var host_type=element.host_type
        var price=element.price

        // Here we include the html section of the concerned card 
        // we must use the `` tags
        html=`<a href="./product.html" target="_blank">
        <div class="grid center card-product" >
            <div class="grid center w100 pointer product-img"><img src="./img/1.jpg" alt=""></div>
            <div class="w100 p10 h100 pt40">          
                <div class=" text-black bold left pointer">${location}</div>
                <div class="text-gray left pointer">${location_detail}  </div>
                <div class="text-gray left pointer">${host_type}  </div>
                <div class="center text-black bold left pointer pt10">${price}$ per night</div>
            </div>
        </div>
        </a>`

        
// Here we are including the html modified section by js in html by appending it
        // $(".products-container").prepend(html)
        $(".products-container").append(html)


        }

// Here we are including the html modified section by js in html
// $(".products-container").html(html)
}

// Name, host-name, Location, location-detail, host-type, price
