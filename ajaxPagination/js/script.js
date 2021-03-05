$(function()
{
			$.post("pagination.php?page=1", function(data) {
			var htm = "";
			var resp = jQuery.parseJSON(data);
			if(resp['rec'].length>0)
			{
				for(var i = 0 ; i<resp['rec'].length ; i++) {
					var sid =  resp['rec'][i]['id'];
			 htm  +='<tr id="row_num_'+sid+'">';
			 htm  +='<td>'+resp['rec'][i]['id']+'</td>';
			 htm  +='<td>'+resp['rec'][i]['titulo']+'</td>';
			 htm  +='<td>'+resp['rec'][i]['autor']+'</td>';
			 htm  +='<td>'+resp['rec'][i]['descripcion']+'</td>';
			 htm  +='<td>'+resp['rec'][i]['puntuacion']+'</td>';
			 htm  +='<td>'+resp['rec'][i]['genero']+'</td>';
			 htm  +='<td>'+resp['rec'][i]['imagen']+'</td>';

				}
				
			}
			
			jQuery("#target-content").html(htm);
			jQuery("#append-pagination").html(resp['pagination']);

});

   // jQuery("#pagination li").live('click',function(e){
	   $("#append-pagination").on( "click", ".pagination a", function (e){
    e.preventDefault();
        jQuery("#target-content").html('loading...');
        jQuery("#pagination li").removeClass('active');
        jQuery(this).addClass('active');
       // var pageNum = this.id;
	    var pageNum = $(this).attr("data-page");
		
		$.post("pagination.php?page=" + pageNum, function(data) {
			var htm = "";
			var resp = jQuery.parseJSON(data);
			if(resp['rec'].length>0)
			{
				for(var i = 0 ; i<resp['rec'].length ; i++) {
					var sid =  resp['rec'][i]['id'];
					htm  +='<tr id="row_num_'+sid+'">';
					htm  +='<td>'+resp['rec'][i]['id']+'</td>';
					htm  +='<td>'+resp['rec'][i]['titulo']+'</td>';
					htm  +='<td>'+resp['rec'][i]['autor']+'</td>';
					htm  +='<td>'+resp['rec'][i]['descripcion']+'</td>';
					htm  +='<td>'+resp['rec'][i]['puntuacion']+'</td>';
					htm  +='<td>'+resp['rec'][i]['genero']+'</td>';
					htm  +='<td>'+resp['rec'][i]['imagen']+'</td>';
	   
					   }
				
			}
		
			jQuery("#target-content").html(htm);
			jQuery("#append-pagination").html(resp['pagination']);
			
});

       
    });
});


