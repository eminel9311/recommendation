function number_to_currency(price, unit, delimiter) {
	unit = unit || "đ";
	delimiter = delimiter || ",";

	return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter) + unit;
};
function RenderView(user_email,quanlity){
	$.get("https://staging.edumall.vn/api/courses/recommendation_courses?user_email="+ user_email +"&quantity="+ quanlity +"", function(data, status){
        var arr = data.data.courses;
        for(var x in arr){
	   if(arr[x].discount){
	  	           $('.rows').append(
              '<article class="course col-sm-3" data-responsive="on">'+
                 '<a href="/course/'+arr[x].alias_name+'">'+
                    '<div class="thumbnail">'+
                       '<div class="course-header img-thumb" data-src="'+arr[x].image+'" style="background: url('+arr[x].image+') center center / cover no-repeat;">'+
                          '<span class="label label-sale" id="rec-discount">'+arr[x].discount + '%' + '</span>'+
                       '</div>'+
                       '<div class="caption">'+
                          '<h5 class="course-title">'+arr[x].name+'</h5>'+
                          '<div class="course-info">'+
                             '<div class="container-fluid">'+
                                '<div class="row">'+
                                   '<div class="col-xs-6">'+
                                      '<div class="course-author">'+
                                         '<span>'+arr[x].teacher_name+'</span>'+
                                      '</div>'+
                                   '</div>'+
                                   '<div class="col-xs-6">'+
                                      '<div class="course-sale">'+
                                         '<span class="old-price" id="rec-old-price"> Giá cũ:'+number_to_currency(arr[x].original_price)+'</span>'+ '<br/>'+
                                         '<span class="new-price">'+number_to_currency(arr[x].sale_price)+'</span>'+
                                      '</div>'+
                                   '</div>'+
                                '</div>'+
                             '</div>'+
                          '</div>'+
                       '</div>'+
                    '</div>'+
                 '</a>'+
              '</article>'

            );
	   }else{
			  	           $('.rows').append(
              '<article class="course col-sm-3" data-responsive="on">'+
                 '<a href="/course/'+arr[x].alias_name+'">'+
                    '<div class="thumbnail">'+
                       '<div class="course-header img-thumb" data-src="'+arr[x].image+'" style="background: url('+arr[x].image+') center center / cover no-repeat;">'+
                         
                       '</div>'+
                       '<div class="caption">'+
                          '<h5 class="course-title">'+arr[x].name+'</h5>'+
                          '<div class="course-info">'+
                             '<div class="container-fluid">'+
                                '<div class="row">'+
                                   '<div class="col-xs-6">'+
                                      '<div class="course-author">'+
                                         '<span>'+arr[x].teacher_name+'</span>'+
                                      '</div>'+
                                   '</div>'+
                                   '<div class="col-xs-6">'+
                                      '<div class="course-sale">'+
                                         '<br/>'+
                                         '<span class="new-price" style ="color:#1EB0BB;">'+number_to_currency(arr[x].original_price)+'</span>'+
                                      '</div>'+
                                   '</div>'+
                                '</div>'+
                             '</div>'+
                          '</div>'+
                       '</div>'+
                    '</div>'+
                 '</a>'+
              '</article>'

            );
	   



           }


        }

    });
	
};
