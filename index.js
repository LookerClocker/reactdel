jQuery(document).ready(function () {
    $( "#coupon" ).load('http://server.mon-coupon.com/parse/classes/Coupon');
    jQuery.ajax({
        type: 'GET',
        headers: {'X-Parse-Application-Id': 'promoSite', 'X-Parse-REST-API-Key': 'J59-8zpY7r3~Vf/t'},
        url: "http://server.mon-coupon.com/parse/classes/Coupon",
        data: 'include=retailer,category',
        contentType: 'text/javascript',
        error: function (e) {
            alert('Error ' + e.responseText);
            console.log(e);
        }
    }).done(function (resultObject, status) {
        var coupon = resultObject.results;
        console.log('coupone->',coupon);
        if (coupon && coupon.length > 0) {
            var ul = jQuery("<ul id='col-one'></ul>");
            for (var i = 0; i < coupon.length; i++) {
                var li = null;
                if (coupon[i].code && coupon[i].code.length > 0) {


                    // var a = $('<a></a>').attr({
                    //     'href': "http://" + coupon[i].code,
                    //     "target": "_blank"
                    // }).append(coupon[i].code);

                    var description = "<p>Description: " +coupon[i].description;"</p>";
                    var code = "<p>Code: " +coupon[i].code;"</p>";
                    var rate = "<p>Rate: " +coupon[i].rate;"</p>";
                    var uses = "<p>Uses: " +coupon[i].uses;"</p>";
                    var type = "<p>Coupon type: " +coupon[i].type;"</p>";
                    var retailerName = "<p>Retailer name: " +coupon[i].retailer.name;"</p>";
                    var retailerImage ='<img src="'+coupon[i].retailer.image.url+'" alt="logo">';
                    var categoryName ="<p>Category name: " +coupon[i].category.categoryName;"</p>";
                    var categoryType ="<p>Category type: " +coupon[i].category.type;"</p>";
                    var createdDate = "<p>Created at: " + new Date(coupon[i].createdAt).toLocaleDateString();"</p>";
                    var expirationDate = "<p>Expiration date: " + new Date(coupon[i].expirationDate.iso).toLocaleDateString();"</p>";
                    var line = "<hr/>";

                    li = jQuery("<li></li>").append(retailerImage, retailerName, code, description, rate, uses, type, categoryName, categoryType, createdDate, expirationDate, line);
                } else {
                    li = jQuery("<li></li>").append(code, description, rate, uses, type, retailerName, retailerImage, categoryName, categoryType, createdDate, expirationDate, line);
                }
                ul.append(li);
            }
            jQuery("#coupon").append(ul);
        }

    });

});



