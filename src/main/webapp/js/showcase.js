	$.ajaxSetup({scriptCharset: "windows-1251" , contentType: "application/json; charset=windows-1251"});  
	$.fn.isBound = function(type) {  
		    var data = $._data($(this).get(0), "events")[type];  
		    if (data === undefined || data.length === 0) {  
		        return false;  
		    }  
		    return true;  
	}; $.support.cors = true;     
		(function($) {       
		    $(function() {       
		        $('input').styler();       
		    })       
		})(jQuery)        
	function showError (header, message){     
		$("#background_overlay_error").show();            
   		$("#message_box_error").show();            
		$("#message_header_error").html(header);     
		$("#message_body_error").html(message);     
	}      
	function deleteAllCookies() {    
	    var cookies = document.cookie.split(";");    
	    for (var i = 0; i < cookies.length; i++) {    
	        var cookie = cookies[i];    
	        var eqPos = cookie.indexOf("=");    
	        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;    
	        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";    
	    }    
	}    
	function operateResult (result, callback) {   
		if (result.status_code == 2) {   
			if (result.error.error_code == 2) {   
				window.location.replace("/?_auth=logout");   
				deleteAllCookies();   
			} else {   
				showError(result.error.error_description, result.error.error_message);   
			}   
		} else if (result.status_code == 1) {   
			if (callback) {   
				callback(result, this);   
			}   
		}   
	}   
	function ajax(parameters, callback) {  
		$.ajax(  
			parameters  
		).done(function(data){  
			operateResult(data, callback);  
		}).fail(function(jqXHR, textStatus, errorThrown){  
			showError("Error: " + errorThrown, jqXHR.responseText);  
		});  
	}  
	function getJSON(url, parameters, callback){ 
		$.getJSON( 
			url, 
			parameters 
		).done(function(data){  
			operateResult(data, callback);  
		}).fail(function(jqXHR, textStatus, errorThrown){  
			showError("Error: " + errorThrown, jqXHR.responseText);  
		});  
	} 
$("#message_error_button").on("click",function(event){
	location.reload();
});	var ajax_is_parrent_blocked = {}; 
	var ajax_is_child_blocked = {}; 
$( "#showcase" ).on( "set", function(event, data) { 

				window.location.replace('showcase.html?id=' + data.id);
			});
	$("#current_date").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		$('#visible_current_date').html(data.value).change(); 
		$("#current_date").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				$('#visible_current_date').html('').change(); 
			}	
 		}); 
		$("#current_date").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlycurrent_date(current){       
		if (typeof current.value != 'undefined'){  
			$('#current_date').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlycurrent_date(current){       
		if(window.event.keyCode == 13){       
			$('#visible_current_date').val(current.value).change();       
		}       
	}       
$("#visible_current_date").on("keydown",function(event){
	onChangeReadOnlycurrent_date(event.delegateTarget, event);
});$("#visible_current_date").on("change",function(event){
	onChangeReadOnlycurrent_date(event.delegateTarget, event);
});$("#visible_current_date").on("blur",function(event){
	onChangeReadOnlycurrent_date(event.delegateTarget, event);
});var control_about_me_visible = true;
$("#span_control_about_me").click(function(){
	if (control_about_me_visible) {
		$("#span_control_about_me").html("+");
		$("#div_about_me").css('display', 'none');
	} else {
		$("#span_control_about_me").html("-");
		$("#div_about_me").css('display', 'block');
	}
	control_about_me_visible = !control_about_me_visible;
});
	$("#first_name").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		$('#visible_first_name').val(data.value).change(); 
		$("#first_name").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				$('#visible_first_name').val('').change(); 
			}	
 		}); 
		$("#first_name").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlyfirst_name(current){       
		if (typeof current.value != 'undefined'){  
			$('#first_name').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlyfirst_name(current){       
		if(window.event.keyCode == 13){       
			$('#visible_first_name').val(current.value).change();       
		}       
	}       
$("#visible_first_name").on("mousedown",function(event){
	setTimeout(function() {$('#visible_first_name').focus();}, 100);
});$("#visible_first_name").on("keydown",function(event){
	onChangeReadOnlyfirst_name(event.delegateTarget, event);
});$("#visible_first_name").on("change",function(event){
	if ($(event.delegateTarget, event).val() && !($(event.delegateTarget, event).val().match(/^[\w\p{L}\u{2116} -\.:@\/\\]+$/))) { alert("Incorrect value \'" + $(event.delegateTarget, event).val() + "\'"); $(event.delegateTarget, event).val("").change().attr( "class", "error").trigger("refresh").focus(); return false;} else {$(event.delegateTarget, event).attr( "class", "").trigger("refresh")}onChangeReadOnlyfirst_name(event.delegateTarget, event);
});$("#visible_first_name").on("blur",function(event){
	onChangeReadOnlyfirst_name(event.delegateTarget, event);
});	$("#last_name").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		$('#visible_last_name').val(data.value).change(); 
		$("#last_name").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				$('#visible_last_name').val('').change(); 
			}	
 		}); 
		$("#last_name").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlylast_name(current){       
		if (typeof current.value != 'undefined'){  
			$('#last_name').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlylast_name(current){       
		if(window.event.keyCode == 13){       
			$('#visible_last_name').val(current.value).change();       
		}       
	}       
$("#visible_last_name").on("mousedown",function(event){
	setTimeout(function() {$('#visible_last_name').focus();}, 100);
});$("#visible_last_name").on("keydown",function(event){
	onChangeReadOnlylast_name(event.delegateTarget, event);
});$("#visible_last_name").on("change",function(event){
	if ($(event.delegateTarget, event).val() && !($(event.delegateTarget, event).val().match(/^[\w\p{L}\u{2116} -\.:@\/\\]+$/))) { alert("Incorrect value \'" + $(event.delegateTarget, event).val() + "\'"); $(event.delegateTarget, event).val("").change().attr( "class", "error").trigger("refresh").focus(); return false;} else {$(event.delegateTarget, event).attr( "class", "").trigger("refresh")}onChangeReadOnlylast_name(event.delegateTarget, event);
});$("#visible_last_name").on("blur",function(event){
	onChangeReadOnlylast_name(event.delegateTarget, event);
});	$("#gender").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
			if (isLoading) {                                                 
		$("#visible_gender").bind('setValue', function(){    
			$("#visible_gender" + data.value).click();   
			$("#visible_gender").change();   
			$("#gender").val(data.value); 
			                                                        
		});                                                         
	} else {                                                        
		$("#visible_gender" + data.value).click();         
		$("#visible_gender").change();   
		$("#gender").val(data.value);   
	}                                            
 
		$("#gender").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
											   
							$("[name='visible_gender']").each(function(index, item){ 
								$(this).prop("checked", false).trigger('refresh'); 
							}); 
							$('#gender').val(''); 
 
			}	
 		}); 
		$("#gender").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
					$("#background_overlay_wait_gender").show();          
			$("#message_box_wait_gender").show();          
			$("#visible_gender").attr("disabled","disabled");         
			ajax({                                        
					url: "rest/form/" + "get_list",   
					data: {  
						form_api: "ABOUT_ME",  
						parameter_name: "gender",  
						parameters:  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
,  
					},    
					type: "post",     
					dataType: "json",    
					contentType: 'application/x-www-form-urlencoded'    
				}, function( data ) {      
					$("#visible_gender").empty();          
					$("#visible_gender").removeAttr('disabled');         
							$.each(data.data, function(key, val) {   
			var visible_name = 'visible_gender' + val.id;   
			$("<input/>", {   
				'value': val.id,    
				'checked': val.value,    
				'type': 'radio',    
				'id': visible_name,    
				'name': 'visible_gender',    
			}).appendTo("#visible_gender");   
			$("<label/>", {    
				style: 'margin:3px;',    
				html: val.name,    
				'for': visible_name,    
			}).appendTo("#visible_gender");  
			$('#' + visible_name).click( function(event){ 
				onChangeReadOnlygender(event.delegateTarget); 
			}); 
			$('#' + visible_name).change( function(event){ 
				onChangeReadOnlygender(event.delegateTarget); 
			}); 
           $("#visible_gender" + val.id).styler({}); 
		});   
				  
          
					$("#visible_gender").trigger('refresh');          
					$("#visible_gender").trigger('setValue');    
					$("#background_overlay_wait_gender").hide();          
					$("#message_box_wait_gender").hide();          
			});     
     
	});      
	function onChangeReadOnlygender(current){       
		if (typeof current.value != 'undefined'){  
			$('#gender').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlygender(current){       
		if(window.event.keyCode == 13){       
			$('#visible_gender').val(current.value).change();       
		}       
	}       
	$("#name_changed_upon_marriage").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		 
	$('#visible_name_changed_upon_marriage').prop('checked', data.value === '1' ? true : false);  
	$('#visible_name_changed_upon_marriage').change(); 
	$('#name_changed_upon_marriage').val(data.value); 
 
		$("#name_changed_upon_marriage").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				$('#visible_name_changed_upon_marriage').prop('checked', false); 
			}	
 		}); 
		$("#name_changed_upon_marriage").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlyname_changed_upon_marriage(current){       
		if (typeof current.value != 'undefined'){  
			$('#name_changed_upon_marriage').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlyname_changed_upon_marriage(current){       
		if(window.event.keyCode == 13){       
			$('#visible_name_changed_upon_marriage').val(current.value).change();       
		}       
	}       
$("#visible_name_changed_upon_marriage").on("change",function(event){
	onChangeReadOnlyname_changed_upon_marriage({value: event.delegateTarget.checked ? 1 : 0});
});	$("#birth_name").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		$('#visible_birth_name').val(data.value).change(); 
		$("#birth_name").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				$('#visible_birth_name').val('').change(); 
			}	
 		}); 
		$("#birth_name").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlybirth_name(current){       
		if (typeof current.value != 'undefined'){  
			$('#birth_name').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlybirth_name(current){       
		if(window.event.keyCode == 13){       
			$('#visible_birth_name').val(current.value).change();       
		}       
	}       
 $("#visible_name_changed_upon_marriage").change(function(){
		onChangename_changed_upon_marriage_birth_name_ct_ajax_visible(this);
 }); 
				function onChangename_changed_upon_marriage_birth_name_ct_ajax_visible(name_changed_upon_marriageList){        
					var valueJS = 'name_changed_upon_marriage' + ':i:' + $('#name_changed_upon_marriage').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;     
								if (valueJS.match(/:i:(none)?(:p:|$)/)) {
				$('#tr_birth_name').css("display", 'none');
				$('#visible_birth_name').val('').change();
				$('#birth_name').attr('invisible', true);
				$('#tr_birth_name').trigger('refresh');
				return;			}         
					$('#birth_name').attr('invisible', true);        
					$("#visible_name_changed_upon_marriage").attr("disabled","disabled");        
					$("#visible_name_changed_upon_marriage").trigger('refresh');        
					$("#background_overlay_wait_name_changed_upon_marriage").show();        
	            	$("#message_box_wait_name_changed_upon_marriage").show();        
					if (!ajax_is_parrent_blocked["name_changed_upon_marriage"]) {        
						ajax_is_parrent_blocked["name_changed_upon_marriage"] = 0;        
					}					++ajax_is_parrent_blocked["name_changed_upon_marriage"];        
					if (!ajax_is_child_blocked["birth_name"]) {    
						ajax_is_child_blocked["birth_name"] = 0;    
					}    
					++ajax_is_child_blocked["birth_name"];    
					ajax({        
			            	url: 'rest/form/get_is_visible_interactive',        
						data: {        
							parameter_name:'birth_name',        
							form_api: 'ABOUT_ME',        
							parameters: 'name_changed_upon_marriage' + ':i:' + $('#name_changed_upon_marriage').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
,        
							rnd: Math.floor(Math.random() * 10000),        
						},       
				            type: 'post',        
				            dataType: 'json',        
				            contentType: 'application/x-www-form-urlencoded',        
						}, function (data) {  
								if (data.value) {        
									if ((document.getElementById && !document.all) || window.opera)        
										$('#tr_birth_name').css("display",'table-row');        
									else        
										$('#tr_birth_name').css("display",'inline');        
										$('#birth_name').attr('invisible', false);        
								} else {        
									$('#tr_birth_name').css("display", 'none');        
									$('#visible_birth_name').val('').change();        
									$('#birth_name').attr('invisible', true);        
								}        
							$('#tr_birth_name').trigger('refresh');        
							--ajax_is_parrent_blocked["name_changed_upon_marriage"];   
							$("#visible_birth_name").trigger("set_find_result");        
							if (ajax_is_parrent_blocked["name_changed_upon_marriage"] == 0) {        
								$("#visible_name_changed_upon_marriage").trigger('on_parrent_unblocked');  
								if (!$("#tr_name_changed_upon_marriage" ).hasClass('disabled')) {  
									$("#visible_name_changed_upon_marriage").removeAttr('disabled');  
								}  
								$("#visible_name_changed_upon_marriage").removeAttr('disabled');        
								$("#background_overlay_wait_name_changed_upon_marriage").hide();        
			            				$("#message_box_wait_name_changed_upon_marriage").hide();        
							}        
							--ajax_is_child_blocked["birth_name"]; 
							if (ajax_is_child_blocked["birth_name"] == 0) { 
            							$("#visible_birth_name").trigger( 'on_child_unblocked'); 
							} 
							$("#visible_name_changed_upon_marriage").trigger('refresh');        
							$("#visible_birth_name").trigger('refresh');        
					});        
				}        
$("#visible_birth_name").on("mousedown",function(event){
	setTimeout(function() {$('#visible_birth_name').focus();}, 100);
});$("#visible_birth_name").on("keydown",function(event){
	onChangeReadOnlybirth_name(event.delegateTarget, event);
});$("#visible_birth_name").on("change",function(event){
	if ($(event.delegateTarget, event).val() && !($(event.delegateTarget, event).val().match(/^[\w\p{L}\u{2116} -\.:@\/\\]+$/))) { alert("Incorrect value \'" + $(event.delegateTarget, event).val() + "\'"); $(event.delegateTarget, event).val("").change().attr( "class", "error").trigger("refresh").focus(); return false;} else {$(event.delegateTarget, event).attr( "class", "").trigger("refresh")}onChangeReadOnlybirth_name(event.delegateTarget, event);
});$("#visible_birth_name").on("blur",function(event){
	onChangeReadOnlybirth_name(event.delegateTarget, event);
});                      
		var social_status_id_autocomplete_result;    
		var social_status_id_autocomplete_typing;    
        $( document ).ready(function() {    
			$('#visible_social_status_id').on('input', function () {                      
				// ручной ввод без выбора из списка                      
				if ($("#visible_social_status_id").val()){                      
					$("#visible_"+"social_status_id").addClass('warning');                      
					$("#visible_"+"social_status_id").attr('title', 'Couldn`t find');                      
				}                      
			});       
			if ($._data( $("#visible_social_status_id")[0], "events" ).change) {       
				jQuery.map(jQuery.grep($._data( $("#visible_social_status_id")[0], "events" ).change, function( a ) {        
					return a.handler.toString().indexOf('onChange') >= 0;        
				}), function( a ) {        
					$('#visible_social_status_id').bind('autoCompleteChange', a.handler);        
					$('#visible_social_status_id').unbind('change', a.handler)        
				});        
			}    
			$('#visible_social_status_id').on("keydown", function(){social_status_id_autocomplete_typing = true;})   
			$('#visible_social_status_id').on("click", function(){social_status_id_autocomplete_typing = false;})   
			$('#visible_social_status_id').autocomplete({                      
					lookup: function (query, done) {    
						if (social_status_id_autocomplete_result) {    
								done({                      
									suggestions: $.map(social_status_id_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_social_status_id").val(), 'i');                    
										if (dataItem.name.match(re) || !social_status_id_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
						} else {    
							ajax({                 
								type: "POST",                 
								url: 'rest/form/get_list',                    
								data: this.params ,           
								contentType: 'application/x-www-form-urlencoded',                   
								dataType: 'json',            
							}, function (response) {        
								response.data.unshift({name: '---', id: ''}) 
								social_status_id_autocomplete_result = response;    
								$('#background_overlay_wait_social_status_id').hide();                      
								$('#message_box_wait_social_status_id').hide();                      
								done({                      
									suggestions: $.map(social_status_id_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_social_status_id").val(), 'i');                    
										if (dataItem.name.match(re) || !social_status_id_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
							});		                 
						}    
					},                 
					params:{			// доп параметры                    
						parameter_name:'social_status_id',                      
						form_api:'ABOUT_ME',                      
					},  
					autoFocus: true,  
					matchContains: true,    
					minChars:0,                    
					showNoSuggestionNotice: true,                    
					formatResult:function (suggestion, currentValue) { 
						 var strongRe= new RegExp("(" + currentValue + ")","gi"); 
						 return "<div data-field='social_status_id' data-id='"+suggestion.data+"' data-name = '"+suggestion.name +"'> " + suggestion.name.replace(strongRe, "<strong>$1</strong>") + "</div>"; 
					},                 
					noSuggestionNotice: 'Couldn`t find',                    
					onSelect: function (suggestion) {                      
						// ставим выбранное значение в hidden поле                      
						$('#social_status_id').val(suggestion.data);      
						$('#visible_social_status_id').val(suggestion.name).change();                      
						$('#visible_social_status_id').removeClass('warning');                      
						$('#visible_social_status_id').attr('title', '');                      
						$('#visible_social_status_id').trigger('autoCompleteChange');        
					},                      
					onSearchStart: function (params) {                      
						if (!$('#visible_social_status_id').is(":visible")){ // динамический visible вызывает у элемента change :( приходится проверять видим элемент или нет                      
							return false;                      
						}                      
						// динам параметры для формирования GET к ajax - сам запрос                      
						params['parameters']='social_status_id:i:' + $('#visible_social_status_id').val();                 
						// модифицируем params чтобы передать реальные значения параметров - parent                     
						params['parameters'] += ':p:' +  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;          
						if (!social_status_id_autocomplete_result) {    
							$('#background_overlay_wait_social_status_id').show();                      
							$('#message_box_wait_social_status_id').show();               
						}    
					},                      
			});                      
		});          
	$("#social_status_id").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		  
	if (data.value != '') { 
		$('#visible_social_status_id').val(data.name).blur();  
		$('#social_status_id').val(data.value);  
	} else { 
		$('#visible_social_status_id').val('---').blur();  
		$('#social_status_id').val('');  
	} 
 
		$("#social_status_id").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				 
	$('#visible_social_status_id').val('---');   
	$('#social_status_id').val('');   
	social_status_id_autocomplete_result = null; 
  
			}	
 		}); 
		$("#social_status_id").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlysocial_status_id(current){       
		if (typeof current.value != 'undefined'){  
			$('#social_status_id').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlysocial_status_id(current){       
		if(window.event.keyCode == 13){       
			$('#visible_social_status_id').val(current.value).change();       
		}       
	}       
$("#downarrow__social_status_id").on("click",function(event){
	if ($("[data-field='social_status_id']:visible").length === 0) {$('#visible_social_status_id').focus();} 
});var control_address_visible = true;
$("#span_control_address").click(function(){
	if (control_address_visible) {
		$("#span_control_address").html("+");
		$("#div_address").css('display', 'none');
	} else {
		$("#span_control_address").html("-");
		$("#div_address").css('display', 'block');
	}
	control_address_visible = !control_address_visible;
});
                      
		var galaxy_autocomplete_result;    
		var galaxy_autocomplete_typing;    
        $( document ).ready(function() {    
			$('#visible_galaxy').on('input', function () {                      
				// ручной ввод без выбора из списка                      
				if ($("#visible_galaxy").val()){                      
					$("#visible_"+"galaxy").addClass('warning');                      
					$("#visible_"+"galaxy").attr('title', 'Couldn`t find');                      
				}                      
			});       
			if ($._data( $("#visible_galaxy")[0], "events" ).change) {       
				jQuery.map(jQuery.grep($._data( $("#visible_galaxy")[0], "events" ).change, function( a ) {        
					return a.handler.toString().indexOf('onChange') >= 0;        
				}), function( a ) {        
					$('#visible_galaxy').bind('autoCompleteChange', a.handler);        
					$('#visible_galaxy').unbind('change', a.handler)        
				});        
			}    
			$('#visible_galaxy').on("keydown", function(){galaxy_autocomplete_typing = true;})   
			$('#visible_galaxy').on("click", function(){galaxy_autocomplete_typing = false;})   
			$('#visible_galaxy').autocomplete({                      
					lookup: function (query, done) {    
						if (galaxy_autocomplete_result) {    
								done({                      
									suggestions: $.map(galaxy_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_galaxy").val(), 'i');                    
										if (dataItem.name.match(re) || !galaxy_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
						} else {    
							ajax({                 
								type: "POST",                 
								url: 'rest/form/get_list',                    
								data: this.params ,           
								contentType: 'application/x-www-form-urlencoded',                   
								dataType: 'json',            
							}, function (response) {        
								response.data.unshift({name: '---', id: ''}) 
								galaxy_autocomplete_result = response;    
								$('#background_overlay_wait_galaxy').hide();                      
								$('#message_box_wait_galaxy').hide();                      
								done({                      
									suggestions: $.map(galaxy_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_galaxy").val(), 'i');                    
										if (dataItem.name.match(re) || !galaxy_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
							});		                 
						}    
					},                 
					params:{			// доп параметры                    
						parameter_name:'galaxy',                      
						form_api:'ADDRESS',                      
					},  
					autoFocus: true,  
					matchContains: true,    
					minChars:0,                    
					showNoSuggestionNotice: true,                    
					formatResult:function (suggestion, currentValue) { 
						 var strongRe= new RegExp("(" + currentValue + ")","gi"); 
						 return "<div data-field='galaxy' data-id='"+suggestion.data+"' data-name = '"+suggestion.name +"'> " + suggestion.name.replace(strongRe, "<strong>$1</strong>") + "</div>"; 
					},                 
					noSuggestionNotice: 'Couldn`t find',                    
					onSelect: function (suggestion) {                      
						// ставим выбранное значение в hidden поле                      
						$('#galaxy').val(suggestion.data);      
						$('#visible_galaxy').val(suggestion.name).change();                      
						$('#visible_galaxy').removeClass('warning');                      
						$('#visible_galaxy').attr('title', '');                      
						$('#visible_galaxy').trigger('autoCompleteChange');        
					},                      
					onSearchStart: function (params) {                      
						if (!$('#visible_galaxy').is(":visible")){ // динамический visible вызывает у элемента change :( приходится проверять видим элемент или нет                      
							return false;                      
						}                      
						// динам параметры для формирования GET к ajax - сам запрос                      
						params['parameters']='galaxy:i:' + $('#visible_galaxy').val();                 
						// модифицируем params чтобы передать реальные значения параметров - parent                     
						params['parameters'] += ':p:' +  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;          
						if (!galaxy_autocomplete_result) {    
							$('#background_overlay_wait_galaxy').show();                      
							$('#message_box_wait_galaxy').show();               
						}    
					},                      
			});                      
		});          
	$("#galaxy").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		  
	if (data.value != '') { 
		$('#visible_galaxy').val(data.name).blur();  
		$('#galaxy').val(data.value);  
	} else { 
		$('#visible_galaxy').val('---').blur();  
		$('#galaxy').val('');  
	} 
 
		$("#galaxy").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				 
	$('#visible_galaxy').val('---');   
	$('#galaxy').val('');   
	galaxy_autocomplete_result = null; 
  
			}	
 		}); 
		$("#galaxy").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlygalaxy(current){       
		if (typeof current.value != 'undefined'){  
			$('#galaxy').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlygalaxy(current){       
		if(window.event.keyCode == 13){       
			$('#visible_galaxy').val(current.value).change();       
		}       
	}       
$("#downarrow__galaxy").on("click",function(event){
	if ($("[data-field='galaxy']:visible").length === 0) {$('#visible_galaxy').focus();} 
});                      
		var planet_autocomplete_result;    
		var planet_autocomplete_typing;    
        $( document ).ready(function() {    
			$('#visible_planet').on('input', function () {                      
				// ручной ввод без выбора из списка                      
				if ($("#visible_planet").val()){                      
					$("#visible_"+"planet").addClass('warning');                      
					$("#visible_"+"planet").attr('title', 'Couldn`t find');                      
				}                      
			});       
			if ($._data( $("#visible_planet")[0], "events" ).change) {       
				jQuery.map(jQuery.grep($._data( $("#visible_planet")[0], "events" ).change, function( a ) {        
					return a.handler.toString().indexOf('onChange') >= 0;        
				}), function( a ) {        
					$('#visible_planet').bind('autoCompleteChange', a.handler);        
					$('#visible_planet').unbind('change', a.handler)        
				});        
			}    
			$('#visible_planet').on("keydown", function(){planet_autocomplete_typing = true;})   
			$('#visible_planet').on("click", function(){planet_autocomplete_typing = false;})   
			$('#visible_planet').autocomplete({                      
					lookup: function (query, done) {    
						if (planet_autocomplete_result) {    
								done({                      
									suggestions: $.map(planet_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_planet").val(), 'i');                    
										if (dataItem.name.match(re) || !planet_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
						} else {    
							ajax({                 
								type: "POST",                 
								url: 'rest/form/get_list_interactive',                    
								data: this.params ,           
								contentType: 'application/x-www-form-urlencoded',                   
								dataType: 'json',            
							}, function (response) {        
								response.data.unshift({name: '---', id: ''}) 
								planet_autocomplete_result = response;    
								$('#background_overlay_wait_planet').hide();                      
								$('#message_box_wait_planet').hide();                      
								done({                      
									suggestions: $.map(planet_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_planet").val(), 'i');                    
										if (dataItem.name.match(re) || !planet_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
							});		                 
						}    
					},                 
					params:{			// доп параметры                    
						parameter_name:'planet',                      
						form_api:'ADDRESS',                      
					},  
					autoFocus: true,  
					matchContains: true,    
					minChars:0,                    
					showNoSuggestionNotice: true,                    
					formatResult:function (suggestion, currentValue) { 
						 var strongRe= new RegExp("(" + currentValue + ")","gi"); 
						 return "<div data-field='planet' data-id='"+suggestion.data+"' data-name = '"+suggestion.name +"'> " + suggestion.name.replace(strongRe, "<strong>$1</strong>") + "</div>"; 
					},                 
					noSuggestionNotice: 'Couldn`t find',                    
					onSelect: function (suggestion) {                      
						// ставим выбранное значение в hidden поле                      
						$('#planet').val(suggestion.data);      
						$('#visible_planet').val(suggestion.name).change();                      
						$('#visible_planet').removeClass('warning');                      
						$('#visible_planet').attr('title', '');                      
						$('#visible_planet').trigger('autoCompleteChange');        
					},                      
					onSearchStart: function (params) {                      
						if (!$('#visible_planet').is(":visible")){ // динамический visible вызывает у элемента change :( приходится проверять видим элемент или нет                      
							return false;                      
						}                      
						// динам параметры для формирования GET к ajax - сам запрос                      
						params['parameters']='planet:i:' + $('#visible_planet').val();                 
						// модифицируем params чтобы передать реальные значения параметров - parent                     
						params['parameters'] += ':p:' + 'galaxy' + ':i:' + $('#galaxy').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;          
						if (!planet_autocomplete_result) {    
							$('#background_overlay_wait_planet').show();                      
							$('#message_box_wait_planet').show();               
						}    
					},                      
			});                      
		});          
	$("#planet").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		  
	if (data.value != '') { 
		$('#visible_planet').val(data.name).blur();  
		$('#planet').val(data.value);  
	} else { 
		$('#visible_planet').val('---').blur();  
		$('#planet').val('');  
	} 
 
		$("#planet").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				 
	$('#visible_planet').val('---');   
	$('#planet').val('');   
	planet_autocomplete_result = null; 
  
			}	
 		}); 
		$("#planet").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		$("#visible_planet").trigger('setValue');     
	});      
	function onChangeReadOnlyplanet(current){       
		if (typeof current.value != 'undefined'){  
			$('#planet').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlyplanet(current){       
		if(window.event.keyCode == 13){       
			$('#visible_planet').val(current.value).change();       
		}       
	}       
 $("#visible_galaxy").on('change', function(){
		onChangegalaxy_planet_ct_ajax_list(this); 
 }); 
		function onChangegalaxy_planet_ct_ajax_list(galaxyList){      
						$("#planet").trigger('cleanValue');       
		}      
$("#downarrow__planet").on("click",function(event){
	if ($("[data-field='planet']:visible").length === 0) {$('#visible_planet').focus();} 
});                      
		var region_autocomplete_result;    
		var region_autocomplete_typing;    
        $( document ).ready(function() {    
			$('#visible_region').on('input', function () {                      
				// ручной ввод без выбора из списка                      
				if ($("#visible_region").val()){                      
					$("#visible_"+"region").addClass('warning');                      
					$("#visible_"+"region").attr('title', 'Couldn`t find');                      
				}                      
			});       
			if ($._data( $("#visible_region")[0], "events" ).change) {       
				jQuery.map(jQuery.grep($._data( $("#visible_region")[0], "events" ).change, function( a ) {        
					return a.handler.toString().indexOf('onChange') >= 0;        
				}), function( a ) {        
					$('#visible_region').bind('autoCompleteChange', a.handler);        
					$('#visible_region').unbind('change', a.handler)        
				});        
			}    
			$('#visible_region').on("keydown", function(){region_autocomplete_typing = true;})   
			$('#visible_region').on("click", function(){region_autocomplete_typing = false;})   
			$('#visible_region').autocomplete({                      
					lookup: function (query, done) {    
						if (region_autocomplete_result) {    
								done({                      
									suggestions: $.map(region_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_region").val(), 'i');                    
										if (dataItem.name.match(re) || !region_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
						} else {    
							ajax({                 
								type: "POST",                 
								url: 'rest/form/get_list_interactive',                    
								data: this.params ,           
								contentType: 'application/x-www-form-urlencoded',                   
								dataType: 'json',            
							}, function (response) {        
								response.data.unshift({name: '---', id: ''}) 
								region_autocomplete_result = response;    
								$('#background_overlay_wait_region').hide();                      
								$('#message_box_wait_region').hide();                      
								done({                      
									suggestions: $.map(region_autocomplete_result.data, function(dataItem) {        
										var re = new RegExp('^' + $("#visible_region").val(), 'i');                    
										if (dataItem.name.match(re) || !region_autocomplete_typing){                      
											return { value: dataItem.name, data: dataItem.id, name: dataItem.name };                      
										}                      
									})                      
								});               
							});		                 
						}    
					},                 
					params:{			// доп параметры                    
						parameter_name:'region',                      
						form_api:'ADDRESS',                      
					},  
					autoFocus: true,  
					matchContains: true,    
					minChars:0,                    
					showNoSuggestionNotice: true,                    
					formatResult:function (suggestion, currentValue) { 
						 var strongRe= new RegExp("(" + currentValue + ")","gi"); 
						 return "<div data-field='region' data-id='"+suggestion.data+"' data-name = '"+suggestion.name +"'> " + suggestion.name.replace(strongRe, "<strong>$1</strong>") + "</div>"; 
					},                 
					noSuggestionNotice: 'Couldn`t find',                    
					onSelect: function (suggestion) {                      
						// ставим выбранное значение в hidden поле                      
						$('#region').val(suggestion.data);      
						$('#visible_region').val(suggestion.name).change();                      
						$('#visible_region').removeClass('warning');                      
						$('#visible_region').attr('title', '');                      
						$('#visible_region').trigger('autoCompleteChange');        
					},                      
					onSearchStart: function (params) {                      
						if (!$('#visible_region').is(":visible")){ // динамический visible вызывает у элемента change :( приходится проверять видим элемент или нет                      
							return false;                      
						}                      
						// динам параметры для формирования GET к ajax - сам запрос                      
						params['parameters']='region:i:' + $('#visible_region').val();                 
						// модифицируем params чтобы передать реальные значения параметров - parent                     
						params['parameters'] += ':p:' + 'galaxy' + ':i:' + $('#galaxy').val()+ ':p:' +'planet' + ':i:' + $('#planet').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;          
						if (!region_autocomplete_result) {    
							$('#background_overlay_wait_region').show();                      
							$('#message_box_wait_region').show();               
						}    
					},                      
			});                      
		});          
	$("#region").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		  
	if (data.value != '') { 
		$('#visible_region').val(data.name).blur();  
		$('#region').val(data.value);  
	} else { 
		$('#visible_region').val('---').blur();  
		$('#region').val('');  
	} 
 
		$("#region").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				 
	$('#visible_region').val('---');   
	$('#region').val('');   
	region_autocomplete_result = null; 
  
			}	
 		}); 
		$("#region").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		$("#visible_region").trigger('setValue');     
	});      
	function onChangeReadOnlyregion(current){       
		if (typeof current.value != 'undefined'){  
			$('#region').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlyregion(current){       
		if(window.event.keyCode == 13){       
			$('#visible_region').val(current.value).change();       
		}       
	}       
 $("#visible_galaxy").on('change', function(){
		onChangegalaxy_region_ct_ajax_list(this); 
 }); 
		function onChangegalaxy_region_ct_ajax_list(galaxyList){      
						$("#region").trigger('cleanValue');       
		}      
 $("#visible_planet").on('change', function(){
		onChangeplanet_region_ct_ajax_list(this); 
 }); 
		function onChangeplanet_region_ct_ajax_list(planetList){      
						$("#region").trigger('cleanValue');       
		}      
$("#downarrow__region").on("click",function(event){
	if ($("[data-field='region']:visible").length === 0) {$('#visible_region').focus();} 
});	$("#zip").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		$('#visible_zip').val(data.value).change(); 
		$("#zip").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				$('#visible_zip').val('').change(); 
			}	
 		}); 
		$("#zip").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlyzip(current){       
		if (typeof current.value != 'undefined'){  
			$('#zip').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlyzip(current){       
		if(window.event.keyCode == 13){       
			$('#visible_zip').val(current.value).change();       
		}       
	}       
 $("#visible_galaxy").change(function(){
		onChangegalaxy_zip_ct_ajax_value(this);
 }); 
					function onChangegalaxy_zip_ct_ajax_value(galaxyList){      
						var valueJS = 'galaxy' + ':i:' + $('#galaxy').val()+ ':p:' +'planet' + ':i:' + $('#planet').val()+ ':p:' +'region' + ':i:' + $('#region').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;    
						var isLoading = false;    
						if (valueJS.match(/:i:(none)?(:p:|$)/)){ return };           
						$("#zip").trigger('cleanValue');       
						$("#visible_zip").trigger('refresh');      
						$("#visible_galaxy").attr("disabled","disabled");      
						$("#visible_galaxy").trigger('refresh');      
						$("#background_overlay_wait_galaxy").show();      
		            	$("#message_box_wait_galaxy").show();      
						if (!ajax_is_parrent_blocked["galaxy"]) {      
							ajax_is_parrent_blocked["galaxy"] = 0;      
						}      
						++ajax_is_parrent_blocked["galaxy"];      
						if (!ajax_is_child_blocked["zip"]) {   
							ajax_is_child_blocked["zip"] = 0;   
						}   
						++ajax_is_child_blocked["zip"];   
						ajax({     
				            	url: 'rest/form/get_value_interactive',     
							data: {     
								parameter_name:'zip',     
								form_api: 'ADDRESS',     
								parameters: valueJS,     
								rnd: Math.floor(Math.random() * 10000),     
							},     
					            type: 'post',     
					            dataType: 'json',     
					            contentType: 'application/x-www-form-urlencoded',     
						}, function (data) {  
								var elements_present=0;      
								elements_present=1;      
								if (data.message) {      
									$('#visible_zip').css('color', 'red');      
									$('#visible_zip').html(data.item_error);      
									$('#visible_zip').val('').change();      
								} else {      
									$('#visible_zip').css('color', '');      
									$('#visible_zip').val(data.value).change();;      
								}      
								var zip = $('#tr_zip');      
								if (elements_present==0){      
									if (""){      
										zip.css("display", 'none');      
										$('#is_empty_zip').val(1);      
									}else{      
										if ($('#zip').attr('invisible') == 'false') {      
											if ((document.getElementById && !document.all) || window.opera)      
												zip.css("display",'table-row');      
											else      
												zip.css("display",'inline');      
										}      
									}      
								}else{      
									if ($('#zip').attr('invisible') == 'false') {Value      
										if ((document.getElementById && !document.all) || window.opera)      
											zip.css("display",'table-row');      
										else      
											zip.css("display",'inline');      
									}      
								}      
								--ajax_is_parrent_blocked["galaxy"];      
								$("#visible_zip").trigger('set_find_result');      
								if (ajax_is_parrent_blocked["galaxy"] == 0) {      
									if (!$("#tr_galaxy" ).hasClass('disabled')) {  
										$("#visible_galaxy").removeAttr('disabled');  
									}  
									$("#visible_galaxy").trigger('on_parrent_unblocked');      
									$("#background_overlay_wait_galaxy").hide();      
		            						$("#message_box_wait_galaxy").hide();      
									$("#visible_zip").unbind('set_find_result');    
								}      
								--ajax_is_child_blocked["zip"]; 
								if (ajax_is_child_blocked["zip"] == 0) { 
            								$("#visible_zip").trigger( 'on_child_unblocked'); 
								} 
								$("#visible_galaxy").trigger('refresh');      
								$("#visible_zip").trigger('refresh');      
						});   
 }      
 $("#visible_planet").change(function(){
		onChangeplanet_zip_ct_ajax_value(this);
 }); 
					function onChangeplanet_zip_ct_ajax_value(planetList){      
						var valueJS = 'galaxy' + ':i:' + $('#galaxy').val()+ ':p:' +'planet' + ':i:' + $('#planet').val()+ ':p:' +'region' + ':i:' + $('#region').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;    
						var isLoading = false;    
						if (valueJS.match(/:i:(none)?(:p:|$)/)){ return };           
						$("#zip").trigger('cleanValue');       
						$("#visible_zip").trigger('refresh');      
						$("#visible_planet").attr("disabled","disabled");      
						$("#visible_planet").trigger('refresh');      
						$("#background_overlay_wait_planet").show();      
		            	$("#message_box_wait_planet").show();      
						if (!ajax_is_parrent_blocked["planet"]) {      
							ajax_is_parrent_blocked["planet"] = 0;      
						}      
						++ajax_is_parrent_blocked["planet"];      
						if (!ajax_is_child_blocked["zip"]) {   
							ajax_is_child_blocked["zip"] = 0;   
						}   
						++ajax_is_child_blocked["zip"];   
						ajax({     
				            	url: 'rest/form/get_value_interactive',     
							data: {     
								parameter_name:'zip',     
								form_api: 'ADDRESS',     
								parameters: valueJS,     
								rnd: Math.floor(Math.random() * 10000),     
							},     
					            type: 'post',     
					            dataType: 'json',     
					            contentType: 'application/x-www-form-urlencoded',     
						}, function (data) {  
								var elements_present=0;      
								elements_present=1;      
								if (data.message) {      
									$('#visible_zip').css('color', 'red');      
									$('#visible_zip').html(data.item_error);      
									$('#visible_zip').val('').change();      
								} else {      
									$('#visible_zip').css('color', '');      
									$('#visible_zip').val(data.value).change();;      
								}      
								var zip = $('#tr_zip');      
								if (elements_present==0){      
									if (""){      
										zip.css("display", 'none');      
										$('#is_empty_zip').val(1);      
									}else{      
										if ($('#zip').attr('invisible') == 'false') {      
											if ((document.getElementById && !document.all) || window.opera)      
												zip.css("display",'table-row');      
											else      
												zip.css("display",'inline');      
										}      
									}      
								}else{      
									if ($('#zip').attr('invisible') == 'false') {Value      
										if ((document.getElementById && !document.all) || window.opera)      
											zip.css("display",'table-row');      
										else      
											zip.css("display",'inline');      
									}      
								}      
								--ajax_is_parrent_blocked["planet"];      
								$("#visible_zip").trigger('set_find_result');      
								if (ajax_is_parrent_blocked["planet"] == 0) {      
									if (!$("#tr_planet" ).hasClass('disabled')) {  
										$("#visible_planet").removeAttr('disabled');  
									}  
									$("#visible_planet").trigger('on_parrent_unblocked');      
									$("#background_overlay_wait_planet").hide();      
		            						$("#message_box_wait_planet").hide();      
									$("#visible_zip").unbind('set_find_result');    
								}      
								--ajax_is_child_blocked["zip"]; 
								if (ajax_is_child_blocked["zip"] == 0) { 
            								$("#visible_zip").trigger( 'on_child_unblocked'); 
								} 
								$("#visible_planet").trigger('refresh');      
								$("#visible_zip").trigger('refresh');      
						});   
 }      
 $("#visible_region").change(function(){
		onChangeregion_zip_ct_ajax_value(this);
 }); 
					function onChangeregion_zip_ct_ajax_value(regionList){      
						var valueJS = 'galaxy' + ':i:' + $('#galaxy').val()+ ':p:' +'planet' + ':i:' + $('#planet').val()+ ':p:' +'region' + ':i:' + $('#region').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;    
						var isLoading = false;    
						if (valueJS.match(/:i:(none)?(:p:|$)/)){ return };           
						$("#zip").trigger('cleanValue');       
						$("#visible_zip").trigger('refresh');      
						$("#visible_region").attr("disabled","disabled");      
						$("#visible_region").trigger('refresh');      
						$("#background_overlay_wait_region").show();      
		            	$("#message_box_wait_region").show();      
						if (!ajax_is_parrent_blocked["region"]) {      
							ajax_is_parrent_blocked["region"] = 0;      
						}      
						++ajax_is_parrent_blocked["region"];      
						if (!ajax_is_child_blocked["zip"]) {   
							ajax_is_child_blocked["zip"] = 0;   
						}   
						++ajax_is_child_blocked["zip"];   
						ajax({     
				            	url: 'rest/form/get_value_interactive',     
							data: {     
								parameter_name:'zip',     
								form_api: 'ADDRESS',     
								parameters: valueJS,     
								rnd: Math.floor(Math.random() * 10000),     
							},     
					            type: 'post',     
					            dataType: 'json',     
					            contentType: 'application/x-www-form-urlencoded',     
						}, function (data) {  
								var elements_present=0;      
								elements_present=1;      
								if (data.message) {      
									$('#visible_zip').css('color', 'red');      
									$('#visible_zip').html(data.item_error);      
									$('#visible_zip').val('').change();      
								} else {      
									$('#visible_zip').css('color', '');      
									$('#visible_zip').val(data.value).change();;      
								}      
								var zip = $('#tr_zip');      
								if (elements_present==0){      
									if (""){      
										zip.css("display", 'none');      
										$('#is_empty_zip').val(1);      
									}else{      
										if ($('#zip').attr('invisible') == 'false') {      
											if ((document.getElementById && !document.all) || window.opera)      
												zip.css("display",'table-row');      
											else      
												zip.css("display",'inline');      
										}      
									}      
								}else{      
									if ($('#zip').attr('invisible') == 'false') {Value      
										if ((document.getElementById && !document.all) || window.opera)      
											zip.css("display",'table-row');      
										else      
											zip.css("display",'inline');      
									}      
								}      
								--ajax_is_parrent_blocked["region"];      
								$("#visible_zip").trigger('set_find_result');      
								if (ajax_is_parrent_blocked["region"] == 0) {      
									if (!$("#tr_region" ).hasClass('disabled')) {  
										$("#visible_region").removeAttr('disabled');  
									}  
									$("#visible_region").trigger('on_parrent_unblocked');      
									$("#background_overlay_wait_region").hide();      
		            						$("#message_box_wait_region").hide();      
									$("#visible_zip").unbind('set_find_result');    
								}      
								--ajax_is_child_blocked["zip"]; 
								if (ajax_is_child_blocked["zip"] == 0) { 
            								$("#visible_zip").trigger( 'on_child_unblocked'); 
								} 
								$("#visible_region").trigger('refresh');      
								$("#visible_zip").trigger('refresh');      
						});   
 }      
$("#visible_zip").on("mousedown",function(event){
	setTimeout(function() {$('#visible_zip').focus();}, 100);
});$("#visible_zip").on("keydown",function(event){
	onChangeReadOnlyzip(event.delegateTarget, event);
});$("#visible_zip").on("change",function(event){
	if ($(event.delegateTarget, event).val() && !($(event.delegateTarget, event).val().match(/^.*$/))) { alert("Incorrect value \'" + $(event.delegateTarget, event).val() + "\'"); $(event.delegateTarget, event).val("").change().attr( "class", "error").trigger("refresh").focus(); return false;} else {$(event.delegateTarget, event).attr( "class", "").trigger("refresh")}onChangeReadOnlyzip(event.delegateTarget, event);
});$("#visible_zip").on("blur",function(event){
	onChangeReadOnlyzip(event.delegateTarget, event);
});var control_multipass_visible = true;
$("#span_control_multipass").click(function(){
	if (control_multipass_visible) {
		$("#span_control_multipass").html("+");
		$("#div_multipass").css('display', 'none');
	} else {
		$("#span_control_multipass").html("-");
		$("#div_multipass").css('display', 'block');
	}
	control_multipass_visible = !control_multipass_visible;
});
	$("#has_multipass").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
			if (isLoading) {                                                 
		$("#visible_has_multipass").bind('setValue', function(){    
			$("#visible_has_multipass" + data.value).click();   
			$("#visible_has_multipass").change();   
			$("#has_multipass").val(data.value); 
			                                                        
		});                                                         
	} else {                                                        
		$("#visible_has_multipass" + data.value).click();         
		$("#visible_has_multipass").change();   
		$("#has_multipass").val(data.value);   
	}                                            
 
		$("#has_multipass").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
											   
							$("[name='visible_has_multipass']").each(function(index, item){ 
								$(this).prop("checked", false).trigger('refresh'); 
							}); 
							$('#has_multipass').val(''); 
 
			}	
 		}); 
		$("#has_multipass").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
					$("#background_overlay_wait_has_multipass").show();          
			$("#message_box_wait_has_multipass").show();          
			$("#visible_has_multipass").attr("disabled","disabled");         
			ajax({                                        
					url: "rest/form/" + "get_list",   
					data: {  
						form_api: "MULTIPASS",  
						parameter_name: "has_multipass",  
						parameters:  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
,  
					},    
					type: "post",     
					dataType: "json",    
					contentType: 'application/x-www-form-urlencoded'    
				}, function( data ) {      
					$("#visible_has_multipass").empty();          
					$("#visible_has_multipass").removeAttr('disabled');         
							$.each(data.data, function(key, val) {   
			var visible_name = 'visible_has_multipass' + val.id;   
			$("<input/>", {   
				'value': val.id,    
				'checked': val.value,    
				'type': 'radio',    
				'id': visible_name,    
				'name': 'visible_has_multipass',    
			}).appendTo("#visible_has_multipass");   
			$("<label/>", {    
				style: 'margin:3px;',    
				html: val.name,    
				'for': visible_name,    
			}).appendTo("#visible_has_multipass");  
			$('#' + visible_name).click( function(event){ 
				onChangeReadOnlyhas_multipass(event.delegateTarget); 
			}); 
			$('#' + visible_name).change( function(event){ 
				onChangeReadOnlyhas_multipass(event.delegateTarget); 
			}); 
           $("#visible_has_multipass" + val.id).styler({}); 
		});   
				  
          
					$("#visible_has_multipass").trigger('refresh');          
					$("#visible_has_multipass").trigger('setValue');    
					$("#background_overlay_wait_has_multipass").hide();          
					$("#message_box_wait_has_multipass").hide();          
			});     
     
	});      
	function onChangeReadOnlyhas_multipass(current){       
		if (typeof current.value != 'undefined'){  
			$('#has_multipass').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlyhas_multipass(current){       
		if(window.event.keyCode == 13){       
			$('#visible_has_multipass').val(current.value).change();       
		}       
	}       
	$("#multipass_id").bind("setValueOnLoad", function (event, data) {      
		var isLoading = true;      
		$('#visible_multipass_id').val(data.value).change(); 
		$("#multipass_id").bind("cleanValue", function(){ 
			if (formsWaitedToLoad === 0) { 
				$('#visible_multipass_id').val('').change(); 
			}	
 		}); 
		$("#multipass_id").unbind("setValueOnLoad");   
	});      
	$( document ).bind('setListOnLoad', function() {      
		     
	});      
	function onChangeReadOnlymultipass_id(current){       
		if (typeof current.value != 'undefined'){  
			$('#multipass_id').val(current.value);       
		}  
	}       
	function onKeyDownReadOnlymultipass_id(current){       
		if(window.event.keyCode == 13){       
			$('#visible_multipass_id').val(current.value).change();       
		}       
	}       
$( "#visible_multipass_id" ).on( "blur", function(event, data) { 

	        			var rn = this.value; 
		        		if (rn.match(/\w-\d{7}/)) {
		        			if (!confirm('Are you sure?')) {
								this.focus();
							};
						}
					});
 $("#visible_has_multipass").change(function(){
		onChangehas_multipass_multipass_id_ct_ajax_visible(this);
 }); 
				function onChangehas_multipass_multipass_id_ct_ajax_visible(has_multipassList){        
					var valueJS = 'has_multipass' + ':i:' + $('#has_multipass').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
;     
								if (valueJS.match(/:i:(none)?(:p:|$)/)) {
				$('#tr_multipass_id').css("display", 'none');
				$('#visible_multipass_id').val('').change();
				$('#multipass_id').attr('invisible', true);
				$('#tr_multipass_id').trigger('refresh');
				return;			}         
					$('#multipass_id').attr('invisible', true);        
					$("#visible_has_multipass").attr("disabled","disabled");        
					$("#visible_has_multipass").trigger('refresh');        
					$("#background_overlay_wait_has_multipass").show();        
	            	$("#message_box_wait_has_multipass").show();        
					if (!ajax_is_parrent_blocked["has_multipass"]) {        
						ajax_is_parrent_blocked["has_multipass"] = 0;        
					}					++ajax_is_parrent_blocked["has_multipass"];        
					if (!ajax_is_child_blocked["multipass_id"]) {    
						ajax_is_child_blocked["multipass_id"] = 0;    
					}    
					++ajax_is_child_blocked["multipass_id"];    
					ajax({        
			            	url: 'rest/form/get_is_visible_interactive',        
						data: {        
							parameter_name:'multipass_id',        
							form_api: 'MULTIPASS',        
							parameters: 'has_multipass' + ':i:' + $('#has_multipass').val() 
	+ ':p:' +  Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
,        
							rnd: Math.floor(Math.random() * 10000),        
						},       
				            type: 'post',        
				            dataType: 'json',        
				            contentType: 'application/x-www-form-urlencoded',        
						}, function (data) {  
								if (data.value) {        
									if ((document.getElementById && !document.all) || window.opera)        
										$('#tr_multipass_id').css("display",'table-row');        
									else        
										$('#tr_multipass_id').css("display",'inline');        
										$('#multipass_id').attr('invisible', false);        
								} else {        
									$('#tr_multipass_id').css("display", 'none');        
									$('#visible_multipass_id').val('').change();        
									$('#multipass_id').attr('invisible', true);        
								}        
							$('#tr_multipass_id').trigger('refresh');        
							--ajax_is_parrent_blocked["has_multipass"];   
							$("#visible_multipass_id").trigger("set_find_result");        
							if (ajax_is_parrent_blocked["has_multipass"] == 0) {        
								$("#visible_has_multipass").trigger('on_parrent_unblocked');  
								if (!$("#tr_has_multipass" ).hasClass('disabled')) {  
									$("#visible_has_multipass").removeAttr('disabled');  
								}  
								$("#visible_has_multipass").removeAttr('disabled');        
								$("#background_overlay_wait_has_multipass").hide();        
			            				$("#message_box_wait_has_multipass").hide();        
							}        
							--ajax_is_child_blocked["multipass_id"]; 
							if (ajax_is_child_blocked["multipass_id"] == 0) { 
            							$("#visible_multipass_id").trigger( 'on_child_unblocked'); 
							} 
							$("#visible_has_multipass").trigger('refresh');        
							$("#visible_multipass_id").trigger('refresh');        
					});        
				}        
$("#visible_multipass_id").on("mousedown",function(event){
	setTimeout(function() {$('#visible_multipass_id').focus();}, 100);
});$("#visible_multipass_id").on("keydown",function(event){
	onChangeReadOnlymultipass_id(event.delegateTarget, event);
});$("#visible_multipass_id").on("change",function(event){
	if ($(event.delegateTarget, event).val() && !($(event.delegateTarget, event).val().match(/^[\w\p{L}\u{2116} -\.:@\/\\]+$/))) { alert("Incorrect value \'" + $(event.delegateTarget, event).val() + "\'"); $(event.delegateTarget, event).val("").change().attr( "class", "error").trigger("refresh").focus(); return false;} else {$(event.delegateTarget, event).attr( "class", "").trigger("refresh")}onChangeReadOnlymultipass_id(event.delegateTarget, event);
});$("#visible_multipass_id").on("blur",function(event){
	onChangeReadOnlymultipass_id(event.delegateTarget, event);
});					var tag__g_SPACESHIP = 'CjxkaXY+Cgo8ZmllbGRzZXQgaWQ9ImZpbGRzZXRfPE5VTUJFUj4iIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgbWFyZ2luOiA1cHg7IiBuYW1lPSJmaWxkc2V0XzxOVU1CRVI+Ij4KCjxsZWdlbmQ+Cgo8bGFiZWwgZm9yPSJmaWxkc2V0XzxOVU1CRVI+Ij4KCjxzcGFuIGlkPSJzcGFuX2NvbnRyb2xfPE5VTUJFUj4iIGNsYXNzPSJpbnRlcmZhY2VfZXhwYW5kIiBuYW1lPSJzcGFuX2NvbnRyb2xfPE5VTUJFUj4iPgotCjwvc3Bhbj4KPHNwYW4gaWQ9InNwYW5fPE5VTUJFUj4iIG5hbWU9InNwYW5fPE5VTUJFUj4iPgpTcGFjZXNoaXAKPC9zcGFuPgo8L2xhYmVsPgo8L2xlZ2VuZD4KPGRpdiBpZD0iZGl2XzxOVU1CRVI+IiBuYW1lPSJkaXZfPE5VTUJFUj4iPgoKPGRpdiBpZD0iYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiBjbGFzcz0iYmFja2dyb3VuZF9vdmVybGF5X3dhaXQiIG5hbWU9ImJhY2tncm91bmRfb3ZlcmxheV93YWl0Ij4KCjwvZGl2Pgo8ZGl2IGlkPSJtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIgY2xhc3M9Im1lc3NhZ2VfYm94X3dhaXQiIG5hbWU9Im1lc3NhZ2VfYm94X3dhaXQiPgoKPGRpdiBjbGFzcz0ibWVzc2FnZV9vdmVybGF5X3dhaXQiIG5hbWU9Im1lc3NhZ2Vfb3ZlcmxheV93YWl0Ij4KV2FpdCBwbGVhc2UuLi4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGlkPSJkaXZfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiBjbGFzcz0iaW50ZXJmYWNlX2VsZW1lbnRfaG9yaXpvbnRhbCIgc3R5bGU9IiI+Cgo8dGFibGUgaWQ9InRhYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIgY2xhc3M9ImludGVyZmFjZV9lbGVtZW50X2hvcml6b250YWwiIHN0eWxlPSJ3aWR0aDoxMDAlOyI+Cgo8dHIgaWQ9InRyX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiI+Cgo8dGQ+Cgo8dGFibGUgY2xhc3M9ImludGVyZmFjZV9lbGVtZW50X2hvcml6b250YWwiIHN0eWxlPSJ3aWR0aDogNTAwcHg7Ij4KCjx0ciBjbGFzcz0iaW50ZXJmYWNlX2VsZW1lbnRfaG9yaXpvbnRhbCI+Cgo8dGQgc3R5bGU9InBhZGRpbmc6IDFwdCA1cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHRleHQtYWxpZ246IGxlZnQ7Ij4KCjxub2JyPgoKPGxhYmVsIGZvcj0idmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iPgpQcm9kdWN0aW9uIGdhbGF4eToKPC9sYWJlbD4KPC9ub2JyPgo8L3RkPgo8dGQgc3R5bGU9InZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHdpZHRoOiAxMDAlOyI+Cgo8aW5wdXQgaWQ9ImFwaV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0iYXBpX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIgdmFsdWU9IlNQQUNFU0hJUCI+CjxpbnB1dCBpZD0icGFycmVudF9hcGlfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiB0eXBlPSJoaWRkZW4iIG5hbWU9InBhcnJlbnRfYXBpX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIgdmFsdWU9IkFCT1VUX01FIj4KPGlucHV0IGlkPSJyZXF1aXJlZF9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0icmVxdWlyZWRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiB2YWx1ZT0iMSI+CjxpbnB1dCBpZD0ic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiB0eXBlPSJoaWRkZW4iIG5hbWU9InNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiI+CjxzcGFuIGNsYXNzPSJjb21ib2JveCI+Cgo8aW5wdXQgaWQ9InZpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiB0eXBlPSJzZWFyY2giIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OjBweDt3aWR0aDoxMDAlOyIgbmFtZT0idmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iPgoKPC9pbnB1dD4KPHNwYW4gaWQ9ImRvd25hcnJvd19fc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiBjbGFzcz0iZG93bmFycm93IiB0YWJpbmRleD0iLTEiPgoKPC9zcGFuPgo8L3NwYW4+CjwvdGQ+CjwvdHI+CjwvdGFibGU+CjwvdGQ+CjwvdHI+CjwvdGFibGU+CjwvZGl2Pgo8ZGl2IGlkPSJiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdF9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iIGNsYXNzPSJiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdCIgbmFtZT0iYmFja2dyb3VuZF9vdmVybGF5X3dhaXQiPgoKPC9kaXY+CjxkaXYgaWQ9Im1lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IiBjbGFzcz0ibWVzc2FnZV9ib3hfd2FpdCIgbmFtZT0ibWVzc2FnZV9ib3hfd2FpdCI+Cgo8ZGl2IGNsYXNzPSJtZXNzYWdlX292ZXJsYXlfd2FpdCIgbmFtZT0ibWVzc2FnZV9vdmVybGF5X3dhaXQiPgpXYWl0IHBsZWFzZS4uLgo8L2Rpdj4KPC9kaXY+CjxkaXYgaWQ9ImRpdl9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iIGNsYXNzPSJpbnRlcmZhY2VfZWxlbWVudF9ob3Jpem9udGFsIiBzdHlsZT0iIj4KCjx0YWJsZSBpZD0idGFibGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IiBjbGFzcz0iaW50ZXJmYWNlX2VsZW1lbnRfaG9yaXpvbnRhbCIgc3R5bGU9IndpZHRoOjEwMCU7Ij4KCjx0ciBpZD0idHJfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Ij4KCjx0ZD4KCjx0YWJsZSBjbGFzcz0iaW50ZXJmYWNlX2VsZW1lbnRfaG9yaXpvbnRhbCIgc3R5bGU9IndpZHRoOiA1MDBweDsiPgoKPHRyIGNsYXNzPSJpbnRlcmZhY2VfZWxlbWVudF9ob3Jpem9udGFsIj4KCjx0ZCBzdHlsZT0icGFkZGluZzogMXB0IDVweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgdGV4dC1hbGlnbjogbGVmdDsiPgoKPG5vYnI+Cgo8bGFiZWwgZm9yPSJ2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiI+ClByb2R1Y3Rpb24gcGxhbmV0Ogo8L2xhYmVsPgo8L25vYnI+CjwvdGQ+Cjx0ZCBzdHlsZT0idmVydGljYWwtYWxpZ246IG1pZGRsZTsgd2lkdGg6IDEwMCU7Ij4KCjxpbnB1dCBpZD0iYXBpX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIgdHlwZT0iaGlkZGVuIiBuYW1lPSJhcGlfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IiB2YWx1ZT0iU1BBQ0VTSElQIj4KPGlucHV0IGlkPSJwYXJyZW50X2FwaV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0icGFycmVudF9hcGlfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IiB2YWx1ZT0iQUJPVVRfTUUiPgo8aW5wdXQgaWQ9InJlcXVpcmVkX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIgdHlwZT0iaGlkZGVuIiBuYW1lPSJyZXF1aXJlZF9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iIHZhbHVlPSIxIj4KPGlucHV0IGlkPSJzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0ic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Ij4KPHNwYW4gY2xhc3M9ImNvbWJvYm94Ij4KCjxpbnB1dCBpZD0idmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iIHR5cGU9InNlYXJjaCIgc3R5bGU9InBhZGRpbmctcmlnaHQ6MHB4O3dpZHRoOjEwMCU7IiBuYW1lPSJ2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiI+Cgo8L2lucHV0Pgo8c3BhbiBpZD0iZG93bmFycm93X19zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iIGNsYXNzPSJkb3duYXJyb3ciIHRhYmluZGV4PSItMSI+Cgo8L3NwYW4+Cjwvc3Bhbj4KPC90ZD4KPC90cj4KPC90YWJsZT4KPC90ZD4KPC90cj4KPC90YWJsZT4KPC9kaXY+CjxkaXYgaWQ9ImJhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iIGNsYXNzPSJiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdCIgbmFtZT0iYmFja2dyb3VuZF9vdmVybGF5X3dhaXQiPgoKPC9kaXY+CjxkaXYgaWQ9Im1lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgY2xhc3M9Im1lc3NhZ2VfYm94X3dhaXQiIG5hbWU9Im1lc3NhZ2VfYm94X3dhaXQiPgoKPGRpdiBjbGFzcz0ibWVzc2FnZV9vdmVybGF5X3dhaXQiIG5hbWU9Im1lc3NhZ2Vfb3ZlcmxheV93YWl0Ij4KV2FpdCBwbGVhc2UuLi4KPC9kaXY+CjwvZGl2Pgo8ZGl2IGlkPSJkaXZfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgY2xhc3M9ImludGVyZmFjZV9lbGVtZW50X2hvcml6b250YWwiIHN0eWxlPSIiPgoKPHRhYmxlIGlkPSJ0YWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IiBjbGFzcz0iaW50ZXJmYWNlX2VsZW1lbnRfaG9yaXpvbnRhbCIgc3R5bGU9IndpZHRoOjEwMCU7Ij4KCjx0ciBpZD0idHJfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiI+Cgo8dGQ+Cgo8dGFibGUgY2xhc3M9ImludGVyZmFjZV9lbGVtZW50X2hvcml6b250YWwiIHN0eWxlPSJ3aWR0aDogOTkwcHg7Ij4KCjx0ciBjbGFzcz0iaW50ZXJmYWNlX2VsZW1lbnRfaG9yaXpvbnRhbCI+Cgo8dGQgc3R5bGU9InBhZGRpbmc6IDFwdCA1cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHRleHQtYWxpZ246IGxlZnQ7Ij4KCjxub2JyPgoKPGxhYmVsIGZvcj0idmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Ij4KU3BhY2VzaGlwIGZhY3Rvcnk6CjwvbGFiZWw+Cjwvbm9icj4KPC90ZD4KPHRkIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB3aWR0aDogMTAwJTsiPgoKPGlucHV0IGlkPSJhcGlfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgdHlwZT0iaGlkZGVuIiBuYW1lPSJhcGlfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgdmFsdWU9IlNQQUNFU0hJUCI+CjxpbnB1dCBpZD0icGFycmVudF9hcGlfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgdHlwZT0iaGlkZGVuIiBuYW1lPSJwYXJyZW50X2FwaV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IiB2YWx1ZT0iQUJPVVRfTUUiPgo8aW5wdXQgaWQ9InJlcXVpcmVkX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0icmVxdWlyZWRfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgdmFsdWU9IjEiPgo8aW5wdXQgaWQ9InNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0ic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiI+CjxkaXYgY2xhc3M9InN0eWxlZCI+Cgo8aW5wdXQgaWQ9ImZha2VfdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IiB0eXBlPSJ0ZXh0IiByZWFkb25seT0icmVhZG9ubHkiIHN0eWxlPSJ3aWR0aDoxMDAlO2N1cnNvcjogZGVmYXVsdDsiIG5hbWU9ImZha2VfdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Ij4KPHNlbGVjdCBpZD0idmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IiBzdHlsZT0iZGlzcGxheTogbm9uZTsiIG5hbWU9InZpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiI+Cgo8L3NlbGVjdD4KPC9kaXY+CjwvdGQ+CjwvdHI+CjwvdGFibGU+CjwvdGQ+CjwvdHI+CjwvdGFibGU+CjwvZGl2Pgo8ZGl2IGlkPSJiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdF9lbmdpbmVfdHlwZTxOVU1CRVI+IiBjbGFzcz0iYmFja2dyb3VuZF9vdmVybGF5X3dhaXQiIG5hbWU9ImJhY2tncm91bmRfb3ZlcmxheV93YWl0Ij4KCjwvZGl2Pgo8ZGl2IGlkPSJtZXNzYWdlX2JveF93YWl0X2VuZ2luZV90eXBlPE5VTUJFUj4iIGNsYXNzPSJtZXNzYWdlX2JveF93YWl0IiBuYW1lPSJtZXNzYWdlX2JveF93YWl0Ij4KCjxkaXYgY2xhc3M9Im1lc3NhZ2Vfb3ZlcmxheV93YWl0IiBuYW1lPSJtZXNzYWdlX292ZXJsYXlfd2FpdCI+CldhaXQgcGxlYXNlLi4uCjwvZGl2Pgo8L2Rpdj4KPGRpdiBpZD0iZGl2X2VuZ2luZV90eXBlPE5VTUJFUj4iIGNsYXNzPSJpbnRlcmZhY2VfZWxlbWVudF9ob3Jpem9udGFsIiBzdHlsZT0iIj4KCjx0YWJsZSBpZD0idGFibGVfZW5naW5lX3R5cGU8TlVNQkVSPiIgY2xhc3M9ImludGVyZmFjZV9lbGVtZW50X2hvcml6b250YWwiIHN0eWxlPSJ3aWR0aDoxMDAlOyI+Cgo8dHIgaWQ9InRyX2VuZ2luZV90eXBlPE5VTUJFUj4iPgoKPHRkPgoKPHRhYmxlIGNsYXNzPSJpbnRlcmZhY2VfZWxlbWVudF9ob3Jpem9udGFsIiBzdHlsZT0id2lkdGg6IDk5MHB4OyI+Cgo8dHIgY2xhc3M9ImludGVyZmFjZV9lbGVtZW50X2hvcml6b250YWwiPgoKPHRkIHN0eWxlPSJwYWRkaW5nOiAxcHQgNXB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+Cgo8bm9icj4KCjxsYWJlbCBmb3I9InZpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiI+CkVuZ2luZSB0eXBlOgo8L2xhYmVsPgo8L25vYnI+CjwvdGQ+Cjx0ZCBzdHlsZT0idmVydGljYWwtYWxpZ246IG1pZGRsZTsgd2lkdGg6IDEwMCU7Ij4KCjxpbnB1dCBpZD0iYXBpX2VuZ2luZV90eXBlPE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0iYXBpX2VuZ2luZV90eXBlPE5VTUJFUj4iIHZhbHVlPSJTUEFDRVNISVAiPgo8aW5wdXQgaWQ9InBhcnJlbnRfYXBpX2VuZ2luZV90eXBlPE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0icGFycmVudF9hcGlfZW5naW5lX3R5cGU8TlVNQkVSPiIgdmFsdWU9IkFCT1VUX01FIj4KPGlucHV0IGlkPSJyZXF1aXJlZF9lbmdpbmVfdHlwZTxOVU1CRVI+IiB0eXBlPSJoaWRkZW4iIG5hbWU9InJlcXVpcmVkX2VuZ2luZV90eXBlPE5VTUJFUj4iIHZhbHVlPSIiPgo8aW5wdXQgaWQ9ImVuZ2luZV90eXBlPE5VTUJFUj4iIHR5cGU9ImhpZGRlbiIgbmFtZT0iZW5naW5lX3R5cGU8TlVNQkVSPiI+CjxkaXYgaWQ9InZpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIgc3R5bGU9ImRpc3BsYXk6IHRhYmxlLXJvdzsiIG5hbWU9InZpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiI+Cgo8L2Rpdj4KPC90ZD4KPC90cj4KPC90YWJsZT4KPC90ZD4KPC90cj4KPC90YWJsZT4KPC9kaXY+CjxpbnB1dCBpZD0iYnV0dG9uX2RlbF88TlVNQkVSPiIgY2xhc3M9ImludGVyZmFjZV9kZWxfYnV0dG9uIiB0eXBlPSJidXR0b24iIG5hbWU9ImJ1dHRvbl9kZWxfPE5VTUJFUj4iIHZhbHVlPSJEZWxldGUgU3BhY2VzaGlwIj4KPGlucHV0IGlkPSJncm91cF9hY3Rpb25fPE5VTUJFUj4iIGNsYXNzPSJpbnRlcmZhY2VfZGVsX2J1dHRvbiIgdHlwZT0iaGlkZGVuIiBuYW1lPSJncm91cF9hY3Rpb25fPE5VTUJFUj4iIHZhbHVlPSJjcmVhdGUiPgoJCQkJCgkJCQkKCgkJCQkKCQkJCQoJCQkJCgkJCQo8L2Rpdj4KPC9maWVsZHNldD4KPC9kaXY+';     
					var script__g_SPACESHIP = 'dmFyIGNvbnRyb2xfPE5VTUJFUj5fdmlzaWJsZSA9IHRydWU7CiQoIiNzcGFuX2NvbnRyb2xfPE5VTUJFUj4iKS5jbGljayhmdW5jdGlvbigpewoJaWYgKGNvbnRyb2xfPE5VTUJFUj5fdmlzaWJsZSkgewoJCSQoIiNzcGFuX2NvbnRyb2xfPE5VTUJFUj4iKS5odG1sKCIrIik7CgkJJCgiI2Rpdl88TlVNQkVSPiIpLmNzcygnZGlzcGxheScsICdub25lJyk7Cgl9IGVsc2UgewoJCSQoIiNzcGFuX2NvbnRyb2xfPE5VTUJFUj4iKS5odG1sKCItIik7CgkJJCgiI2Rpdl88TlVNQkVSPiIpLmNzcygnZGlzcGxheScsICdibG9jaycpOwoJfQoJY29udHJvbF88TlVNQkVSPl92aXNpYmxlID0gIWNvbnRyb2xfPE5VTUJFUj5fdmlzaWJsZTsKfSk7CnZhciBhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+ID0ge307CnZhciBhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPiA9IHt9OwogICAgICAgICAgICAgICAgICAgICAgCgkJdmFyIHNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPl9hdXRvY29tcGxldGVfcmVzdWx0OyAgICAKCQl2YXIgc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2F1dG9jb21wbGV0ZV90eXBpbmc7ICAgIAogICAgICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7ICAgIAoJCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJLy8g0YDRg9GH0L3QvtC5INCy0LLQvtC0INCx0LXQtyDQstGL0LHQvtGA0LAg0LjQtyDRgdC/0LjRgdC60LAgICAgICAgICAgICAgICAgICAgICAgCgkJCQlpZiAoJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudmFsKCkpeyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkkKCIjdmlzaWJsZV8iKyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5hZGRDbGFzcygnd2FybmluZycpOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkkKCIjdmlzaWJsZV8iKyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5hdHRyKCd0aXRsZScsICdDb3VsZG5gdCBmaW5kJyk7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJfSAgICAgICAgICAgICAgICAgICAgICAKCQkJfSk7ICAgICAgIAoJCQlpZiAoJC5fZGF0YSggJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IilbMF0sICJldmVudHMiICkuY2hhbmdlKSB7ICAgICAgIAoJCQkJalF1ZXJ5Lm1hcChqUXVlcnkuZ3JlcCgkLl9kYXRhKCAkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKVswXSwgImV2ZW50cyIgKS5jaGFuZ2UsIGZ1bmN0aW9uKCBhICkgeyAgICAgICAgCgkJCQkJcmV0dXJuIGEuaGFuZGxlci50b1N0cmluZygpLmluZGV4T2YoJ29uQ2hhbmdlJykgPj0gMDsgICAgICAgIAoJCQkJfSksIGZ1bmN0aW9uKCBhICkgeyAgICAgICAgCgkJCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykuYmluZCgnYXV0b0NvbXBsZXRlQ2hhbmdlJywgYS5oYW5kbGVyKTsgICAgICAgIAoJCQkJCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnVuYmluZCgnY2hhbmdlJywgYS5oYW5kbGVyKSAgICAgICAgCgkJCQl9KTsgICAgICAgIAoJCQl9ICAgIAoJCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS5vbigia2V5ZG93biIsIGZ1bmN0aW9uKCl7c3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2F1dG9jb21wbGV0ZV90eXBpbmcgPSB0cnVlO30pICAgCgkJCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLm9uKCJjbGljayIsIGZ1bmN0aW9uKCl7c3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2F1dG9jb21wbGV0ZV90eXBpbmcgPSBmYWxzZTt9KSAgIAoJCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS5hdXRvY29tcGxldGUoeyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQlsb29rdXA6IGZ1bmN0aW9uIChxdWVyeSwgZG9uZSkgeyAgICAKCQkJCQkJaWYgKHNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPl9hdXRvY29tcGxldGVfcmVzdWx0KSB7ICAgIAoJCQkJCQkJCWRvbmUoeyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJc3VnZ2VzdGlvbnM6ICQubWFwKHNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPl9hdXRvY29tcGxldGVfcmVzdWx0LmRhdGEsIGZ1bmN0aW9uKGRhdGFJdGVtKSB7ICAgICAgICAKCQkJCQkJCQkJCXZhciByZSA9IG5ldyBSZWdFeHAoJ14nICsgJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudmFsKCksICdpJyk7ICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJCWlmIChkYXRhSXRlbS5uYW1lLm1hdGNoKHJlKSB8fCAhc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2F1dG9jb21wbGV0ZV90eXBpbmcpeyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJCQlyZXR1cm4geyB2YWx1ZTogZGF0YUl0ZW0ubmFtZSwgZGF0YTogZGF0YUl0ZW0uaWQsIG5hbWU6IGRhdGFJdGVtLm5hbWUgfTsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJCQl9ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCQl9KSAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQl9KTsgICAgICAgICAgICAgICAKCQkJCQkJfSBlbHNlIHsgICAgCgkJCQkJCQlhamF4KHsgICAgICAgICAgICAgICAgIAoJCQkJCQkJCXR5cGU6ICJQT1NUIiwgICAgICAgICAgICAgICAgIAoJCQkJCQkJCXVybDogJ3Jlc3QvZm9ybS9nZXRfbGlzdCcsICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQlkYXRhOiB0aGlzLnBhcmFtcyAsICAgICAgICAgICAKCQkJCQkJCQljb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCWRhdGFUeXBlOiAnanNvbicsICAgICAgICAgICAgCgkJCQkJCQl9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHsgICAgICAgIAoJCQkJCQkJCXJlc3BvbnNlLmRhdGEudW5zaGlmdCh7bmFtZTogJy0tLScsIGlkOiAnJ30pIAoJCQkJCQkJCXNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPl9hdXRvY29tcGxldGVfcmVzdWx0ID0gcmVzcG9uc2U7ICAgIAoJCQkJCQkJCSQoJyNiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdF9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS5oaWRlKCk7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCSQoJyNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLmhpZGUoKTsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJZG9uZSh7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCQlzdWdnZXN0aW9uczogJC5tYXAoc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2F1dG9jb21wbGV0ZV9yZXN1bHQuZGF0YSwgZnVuY3Rpb24oZGF0YUl0ZW0pIHsgICAgICAgIAoJCQkJCQkJCQkJdmFyIHJlID0gbmV3IFJlZ0V4cCgnXicgKyAkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS52YWwoKSwgJ2knKTsgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCQkJaWYgKGRhdGFJdGVtLm5hbWUubWF0Y2gocmUpIHx8ICFzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj5fYXV0b2NvbXBsZXRlX3R5cGluZyl7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCQkJCXJldHVybiB7IHZhbHVlOiBkYXRhSXRlbS5uYW1lLCBkYXRhOiBkYXRhSXRlbS5pZCwgbmFtZTogZGF0YUl0ZW0ubmFtZSB9OyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJCX0gICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJCX0pICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCX0pOyAgICAgICAgICAgICAgIAoJCQkJCQkJfSk7CQkgICAgICAgICAgICAgICAgIAoJCQkJCQl9ICAgIAoJCQkJCX0sICAgICAgICAgICAgICAgICAKCQkJCQlwYXJhbXM6ewkJCS8vINC00L7QvyDQv9Cw0YDQsNC80LXRgtGA0YsgICAgICAgICAgICAgICAgICAgIAoJCQkJCQlwYXJhbWV0ZXJfbmFtZTonc3BhY2VzaGlwX2dhbGF4eScsICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQlmb3JtX2FwaTonU1BBQ0VTSElQJywgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJfSwgIAoJCQkJCWF1dG9Gb2N1czogdHJ1ZSwgIAoJCQkJCW1hdGNoQ29udGFpbnM6IHRydWUsICAgIAoJCQkJCW1pbkNoYXJzOjAsICAgICAgICAgICAgICAgICAgICAKCQkJCQlzaG93Tm9TdWdnZXN0aW9uTm90aWNlOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgCgkJCQkJZm9ybWF0UmVzdWx0OmZ1bmN0aW9uIChzdWdnZXN0aW9uLCBjdXJyZW50VmFsdWUpIHsgCgkJCQkJCSB2YXIgc3Ryb25nUmU9IG5ldyBSZWdFeHAoIigiICsgY3VycmVudFZhbHVlICsgIikiLCJnaSIpOyAKCQkJCQkJIHJldHVybiAiPGRpdiBkYXRhLWZpZWxkPSdzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nIGRhdGEtaWQ9JyIrc3VnZ2VzdGlvbi5kYXRhKyInIGRhdGEtbmFtZSA9ICciK3N1Z2dlc3Rpb24ubmFtZSArIic+ICIgKyBzdWdnZXN0aW9uLm5hbWUucmVwbGFjZShzdHJvbmdSZSwgIjxzdHJvbmc+JDE8L3N0cm9uZz4iKSArICI8L2Rpdj4iOyAKCQkJCQl9LCAgICAgICAgICAgICAgICAgCgkJCQkJbm9TdWdnZXN0aW9uTm90aWNlOiAnQ291bGRuYHQgZmluZCcsICAgICAgICAgICAgICAgICAgICAKCQkJCQlvblNlbGVjdDogZnVuY3Rpb24gKHN1Z2dlc3Rpb24pIHsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCS8vINGB0YLQsNCy0LjQvCDQstGL0LHRgNCw0L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiBoaWRkZW4g0L/QvtC70LUgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCSQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoc3VnZ2VzdGlvbi5kYXRhKTsgICAgICAKCQkJCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykudmFsKHN1Z2dlc3Rpb24ubmFtZSkuY2hhbmdlKCk7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS5yZW1vdmVDbGFzcygnd2FybmluZycpOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykuYXR0cigndGl0bGUnLCAnJyk7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS50cmlnZ2VyKCdhdXRvQ29tcGxldGVDaGFuZ2UnKTsgICAgICAgIAoJCQkJCX0sICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCW9uU2VhcmNoU3RhcnQ6IGZ1bmN0aW9uIChwYXJhbXMpIHsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCWlmICghJCgnI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykuaXMoIjp2aXNpYmxlIikpeyAvLyDQtNC40L3QsNC80LjRh9C10YHQutC40LkgdmlzaWJsZSDQstGL0LfRi9Cy0LDQtdGCINGDINGN0LvQtdC80LXQvdGC0LAgY2hhbmdlIDooINC/0YDQuNGF0L7QtNC40YLRgdGPINC/0YDQvtCy0LXRgNGP0YLRjCDQstC40LTQuNC8INGN0LvQtdC80LXQvdGCINC40LvQuCDQvdC10YIgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQlyZXR1cm4gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQl9ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkvLyDQtNC40L3QsNC8INC/0LDRgNCw0LzQtdGC0YDRiyDQtNC70Y8g0YTQvtGA0LzQuNGA0L7QstCw0L3QuNGPIEdFVCDQuiBhamF4IC0g0YHQsNC8INC30LDQv9GA0L7RgSAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJcGFyYW1zWydwYXJhbWV0ZXJzJ109J3NwYWNlc2hpcF9nYWxheHk6aTonICsgJCgnI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykudmFsKCk7ICAgICAgICAgICAgICAgICAKCQkJCQkJLy8g0LzQvtC00LjRhNC40YbQuNGA0YPQtdC8IHBhcmFtcyDRh9GC0L7QsdGLINC/0LXRgNC10LTQsNGC0Ywg0YDQtdCw0LvRjNC90YvQtSDQt9C90LDRh9C10L3QuNGPINC/0LDRgNCw0LzQtdGC0YDQvtCyIC0gcGFyZW50ICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCXBhcmFtc1sncGFyYW1ldGVycyddICs9ICc6cDonICsgIAoJIE9iamVjdC5rZXlzKHVyaV9wYXJhbXMpLmZpbHRlcihmdW5jdGlvbiBjYWxsYmFjayhjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgeyAgCgkgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZSAhPSAiIjsgCgl9KS5tYXAoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiAndXJpXycgKyBjdXJyZW50VmFsdWUgKyAiOmk6IiAgKyB1cmlfcGFyYW1zW2N1cnJlbnRWYWx1ZV07IAoJfSkuam9pbigiOnA6IikgCjsgICAgICAgICAgCgkJCQkJCWlmICghc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2F1dG9jb21wbGV0ZV9yZXN1bHQpIHsgICAgCgkJCQkJCQkkKCcjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Jykuc2hvdygpOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCSQoJyNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnNob3coKTsgICAgICAgICAgICAgICAKCQkJCQkJfSAgICAKCQkJCQl9LCAgICAgICAgICAgICAgICAgICAgICAKCQkJfSk7ICAgICAgICAgICAgICAgICAgICAgIAoJCX0pOyAgICAgICAgICAKCSQoIiNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5iaW5kKCJzZXRWYWx1ZU9uTG9hZCIsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkgeyAgICAgIAoJCXZhciBpc0xvYWRpbmcgPSB0cnVlOyAgICAgIAoJCSAgCglpZiAoZGF0YS52YWx1ZSAhPSAnJykgeyAKCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoZGF0YS5uYW1lKS5ibHVyKCk7ICAKCQkkKCcjc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykudmFsKGRhdGEudmFsdWUpOyAgCgl9IGVsc2UgeyAKCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoJy0tLScpLmJsdXIoKTsgIAoJCSQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoJycpOyAgCgl9IAogCgkJJCgiI3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmJpbmQoImNsZWFuVmFsdWUiLCBmdW5jdGlvbigpeyAKCQkJaWYgKGZvcm1zV2FpdGVkVG9Mb2FkID09PSAwKSB7IAoJCQkJIAoJJCgnI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykudmFsKCctLS0nKTsgICAKCSQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoJycpOyAgIAoJc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2F1dG9jb21wbGV0ZV9yZXN1bHQgPSBudWxsOyAKICAKCQkJfQkKIAkJfSk7IAoJCSQoIiNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS51bmJpbmQoInNldFZhbHVlT25Mb2FkIik7ICAgCgl9KTsgICAgICAKCSQoIGRvY3VtZW50ICkuYmluZCgnc2V0TGlzdE9uTG9hZCcsIGZ1bmN0aW9uKCkgeyAgICAgIAoJCSAgICAgCgl9KTsgICAgICAKCWZ1bmN0aW9uIG9uQ2hhbmdlUmVhZE9ubHlzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4oY3VycmVudCl7ICAgICAgIAoJCWlmICh0eXBlb2YgY3VycmVudC52YWx1ZSAhPSAndW5kZWZpbmVkJyl7ICAKCQkJJCgnI3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnZhbChjdXJyZW50LnZhbHVlKTsgICAgICAgCgkJfSAgCgl9ICAgICAgIAoJZnVuY3Rpb24gb25LZXlEb3duUmVhZE9ubHlzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4oY3VycmVudCl7ICAgICAgIAoJCWlmKHdpbmRvdy5ldmVudC5rZXlDb2RlID09IDEzKXsgICAgICAgCgkJCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnZhbChjdXJyZW50LnZhbHVlKS5jaGFuZ2UoKTsgICAgICAgCgkJfSAgICAgICAKCX0gICAgICAgCiQoIiNudWxsIikub24oImNsaWNrIixmdW5jdGlvbihldmVudCl7CglvbkNoYW5nZXNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPl9lbmdpbmVfdHlwZTxOVU1CRVI+X2N0X2FqYXhfdmlzaWJsZShldmVudC5kZWxlZ2F0ZVRhcmdldCwgZXZlbnQpO29uQ2hhbmdlc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF9saXN0KGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBldmVudCk7Cn0pOyQoIiNudWxsIikub24oImNoYW5nZSIsZnVuY3Rpb24oZXZlbnQpewoJb25DaGFuZ2VzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X3Zpc2libGUoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGV2ZW50KTtvbkNoYW5nZXNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPl9lbmdpbmVfdHlwZTxOVU1CRVI+X2N0X2FqYXhfbGlzdChldmVudC5kZWxlZ2F0ZVRhcmdldCwgZXZlbnQpOwp9KTskKCIjZG93bmFycm93X19zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5vbigiY2xpY2siLGZ1bmN0aW9uKGV2ZW50KXsKCWlmICgkKCJbZGF0YS1maWVsZD0nc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+J106dmlzaWJsZSIpLmxlbmd0aCA9PT0gMCkgeyQoJyN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLmZvY3VzKCk7fSAKfSk7ICAgICAgICAgICAgICAgICAgICAgIAoJCXZhciBzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fYXV0b2NvbXBsZXRlX3Jlc3VsdDsgICAgCgkJdmFyIHNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9hdXRvY29tcGxldGVfdHlwaW5nOyAgICAKICAgICAgICAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkgeyAgICAKCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Jykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkgeyAgICAgICAgICAgICAgICAgICAgICAKCQkJCS8vINGA0YPRh9C90L7QuSDQstCy0L7QtCDQsdC10Lcg0LLRi9Cx0L7RgNCwINC40Lcg0YHQv9C40YHQutCwICAgICAgICAgICAgICAgICAgICAgIAoJCQkJaWYgKCQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnZhbCgpKXsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJJCgiI3Zpc2libGVfIisic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuYWRkQ2xhc3MoJ3dhcm5pbmcnKTsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJJCgiI3Zpc2libGVfIisic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuYXR0cigndGl0bGUnLCAnQ291bGRuYHQgZmluZCcpOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCX0gICAgICAgICAgICAgICAgICAgICAgCgkJCX0pOyAgICAgICAKCQkJaWYgKCQuX2RhdGEoICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpWzBdLCAiZXZlbnRzIiApLmNoYW5nZSkgeyAgICAgICAKCQkJCWpRdWVyeS5tYXAoalF1ZXJ5LmdyZXAoJC5fZGF0YSggJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IilbMF0sICJldmVudHMiICkuY2hhbmdlLCBmdW5jdGlvbiggYSApIHsgICAgICAgIAoJCQkJCXJldHVybiBhLmhhbmRsZXIudG9TdHJpbmcoKS5pbmRleE9mKCdvbkNoYW5nZScpID49IDA7ICAgICAgICAKCQkJCX0pLCBmdW5jdGlvbiggYSApIHsgICAgICAgIAoJCQkJCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLmJpbmQoJ2F1dG9Db21wbGV0ZUNoYW5nZScsIGEuaGFuZGxlcik7ICAgICAgICAKCQkJCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4nKS51bmJpbmQoJ2NoYW5nZScsIGEuaGFuZGxlcikgICAgICAgIAoJCQkJfSk7ICAgICAgICAKCQkJfSAgICAKCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Jykub24oImtleWRvd24iLCBmdW5jdGlvbigpe3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9hdXRvY29tcGxldGVfdHlwaW5nID0gdHJ1ZTt9KSAgIAoJCQkkKCcjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4nKS5vbigiY2xpY2siLCBmdW5jdGlvbigpe3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9hdXRvY29tcGxldGVfdHlwaW5nID0gZmFsc2U7fSkgICAKCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykuYXV0b2NvbXBsZXRlKHsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJbG9va3VwOiBmdW5jdGlvbiAocXVlcnksIGRvbmUpIHsgICAgCgkJCQkJCWlmIChzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fYXV0b2NvbXBsZXRlX3Jlc3VsdCkgeyAgICAKCQkJCQkJCQlkb25lKHsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJCXN1Z2dlc3Rpb25zOiAkLm1hcChzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fYXV0b2NvbXBsZXRlX3Jlc3VsdC5kYXRhLCBmdW5jdGlvbihkYXRhSXRlbSkgeyAgICAgICAgCgkJCQkJCQkJCQl2YXIgcmUgPSBuZXcgUmVnRXhwKCdeJyArICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnZhbCgpLCAnaScpOyAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJCQlpZiAoZGF0YUl0ZW0ubmFtZS5tYXRjaChyZSkgfHwgIXNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9hdXRvY29tcGxldGVfdHlwaW5nKXsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJCQkJcmV0dXJuIHsgdmFsdWU6IGRhdGFJdGVtLm5hbWUsIGRhdGE6IGRhdGFJdGVtLmlkLCBuYW1lOiBkYXRhSXRlbS5uYW1lIH07ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCQkJfSAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJfSkgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJfSk7ICAgICAgICAgICAgICAgCgkJCQkJCX0gZWxzZSB7ICAgIAoJCQkJCQkJYWpheCh7ICAgICAgICAgICAgICAgICAKCQkJCQkJCQl0eXBlOiAiUE9TVCIsICAgICAgICAgICAgICAgICAKCQkJCQkJCQl1cmw6ICdyZXN0L2Zvcm0vZ2V0X2xpc3RfaW50ZXJhY3RpdmUnLCAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJZGF0YTogdGhpcy5wYXJhbXMgLCAgICAgICAgICAgCgkJCQkJCQkJY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQlkYXRhVHlwZTogJ2pzb24nLCAgICAgICAgICAgIAoJCQkJCQkJfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7ICAgICAgICAKCQkJCQkJCQlyZXNwb25zZS5kYXRhLnVuc2hpZnQoe25hbWU6ICctLS0nLCBpZDogJyd9KSAKCQkJCQkJCQlzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fYXV0b2NvbXBsZXRlX3Jlc3VsdCA9IHJlc3BvbnNlOyAgICAKCQkJCQkJCQkkKCcjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykuaGlkZSgpOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkkKCcjbWVzc2FnZV9ib3hfd2FpdF9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4nKS5oaWRlKCk7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCWRvbmUoeyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJc3VnZ2VzdGlvbnM6ICQubWFwKHNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9hdXRvY29tcGxldGVfcmVzdWx0LmRhdGEsIGZ1bmN0aW9uKGRhdGFJdGVtKSB7ICAgICAgICAKCQkJCQkJCQkJCXZhciByZSA9IG5ldyBSZWdFeHAoJ14nICsgJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudmFsKCksICdpJyk7ICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJCWlmIChkYXRhSXRlbS5uYW1lLm1hdGNoKHJlKSB8fCAhc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X2F1dG9jb21wbGV0ZV90eXBpbmcpeyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQkJCQlyZXR1cm4geyB2YWx1ZTogZGF0YUl0ZW0ubmFtZSwgZGF0YTogZGF0YUl0ZW0uaWQsIG5hbWU6IGRhdGFJdGVtLm5hbWUgfTsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkJCQl9ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJCQl9KSAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJCQl9KTsgICAgICAgICAgICAgICAKCQkJCQkJCX0pOwkJICAgICAgICAgICAgICAgICAKCQkJCQkJfSAgICAKCQkJCQl9LCAgICAgICAgICAgICAgICAgCgkJCQkJcGFyYW1zOnsJCQkvLyDQtNC+0L8g0L/QsNGA0LDQvNC10YLRgNGLICAgICAgICAgICAgICAgICAgICAKCQkJCQkJcGFyYW1ldGVyX25hbWU6J3NwYWNlc2hpcF9wbGFuZXQnLCAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJZm9ybV9hcGk6J1NQQUNFU0hJUCcsICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCX0sICAKCQkJCQlhdXRvRm9jdXM6IHRydWUsICAKCQkJCQltYXRjaENvbnRhaW5zOiB0cnVlLCAgICAKCQkJCQltaW5DaGFyczowLCAgICAgICAgICAgICAgICAgICAgCgkJCQkJc2hvd05vU3VnZ2VzdGlvbk5vdGljZTogdHJ1ZSwgICAgICAgICAgICAgICAgICAgIAoJCQkJCWZvcm1hdFJlc3VsdDpmdW5jdGlvbiAoc3VnZ2VzdGlvbiwgY3VycmVudFZhbHVlKSB7IAoJCQkJCQkgdmFyIHN0cm9uZ1JlPSBuZXcgUmVnRXhwKCIoIiArIGN1cnJlbnRWYWx1ZSArICIpIiwiZ2kiKTsgCgkJCQkJCSByZXR1cm4gIjxkaXYgZGF0YS1maWVsZD0nc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JyBkYXRhLWlkPSciK3N1Z2dlc3Rpb24uZGF0YSsiJyBkYXRhLW5hbWUgPSAnIitzdWdnZXN0aW9uLm5hbWUgKyInPiAiICsgc3VnZ2VzdGlvbi5uYW1lLnJlcGxhY2Uoc3Ryb25nUmUsICI8c3Ryb25nPiQxPC9zdHJvbmc+IikgKyAiPC9kaXY+IjsgCgkJCQkJfSwgICAgICAgICAgICAgICAgIAoJCQkJCW5vU3VnZ2VzdGlvbk5vdGljZTogJ0NvdWxkbmB0IGZpbmQnLCAgICAgICAgICAgICAgICAgICAgCgkJCQkJb25TZWxlY3Q6IGZ1bmN0aW9uIChzdWdnZXN0aW9uKSB7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkvLyDRgdGC0LDQstC40Lwg0LLRi9Cx0YDQsNC90L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LIgaGlkZGVuINC/0L7Qu9C1ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkkKCcjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKHN1Z2dlc3Rpb24uZGF0YSk7ICAgICAgCgkJCQkJCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbChzdWdnZXN0aW9uLm5hbWUpLmNoYW5nZSgpOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykucmVtb3ZlQ2xhc3MoJ3dhcm5pbmcnKTsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLmF0dHIoJ3RpdGxlJywgJycpOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudHJpZ2dlcignYXV0b0NvbXBsZXRlQ2hhbmdlJyk7ICAgICAgICAKCQkJCQl9LCAgICAgICAgICAgICAgICAgICAgICAKCQkJCQlvblNlYXJjaFN0YXJ0OiBmdW5jdGlvbiAocGFyYW1zKSB7ICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQlpZiAoISQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLmlzKCI6dmlzaWJsZSIpKXsgLy8g0LTQuNC90LDQvNC40YfQtdGB0LrQuNC5IHZpc2libGUg0LLRi9C30YvQstCw0LXRgiDRgyDRjdC70LXQvNC10L3RgtCwIGNoYW5nZSA6KCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQv9GA0L7QstC10YDRj9GC0Ywg0LLQuNC00LjQvCDRjdC70LXQvNC10L3RgiDQuNC70Lgg0L3QtdGCICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQkJcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJfSAgICAgICAgICAgICAgICAgICAgICAKCQkJCQkJLy8g0LTQuNC90LDQvCDQv9Cw0YDQsNC80LXRgtGA0Ysg0LTQu9GPINGE0L7RgNC80LjRgNC+0LLQsNC90LjRjyBHRVQg0LogYWpheCAtINGB0LDQvCDQt9Cw0L/RgNC+0YEgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCXBhcmFtc1sncGFyYW1ldGVycyddPSdzcGFjZXNoaXBfcGxhbmV0Omk6JyArICQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpOyAgICAgICAgICAgICAgICAgCgkJCQkJCS8vINC80L7QtNC40YTQuNGG0LjRgNGD0LXQvCBwYXJhbXMg0YfRgtC+0LHRiyDQv9C10YDQtdC00LDRgtGMINGA0LXQsNC70YzQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDQv9Cw0YDQsNC80LXRgtGA0L7QsiAtIHBhcmVudCAgICAgICAgICAgICAgICAgICAgIAoJCQkJCQlwYXJhbXNbJ3BhcmFtZXRlcnMnXSArPSAnOnA6JyArICdzcGFjZXNoaXBfZ2FsYXh5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAo7ICAgICAgICAgIAoJCQkJCQlpZiAoIXNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9hdXRvY29tcGxldGVfcmVzdWx0KSB7ICAgIAoJCQkJCQkJJCgnI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnNob3coKTsgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJCQkkKCcjbWVzc2FnZV9ib3hfd2FpdF9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4nKS5zaG93KCk7ICAgICAgICAgICAgICAgCgkJCQkJCX0gICAgCgkJCQkJfSwgICAgICAgICAgICAgICAgICAgICAgCgkJCX0pOyAgICAgICAgICAgICAgICAgICAgICAKCQl9KTsgICAgICAgICAgCgkkKCIjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuYmluZCgic2V0VmFsdWVPbkxvYWQiLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHsgICAgICAKCQl2YXIgaXNMb2FkaW5nID0gdHJ1ZTsgICAgICAKCQkgIAoJaWYgKGRhdGEudmFsdWUgIT0gJycpIHsgCgkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKGRhdGEubmFtZSkuYmx1cigpOyAgCgkJJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbChkYXRhLnZhbHVlKTsgIAoJfSBlbHNlIHsgCgkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKCctLS0nKS5ibHVyKCk7ICAKCQkkKCcjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKCcnKTsgIAoJfSAKIAoJCSQoIiNzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5iaW5kKCJjbGVhblZhbHVlIiwgZnVuY3Rpb24oKXsgCgkJCWlmIChmb3Jtc1dhaXRlZFRvTG9hZCA9PT0gMCkgeyAKCQkJCSAKCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgnLS0tJyk7ICAgCgkkKCcjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKCcnKTsgICAKCXNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9hdXRvY29tcGxldGVfcmVzdWx0ID0gbnVsbDsgCiAgCgkJCX0JCiAJCX0pOyAKCQkkKCIjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudW5iaW5kKCJzZXRWYWx1ZU9uTG9hZCIpOyAgIAoJfSk7ICAgICAgCgkkKCBkb2N1bWVudCApLmJpbmQoJ3NldExpc3RPbkxvYWQnLCBmdW5jdGlvbigpIHsgICAgICAKCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS50cmlnZ2VyKCdzZXRWYWx1ZScpOyAgICAgCgl9KTsgICAgICAKCWZ1bmN0aW9uIG9uQ2hhbmdlUmVhZE9ubHlzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4oY3VycmVudCl7ICAgICAgIAoJCWlmICh0eXBlb2YgY3VycmVudC52YWx1ZSAhPSAndW5kZWZpbmVkJyl7ICAKCQkJJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbChjdXJyZW50LnZhbHVlKTsgICAgICAgCgkJfSAgCgl9ICAgICAgIAoJZnVuY3Rpb24gb25LZXlEb3duUmVhZE9ubHlzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4oY3VycmVudCl7ICAgICAgIAoJCWlmKHdpbmRvdy5ldmVudC5rZXlDb2RlID09IDEzKXsgICAgICAgCgkJCSQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbChjdXJyZW50LnZhbHVlKS5jaGFuZ2UoKTsgICAgICAgCgkJfSAgICAgICAKCX0gICAgICAgCiQoIiNudWxsIikub24oImNsaWNrIixmdW5jdGlvbihldmVudCl7CglvbkNoYW5nZXNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9lbmdpbmVfdHlwZTxOVU1CRVI+X2N0X2FqYXhfdmlzaWJsZShldmVudC5kZWxlZ2F0ZVRhcmdldCwgZXZlbnQpO29uQ2hhbmdlc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF9saXN0KGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBldmVudCk7Cn0pOyQoIiNudWxsIikub24oImNoYW5nZSIsZnVuY3Rpb24oZXZlbnQpewoJb25DaGFuZ2VzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X3Zpc2libGUoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGV2ZW50KTtvbkNoYW5nZXNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPl9lbmdpbmVfdHlwZTxOVU1CRVI+X2N0X2FqYXhfbGlzdChldmVudC5kZWxlZ2F0ZVRhcmdldCwgZXZlbnQpOwp9KTsgJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Iikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7CgkJb25DaGFuZ2VzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj5fc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X2N0X2FqYXhfbGlzdCh0aGlzKTsgCiB9KTsgCgkJZnVuY3Rpb24gb25DaGFuZ2VzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj5fc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X2N0X2FqYXhfbGlzdChzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj5MaXN0KXsgICAgICAKCQkJCQkJJCgiI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnRyaWdnZXIoJ2NsZWFuVmFsdWUnKTsgICAgICAgCgkJfSAgICAgIAokKCIjZG93bmFycm93X19zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5vbigiY2xpY2siLGZ1bmN0aW9uKGV2ZW50KXsKCWlmICgkKCJbZGF0YS1maWVsZD0nc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+J106dmlzaWJsZSIpLmxlbmd0aCA9PT0gMCkgeyQoJyN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLmZvY3VzKCk7fSAKfSk7JCgiI2Zha2VfdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Iikub24oImNsaWNrIixmdW5jdGlvbihldmVudCl7CglvblBvcFdpbmRvd3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPihldmVudC5kZWxlZ2F0ZVRhcmdldCwgZXZlbnQpOwp9KTsJJCgiI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5iaW5kKCJzZXRWYWx1ZU9uTG9hZCIsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkgeyAgICAgIAoJCXZhciBpc0xvYWRpbmcgPSB0cnVlOyAgICAgIAoJCQlpZiAoaXNMb2FkaW5nKSB7ICAKCQkkKCI8b3B0aW9uLz4iLCB7J3ZhbHVlJzogJycsIGh0bWw6ICctLS0nfSkuYXBwZW5kVG8oIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKTsgICAgCgkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6IGRhdGEudmFsdWUsIGh0bWw6IGRhdGEubmFtZSwgJ3NlbGVjdGVkJzogdHJ1ZSB9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgICAKCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgCgkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnZhbChkYXRhLnZhbHVlKS5jaGFuZ2UoKTsgCgkJJCgiI2Zha2VfdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKGRhdGEubmFtZSk7ICAKCX0gZWxzZSB7IAoJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoZGF0YS52YWx1ZSkuY2hhbmdlKCk7IAoJfSAKIAoJCSQoIiNzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuYmluZCgiY2xlYW5WYWx1ZSIsIGZ1bmN0aW9uKCl7IAoJCQlpZiAoZm9ybXNXYWl0ZWRUb0xvYWQgPT09IDApIHsgCgkJCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmVtcHR5KCk7ICAKCQkJCQkJCSQoIiNmYWtlX3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnZhbCgn0J3QtSDQstGL0LHRgNCw0L3QvicpOyAgCgkJCQkJCQkkKCAiI3BvcHVwX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iICkucmVtb3ZlKCk7ICAKCQkJCQkJCSQoIiNzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKCcnKTsgIAogCgkJCX0JCiAJCX0pOyAKCQkkKCIjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnVuYmluZCgic2V0VmFsdWVPbkxvYWQiKTsgICAKCX0pOyAgICAgIAoJJCggZG9jdW1lbnQgKS5iaW5kKCdzZXRMaXN0T25Mb2FkJywgZnVuY3Rpb24oKSB7ICAgICAgCgkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3NldFZhbHVlJyk7ICAgICAKCX0pOyAgICAgIAoJZnVuY3Rpb24gb25DaGFuZ2VSZWFkT25seXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4oY3VycmVudCl7ICAgICAgIAoJCWlmICh0eXBlb2YgY3VycmVudC52YWx1ZSAhPSAndW5kZWZpbmVkJyl7ICAKCQkJJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS52YWwoY3VycmVudC52YWx1ZSk7ICAgICAgIAoJCX0gIAoJfSAgICAgICAKCWZ1bmN0aW9uIG9uS2V5RG93blJlYWRPbmx5c3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPihjdXJyZW50KXsgICAgICAgCgkJaWYod2luZG93LmV2ZW50LmtleUNvZGUgPT0gMTMpeyAgICAgICAKCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbChjdXJyZW50LnZhbHVlKS5jaGFuZ2UoKTsgICAgICAgCgkJfSAgICAgICAKCX0gICAgICAgCiQoIiNudWxsIikub24oImNsaWNrIixmdW5jdGlvbihldmVudCl7CglvbkNoYW5nZXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X3Zpc2libGUoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGV2ZW50KTtvbkNoYW5nZXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X2xpc3QoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGV2ZW50KTsKfSk7JCgiI251bGwiKS5vbigiY2hhbmdlIixmdW5jdGlvbihldmVudCl7CglvbkNoYW5nZXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X3Zpc2libGUoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGV2ZW50KTtvbkNoYW5nZXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X2xpc3QoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGV2ZW50KTsKfSk7ICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmNoYW5nZShmdW5jdGlvbigpewoJCW9uQ2hhbmdlc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5fY3RfYWpheF9saXN0KHRoaXMpOwogfSk7IAogJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuY2hhbmdlKGZ1bmN0aW9uKCl7CgkJb25DaGFuZ2VzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj5fc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPl9jdF9hamF4X2xpc3QodGhpcyk7CiB9KTsgCgkJCQkJZnVuY3Rpb24gb25DaGFuZ2VzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj5fc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPl9jdF9hamF4X2xpc3Qoc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+TGlzdCl7ICAgICAgICAgICAKCQkJCQkJdmFyIHZhbHVlSlMgPSAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAo7IAoJCQkJCQkkKCIjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ2NsZWFuVmFsdWUnKTsgICAgICAgCgkJCQkJCWlmICh2YWx1ZUpTLm1hdGNoKC86aToobm9uZSk/KDpwOnwkKS8pKXsgcmV0dXJuIH07ICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnVuYmluZCgiZm9jdXNpbiIpOyAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmZvY3VzaW4oIGZ1bmN0aW9uKCkgeyAgICAgICAgICAKCQkJCQkJCXZhciB2YWx1ZSA9ICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoKTsgCgkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuZW1wdHkoKTsgICAgICAgICAgIAoJCQkJCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6ICcnLCBodG1sOiAnTG9hZGluZy4uLid9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgICAgICAgICAgCgkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCQkkKCIjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgICAgCgkJICAgICAgICAgICAgCQkJCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgIAoJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgICAgCgkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCWlmICghYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il0pIHsgICAgICAgICAgIAoJCQkJCQkJCWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiJdID0gMDsgICAgICAgICAgIAoJCQkJCQkJfSAgICAgICAgICAgCgkJCQkJCQkrK2FqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiJdOyAgICAgICAgICAKCQkJCQkJCWlmICghYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSkgeyAgICAgIAoJCQkJCQkJCWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Il0gPSAwOyAgICAgIAoJCQkJCQkJfSAgICAgIAoJCQkJCQkJKythamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdOyAgICAgIAoJCQkJCQkJYWpheCh7ICAgICAgICAKCQkJCQkgICAgICAgICAgICAJdXJsOiAncmVzdC9mb3JtL2dldF9saXN0X2ludGVyYWN0aXZlJywgICAgICAgIAoJCQkJCQkJCWRhdGE6IHsgICAgICAgIAoJCQkJCQkJCQlwYXJhbWV0ZXJfbmFtZTonc3BhY2VzaGlwX2ZhY3RvcnknLCAgICAgICAgCgkJCQkJCQkJCWZvcm1fYXBpOiAnU1BBQ0VTSElQJywgICAgICAgIAoJCQkJCQkJCQlwYXJhbWV0ZXJzOiB2YWx1ZUpTLCAgICAgICAgCgkJCQkJCQkJCXJuZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLCAgICAgICAgCgkJCQkJCQkJfSwgICAgICAgCgkJCQkJCSAgICAgICAgICAgIAl0eXBlOiAncG9zdCcsICAgICAgICAKCQkJCQkJICAgICAgICAgICAJZGF0YVR5cGU6ICdqc29uJywgICAgICAgIAoJCQkJICAgICAgICAgICAgCQkJY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgCgkJCQkJCQl9LCBmdW5jdGlvbiAoZGF0YSkgeyAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS51bmJpbmQoImZvY3VzaW4iKTsgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5lbXB0eSgpOyAgICAgICAgICAgCgkJCQkJCQkJCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6ICcnLCBodG1sOiAnLS0tJ30pLmFwcGVuZFRvKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Iik7ICAgCgkJJC5lYWNoKGRhdGEuZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWwpIHsgICAKCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6IHZhbC5pZCwgaHRtbDogdmFsLm5hbWUsICdzZWxlY3RlZCc6IHZhbC52YWx1ZSB9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgIAoJCQlpZiAodmFsLnZhbHVlKSB7ICAKCQkJCXZhbHVlID0gdmFsLmlkICAKCQkJfSAgCgkJfSk7ICAgCgkJaWYgKCQoIiNvdGhlcl9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikubGVuZ3RoID4gMCkgeyAgIAoJCQkkKCI8b3B0aW9uLz4iLCB7J3ZhbHVlJzogJ290aGVyJywgaHRtbDogJ090aGVyJywgJ3NlbGVjdGVkJzogJCgiI290aGVyX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWx1ZSB9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgIAoJCX0gIAoJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5jbGljaygpOyAKICAgICAgICAgICAKCQkJCQkJCQkJdmFyIHNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4gPSAkKCcjdHJfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpOyAgICAgICAgICAgCgkJCQkJCQkJCWlmIChkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLmxlbmd0aCA+IDApeyAgICAgICAgICAgCgkJCQkJCQkJCQlpZiAoIiIpeyAgICAgICAgICAgCgkJCQkJCQkJCQkJc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCAnbm9uZScpOyAgICAgICAgICAgCgkJCQkJCQkJCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgnJyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQkkKCcjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgnJyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQkkKCcjaXNfZW1wdHlfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgxKTsgICAgICAgICAgIAoJCQkJCQkJCQkJfWVsc2V7ICAgICAgICAgICAKCQkJCQkJCQkJCQlpZiAoJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS5hdHRyKCdpbnZpc2libGUnKSA9PSAnZmFsc2UnKSB7ICAgICAgICAgICAKCQkJCQkJCQkJCQkJaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiAhZG9jdW1lbnQuYWxsKSB8fCB3aW5kb3cub3BlcmEpICAgICAgICAgICAKCQkJCQkJCQkJCQkJCXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwndGFibGUtcm93Jyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQkJZWxzZSAgICAgICAgICAgCgkJCQkJCQkJCQkJCQlzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+LmNzcygiZGlzcGxheSIsJ2lubGluZScpOyAgICAgICAgICAgCgkJCQkJCQkJCQkJfSAgICAgICAgICAgCgkJCQkJCQkJCQl9ICAgICAgICAgICAKCQkJCQkJCQkJfWVsc2V7ICAgICAgICAgICAKCQkJCQkJCQkJCWlmICgkKCcjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScpID09ICdmYWxzZScpIHsgICAgICAgICAgIAoJCQkJCQkJCQkJCWlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgIWRvY3VtZW50LmFsbCkgfHwgd2luZG93Lm9wZXJhKSAgICAgICAgICAgCgkJCQkJCQkJCQkJCXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwndGFibGUtcm93Jyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQllbHNlICAgICAgICAgICAKCQkJCQkJCQkJCQkJc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCdpbmxpbmUnKTsgICAgICAgICAgIAoJCQkJCQkJCQkJfSAgICAgICAgICAgCgkJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJCQktLWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiJdOyAgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdzZXRfZmluZF9yZXN1bHQnKTsgICAgICAgICAgIAoJCQkJCQkJCQlpZiAoYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il0gPT0gMCkgeyAgICAgICAgICAgCgkJCQkJCQkJCQlpZiAoISQoIiN0cl9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iICkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHsgICAgIAoJCQkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7ICAgICAKCQkJCQkJCQkJCX0gICAgIAoJCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudHJpZ2dlcignb25fcGFycmVudF91bmJsb2NrZWQnKTsgICAgICAgICAgIAoJCQkJCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCQkJCSAgICAgIAkgICAgICAJCQkJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgCgkJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJCQktLWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Il07ICAgIAoJCQkJCQkJCQlpZiAoYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSA9PSAwKSB7ICAgIAoJCQkJCSAgICAgICAgICAgIAkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudHJpZ2dlciggJ29uX2NoaWxkX3VuYmxvY2tlZCcpOyAgICAKCQkJCQkJCQkJfSAgICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQkJaWYgKHZhbHVlKSB7ICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKHZhbHVlKS5jaGFuZ2UoKTsgICAKCQkJCQkJCQkJfSAgIAoJCQkJCQkJfSk7ICAgICAgICAgIAoJCQkJCQl9KTsgICAgICAgICAgCgkJCQkJfSAgICAgICAgICAgCgkJCQkJIAoJCQkJCS8vINGA0LXQsNCz0LjRgNC+0LLQsNC90LjQtSDQvdCwINC/0L7Qu9GD0YfQtdC90LjQtSDRhNC+0LrRg9GB0LAgICAgICAgICAgIAoJCQkJCWZ1bmN0aW9uIG9uUG9wV2luZG93dmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+KCl7ICAgICAgICAgICAKCQkJCQkJdmFyIHZhbHVlSlMgPSAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAo7ICAgICAgICAgCgkJCQkJCQkJCWlmICgodmFsdWVKUykubWF0Y2goLzppOihub25lKT8oOnA6fCQpLykpIHsKCQkJCQkJJCgiI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdjbGVhblZhbHVlJyk7ICAgICAgIAoJCQkJCQkJcmV0dXJuOyAKCQkJCQkJfSAKICAgICAgICAgICAKCQkJCQkJLy8g0YHQvtGF0YDQsNC90Y/QtdC8INC/0YDQtdC00YvQtNGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUgICAgICAgICAgIAoJCQkJCQl2YXIgcHJldmlvdXNfdGV4dCA9ICQoIiNmYWtlX3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnZhbCgpOyAgICAgICAgICAgCgkJCQkJCXZhciBwcmV2aW91c19pZCA9ICQoIiNzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKCk7ICAgICAgICAgICAKCQkJCQkJJCgiI2Zha2VfdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgICAgCgkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5lbXB0eSgpOyAgICAgICAgICAgCgkJCQkJCSQoIjxvcHRpb24vPiIsIHsndmFsdWUnOiAnJywgaHRtbDogJ0xvYWRpbmcuLi4nfSkuYXBwZW5kVG8oIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKTsgICAgICAgICAgIAoJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJ0xvYWRpbmcuLi4nKTsgICAgICAgICAgIAoJCQkJCQkvLyQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgIAoJCQkJICAgICAgICAgICAgCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgIAoJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5hdHRyKCJkaXNhYmxlZCIsImRpc2FibGVkIik7ICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCWlmICghYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il0pIHsgICAgICAgICAgIAoJCQkJCQkJYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il0gPSAwOyAgICAgICAgICAgCgkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkrK2FqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiJdOyAgICAgICAgICAgCgkJCQkJCWlmICghYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSkgeyAgICAgICAgCgkJCQkJCQlhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdID0gMDsgICAgICAgIAoJCQkJCQl9ICAgICAgICAKCQkJCQkJKythamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdOyAgICAgICAgCgkJCQkJCWFqYXgoeyAgICAgICAgICAgCgkJCQkgICAgICAgICAgICAJdXJsOiAncmVzdC9mb3JtL2dldF9saXN0X2ludGVyYWN0aXZlJywgICAgICAgICAgIAoJCQkJCQkJZGF0YTogeyAgICAgICAgICAgCgkJCQkJCQkJcGFyYW1ldGVyX25hbWU6J3NwYWNlc2hpcF9mYWN0b3J5JywgICAgICAgICAgIAoJCQkJCQkJCWZvcm1fYXBpOiAnU1BBQ0VTSElQJywgICAgICAgICAgIAoJCQkJCQkJCXBhcmFtZXRlcnM6IHZhbHVlSlMsICAgICAgICAgICAKCQkJCQkJCQlub19jYWNoZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLCAgICAgICAgICAgCgkJCQkJCQl9LCAgICAgICAgICAKCQkJCQkgICAgICAgICAgICB0eXBlOiAncG9zdCcsICAgICAgICAgICAKCQkJCQkgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAgICAgICAgICAgCgkJCQkgICAgICAgICAgIAkJY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgICAgCgkJCQkJCX0sIGZ1bmN0aW9uIChkYXRhKSB7ICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmVtcHR5KCk7ICAgICAgICAgICAKCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJ05vdCBzZWxlY3RlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJLy8g0YHQvtC30LTQsNC10Lwg0YHQu9C+0LkgICAgICAgICAgIAoJCQkJCQkJCSQoIiNmYWtlX3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmFmdGVyKCI8ZGl2IGlkPSdwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+JyBjbGFzcz0ncG9wdXAnPjxwIGlkPSdjb2x1bW4xJz48L3A+PHAgaWQ9J2NvbHVtbjInPjwvcD48L2Rpdj4iKTsgICAgICAgICAgIAoJCQkJCQkJCSQoIiNwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikucHJlcGVuZCgiPGgzPlNlbGVjdCBwbGVhc2UgIiskKCdsYWJlbFtmb3I9InZpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdJykuaHRtbCgpKyI8L2gzPiIpOyAgICAgICAgICAgCgkJCQkJCQkJJCgiI3BvcHVwX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5wcmVwZW5kKCI8ZGl2IGlkPSdwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+X2Nsb3NlJyBjbGFzcz0ncG9wdXBfY2xvc2UnPkNsb3NlPC9kaXY+Iik7ICAgICAgICAgICAKCQkJCQkJCQl2YXIgaSA9IDA7ICAgICAgICAgICAKCQkJCQkJCQkkKCI8b3B0aW9uLz4iLCB7J3ZhbHVlJzogJycsIGh0bWw6ICctLS0nfSkuYXBwZW5kVG8oIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKTsgICAgICAgICAgIAoJCQkJCQkJCSQuZWFjaChkYXRhLmRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsKSB7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6IHZhbC5pZCwgaHRtbDogdmFsLm5hbWUsICdzZWxlY3RlZCc6IHZhbC52YWx1ZSB9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgICAgICAgICAgCgkJCQkJCQkJCWkgKz0gMTsgICAgICAgICAgIAoJCQkJCQkJCQl2YXIgYm9sZCA9IHZhbC5pZD09cHJldmlvdXNfaWQ7ICAgCgkJCQkJCQkJCXZhciB2YWx1ZXMgPSB2YWwubmFtZS5zcGxpdCgiOmk6Iik7IAoJCQkJCQkJCQlpZiAoaSAlIDIgPT0gMCkgeyAgICAgICAgICAgCgkJCQkJCQkJCQkkKCIjY29sdW1uMSIpLmFwcGVuZCgnPGJyPjxicj48c3BhbiBjbGFzcz0icG9wdXBsaXN0X2hlYWRlciIgaWQ9InBvcHVwZWxlbWVudGlkXycrdmFsLmlkKyciPjx1PicrKGJvbGQ/JzxiPic6JycpK3ZhbHVlc1swXSsoYm9sZD8nPC9iPic6JycpICsgJzwvdT4nICsgKHZhbHVlcy5sZW5ndGggPiAxID8gdmFsdWVzWzFdIDogJycpICsnPC9zcGFuPicpOyAgICAgIAoJCQkJCQkJCQl9ZWxzZXsgICAgICAKCQkJCQkJCQkJCSQoIiNjb2x1bW4yIikuYXBwZW5kKCc8YnI+PGJyPjxzcGFuIGNsYXNzPSJwb3B1cGxpc3RfaGVhZGVyIiBpZD0icG9wdXBlbGVtZW50aWRfJyt2YWwuaWQrJyI+PHU+JysoYm9sZD8nPGI+JzonJykrdmFsdWVzWzBdKyhib2xkPyc8L2I+JzonJykgKyAnPC91PicgKyAodmFsdWVzLmxlbmd0aCA+IDEgPyB2YWx1ZXNbMV0gOiAnJykgKyc8L3NwYW4+Jyk7ICAgICAgCgkJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJICAJfSk7ICAgICAgICAgICAKCQkJCQkJCQlpZiAoaT09MCl7ICAgICAgICAgICAKCQkJCQkJCQkJLy8g0YPQtNCw0LvRj9C10Lwg0LTQuNC90LDQvCDQvtC60L3QviAgICAgICAgICAgCgkJCQkJCQkJCSQoICIjcG9wdXBfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgKS5yZW1vdmUoKTsgICAgICAgICAgIAoJCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJ1RoZSBsaXN0IGlzIGVtcHR5Jyk7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJycpOyAgICAgICAgICAgCgkJCQkJCQkJCWlmICghJCgiI3RyX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIgKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkgeyAgICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAgCgkJCQkJCQkJCX0gICAgIAoJCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJCS0tYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il07ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3NldF9maW5kX3Jlc3VsdCcpOyAgICAgICAgICAgCgkJCQkJCQkJCWlmIChhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iXSA9PSAwKSB7ICAgICAgICAgICAKCQkJCQkJCQkJCWlmICghJCgiI3RyX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIgKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkgeyAgICAKCQkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAKCQkJCQkJCQkJCX0gICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS50cmlnZ2VyKCdvbl9wYXJyZW50X3VuYmxvY2tlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJCQkkKCIjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgCgkJCSAgICAgICAgICAgIAkJCQkJCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCQkJCQkJCQl9ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCQkJCS8vJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgICAgIAoJCQkJCQkJCQlyZXR1cm47ICAgICAgICAgICAKCQkJCQkJCQl9ICAgICAgICAgICAKCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJLS1hamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iXTsgICAgICAgICAgIAoJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdzZXRfZmluZF9yZXN1bHQnKTsgICAgICAgICAgIAoJCQkJCQkJCWlmIChhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iXSA9PSAwKSB7ICAgICAgICAgICAKCQkJCQkJCQkJaWYgKCEkKCIjdHJfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiApLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7ICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgIAoJCQkJCQkJCQl9ICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnRyaWdnZXIoJ29uX3BhcnJlbnRfdW5ibG9ja2VkJyk7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCSAgICAgICAgICAgIAkJCQkJCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJCS0tYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXTsgIAoJCQkJCQkJCWlmIChhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdID09IDApIHsgIAogICAgICAgICAgICAJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCAnb25fY2hpbGRfdW5ibG9ja2VkJyk7ICAKCQkJCQkJCQl9ICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQkvLyQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQkvLyDQv9C+0LrQsNC30YvQstCw0LXQvCDRhNC+0L0gICAgICAgICAgIAoJCQkJCQkJCSQoIi5vdmVybGF5Iikuc2hvdygpOyAgICAgICAgICAgCgkJCQkJCQkJLy8g0LLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC00LjQvdCw0LzQuNGH0LXRgdC60Lgg0L3QsCBjbGljayDQvdCwINC60LDQttC00YvQuSDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LAgcG9wdXBsaXN0X2hlYWRlciAgICAgICAgICAgCgkJCQkJCQkJJChkb2N1bWVudCkub25lKCJjbGljayIsICIucG9wdXBsaXN0X2hlYWRlciIsIGZ1bmN0aW9uKCkgeyAgICAgICAgICAgCgkJCQkJCQkJCSAvLyDQuNC3IGlkINC40LfQstC70LXQutCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC4INCy0YvQstC+0LTQuNC8ICAgICAgICAgICAKCQkJCQkJCQkJIHZhciBpZF92YWx1ZSA9ICQodGhpcykuYXR0cignaWQnKTsgICAgICAgICAgIAoJCQkJCQkJCQkgdmFyIGFyciA9IGlkX3ZhbHVlLnNwbGl0KCdfJyk7ICAgICAgICAgICAKCQkJCQkJCQkJICQoIiNmYWtlX3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnZhbCgkKHRoaXMpLmZpbmQoInUiKS50ZXh0KCkpOyAgICAgICAgICAgCgkJCQkJCQkJCSAkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKGFyclsxXSk7ICAgICAgICAgICAKCQkJCQkJCQkJICQoIiNzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKGFyclsxXSk7ICAgICAgICAgICAKCQkJCQkJCQkJIC8vINC30LDQutGA0YvQstCw0LXQvCDRhNC+0L0gICAgICAgICAgIAoJCQkJCQkJCQkgJCgiLm92ZXJsYXkiKS5oaWRlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJIC8vINGD0LTQsNC70Y/QtdC8INC00LjQvdCw0Lwg0L7QutC90L4gICAgICAgICAgIAoJCQkJCQkJCQkgJCgiI3BvcHVwX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iICkucmVtb3ZlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJIC8vINC/0L7RgdGL0LvQsNC10Lwg0YHQvtCx0YvRgtC40LUg0L3QsCDQvtCx0L3QvtCy0LvQtdC90LjQtSAgICAgICAgICAgCgkJCQkJCQkJCSAkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuY2hhbmdlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQl9KTsgICAgICAgICAgIAoJCQkJCQkJCS8vINCy0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQtNC40L3QsNC80LjRh9C10YHQutC4INC90LAgY2xpY2sg0L3QsCDQt9Cw0LrRgNGL0YLRjCAgICAgICAgICAgCgkJCQkJCQkJJChkb2N1bWVudCkub25lKCJjbGljayIsICIucG9wdXBfY2xvc2UiLCBmdW5jdGlvbigpIHsgICAgICAgICAgIAoJCQkJCQkJCQkvLyDQt9Cw0LrRgNGL0LLQsNC10Lwg0YTQvtC9ICAgICAgICAgICAKCQkJCQkJCQkJJCgiLm92ZXJsYXkiKS5oaWRlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJLy8g0YPQtNCw0LvRj9C10Lwg0LTQuNC90LDQvCDQvtC60L3QviAgICAgICAgICAgCgkJCQkJCQkJCSQoIiNwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikucmVtb3ZlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJLy8g0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0YDQtdC00YvQtNGD0YnQuNC5INCy0YvQsdC+0YAgICAgICAgICAgIAoJCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwocHJldmlvdXNfdGV4dCk7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwocHJldmlvdXNfaWQpOyAgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwocHJldmlvdXNfaWQpOyAgICAgICAgICAgCgkJCQkJCQkJCS8vINC/0L7RgdGL0LvQsNC10Lwg0YHQvtCx0YvRgtC40LUg0L3QsCDQvtCx0L3QvtCy0LvQtdC90LjQtSAgICAgICAgICAgCgkJCQkJCQkJCS8vJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmNoYW5nZSgpOyAgICAgICAgICAgCgkJCQkJCQkJfSk7ICAgICAgICAgICAKCQkJCQkJfSk7ICAgICAgICAgICAKCQkJCQl9ICAgICAgICAgICAKICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmNoYW5nZShmdW5jdGlvbigpewoJCW9uQ2hhbmdlc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5fY3RfYWpheF9saXN0KHRoaXMpOwogfSk7IAogJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuY2hhbmdlKGZ1bmN0aW9uKCl7CgkJb25DaGFuZ2VzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPl9jdF9hamF4X2xpc3QodGhpcyk7CiB9KTsgCgkJCQkJZnVuY3Rpb24gb25DaGFuZ2VzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPl9jdF9hamF4X2xpc3Qoc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+TGlzdCl7ICAgICAgICAgICAKCQkJCQkJdmFyIHZhbHVlSlMgPSAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAo7IAoJCQkJCQkkKCIjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ2NsZWFuVmFsdWUnKTsgICAgICAgCgkJCQkJCWlmICh2YWx1ZUpTLm1hdGNoKC86aToobm9uZSk/KDpwOnwkKS8pKXsgcmV0dXJuIH07ICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnVuYmluZCgiZm9jdXNpbiIpOyAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmZvY3VzaW4oIGZ1bmN0aW9uKCkgeyAgICAgICAgICAKCQkJCQkJCXZhciB2YWx1ZSA9ICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoKTsgCgkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuZW1wdHkoKTsgICAgICAgICAgIAoJCQkJCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6ICcnLCBodG1sOiAnTG9hZGluZy4uLid9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgICAgICAgICAgCgkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCQkkKCIjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgICAgCgkJICAgICAgICAgICAgCQkJCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgIAoJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgICAgCgkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCWlmICghYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il0pIHsgICAgICAgICAgIAoJCQkJCQkJCWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiJdID0gMDsgICAgICAgICAgIAoJCQkJCQkJfSAgICAgICAgICAgCgkJCQkJCQkrK2FqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiJdOyAgICAgICAgICAKCQkJCQkJCWlmICghYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSkgeyAgICAgIAoJCQkJCQkJCWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Il0gPSAwOyAgICAgIAoJCQkJCQkJfSAgICAgIAoJCQkJCQkJKythamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdOyAgICAgIAoJCQkJCQkJYWpheCh7ICAgICAgICAKCQkJCQkgICAgICAgICAgICAJdXJsOiAncmVzdC9mb3JtL2dldF9saXN0X2ludGVyYWN0aXZlJywgICAgICAgIAoJCQkJCQkJCWRhdGE6IHsgICAgICAgIAoJCQkJCQkJCQlwYXJhbWV0ZXJfbmFtZTonc3BhY2VzaGlwX2ZhY3RvcnknLCAgICAgICAgCgkJCQkJCQkJCWZvcm1fYXBpOiAnU1BBQ0VTSElQJywgICAgICAgIAoJCQkJCQkJCQlwYXJhbWV0ZXJzOiB2YWx1ZUpTLCAgICAgICAgCgkJCQkJCQkJCXJuZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLCAgICAgICAgCgkJCQkJCQkJfSwgICAgICAgCgkJCQkJCSAgICAgICAgICAgIAl0eXBlOiAncG9zdCcsICAgICAgICAKCQkJCQkJICAgICAgICAgICAJZGF0YVR5cGU6ICdqc29uJywgICAgICAgIAoJCQkJICAgICAgICAgICAgCQkJY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgCgkJCQkJCQl9LCBmdW5jdGlvbiAoZGF0YSkgeyAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS51bmJpbmQoImZvY3VzaW4iKTsgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5lbXB0eSgpOyAgICAgICAgICAgCgkJCQkJCQkJCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6ICcnLCBodG1sOiAnLS0tJ30pLmFwcGVuZFRvKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Iik7ICAgCgkJJC5lYWNoKGRhdGEuZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWwpIHsgICAKCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6IHZhbC5pZCwgaHRtbDogdmFsLm5hbWUsICdzZWxlY3RlZCc6IHZhbC52YWx1ZSB9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgIAoJCQlpZiAodmFsLnZhbHVlKSB7ICAKCQkJCXZhbHVlID0gdmFsLmlkICAKCQkJfSAgCgkJfSk7ICAgCgkJaWYgKCQoIiNvdGhlcl9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikubGVuZ3RoID4gMCkgeyAgIAoJCQkkKCI8b3B0aW9uLz4iLCB7J3ZhbHVlJzogJ290aGVyJywgaHRtbDogJ090aGVyJywgJ3NlbGVjdGVkJzogJCgiI290aGVyX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWx1ZSB9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgIAoJCX0gIAoJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5jbGljaygpOyAKICAgICAgICAgICAKCQkJCQkJCQkJdmFyIHNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4gPSAkKCcjdHJfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpOyAgICAgICAgICAgCgkJCQkJCQkJCWlmIChkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLmxlbmd0aCA+IDApeyAgICAgICAgICAgCgkJCQkJCQkJCQlpZiAoIiIpeyAgICAgICAgICAgCgkJCQkJCQkJCQkJc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCAnbm9uZScpOyAgICAgICAgICAgCgkJCQkJCQkJCQkJJCgnI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgnJyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQkkKCcjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgnJyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQkkKCcjaXNfZW1wdHlfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgxKTsgICAgICAgICAgIAoJCQkJCQkJCQkJfWVsc2V7ICAgICAgICAgICAKCQkJCQkJCQkJCQlpZiAoJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS5hdHRyKCdpbnZpc2libGUnKSA9PSAnZmFsc2UnKSB7ICAgICAgICAgICAKCQkJCQkJCQkJCQkJaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiAhZG9jdW1lbnQuYWxsKSB8fCB3aW5kb3cub3BlcmEpICAgICAgICAgICAKCQkJCQkJCQkJCQkJCXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwndGFibGUtcm93Jyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQkJZWxzZSAgICAgICAgICAgCgkJCQkJCQkJCQkJCQlzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+LmNzcygiZGlzcGxheSIsJ2lubGluZScpOyAgICAgICAgICAgCgkJCQkJCQkJCQkJfSAgICAgICAgICAgCgkJCQkJCQkJCQl9ICAgICAgICAgICAKCQkJCQkJCQkJfWVsc2V7ICAgICAgICAgICAKCQkJCQkJCQkJCWlmICgkKCcjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScpID09ICdmYWxzZScpIHsgICAgICAgICAgIAoJCQkJCQkJCQkJCWlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgIWRvY3VtZW50LmFsbCkgfHwgd2luZG93Lm9wZXJhKSAgICAgICAgICAgCgkJCQkJCQkJCQkJCXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwndGFibGUtcm93Jyk7ICAgICAgICAgICAKCQkJCQkJCQkJCQllbHNlICAgICAgICAgICAKCQkJCQkJCQkJCQkJc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCdpbmxpbmUnKTsgICAgICAgICAgIAoJCQkJCQkJCQkJfSAgICAgICAgICAgCgkJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJCQktLWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiJdOyAgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdzZXRfZmluZF9yZXN1bHQnKTsgICAgICAgICAgIAoJCQkJCQkJCQlpZiAoYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il0gPT0gMCkgeyAgICAgICAgICAgCgkJCQkJCQkJCQlpZiAoISQoIiN0cl9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iICkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHsgICAgIAoJCQkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7ICAgICAKCQkJCQkJCQkJCX0gICAgIAoJCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcignb25fcGFycmVudF91bmJsb2NrZWQnKTsgICAgICAgICAgIAoJCQkJCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCQkJCSAgICAgIAkgICAgICAJCQkJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgCgkJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJCQktLWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Il07ICAgIAoJCQkJCQkJCQlpZiAoYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSA9PSAwKSB7ICAgIAoJCQkJCSAgICAgICAgICAgIAkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudHJpZ2dlciggJ29uX2NoaWxkX3VuYmxvY2tlZCcpOyAgICAKCQkJCQkJCQkJfSAgICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQkJaWYgKHZhbHVlKSB7ICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKHZhbHVlKS5jaGFuZ2UoKTsgICAKCQkJCQkJCQkJfSAgIAoJCQkJCQkJfSk7ICAgICAgICAgIAoJCQkJCQl9KTsgICAgICAgICAgCgkJCQkJfSAgICAgICAgICAgCgkJCQkJIAoJCQkJCS8vINGA0LXQsNCz0LjRgNC+0LLQsNC90LjQtSDQvdCwINC/0L7Qu9GD0YfQtdC90LjQtSDRhNC+0LrRg9GB0LAgICAgICAgICAgIAoJCQkJCWZ1bmN0aW9uIG9uUG9wV2luZG93dmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+KCl7ICAgICAgICAgICAKCQkJCQkJdmFyIHZhbHVlSlMgPSAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAo7ICAgICAgICAgCgkJCQkJCQkJCWlmICgodmFsdWVKUykubWF0Y2goLzppOihub25lKT8oOnA6fCQpLykpIHsKCQkJCQkJJCgiI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdjbGVhblZhbHVlJyk7ICAgICAgIAoJCQkJCQkJcmV0dXJuOyAKCQkJCQkJfSAKICAgICAgICAgICAKCQkJCQkJLy8g0YHQvtGF0YDQsNC90Y/QtdC8INC/0YDQtdC00YvQtNGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUgICAgICAgICAgIAoJCQkJCQl2YXIgcHJldmlvdXNfdGV4dCA9ICQoIiNmYWtlX3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnZhbCgpOyAgICAgICAgICAgCgkJCQkJCXZhciBwcmV2aW91c19pZCA9ICQoIiNzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKCk7ICAgICAgICAgICAKCQkJCQkJJCgiI2Zha2VfdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgICAgCgkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5lbXB0eSgpOyAgICAgICAgICAgCgkJCQkJCSQoIjxvcHRpb24vPiIsIHsndmFsdWUnOiAnJywgaHRtbDogJ0xvYWRpbmcuLi4nfSkuYXBwZW5kVG8oIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKTsgICAgICAgICAgIAoJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJ0xvYWRpbmcuLi4nKTsgICAgICAgICAgIAoJCQkJCQkvLyQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgIAoJCQkJICAgICAgICAgICAgCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgIAoJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5hdHRyKCJkaXNhYmxlZCIsImRpc2FibGVkIik7ICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCWlmICghYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il0pIHsgICAgICAgICAgIAoJCQkJCQkJYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il0gPSAwOyAgICAgICAgICAgCgkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkrK2FqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiJdOyAgICAgICAgICAgCgkJCQkJCWlmICghYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSkgeyAgICAgICAgCgkJCQkJCQlhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdID0gMDsgICAgICAgIAoJCQkJCQl9ICAgICAgICAKCQkJCQkJKythamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdOyAgICAgICAgCgkJCQkJCWFqYXgoeyAgICAgICAgICAgCgkJCQkgICAgICAgICAgICAJdXJsOiAncmVzdC9mb3JtL2dldF9saXN0X2ludGVyYWN0aXZlJywgICAgICAgICAgIAoJCQkJCQkJZGF0YTogeyAgICAgICAgICAgCgkJCQkJCQkJcGFyYW1ldGVyX25hbWU6J3NwYWNlc2hpcF9mYWN0b3J5JywgICAgICAgICAgIAoJCQkJCQkJCWZvcm1fYXBpOiAnU1BBQ0VTSElQJywgICAgICAgICAgIAoJCQkJCQkJCXBhcmFtZXRlcnM6IHZhbHVlSlMsICAgICAgICAgICAKCQkJCQkJCQlub19jYWNoZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLCAgICAgICAgICAgCgkJCQkJCQl9LCAgICAgICAgICAKCQkJCQkgICAgICAgICAgICB0eXBlOiAncG9zdCcsICAgICAgICAgICAKCQkJCQkgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAgICAgICAgICAgCgkJCQkgICAgICAgICAgIAkJY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgICAgCgkJCQkJCX0sIGZ1bmN0aW9uIChkYXRhKSB7ICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmVtcHR5KCk7ICAgICAgICAgICAKCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJ05vdCBzZWxlY3RlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJLy8g0YHQvtC30LTQsNC10Lwg0YHQu9C+0LkgICAgICAgICAgIAoJCQkJCQkJCSQoIiNmYWtlX3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmFmdGVyKCI8ZGl2IGlkPSdwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+JyBjbGFzcz0ncG9wdXAnPjxwIGlkPSdjb2x1bW4xJz48L3A+PHAgaWQ9J2NvbHVtbjInPjwvcD48L2Rpdj4iKTsgICAgICAgICAgIAoJCQkJCQkJCSQoIiNwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikucHJlcGVuZCgiPGgzPlNlbGVjdCBwbGVhc2UgIiskKCdsYWJlbFtmb3I9InZpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdJykuaHRtbCgpKyI8L2gzPiIpOyAgICAgICAgICAgCgkJCQkJCQkJJCgiI3BvcHVwX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5wcmVwZW5kKCI8ZGl2IGlkPSdwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+X2Nsb3NlJyBjbGFzcz0ncG9wdXBfY2xvc2UnPkNsb3NlPC9kaXY+Iik7ICAgICAgICAgICAKCQkJCQkJCQl2YXIgaSA9IDA7ICAgICAgICAgICAKCQkJCQkJCQkkKCI8b3B0aW9uLz4iLCB7J3ZhbHVlJzogJycsIGh0bWw6ICctLS0nfSkuYXBwZW5kVG8oIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKTsgICAgICAgICAgIAoJCQkJCQkJCSQuZWFjaChkYXRhLmRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsKSB7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiPG9wdGlvbi8+Iiwgeyd2YWx1ZSc6IHZhbC5pZCwgaHRtbDogdmFsLm5hbWUsICdzZWxlY3RlZCc6IHZhbC52YWx1ZSB9KS5hcHBlbmRUbygiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpOyAgICAgICAgICAgCgkJCQkJCQkJCWkgKz0gMTsgICAgICAgICAgIAoJCQkJCQkJCQl2YXIgYm9sZCA9IHZhbC5pZD09cHJldmlvdXNfaWQ7ICAgCgkJCQkJCQkJCXZhciB2YWx1ZXMgPSB2YWwubmFtZS5zcGxpdCgiOmk6Iik7IAoJCQkJCQkJCQlpZiAoaSAlIDIgPT0gMCkgeyAgICAgICAgICAgCgkJCQkJCQkJCQkkKCIjY29sdW1uMSIpLmFwcGVuZCgnPGJyPjxicj48c3BhbiBjbGFzcz0icG9wdXBsaXN0X2hlYWRlciIgaWQ9InBvcHVwZWxlbWVudGlkXycrdmFsLmlkKyciPjx1PicrKGJvbGQ/JzxiPic6JycpK3ZhbHVlc1swXSsoYm9sZD8nPC9iPic6JycpICsgJzwvdT4nICsgKHZhbHVlcy5sZW5ndGggPiAxID8gdmFsdWVzWzFdIDogJycpICsnPC9zcGFuPicpOyAgICAgIAoJCQkJCQkJCQl9ZWxzZXsgICAgICAKCQkJCQkJCQkJCSQoIiNjb2x1bW4yIikuYXBwZW5kKCc8YnI+PGJyPjxzcGFuIGNsYXNzPSJwb3B1cGxpc3RfaGVhZGVyIiBpZD0icG9wdXBlbGVtZW50aWRfJyt2YWwuaWQrJyI+PHU+JysoYm9sZD8nPGI+JzonJykrdmFsdWVzWzBdKyhib2xkPyc8L2I+JzonJykgKyAnPC91PicgKyAodmFsdWVzLmxlbmd0aCA+IDEgPyB2YWx1ZXNbMV0gOiAnJykgKyc8L3NwYW4+Jyk7ICAgICAgCgkJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJICAJfSk7ICAgICAgICAgICAKCQkJCQkJCQlpZiAoaT09MCl7ICAgICAgICAgICAKCQkJCQkJCQkJLy8g0YPQtNCw0LvRj9C10Lwg0LTQuNC90LDQvCDQvtC60L3QviAgICAgICAgICAgCgkJCQkJCQkJCSQoICIjcG9wdXBfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIgKS5yZW1vdmUoKTsgICAgICAgICAgIAoJCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJ1RoZSBsaXN0IGlzIGVtcHR5Jyk7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwoJycpOyAgICAgICAgICAgCgkJCQkJCQkJCWlmICghJCgiI3RyX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIgKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkgeyAgICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAgCgkJCQkJCQkJCX0gICAgIAoJCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJCS0tYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il07ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3NldF9maW5kX3Jlc3VsdCcpOyAgICAgICAgICAgCgkJCQkJCQkJCWlmIChhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iXSA9PSAwKSB7ICAgICAgICAgICAKCQkJCQkJCQkJCWlmICghJCgiI3RyX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIgKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkgeyAgICAKCQkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAKCQkJCQkJCQkJCX0gICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS50cmlnZ2VyKCdvbl9wYXJyZW50X3VuYmxvY2tlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJCQkkKCIjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgCgkJCSAgICAgICAgICAgIAkJCQkJCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCQkJCQkJCQl9ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgCgkJCQkJCQkJCS8vJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgICAgIAoJCQkJCQkJCQlyZXR1cm47ICAgICAgICAgICAKCQkJCQkJCQl9ICAgICAgICAgICAKCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAgICAgICAgCgkJCQkJCQkJLS1hamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iXTsgICAgICAgICAgIAoJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdzZXRfZmluZF9yZXN1bHQnKTsgICAgICAgICAgIAoJCQkJCQkJCWlmIChhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iXSA9PSAwKSB7ICAgICAgICAgICAKCQkJCQkJCQkJaWYgKCEkKCIjdHJfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IiApLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7ICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgIAoJCQkJCQkJCQl9ICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnRyaWdnZXIoJ29uX3BhcnJlbnRfdW5ibG9ja2VkJyk7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCSAgICAgICAgICAgIAkJCQkJCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgICAgIAoJCQkJCQkJCX0gICAgICAgICAgIAoJCQkJCQkJCS0tYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXTsgIAoJCQkJCQkJCWlmIChhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdID09IDApIHsgIAogICAgICAgICAgICAJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCAnb25fY2hpbGRfdW5ibG9ja2VkJyk7ICAKCQkJCQkJCQl9ICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQkvLyQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQkvLyDQv9C+0LrQsNC30YvQstCw0LXQvCDRhNC+0L0gICAgICAgICAgIAoJCQkJCQkJCSQoIi5vdmVybGF5Iikuc2hvdygpOyAgICAgICAgICAgCgkJCQkJCQkJLy8g0LLQtdGI0LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC00LjQvdCw0LzQuNGH0LXRgdC60Lgg0L3QsCBjbGljayDQvdCwINC60LDQttC00YvQuSDRjdC70LXQvNC10L3RgiDRgdC/0LjRgdC60LAgcG9wdXBsaXN0X2hlYWRlciAgICAgICAgICAgCgkJCQkJCQkJJChkb2N1bWVudCkub25lKCJjbGljayIsICIucG9wdXBsaXN0X2hlYWRlciIsIGZ1bmN0aW9uKCkgeyAgICAgICAgICAgCgkJCQkJCQkJCSAvLyDQuNC3IGlkINC40LfQstC70LXQutCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC4INCy0YvQstC+0LTQuNC8ICAgICAgICAgICAKCQkJCQkJCQkJIHZhciBpZF92YWx1ZSA9ICQodGhpcykuYXR0cignaWQnKTsgICAgICAgICAgIAoJCQkJCQkJCQkgdmFyIGFyciA9IGlkX3ZhbHVlLnNwbGl0KCdfJyk7ICAgICAgICAgICAKCQkJCQkJCQkJICQoIiNmYWtlX3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnZhbCgkKHRoaXMpLmZpbmQoInUiKS50ZXh0KCkpOyAgICAgICAgICAgCgkJCQkJCQkJCSAkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKGFyclsxXSk7ICAgICAgICAgICAKCQkJCQkJCQkJICQoIiNzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikudmFsKGFyclsxXSk7ICAgICAgICAgICAKCQkJCQkJCQkJIC8vINC30LDQutGA0YvQstCw0LXQvCDRhNC+0L0gICAgICAgICAgIAoJCQkJCQkJCQkgJCgiLm92ZXJsYXkiKS5oaWRlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJIC8vINGD0LTQsNC70Y/QtdC8INC00LjQvdCw0Lwg0L7QutC90L4gICAgICAgICAgIAoJCQkJCQkJCQkgJCgiI3BvcHVwX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iICkucmVtb3ZlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJIC8vINC/0L7RgdGL0LvQsNC10Lwg0YHQvtCx0YvRgtC40LUg0L3QsCDQvtCx0L3QvtCy0LvQtdC90LjQtSAgICAgICAgICAgCgkJCQkJCQkJCSAkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuY2hhbmdlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAKCQkJCQkJCQl9KTsgICAgICAgICAgIAoJCQkJCQkJCS8vINCy0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQtNC40L3QsNC80LjRh9C10YHQutC4INC90LAgY2xpY2sg0L3QsCDQt9Cw0LrRgNGL0YLRjCAgICAgICAgICAgCgkJCQkJCQkJJChkb2N1bWVudCkub25lKCJjbGljayIsICIucG9wdXBfY2xvc2UiLCBmdW5jdGlvbigpIHsgICAgICAgICAgIAoJCQkJCQkJCQkvLyDQt9Cw0LrRgNGL0LLQsNC10Lwg0YTQvtC9ICAgICAgICAgICAKCQkJCQkJCQkJJCgiLm92ZXJsYXkiKS5oaWRlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJLy8g0YPQtNCw0LvRj9C10Lwg0LTQuNC90LDQvCDQvtC60L3QviAgICAgICAgICAgCgkJCQkJCQkJCSQoIiNwb3B1cF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikucmVtb3ZlKCk7ICAgICAgICAgICAKCQkJCQkJCQkJLy8g0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0YDQtdC00YvQtNGD0YnQuNC5INCy0YvQsdC+0YAgICAgICAgICAgIAoJCQkJCQkJCQkkKCIjZmFrZV92aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwocHJldmlvdXNfdGV4dCk7ICAgICAgICAgICAKCQkJCQkJCQkJJCgiI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwocHJldmlvdXNfaWQpOyAgICAgICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS52YWwocHJldmlvdXNfaWQpOyAgICAgICAgICAgCgkJCQkJCQkJCS8vINC/0L7RgdGL0LvQsNC10Lwg0YHQvtCx0YvRgtC40LUg0L3QsCDQvtCx0L3QvtCy0LvQtdC90LjQtSAgICAgICAgICAgCgkJCQkJCQkJCS8vJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmNoYW5nZSgpOyAgICAgICAgICAgCgkJCQkJCQkJfSk7ICAgICAgICAgICAKCQkJCQkJfSk7ICAgICAgICAgICAKCQkJCQl9ICAgICAgICAgICAKJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLm9uKCJrZXlkb3duIixmdW5jdGlvbihldmVudCl7CglvbkNoYW5nZVJlYWRPbmx5c3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPihldmVudC5kZWxlZ2F0ZVRhcmdldCwgZXZlbnQpOwp9KTskKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Iikub24oImNoYW5nZSIsZnVuY3Rpb24oZXZlbnQpewoJb25DaGFuZ2VSZWFkT25seXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4oZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGV2ZW50KTsKfSk7JCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLm9uKCJibHVyIixmdW5jdGlvbihldmVudCl7CglvbkNoYW5nZVJlYWRPbmx5c3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPihldmVudC5kZWxlZ2F0ZVRhcmdldCwgZXZlbnQpOwp9KTsJJCgiI2VuZ2luZV90eXBlPE5VTUJFUj4iKS5iaW5kKCJzZXRWYWx1ZU9uTG9hZCIsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkgeyAgICAgIAoJCXZhciBpc0xvYWRpbmcgPSB0cnVlOyAgICAgIAoJCQlpZiAoaXNMb2FkaW5nKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS5iaW5kKCdzZXRWYWx1ZScsIGZ1bmN0aW9uKCl7ICAgIAoJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IiArIGRhdGEudmFsdWUpLmNsaWNrKCk7ICAgCgkJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS5jaGFuZ2UoKTsgICAKCQkJJCgiI2VuZ2luZV90eXBlPE5VTUJFUj4iKS52YWwoZGF0YS52YWx1ZSk7IAoJCQkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoJCX0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoJfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iICsgZGF0YS52YWx1ZSkuY2xpY2soKTsgICAgICAgICAKCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikuY2hhbmdlKCk7ICAgCgkJJCgiI2VuZ2luZV90eXBlPE5VTUJFUj4iKS52YWwoZGF0YS52YWx1ZSk7ICAgCgl9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKIAoJCSQoIiNlbmdpbmVfdHlwZTxOVU1CRVI+IikuYmluZCgiY2xlYW5WYWx1ZSIsIGZ1bmN0aW9uKCl7IAoJCQlpZiAoZm9ybXNXYWl0ZWRUb0xvYWQgPT09IDApIHsgCgkJCQkJCQkJCQkJICAgCgkJCQkJCQkkKCJbbmFtZT0ndmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+J10iKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBpdGVtKXsgCgkJCQkJCQkJJCh0aGlzKS5wcm9wKCJjaGVja2VkIiwgZmFsc2UpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgCgkJCQkJCQl9KTsgCgkJCQkJCQkkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLnZhbCgnJyk7IAogCgkJCX0JCiAJCX0pOyAKCQkkKCIjZW5naW5lX3R5cGU8TlVNQkVSPiIpLnVuYmluZCgic2V0VmFsdWVPbkxvYWQiKTsgICAKCX0pOyAgICAgIAoJJCggZG9jdW1lbnQgKS5iaW5kKCdzZXRMaXN0T25Mb2FkJywgZnVuY3Rpb24oKSB7ICAgICAgCgkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3NldFZhbHVlJyk7ICAgICAKCX0pOyAgICAgIAoJZnVuY3Rpb24gb25DaGFuZ2VSZWFkT25seWVuZ2luZV90eXBlPE5VTUJFUj4oY3VycmVudCl7ICAgICAgIAoJCWlmICh0eXBlb2YgY3VycmVudC52YWx1ZSAhPSAndW5kZWZpbmVkJyl7ICAKCQkJJCgnI2VuZ2luZV90eXBlPE5VTUJFUj4nKS52YWwoY3VycmVudC52YWx1ZSk7ICAgICAgIAoJCX0gIAoJfSAgICAgICAKCWZ1bmN0aW9uIG9uS2V5RG93blJlYWRPbmx5ZW5naW5lX3R5cGU8TlVNQkVSPihjdXJyZW50KXsgICAgICAgCgkJaWYod2luZG93LmV2ZW50LmtleUNvZGUgPT0gMTMpeyAgICAgICAKCQkJJCgnI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPicpLnZhbChjdXJyZW50LnZhbHVlKS5jaGFuZ2UoKTsgICAgICAgCgkJfSAgICAgICAKCX0gICAgICAgCiAkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5jaGFuZ2UoZnVuY3Rpb24oKXsKCQlvbkNoYW5nZXNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPl9lbmdpbmVfdHlwZTxOVU1CRVI+X2N0X2FqYXhfdmlzaWJsZSh0aGlzKTsKIH0pOyAKCQkJCWZ1bmN0aW9uIG9uQ2hhbmdlc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF92aXNpYmxlKHNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPkxpc3QpeyAgICAgICAgCgkJCQkJdmFyIHZhbHVlSlMgPSAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9mYWN0b3J5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS52YWwoKSAKCSsgJzpwOicgKyAgT2JqZWN0LmtleXModXJpX3BhcmFtcykuZmlsdGVyKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gY3VycmVudFZhbHVlICE9ICIiOyAKCX0pLm1hcChmdW5jdGlvbiBjYWxsYmFjayhjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgeyAgCgkgICAgcmV0dXJuICd1cmlfJyArIGN1cnJlbnRWYWx1ZSArICI6aToiICArIHVyaV9wYXJhbXNbY3VycmVudFZhbHVlXTsgCgl9KS5qb2luKCI6cDoiKSAKOyAgICAgCgkJCQkJCQkJaWYgKHZhbHVlSlMubWF0Y2goLzppOihub25lKT8oOnA6fCQpLykpIHsKCQkJCSQoJyN0cl9lbmdpbmVfdHlwZTxOVU1CRVI+JykuY3NzKCJkaXNwbGF5IiwgJ25vbmUnKTsKCQkJCSQoJyN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4nKS52YWwoJycpLmNoYW5nZSgpOwoJCQkJJCgnI2VuZ2luZV90eXBlPE5VTUJFUj4nKS5hdHRyKCdpbnZpc2libGUnLCB0cnVlKTsKCQkJCSQoJyN0cl9lbmdpbmVfdHlwZTxOVU1CRVI+JykudHJpZ2dlcigncmVmcmVzaCcpOwoJCQkJcmV0dXJuOwkJCX0gICAgICAgICAKCQkJCQkkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScsIHRydWUpOyAgICAgICAgCgkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgCgkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgCgkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnNob3coKTsgICAgICAgIAoJICAgICAgICAgICAgCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnNob3coKTsgICAgICAgIAoJCQkJCWlmICghYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il0pIHsgICAgICAgIAoJCQkJCQlhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iXSA9IDA7ICAgICAgICAKCQkJCQl9CQkJCQkrK2FqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiJdOyAgICAgICAgCgkJCQkJaWYgKCFhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdKSB7ICAgIAoJCQkJCQlhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdID0gMDsgICAgCgkJCQkJfSAgICAKCQkJCQkrK2FqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il07ICAgIAoJCQkJCWFqYXgoeyAgICAgICAgCgkJCSAgICAgICAgICAgIAl1cmw6ICdyZXN0L2Zvcm0vZ2V0X2lzX3Zpc2libGVfaW50ZXJhY3RpdmUnLCAgICAgICAgCgkJCQkJCWRhdGE6IHsgICAgICAgIAoJCQkJCQkJcGFyYW1ldGVyX25hbWU6J2VuZ2luZV90eXBlJywgICAgICAgIAoJCQkJCQkJZm9ybV9hcGk6ICdTUEFDRVNISVAnLCAgICAgICAgCgkJCQkJCQlwYXJhbWV0ZXJzOiAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9mYWN0b3J5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS52YWwoKSAKCSsgJzpwOicgKyAgT2JqZWN0LmtleXModXJpX3BhcmFtcykuZmlsdGVyKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gY3VycmVudFZhbHVlICE9ICIiOyAKCX0pLm1hcChmdW5jdGlvbiBjYWxsYmFjayhjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgeyAgCgkgICAgcmV0dXJuICd1cmlfJyArIGN1cnJlbnRWYWx1ZSArICI6aToiICArIHVyaV9wYXJhbXNbY3VycmVudFZhbHVlXTsgCgl9KS5qb2luKCI6cDoiKSAKLCAgICAgICAgCgkJCQkJCQlybmQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSwgICAgICAgIAoJCQkJCQl9LCAgICAgICAKCQkJCSAgICAgICAgICAgIHR5cGU6ICdwb3N0JywgICAgICAgIAoJCQkJICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgICAgICAgIAoJCQkJICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgCgkJCQkJCX0sIGZ1bmN0aW9uIChkYXRhKSB7ICAKCQkJCQkJCQlpZiAoZGF0YS52YWx1ZSkgeyAgICAgICAgCgkJCQkJCQkJCWlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgIWRvY3VtZW50LmFsbCkgfHwgd2luZG93Lm9wZXJhKSAgICAgICAgCgkJCQkJCQkJCQkkKCcjdHJfZW5naW5lX3R5cGU8TlVNQkVSPicpLmNzcygiZGlzcGxheSIsJ3RhYmxlLXJvdycpOyAgICAgICAgCgkJCQkJCQkJCWVsc2UgICAgICAgIAoJCQkJCQkJCQkJJCgnI3RyX2VuZ2luZV90eXBlPE5VTUJFUj4nKS5jc3MoImRpc3BsYXkiLCdpbmxpbmUnKTsgICAgICAgIAoJCQkJCQkJCQkJJCgnI2VuZ2luZV90eXBlPE5VTUJFUj4nKS5hdHRyKCdpbnZpc2libGUnLCBmYWxzZSk7ICAgICAgICAKCQkJCQkJCQl9IGVsc2UgeyAgICAgICAgCgkJCQkJCQkJCSQoJyN0cl9lbmdpbmVfdHlwZTxOVU1CRVI+JykuY3NzKCJkaXNwbGF5IiwgJ25vbmUnKTsgICAgICAgIAoJCQkJCQkJCQkkKCcjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+JykudmFsKCcnKS5jaGFuZ2UoKTsgICAgICAgIAoJCQkJCQkJCQkkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScsIHRydWUpOyAgICAgICAgCgkJCQkJCQkJfSAgICAgICAgCgkJCQkJCQkkKCcjdHJfZW5naW5lX3R5cGU8TlVNQkVSPicpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgIAoJCQkJCQkJLS1hamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iXTsgICAKCQkJCQkJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS50cmlnZ2VyKCJzZXRfZmluZF9yZXN1bHQiKTsgICAgICAgIAoJCQkJCQkJaWYgKGFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiJdID09IDApIHsgICAgICAgIAoJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnRyaWdnZXIoJ29uX3BhcnJlbnRfdW5ibG9ja2VkJyk7ICAKCQkJCQkJCQlpZiAoISQoIiN0cl9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iICkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHsgIAoJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgCgkJCQkJCQkJfSAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgICAgICAgIAoJCQkJCQkJCSQoIiNiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdF9zcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iKS5oaWRlKCk7ICAgICAgICAKCQkJICAgICAgICAgICAgCQkJCSQoIiNtZXNzYWdlX2JveF93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgIAoJCQkJCQkJfSAgICAgICAgCgkJCQkJCQktLWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il07IAoJCQkJCQkJaWYgKGFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il0gPT0gMCkgeyAKICAgICAgICAgICAgCQkJCQkJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS50cmlnZ2VyKCAnb25fY2hpbGRfdW5ibG9ja2VkJyk7IAoJCQkJCQkJfSAKCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgIAoJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgIAoJCQkJCX0pOyAgICAgICAgCgkJCQl9ICAgICAgICAKICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmNoYW5nZShmdW5jdGlvbigpewoJCW9uQ2hhbmdlc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF92aXNpYmxlKHRoaXMpOwogfSk7IAoJCQkJZnVuY3Rpb24gb25DaGFuZ2VzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X3Zpc2libGUoc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+TGlzdCl7ICAgICAgICAKCQkJCQl2YXIgdmFsdWVKUyA9ICdzcGFjZXNoaXBfZ2FsYXh5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9wbGFuZXQnICsgJzppOicgKyAkKCcjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKCkrICc6cDonICsnc3BhY2VzaGlwX2ZhY3RvcnknICsgJzppOicgKyAkKCcjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAo7ICAgICAKCQkJCQkJCQlpZiAodmFsdWVKUy5tYXRjaCgvOmk6KG5vbmUpPyg6cDp8JCkvKSkgewoJCQkJJCgnI3RyX2VuZ2luZV90eXBlPE5VTUJFUj4nKS5jc3MoImRpc3BsYXkiLCAnbm9uZScpOwoJCQkJJCgnI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPicpLnZhbCgnJykuY2hhbmdlKCk7CgkJCQkkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScsIHRydWUpOwoJCQkJJCgnI3RyX2VuZ2luZV90eXBlPE5VTUJFUj4nKS50cmlnZ2VyKCdyZWZyZXNoJyk7CgkJCQlyZXR1cm47CQkJfSAgICAgICAgIAoJCQkJCSQoJyNlbmdpbmVfdHlwZTxOVU1CRVI+JykuYXR0cignaW52aXNpYmxlJywgdHJ1ZSk7ICAgICAgICAKCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5hdHRyKCJkaXNhYmxlZCIsImRpc2FibGVkIik7ICAgICAgICAKCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAKCQkJCQkkKCIjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgCgkgICAgICAgICAgICAJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgCgkJCQkJaWYgKCFhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iXSkgeyAgICAgICAgCgkJCQkJCWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiJdID0gMDsgICAgICAgIAoJCQkJCX0JCQkJCSsrYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il07ICAgICAgICAKCQkJCQlpZiAoIWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il0pIHsgICAgCgkJCQkJCWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il0gPSAwOyAgICAKCQkJCQl9ICAgIAoJCQkJCSsrYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXTsgICAgCgkJCQkJYWpheCh7ICAgICAgICAKCQkJICAgICAgICAgICAgCXVybDogJ3Jlc3QvZm9ybS9nZXRfaXNfdmlzaWJsZV9pbnRlcmFjdGl2ZScsICAgICAgICAKCQkJCQkJZGF0YTogeyAgICAgICAgCgkJCQkJCQlwYXJhbWV0ZXJfbmFtZTonZW5naW5lX3R5cGUnLCAgICAgICAgCgkJCQkJCQlmb3JtX2FwaTogJ1NQQUNFU0hJUCcsICAgICAgICAKCQkJCQkJCXBhcmFtZXRlcnM6ICdzcGFjZXNoaXBfZ2FsYXh5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9wbGFuZXQnICsgJzppOicgKyAkKCcjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKCkrICc6cDonICsnc3BhY2VzaGlwX2ZhY3RvcnknICsgJzppOicgKyAkKCcjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAosICAgICAgICAKCQkJCQkJCXJuZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApLCAgICAgICAgCgkJCQkJCX0sICAgICAgIAoJCQkJICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLCAgICAgICAgCgkJCQkgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAgICAgICAgCgkJCQkgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsICAgICAgICAKCQkJCQkJfSwgZnVuY3Rpb24gKGRhdGEpIHsgIAoJCQkJCQkJCWlmIChkYXRhLnZhbHVlKSB7ICAgICAgICAKCQkJCQkJCQkJaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiAhZG9jdW1lbnQuYWxsKSB8fCB3aW5kb3cub3BlcmEpICAgICAgICAKCQkJCQkJCQkJCSQoJyN0cl9lbmdpbmVfdHlwZTxOVU1CRVI+JykuY3NzKCJkaXNwbGF5IiwndGFibGUtcm93Jyk7ICAgICAgICAKCQkJCQkJCQkJZWxzZSAgICAgICAgCgkJCQkJCQkJCQkkKCcjdHJfZW5naW5lX3R5cGU8TlVNQkVSPicpLmNzcygiZGlzcGxheSIsJ2lubGluZScpOyAgICAgICAgCgkJCQkJCQkJCQkkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScsIGZhbHNlKTsgICAgICAgIAoJCQkJCQkJCX0gZWxzZSB7ICAgICAgICAKCQkJCQkJCQkJJCgnI3RyX2VuZ2luZV90eXBlPE5VTUJFUj4nKS5jc3MoImRpc3BsYXkiLCAnbm9uZScpOyAgICAgICAgCgkJCQkJCQkJCSQoJyN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4nKS52YWwoJycpLmNoYW5nZSgpOyAgICAgICAgCgkJCQkJCQkJCSQoJyNlbmdpbmVfdHlwZTxOVU1CRVI+JykuYXR0cignaW52aXNpYmxlJywgdHJ1ZSk7ICAgICAgICAKCQkJCQkJCQl9ICAgICAgICAKCQkJCQkJCSQoJyN0cl9lbmdpbmVfdHlwZTxOVU1CRVI+JykudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgCgkJCQkJCQktLWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiJdOyAgIAoJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoInNldF9maW5kX3Jlc3VsdCIpOyAgICAgICAgCgkJCQkJCQlpZiAoYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il0gPT0gMCkgeyAgICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcignb25fcGFycmVudF91bmJsb2NrZWQnKTsgIAoJCQkJCQkJCWlmICghJCgiI3RyX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIgKS5oYXNDbGFzcygnZGlzYWJsZWQnKSkgeyAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7ICAKCQkJCQkJCQl9ICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpOyAgICAgICAgCgkJCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmhpZGUoKTsgICAgICAgIAoJCQkgICAgICAgICAgICAJCQkJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgCgkJCQkJCQl9ICAgICAgICAKCQkJCQkJCS0tYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXTsgCgkJCQkJCQlpZiAoYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXSA9PSAwKSB7IAogICAgICAgICAgICAJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoICdvbl9jaGlsZF91bmJsb2NrZWQnKTsgCgkJCQkJCQl9IAoJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgCgkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgCgkJCQkJfSk7ICAgICAgICAKCQkJCX0gICAgICAgIAogJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmNoYW5nZShmdW5jdGlvbigpewoJCW9uQ2hhbmdlc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPl9lbmdpbmVfdHlwZTxOVU1CRVI+X2N0X2FqYXhfdmlzaWJsZSh0aGlzKTsKIH0pOyAKCQkJCWZ1bmN0aW9uIG9uQ2hhbmdlc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPl9lbmdpbmVfdHlwZTxOVU1CRVI+X2N0X2FqYXhfdmlzaWJsZShzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+TGlzdCl7ICAgICAgICAKCQkJCQl2YXIgdmFsdWVKUyA9ICdzcGFjZXNoaXBfZ2FsYXh5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9wbGFuZXQnICsgJzppOicgKyAkKCcjc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+JykudmFsKCkrICc6cDonICsnc3BhY2VzaGlwX2ZhY3RvcnknICsgJzppOicgKyAkKCcjc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPicpLnZhbCgpIAoJKyAnOnA6JyArICBPYmplY3Qua2V5cyh1cmlfcGFyYW1zKS5maWx0ZXIoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiBjdXJyZW50VmFsdWUgIT0gIiI7IAoJfSkubWFwKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gJ3VyaV8nICsgY3VycmVudFZhbHVlICsgIjppOiIgICsgdXJpX3BhcmFtc1tjdXJyZW50VmFsdWVdOyAKCX0pLmpvaW4oIjpwOiIpIAo7ICAgICAKCQkJCQkJCQlpZiAodmFsdWVKUy5tYXRjaCgvOmk6KG5vbmUpPyg6cDp8JCkvKSkgewoJCQkJJCgnI3RyX2VuZ2luZV90eXBlPE5VTUJFUj4nKS5jc3MoImRpc3BsYXkiLCAnbm9uZScpOwoJCQkJJCgnI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPicpLnZhbCgnJykuY2hhbmdlKCk7CgkJCQkkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScsIHRydWUpOwoJCQkJJCgnI3RyX2VuZ2luZV90eXBlPE5VTUJFUj4nKS50cmlnZ2VyKCdyZWZyZXNoJyk7CgkJCQlyZXR1cm47CQkJfSAgICAgICAgIAoJCQkJCSQoJyNlbmdpbmVfdHlwZTxOVU1CRVI+JykuYXR0cignaW52aXNpYmxlJywgdHJ1ZSk7ICAgICAgICAKCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgCgkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgIAoJCQkJCSQoIiNiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgCgkgICAgICAgICAgICAJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnNob3coKTsgICAgICAgIAoJCQkJCWlmICghYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdKSB7ICAgICAgICAKCQkJCQkJYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdID0gMDsgICAgICAgIAoJCQkJCX0JCQkJCSsrYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdOyAgICAgICAgCgkJCQkJaWYgKCFhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdKSB7ICAgIAoJCQkJCQlhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdID0gMDsgICAgCgkJCQkJfSAgICAKCQkJCQkrK2FqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il07ICAgIAoJCQkJCWFqYXgoeyAgICAgICAgCgkJCSAgICAgICAgICAgIAl1cmw6ICdyZXN0L2Zvcm0vZ2V0X2lzX3Zpc2libGVfaW50ZXJhY3RpdmUnLCAgICAgICAgCgkJCQkJCWRhdGE6IHsgICAgICAgIAoJCQkJCQkJcGFyYW1ldGVyX25hbWU6J2VuZ2luZV90eXBlJywgICAgICAgIAoJCQkJCQkJZm9ybV9hcGk6ICdTUEFDRVNISVAnLCAgICAgICAgCgkJCQkJCQlwYXJhbWV0ZXJzOiAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9mYWN0b3J5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS52YWwoKSAKCSsgJzpwOicgKyAgT2JqZWN0LmtleXModXJpX3BhcmFtcykuZmlsdGVyKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gY3VycmVudFZhbHVlICE9ICIiOyAKCX0pLm1hcChmdW5jdGlvbiBjYWxsYmFjayhjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgeyAgCgkgICAgcmV0dXJuICd1cmlfJyArIGN1cnJlbnRWYWx1ZSArICI6aToiICArIHVyaV9wYXJhbXNbY3VycmVudFZhbHVlXTsgCgl9KS5qb2luKCI6cDoiKSAKLCAgICAgICAgCgkJCQkJCQlybmQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSwgICAgICAgIAoJCQkJCQl9LCAgICAgICAKCQkJCSAgICAgICAgICAgIHR5cGU6ICdwb3N0JywgICAgICAgIAoJCQkJICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgICAgICAgIAoJCQkJICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgCgkJCQkJCX0sIGZ1bmN0aW9uIChkYXRhKSB7ICAKCQkJCQkJCQlpZiAoZGF0YS52YWx1ZSkgeyAgICAgICAgCgkJCQkJCQkJCWlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgIWRvY3VtZW50LmFsbCkgfHwgd2luZG93Lm9wZXJhKSAgICAgICAgCgkJCQkJCQkJCQkkKCcjdHJfZW5naW5lX3R5cGU8TlVNQkVSPicpLmNzcygiZGlzcGxheSIsJ3RhYmxlLXJvdycpOyAgICAgICAgCgkJCQkJCQkJCWVsc2UgICAgICAgIAoJCQkJCQkJCQkJJCgnI3RyX2VuZ2luZV90eXBlPE5VTUJFUj4nKS5jc3MoImRpc3BsYXkiLCdpbmxpbmUnKTsgICAgICAgIAoJCQkJCQkJCQkJJCgnI2VuZ2luZV90eXBlPE5VTUJFUj4nKS5hdHRyKCdpbnZpc2libGUnLCBmYWxzZSk7ICAgICAgICAKCQkJCQkJCQl9IGVsc2UgeyAgICAgICAgCgkJCQkJCQkJCSQoJyN0cl9lbmdpbmVfdHlwZTxOVU1CRVI+JykuY3NzKCJkaXNwbGF5IiwgJ25vbmUnKTsgICAgICAgIAoJCQkJCQkJCQkkKCcjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+JykudmFsKCcnKS5jaGFuZ2UoKTsgICAgICAgIAoJCQkJCQkJCQkkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScsIHRydWUpOyAgICAgICAgCgkJCQkJCQkJfSAgICAgICAgCgkJCQkJCQkkKCcjdHJfZW5naW5lX3R5cGU8TlVNQkVSPicpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgIAoJCQkJCQkJLS1hamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Il07ICAgCgkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudHJpZ2dlcigic2V0X2ZpbmRfcmVzdWx0Iik7ICAgICAgICAKCQkJCQkJCWlmIChhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Il0gPT0gMCkgeyAgICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ29uX3BhcnJlbnRfdW5ibG9ja2VkJyk7ICAKCQkJCQkJCQlpZiAoISQoIiN0cl9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IiApLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7ICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7ICAKCQkJCQkJCQl9ICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgICAgICAgIAoJCQkJCQkJCSQoIiNiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgCgkJCSAgICAgICAgICAgIAkJCQkkKCIjbWVzc2FnZV9ib3hfd2FpdF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgCgkJCQkJCQl9ICAgICAgICAKCQkJCQkJCS0tYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXTsgCgkJCQkJCQlpZiAoYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXSA9PSAwKSB7IAogICAgICAgICAgICAJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoICdvbl9jaGlsZF91bmJsb2NrZWQnKTsgCgkJCQkJCQl9IAoJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgIAoJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgIAoJCQkJCX0pOyAgICAgICAgCgkJCQl9ICAgICAgICAKICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLmNoYW5nZShmdW5jdGlvbigpewoJCW9uQ2hhbmdlc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF9saXN0KHRoaXMpOwogfSk7IAoJCQkJCWZ1bmN0aW9uIG9uQ2hhbmdlc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF9saXN0KHNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPkxpc3QpeyAgICAgICAgICAgICAKCQkJCQkJdmFyIHZhbHVlSlMgPSAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9mYWN0b3J5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS52YWwoKSAKCSsgJzpwOicgKyAgT2JqZWN0LmtleXModXJpX3BhcmFtcykuZmlsdGVyKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gY3VycmVudFZhbHVlICE9ICIiOyAKCX0pLm1hcChmdW5jdGlvbiBjYWxsYmFjayhjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgeyAgCgkgICAgcmV0dXJuICd1cmlfJyArIGN1cnJlbnRWYWx1ZSArICI6aToiICArIHVyaV9wYXJhbXNbY3VycmVudFZhbHVlXTsgCgl9KS5qb2luKCI6cDoiKSAKOyAgIAoJCQkJCQkkKCIjZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ2NsZWFuVmFsdWUnKTsgICAgICAgICAKCQkJCQkJaWYgKHZhbHVlSlMubWF0Y2goLzppOihub25lKT8oOnA6fCQpLykpeyByZXR1cm4gfTsgICAgICAgICAgICAgCgkJCQkJCXZhciB2YWx1ZSA9ICQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS52YWwoKTsgICAKCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLmVtcHR5KCk7ICAgICAgICAgICAgIAoJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgICAgCgkgICAgICAgICAgICAJCQkJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJaWYgKCFhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iXSkgeyAgICAgICAgICAgICAKCQkJCQkJCWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiJdID0gMDsgICAgICAgICAgICAgCgkJCQkJCX0gICAgICAgICAgICAgCgkJCQkJCSsrYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il07ICAgICAgICAgICAgCgkJCQkJCWlmICghYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXSkgeyAgICAgICAgCgkJCQkJCQlhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdID0gMDsgICAgICAgIAoJCQkJCQl9ICAgICAgICAKCQkJCQkJKythamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdOyAgICAgICAgCgkJCQkJCWFqYXgoeyAgICAgICAgICAKCQkJCQkgICAgICAgICAgICAJdXJsOiAncmVzdC9mb3JtL2dldF9saXN0X2ludGVyYWN0aXZlJywgICAgICAgICAgCgkJCQkJCQlkYXRhOiB7ICAgICAgICAgIAoJCQkJCQkJCXBhcmFtZXRlcl9uYW1lOidlbmdpbmVfdHlwZScsICAgICAgICAgIAoJCQkJCQkJCWZvcm1fYXBpOiAnU1BBQ0VTSElQJywgICAgICAgICAgCgkJCQkJCQkJcGFyYW1ldGVyczogdmFsdWVKUywgICAgICAgICAgCgkJCQkJCQkJcm5kOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCksICAgICAgICAgIAoJCQkJCQkJfSwgICAgICAgICAKCQkJCQkgICAgICAgICAgICAJdHlwZTogJ3Bvc3QnLCAgICAgICAgICAKCQkJCQkgICAgICAgICAgIAlkYXRhVHlwZTogJ2pzb24nLCAgICAgICAgICAKCQkJICAgICAgICAgICAgCQkJY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgICAKCQkJCQkJfSwgZnVuY3Rpb24gKGRhdGEpIHsgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLmVtcHR5KCk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJJC5lYWNoKGRhdGEuZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWwpIHsgICAKCQkJdmFyIHZpc2libGVfbmFtZSA9ICd2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4nICsgdmFsLmlkOyAgIAoJCQkkKCI8aW5wdXQvPiIsIHsgICAKCQkJCSd2YWx1ZSc6IHZhbC5pZCwgICAgCgkJCQknY2hlY2tlZCc6IHZhbC52YWx1ZSwgICAgCgkJCQkndHlwZSc6ICdyYWRpbycsICAgIAoJCQkJJ2lkJzogdmlzaWJsZV9uYW1lLCAgICAKCQkJCSduYW1lJzogJ3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPicsICAgIAoJCQl9KS5hcHBlbmRUbygiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpOyAgIAoJCQkkKCI8bGFiZWwvPiIsIHsgICAgCgkJCQlzdHlsZTogJ21hcmdpbjozcHg7JywgICAgCgkJCQlodG1sOiB2YWwubmFtZSwgICAgCgkJCQknZm9yJzogdmlzaWJsZV9uYW1lLCAgICAKCQkJfSkuYXBwZW5kVG8oIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKTsgIAoJCQkkKCcjJyArIHZpc2libGVfbmFtZSkuY2xpY2soIGZ1bmN0aW9uKGV2ZW50KXsgCgkJCQlvbkNoYW5nZVJlYWRPbmx5ZW5naW5lX3R5cGU8TlVNQkVSPihldmVudC5kZWxlZ2F0ZVRhcmdldCk7IAoJCQl9KTsgCgkJCSQoJyMnICsgdmlzaWJsZV9uYW1lKS5jaGFuZ2UoIGZ1bmN0aW9uKGV2ZW50KXsgCgkJCQlvbkNoYW5nZVJlYWRPbmx5ZW5naW5lX3R5cGU8TlVNQkVSPihldmVudC5kZWxlZ2F0ZVRhcmdldCk7IAoJCQl9KTsgCiAgICAgICAgICAgJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIgKyB2YWwuaWQpLnN0eWxlcih7fSk7IAoJCX0pOyAgIAoJCQkJICAKICAgCgkJCQkJCQkJdmFyIGVuZ2luZV90eXBlPE5VTUJFUj4gPSAkKCcjdHJfZW5naW5lX3R5cGU8TlVNQkVSPicpOyAgICAgICAgICAgICAKCQkJCQkJCQlpZiAoZGF0YS5kYXRhICYmIGRhdGEuZGF0YS5sZW5ndGggPiAwKXsgICAgICAgICAgICAgCgkJCQkJCQkJCWlmICgiIil7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJZW5naW5lX3R5cGU8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCAnbm9uZScpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCSQoJyN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4nKS52YWwoJycpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCSQoJyNlbmdpbmVfdHlwZTxOVU1CRVI+JykudmFsKCcnKTsgICAgICAgICAgICAgCgkJCQkJCQkJCQkkKCcjaXNfZW1wdHlfZW5naW5lX3R5cGU8TlVNQkVSPicpLnZhbCgxKTsgICAgICAgICAgICAgCgkJCQkJCQkJCX1lbHNleyAgICAgICAgICAgICAKCQkJCQkJCQkJCWlmICgkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScpID09ICdmYWxzZScpIHsgICAgICAgICAgICAgCgkJCQkJCQkJCQkJaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiAhZG9jdW1lbnQuYWxsKSB8fCB3aW5kb3cub3BlcmEpICAgICAgICAgICAgIAoJCQkJCQkJCQkJCQllbmdpbmVfdHlwZTxOVU1CRVI+LmNzcygiZGlzcGxheSIsJ3RhYmxlLXJvdycpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCQllbHNlICAgICAgICAgICAgIAoJCQkJCQkJCQkJCQllbmdpbmVfdHlwZTxOVU1CRVI+LmNzcygiZGlzcGxheSIsJ2lubGluZScpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCQkJfSAgICAgICAgICAgICAKCQkJCQkJCQl9ZWxzZXsgICAgICAgICAgICAgCgkJCQkJCQkJCWlmICgkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScpID09ICdmYWxzZScpIHsgICAgICAgICAgICAgCgkJCQkJCQkJCQlpZiAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmICFkb2N1bWVudC5hbGwpIHx8IHdpbmRvdy5vcGVyYSkgICAgICAgICAgICAgCgkJCQkJCQkJCQkJZW5naW5lX3R5cGU8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCd0YWJsZS1yb3cnKTsgICAgICAgICAgICAgCgkJCQkJCQkJCQllbHNlICAgICAgICAgICAgIAoJCQkJCQkJCQkJCWVuZ2luZV90eXBlPE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwnaW5saW5lJyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCX0gICAgICAgICAgICAgCgkJCQkJCQkJLS1hamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4iXTsgICAgICAgICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3NldF9maW5kX3Jlc3VsdCcpOyAgICAgICAgICAgICAKCQkJCQkJCQlpZiAoYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+Il0gPT0gMCkgeyAgICAgICAgICAgICAKCQkJCQkJCQkJaWYgKCEkKCIjdHJfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IiApLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7ICAgICAgIAoJCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgICAgICAgCgkJCQkJCQkJCX0gICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9nYWxheHk8TlVNQkVSPiIpLnRyaWdnZXIoJ29uX3BhcnJlbnRfdW5ibG9ja2VkJyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkkKCIjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgICAKCQkJCSAgICAgIAkgICAgICAJCQkJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgICAKCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCS0tYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXTsgICAgICAKCQkJCQkJCQlpZiAoYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXSA9PSAwKSB7ICAgICAgCgkJCQkgICAgICAgICAgICAJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoICdvbl9jaGlsZF91bmJsb2NrZWQnKTsgICAgICAKCQkJCQkJCQl9ICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJCQlpZiAodmFsdWUpIHsgICAgIAoJCQkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudmFsKHZhbHVlKS5jaGFuZ2UoKTsgICAgIAoJCQkJCQkJCX0gICAgIAoJCQkJCQkJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS50cmlnZ2VyKCdzZXRWYWx1ZScpOyAKCQkJCQkJfSk7ICAgICAgICAgICAgCgkJCQkJfSAgICAgICAgICAgICAKICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLmNoYW5nZShmdW5jdGlvbigpewoJCW9uQ2hhbmdlc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF9saXN0KHRoaXMpOwogfSk7IAoJCQkJCWZ1bmN0aW9uIG9uQ2hhbmdlc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF9saXN0KHNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPkxpc3QpeyAgICAgICAgICAgICAKCQkJCQkJdmFyIHZhbHVlSlMgPSAnc3BhY2VzaGlwX2dhbGF4eScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZ2FsYXh5PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfcGxhbmV0JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPicpLnZhbCgpKyAnOnA6JyArJ3NwYWNlc2hpcF9mYWN0b3J5JyArICc6aTonICsgJCgnI3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4nKS52YWwoKSAKCSsgJzpwOicgKyAgT2JqZWN0LmtleXModXJpX3BhcmFtcykuZmlsdGVyKGZ1bmN0aW9uIGNhbGxiYWNrKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7ICAKCSAgICByZXR1cm4gY3VycmVudFZhbHVlICE9ICIiOyAKCX0pLm1hcChmdW5jdGlvbiBjYWxsYmFjayhjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgeyAgCgkgICAgcmV0dXJuICd1cmlfJyArIGN1cnJlbnRWYWx1ZSArICI6aToiICArIHVyaV9wYXJhbXNbY3VycmVudFZhbHVlXTsgCgl9KS5qb2luKCI6cDoiKSAKOyAgIAoJCQkJCQkkKCIjZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ2NsZWFuVmFsdWUnKTsgICAgICAgICAKCQkJCQkJaWYgKHZhbHVlSlMubWF0Y2goLzppOihub25lKT8oOnA6fCQpLykpeyByZXR1cm4gfTsgICAgICAgICAgICAgCgkJCQkJCXZhciB2YWx1ZSA9ICQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS52YWwoKTsgICAKCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLmVtcHR5KCk7ICAgICAgICAgICAgIAoJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnNob3coKTsgICAgICAgICAgICAgCgkgICAgICAgICAgICAJCQkJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuYXR0cigiZGlzYWJsZWQiLCJkaXNhYmxlZCIpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJaWYgKCFhamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iXSkgeyAgICAgICAgICAgICAKCQkJCQkJCWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiJdID0gMDsgICAgICAgICAgICAgCgkJCQkJCX0gICAgICAgICAgICAgCgkJCQkJCSsrYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il07ICAgICAgICAgICAgCgkJCQkJCWlmICghYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXSkgeyAgICAgICAgCgkJCQkJCQlhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdID0gMDsgICAgICAgIAoJCQkJCQl9ICAgICAgICAKCQkJCQkJKythamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdOyAgICAgICAgCgkJCQkJCWFqYXgoeyAgICAgICAgICAKCQkJCQkgICAgICAgICAgICAJdXJsOiAncmVzdC9mb3JtL2dldF9saXN0X2ludGVyYWN0aXZlJywgICAgICAgICAgCgkJCQkJCQlkYXRhOiB7ICAgICAgICAgIAoJCQkJCQkJCXBhcmFtZXRlcl9uYW1lOidlbmdpbmVfdHlwZScsICAgICAgICAgIAoJCQkJCQkJCWZvcm1fYXBpOiAnU1BBQ0VTSElQJywgICAgICAgICAgCgkJCQkJCQkJcGFyYW1ldGVyczogdmFsdWVKUywgICAgICAgICAgCgkJCQkJCQkJcm5kOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCksICAgICAgICAgIAoJCQkJCQkJfSwgICAgICAgICAKCQkJCQkgICAgICAgICAgICAJdHlwZTogJ3Bvc3QnLCAgICAgICAgICAKCQkJCQkgICAgICAgICAgIAlkYXRhVHlwZTogJ2pzb24nLCAgICAgICAgICAKCQkJICAgICAgICAgICAgCQkJY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCAgICAgICAgICAKCQkJCQkJfSwgZnVuY3Rpb24gKGRhdGEpIHsgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLmVtcHR5KCk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJJC5lYWNoKGRhdGEuZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWwpIHsgICAKCQkJdmFyIHZpc2libGVfbmFtZSA9ICd2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4nICsgdmFsLmlkOyAgIAoJCQkkKCI8aW5wdXQvPiIsIHsgICAKCQkJCSd2YWx1ZSc6IHZhbC5pZCwgICAgCgkJCQknY2hlY2tlZCc6IHZhbC52YWx1ZSwgICAgCgkJCQkndHlwZSc6ICdyYWRpbycsICAgIAoJCQkJJ2lkJzogdmlzaWJsZV9uYW1lLCAgICAKCQkJCSduYW1lJzogJ3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPicsICAgIAoJCQl9KS5hcHBlbmRUbygiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpOyAgIAoJCQkkKCI8bGFiZWwvPiIsIHsgICAgCgkJCQlzdHlsZTogJ21hcmdpbjozcHg7JywgICAgCgkJCQlodG1sOiB2YWwubmFtZSwgICAgCgkJCQknZm9yJzogdmlzaWJsZV9uYW1lLCAgICAKCQkJfSkuYXBwZW5kVG8oIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKTsgIAoJCQkkKCcjJyArIHZpc2libGVfbmFtZSkuY2xpY2soIGZ1bmN0aW9uKGV2ZW50KXsgCgkJCQlvbkNoYW5nZVJlYWRPbmx5ZW5naW5lX3R5cGU8TlVNQkVSPihldmVudC5kZWxlZ2F0ZVRhcmdldCk7IAoJCQl9KTsgCgkJCSQoJyMnICsgdmlzaWJsZV9uYW1lKS5jaGFuZ2UoIGZ1bmN0aW9uKGV2ZW50KXsgCgkJCQlvbkNoYW5nZVJlYWRPbmx5ZW5naW5lX3R5cGU8TlVNQkVSPihldmVudC5kZWxlZ2F0ZVRhcmdldCk7IAoJCQl9KTsgCiAgICAgICAgICAgJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIgKyB2YWwuaWQpLnN0eWxlcih7fSk7IAoJCX0pOyAgIAoJCQkJICAKICAgCgkJCQkJCQkJdmFyIGVuZ2luZV90eXBlPE5VTUJFUj4gPSAkKCcjdHJfZW5naW5lX3R5cGU8TlVNQkVSPicpOyAgICAgICAgICAgICAKCQkJCQkJCQlpZiAoZGF0YS5kYXRhICYmIGRhdGEuZGF0YS5sZW5ndGggPiAwKXsgICAgICAgICAgICAgCgkJCQkJCQkJCWlmICgiIil7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJZW5naW5lX3R5cGU8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCAnbm9uZScpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCSQoJyN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4nKS52YWwoJycpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCSQoJyNlbmdpbmVfdHlwZTxOVU1CRVI+JykudmFsKCcnKTsgICAgICAgICAgICAgCgkJCQkJCQkJCQkkKCcjaXNfZW1wdHlfZW5naW5lX3R5cGU8TlVNQkVSPicpLnZhbCgxKTsgICAgICAgICAgICAgCgkJCQkJCQkJCX1lbHNleyAgICAgICAgICAgICAKCQkJCQkJCQkJCWlmICgkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScpID09ICdmYWxzZScpIHsgICAgICAgICAgICAgCgkJCQkJCQkJCQkJaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiAhZG9jdW1lbnQuYWxsKSB8fCB3aW5kb3cub3BlcmEpICAgICAgICAgICAgIAoJCQkJCQkJCQkJCQllbmdpbmVfdHlwZTxOVU1CRVI+LmNzcygiZGlzcGxheSIsJ3RhYmxlLXJvdycpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCQllbHNlICAgICAgICAgICAgIAoJCQkJCQkJCQkJCQllbmdpbmVfdHlwZTxOVU1CRVI+LmNzcygiZGlzcGxheSIsJ2lubGluZScpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCQkJfSAgICAgICAgICAgICAKCQkJCQkJCQl9ZWxzZXsgICAgICAgICAgICAgCgkJCQkJCQkJCWlmICgkKCcjZW5naW5lX3R5cGU8TlVNQkVSPicpLmF0dHIoJ2ludmlzaWJsZScpID09ICdmYWxzZScpIHsgICAgICAgICAgICAgCgkJCQkJCQkJCQlpZiAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmICFkb2N1bWVudC5hbGwpIHx8IHdpbmRvdy5vcGVyYSkgICAgICAgICAgICAgCgkJCQkJCQkJCQkJZW5naW5lX3R5cGU8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCd0YWJsZS1yb3cnKTsgICAgICAgICAgICAgCgkJCQkJCQkJCQllbHNlICAgICAgICAgICAgIAoJCQkJCQkJCQkJCWVuZ2luZV90eXBlPE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwnaW5saW5lJyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCX0gICAgICAgICAgICAgCgkJCQkJCQkJLS1hamF4X2lzX3BhcnJlbnRfYmxvY2tlZDxOVU1CRVI+WyJzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4iXTsgICAgICAgICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3NldF9maW5kX3Jlc3VsdCcpOyAgICAgICAgICAgICAKCQkJCQkJCQlpZiAoYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+Il0gPT0gMCkgeyAgICAgICAgICAgICAKCQkJCQkJCQkJaWYgKCEkKCIjdHJfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IiApLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7ICAgICAgIAoJCQkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgICAgICAgCgkJCQkJCQkJCX0gICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9wbGFuZXQ8TlVNQkVSPiIpLnRyaWdnZXIoJ29uX3BhcnJlbnRfdW5ibG9ja2VkJyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkkKCIjYmFja2dyb3VuZF9vdmVybGF5X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgICAKCQkJCSAgICAgIAkgICAgICAJCQkJJCgiI21lc3NhZ2VfYm94X3dhaXRfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgICAKCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCS0tYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXTsgICAgICAKCQkJCQkJCQlpZiAoYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXSA9PSAwKSB7ICAgICAgCgkJCQkgICAgICAgICAgICAJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoICdvbl9jaGlsZF91bmJsb2NrZWQnKTsgICAgICAKCQkJCQkJCQl9ICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX3BsYW5ldDxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudHJpZ2dlcigncmVmcmVzaCcpOyAgICAgICAgICAgICAKCQkJCQkJCQlpZiAodmFsdWUpIHsgICAgIAoJCQkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudmFsKHZhbHVlKS5jaGFuZ2UoKTsgICAgIAoJCQkJCQkJCX0gICAgIAoJCQkJCQkJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS50cmlnZ2VyKCdzZXRWYWx1ZScpOyAKCQkJCQkJfSk7ICAgICAgICAgICAgCgkJCQkJfSAgICAgICAgICAgICAKICQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5jaGFuZ2UoZnVuY3Rpb24oKXsKCQlvbkNoYW5nZXNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5fZW5naW5lX3R5cGU8TlVNQkVSPl9jdF9hamF4X2xpc3QodGhpcyk7CiB9KTsgCgkJCQkJZnVuY3Rpb24gb25DaGFuZ2VzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+X2VuZ2luZV90eXBlPE5VTUJFUj5fY3RfYWpheF9saXN0KHNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj5MaXN0KXsgICAgICAgICAgICAgCgkJCQkJCXZhciB2YWx1ZUpTID0gJ3NwYWNlc2hpcF9nYWxheHknICsgJzppOicgKyAkKCcjc3BhY2VzaGlwX2dhbGF4eTxOVU1CRVI+JykudmFsKCkrICc6cDonICsnc3BhY2VzaGlwX3BsYW5ldCcgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfcGxhbmV0PE5VTUJFUj4nKS52YWwoKSsgJzpwOicgKydzcGFjZXNoaXBfZmFjdG9yeScgKyAnOmk6JyArICQoJyNzcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+JykudmFsKCkgCgkrICc6cDonICsgIE9iamVjdC5rZXlzKHVyaV9wYXJhbXMpLmZpbHRlcihmdW5jdGlvbiBjYWxsYmFjayhjdXJyZW50VmFsdWUsIGluZGV4LCBhcnJheSkgeyAgCgkgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZSAhPSAiIjsgCgl9KS5tYXAoZnVuY3Rpb24gY2FsbGJhY2soY3VycmVudFZhbHVlLCBpbmRleCwgYXJyYXkpIHsgIAoJICAgIHJldHVybiAndXJpXycgKyBjdXJyZW50VmFsdWUgKyAiOmk6IiAgKyB1cmlfcGFyYW1zW2N1cnJlbnRWYWx1ZV07IAoJfSkuam9pbigiOnA6IikgCjsgICAKCQkJCQkJJCgiI2VuZ2luZV90eXBlPE5VTUJFUj4iKS50cmlnZ2VyKCdjbGVhblZhbHVlJyk7ICAgICAgICAgCgkJCQkJCWlmICh2YWx1ZUpTLm1hdGNoKC86aToobm9uZSk/KDpwOnwkKS8pKXsgcmV0dXJuIH07ICAgICAgICAgICAgIAoJCQkJCQl2YXIgdmFsdWUgPSAkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudmFsKCk7ICAgCgkJCQkJCSQoIiN2aXNpYmxlX2VuZ2luZV90eXBlPE5VTUJFUj4iKS5lbXB0eSgpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgICAgICAgCgkJCQkJCSQoIiNiYWNrZ3JvdW5kX292ZXJsYXlfd2FpdF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgICAgICAKCSAgICAgICAgICAgIAkJCQkkKCIjbWVzc2FnZV9ib3hfd2FpdF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+Iikuc2hvdygpOyAgICAgICAgICAgICAKCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLmF0dHIoImRpc2FibGVkIiwiZGlzYWJsZWQiKTsgICAgICAgICAgICAgCgkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdyZWZyZXNoJyk7ICAgICAgICAgICAgIAoJCQkJCQlpZiAoIWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSkgeyAgICAgICAgICAgICAKCQkJCQkJCWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXSA9IDA7ICAgICAgICAgICAgIAoJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkrK2FqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXTsgICAgICAgICAgICAKCQkJCQkJaWYgKCFhamF4X2lzX2NoaWxkX2Jsb2NrZWQ8TlVNQkVSPlsiZW5naW5lX3R5cGU8TlVNQkVSPiJdKSB7ICAgICAgICAKCQkJCQkJCWFqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il0gPSAwOyAgICAgICAgCgkJCQkJCX0gICAgICAgIAoJCQkJCQkrK2FqYXhfaXNfY2hpbGRfYmxvY2tlZDxOVU1CRVI+WyJlbmdpbmVfdHlwZTxOVU1CRVI+Il07ICAgICAgICAKCQkJCQkJYWpheCh7ICAgICAgICAgIAoJCQkJCSAgICAgICAgICAgIAl1cmw6ICdyZXN0L2Zvcm0vZ2V0X2xpc3RfaW50ZXJhY3RpdmUnLCAgICAgICAgICAKCQkJCQkJCWRhdGE6IHsgICAgICAgICAgCgkJCQkJCQkJcGFyYW1ldGVyX25hbWU6J2VuZ2luZV90eXBlJywgICAgICAgICAgCgkJCQkJCQkJZm9ybV9hcGk6ICdTUEFDRVNISVAnLCAgICAgICAgICAKCQkJCQkJCQlwYXJhbWV0ZXJzOiB2YWx1ZUpTLCAgICAgICAgICAKCQkJCQkJCQlybmQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSwgICAgICAgICAgCgkJCQkJCQl9LCAgICAgICAgIAoJCQkJCSAgICAgICAgICAgIAl0eXBlOiAncG9zdCcsICAgICAgICAgIAoJCQkJCSAgICAgICAgICAgCWRhdGFUeXBlOiAnanNvbicsICAgICAgICAgIAoJCQkgICAgICAgICAgICAJCQljb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsICAgICAgICAgIAoJCQkJCQl9LCBmdW5jdGlvbiAoZGF0YSkgeyAgICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikuZW1wdHkoKTsgICAgICAgICAgICAgCgkJCQkJCQkJCQkkLmVhY2goZGF0YS5kYXRhLCBmdW5jdGlvbihrZXksIHZhbCkgeyAgIAoJCQl2YXIgdmlzaWJsZV9uYW1lID0gJ3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPicgKyB2YWwuaWQ7ICAgCgkJCSQoIjxpbnB1dC8+IiwgeyAgIAoJCQkJJ3ZhbHVlJzogdmFsLmlkLCAgICAKCQkJCSdjaGVja2VkJzogdmFsLnZhbHVlLCAgICAKCQkJCSd0eXBlJzogJ3JhZGlvJywgICAgCgkJCQknaWQnOiB2aXNpYmxlX25hbWUsICAgIAoJCQkJJ25hbWUnOiAndmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+JywgICAgCgkJCX0pLmFwcGVuZFRvKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+Iik7ICAgCgkJCSQoIjxsYWJlbC8+IiwgeyAgICAKCQkJCXN0eWxlOiAnbWFyZ2luOjNweDsnLCAgICAKCQkJCWh0bWw6IHZhbC5uYW1lLCAgICAKCQkJCSdmb3InOiB2aXNpYmxlX25hbWUsICAgIAoJCQl9KS5hcHBlbmRUbygiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpOyAgCgkJCSQoJyMnICsgdmlzaWJsZV9uYW1lKS5jbGljayggZnVuY3Rpb24oZXZlbnQpeyAKCQkJCW9uQ2hhbmdlUmVhZE9ubHllbmdpbmVfdHlwZTxOVU1CRVI+KGV2ZW50LmRlbGVnYXRlVGFyZ2V0KTsgCgkJCX0pOyAKCQkJJCgnIycgKyB2aXNpYmxlX25hbWUpLmNoYW5nZSggZnVuY3Rpb24oZXZlbnQpeyAKCQkJCW9uQ2hhbmdlUmVhZE9ubHllbmdpbmVfdHlwZTxOVU1CRVI+KGV2ZW50LmRlbGVnYXRlVGFyZ2V0KTsgCgkJCX0pOyAKICAgICAgICAgICAkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IiArIHZhbC5pZCkuc3R5bGVyKHt9KTsgCgkJfSk7ICAgCgkJCQkgIAogICAKCQkJCQkJCQl2YXIgZW5naW5lX3R5cGU8TlVNQkVSPiA9ICQoJyN0cl9lbmdpbmVfdHlwZTxOVU1CRVI+Jyk7ICAgICAgICAgICAgIAoJCQkJCQkJCWlmIChkYXRhLmRhdGEgJiYgZGF0YS5kYXRhLmxlbmd0aCA+IDApeyAgICAgICAgICAgICAKCQkJCQkJCQkJaWYgKCIiKXsgICAgICAgICAgICAgCgkJCQkJCQkJCQllbmdpbmVfdHlwZTxOVU1CRVI+LmNzcygiZGlzcGxheSIsICdub25lJyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJJCgnI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPicpLnZhbCgnJyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJJCgnI2VuZ2luZV90eXBlPE5VTUJFUj4nKS52YWwoJycpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCSQoJyNpc19lbXB0eV9lbmdpbmVfdHlwZTxOVU1CRVI+JykudmFsKDEpOyAgICAgICAgICAgICAKCQkJCQkJCQkJfWVsc2V7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJaWYgKCQoJyNlbmdpbmVfdHlwZTxOVU1CRVI+JykuYXR0cignaW52aXNpYmxlJykgPT0gJ2ZhbHNlJykgeyAgICAgICAgICAgICAKCQkJCQkJCQkJCQlpZiAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmICFkb2N1bWVudC5hbGwpIHx8IHdpbmRvdy5vcGVyYSkgICAgICAgICAgICAgCgkJCQkJCQkJCQkJCWVuZ2luZV90eXBlPE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwndGFibGUtcm93Jyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJCWVsc2UgICAgICAgICAgICAgCgkJCQkJCQkJCQkJCWVuZ2luZV90eXBlPE5VTUJFUj4uY3NzKCJkaXNwbGF5IiwnaW5saW5lJyk7ICAgICAgICAgICAgIAoJCQkJCQkJCQkJCX0gICAgICAgICAgICAgCgkJCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCX1lbHNleyAgICAgICAgICAgICAKCQkJCQkJCQkJaWYgKCQoJyNlbmdpbmVfdHlwZTxOVU1CRVI+JykuYXR0cignaW52aXNpYmxlJykgPT0gJ2ZhbHNlJykgeyAgICAgICAgICAgICAKCQkJCQkJCQkJCWlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgIWRvY3VtZW50LmFsbCkgfHwgd2luZG93Lm9wZXJhKSAgICAgICAgICAgICAKCQkJCQkJCQkJCQllbmdpbmVfdHlwZTxOVU1CRVI+LmNzcygiZGlzcGxheSIsJ3RhYmxlLXJvdycpOyAgICAgICAgICAgICAKCQkJCQkJCQkJCWVsc2UgICAgICAgICAgICAgCgkJCQkJCQkJCQkJZW5naW5lX3R5cGU8TlVNQkVSPi5jc3MoImRpc3BsYXkiLCdpbmxpbmUnKTsgICAgICAgICAgICAgCgkJCQkJCQkJCX0gICAgICAgICAgICAgCgkJCQkJCQkJfSAgICAgICAgICAgICAKCQkJCQkJCQktLWFqYXhfaXNfcGFycmVudF9ibG9ja2VkPE5VTUJFUj5bInNwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iXTsgICAgICAgICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3NldF9maW5kX3Jlc3VsdCcpOyAgICAgICAgICAgICAKCQkJCQkJCQlpZiAoYWpheF9pc19wYXJyZW50X2Jsb2NrZWQ8TlVNQkVSPlsic3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiJdID09IDApIHsgICAgICAgICAgICAgCgkJCQkJCQkJCWlmICghJCgiI3RyX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iICkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHsgICAgICAgCgkJCQkJCQkJCQkkKCIjdmlzaWJsZV9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikucmVtb3ZlQXR0cignZGlzYWJsZWQnKTsgICAgICAgCgkJCQkJCQkJCX0gICAgICAgCgkJCQkJCQkJCSQoIiN2aXNpYmxlX3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS50cmlnZ2VyKCdvbl9wYXJyZW50X3VuYmxvY2tlZCcpOyAgICAgICAgICAgICAKCQkJCQkJCQkJJCgiI2JhY2tncm91bmRfb3ZlcmxheV93YWl0X3NwYWNlc2hpcF9mYWN0b3J5PE5VTUJFUj4iKS5oaWRlKCk7ICAgICAgICAgICAgIAoJCQkJICAgICAgCSAgICAgIAkJCQkkKCIjbWVzc2FnZV9ib3hfd2FpdF9zcGFjZXNoaXBfZmFjdG9yeTxOVU1CRVI+IikuaGlkZSgpOyAgICAgICAgICAgICAKCQkJCQkJCQl9ICAgICAgICAgICAgIAoJCQkJCQkJCS0tYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXTsgICAgICAKCQkJCQkJCQlpZiAoYWpheF9pc19jaGlsZF9ibG9ja2VkPE5VTUJFUj5bImVuZ2luZV90eXBlPE5VTUJFUj4iXSA9PSAwKSB7ICAgICAgCgkJCQkgICAgICAgICAgICAJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoICdvbl9jaGlsZF91bmJsb2NrZWQnKTsgICAgICAKCQkJCQkJCQl9ICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfc3BhY2VzaGlwX2ZhY3Rvcnk8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgICAgICAgCgkJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnRyaWdnZXIoJ3JlZnJlc2gnKTsgICAgICAgICAgICAgCgkJCQkJCQkJaWYgKHZhbHVlKSB7ICAgICAKCQkJCQkJCQkJJCgiI3Zpc2libGVfZW5naW5lX3R5cGU8TlVNQkVSPiIpLnZhbCh2YWx1ZSkuY2hhbmdlKCk7ICAgICAKCQkJCQkJCQl9ICAgICAKCQkJCQkJCQkkKCIjdmlzaWJsZV9lbmdpbmVfdHlwZTxOVU1CRVI+IikudHJpZ2dlcignc2V0VmFsdWUnKTsgCgkJCQkJCX0pOyAgICAgICAgICAgIAoJCQkJCX0gICAgICAgICAgICAgCiAKCSQoIiNidXR0b25fZGVsXzxOVU1CRVI+IikuY2xpY2soZnVuY3Rpb24oKXsgIAoJCSQoJyNhY3Rpb248TlVNQkVSPicpLnZhbCgnZGVsZXRlJyk7IAoJCSQoIiNmaWxkc2V0XzxOVU1CRVI+IikucmVtb3ZlKCk7ICAKCQkJJCgiPGlucHV0Lz4iLCB7ICAgIAoJCQkJJ3ZhbHVlJzogJ1NQQUNFU0hJUCcsICAgICAKCQkJCSd0eXBlJzogJ2hpZGRlbicsICAgICAKCQkJCSdpZCc6ICdhcGlfZ3JvdXBfaWQ8TlVNQkVSPicsICAgICAKCQkJCSduYW1lJzogJ2FwaV9ncm91cF9pZDxOVU1CRVI+JywgICAgIAoJCQl9KS5hcHBlbmRUbyggIiNwbGFjZV9fZ19TUEFDRVNISVAiICk7IAoJCQkkKCI8aW5wdXQvPiIsIHsgICAgCgkJCQkndmFsdWUnOiAnQUJPVVRfTUUnLCAgICAgCgkJCQkndHlwZSc6ICdoaWRkZW4nLCAgICAgCgkJCQknaWQnOiAncGFycmVudF9hcGlfZ3JvdXBfaWQ8TlVNQkVSPicsICAgICAKCQkJCSduYW1lJzogJ3BhcnJlbnRfYXBpX2dyb3VwX2lkPE5VTUJFUj4nLCAgICAgCgkJCX0pLmFwcGVuZFRvKCAiI3BsYWNlX19nX1NQQUNFU0hJUCIgKTsgCgkJY291bnRfX2dfU1BBQ0VTSElQLS07IAp9KTsgCg==';     
					var count__g_SPACESHIP = 0;     
					var number__g_SPACESHIP = 0;     
					var DMap = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 39: 39, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 47: 47, 48: 48, 49: 49, 50: 50, 51: 51, 52: 52, 53: 53, 54: 54, 55: 55, 56: 56, 57: 57, 58: 58, 59: 59, 60: 60, 61: 61, 62: 62, 63: 63, 64: 64, 65: 65, 66: 66, 67: 67, 68: 68, 69: 69, 70: 70, 71: 71, 72: 72, 73: 73, 74: 74, 75: 75, 76: 76, 77: 77, 78: 78, 79: 79, 80: 80, 81: 81, 82: 82, 83: 83, 84: 84, 85: 85, 86: 86, 87: 87, 88: 88, 89: 89, 90: 90, 91: 91, 92: 92, 93: 93, 94: 94, 95: 95, 96: 96, 97: 97, 98: 98, 99: 99, 100: 100, 101: 101, 102: 102, 103: 103, 104: 104, 105: 105, 106: 106, 107: 107, 108: 108, 109: 109, 110: 110, 111: 111, 112: 112, 113: 113, 114: 114, 115: 115, 116: 116, 117: 117, 118: 118, 119: 119, 120: 120, 121: 121, 122: 122, 123: 123, 124: 124, 125: 125, 126: 126, 127: 127, 1027: 129, 8225: 135, 1046: 198, 8222: 132, 1047: 199, 1168: 165, 1048: 200, 1113: 154, 1049: 201, 1045: 197, 1050: 202, 1028: 170, 160: 160, 1040: 192, 1051: 203, 164: 164, 166: 166, 167: 167, 169: 169, 171: 171, 172: 172, 173: 173, 174: 174, 1053: 205, 176: 176, 177: 177, 1114: 156, 181: 181, 182: 182, 183: 183, 8221: 148, 187: 187, 1029: 189, 1056: 208, 1057: 209, 1058: 210, 8364: 136, 1112: 188, 1115: 158, 1059: 211, 1060: 212, 1030: 178, 1061: 213, 1062: 214, 1063: 215, 1116: 157, 1064: 216, 1065: 217, 1031: 175, 1066: 218, 1067: 219, 1068: 220, 1069: 221, 1070: 222, 1032: 163, 8226: 149, 1071: 223, 1072: 224, 8482: 153, 1073: 225, 8240: 137, 1118: 162, 1074: 226, 1110: 179, 8230: 133, 1075: 227, 1033: 138, 1076: 228, 1077: 229, 8211: 150, 1078: 230, 1119: 159, 1079: 231, 1042: 194, 1080: 232, 1034: 140, 1025: 168, 1081: 233, 1082: 234, 8212: 151, 1083: 235, 1169: 180, 1084: 236, 1052: 204, 1085: 237, 1035: 142, 1086: 238, 1087: 239, 1088: 240, 1089: 241, 1090: 242, 1036: 141, 1041: 193, 1091: 243, 1092: 244, 8224: 134, 1093: 245, 8470: 185, 1094: 246, 1054: 206, 1095: 247, 1096: 248, 8249: 139, 1097: 249, 1098: 250, 1044: 196, 1099: 251, 1111: 191, 1055: 207, 1100: 252, 1038: 161, 8220: 147, 1101: 253, 8250: 155, 1102: 254, 8216: 145, 1103: 255, 1043: 195, 1105: 184, 1039: 143, 1026: 128, 1106: 144, 8218: 130, 1107: 131, 8217: 146, 1108: 186, 1109: 190}     
					var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decode:function(e){     
						var t="";     
						var n,r,i;     
						var s,o,u,a;     
						var f=0;     
						e=e.replace(/[^A-Za-z0-9+/=]/g,"");     
						while(f<e.length){     
							s=this._keyStr.indexOf(e.charAt(f++));     
							o=this._keyStr.indexOf(e.charAt(f++));     
							u=this._keyStr.indexOf(e.charAt(f++));     
							a=this._keyStr.indexOf(e.charAt(f++));     
							n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);     
							if(u!=64){     
								t=t+String.fromCharCode(r)     
							}     
							if(a!=64){     
								t=t+String.fromCharCode(i)     
							}     
						}     
						t=Base64._utf8_decode(t);     
						return t     
					},_utf8_decode:function(e){     
						var t="";     
						var n=0;     
						var r=c1=c2=0;     
						while(n<e.length){     
							r=e.charCodeAt(n);     
							if (r == 184){     
								t+=String.fromCharCode(1105);     
							} else if (r == 168){     
								t+=String.fromCharCode(1025);     
							} else if (r > 191 && r < 256){     
								t+=String.fromCharCode(r + 848);     
							} else {     
								t+=String.fromCharCode(r);     
							}     
							n++     
						}     
						return t     
					}}     
					$("#button_add__g_SPACESHIP").click(function(){   
						setTimeout(function( x ) {   
							add__g_SPACESHIP();   
						}, 100);  
					});   
					function add__g_SPACESHIP() {   
						var groupPrefix = "_g_SPACESHIP_" + number__g_SPACESHIP;  
						$("#background_overlay_wait__g_SPACESHIP").show();     
						$("#message_box_wait__g_SPACESHIP").show();     
						var template_tag = Base64.decode(tag__g_SPACESHIP).replace(/<NUMBER>/g, groupPrefix);     
						var template_script = Base64.decode(script__g_SPACESHIP).replace(/<NUMBER>/g, groupPrefix);     
						$("#place__g_SPACESHIP").append(template_tag);     
						if (jQuery.isFunction($("#place__g_SPACESHIP").find('input').styler)) {     
							$("#place__g_SPACESHIP").find('input').styler({});     
						}     
						eval(template_script);							   
						$( "#place__g_SPACESHIP" ).trigger( "add" );   
						$("<input/>", {    
							'type': 'hidden',     
							'id': 'group_id' + groupPrefix,     
							'name': 'group_id' + groupPrefix,     
						}).appendTo( "#place__g_SPACESHIP" ); 
						$("<input/>", {    
							'value': 'update',     
							'type': 'hidden',     
							'id': 'action' + groupPrefix,     
							'name': 'action' + groupPrefix,     
						}).appendTo( "#place__g_SPACESHIP" ); 
						$("#background_overlay_wait__g_SPACESHIP").hide();    
    	      					$("#message_box_wait__g_SPACESHIP").hide();    
						number__g_SPACESHIP++;     
						count__g_SPACESHIP++;     
						return groupPrefix;  
					}   
$("#submit_button").on("click",function(event){
	$("#api_action").val("save");
});				$( document ).ready(function() {                  
					$(":input").keypress(function (e) {                  
					      if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {                  
					          $("#submit_button:visible").click();                  
					          return false;                  
					      } else {                  
					          return true;                  
					      }                  
					});                  
					$("#submit_button").on("click", function(event){                 
						var field_values = [];   
						var globalIndex;   
						$('input[type="hidden"][name^="required_"], input[type="hidden"][name^="parrent_api_"], input[type="hidden"][name^="api_"]').each( function(index, element){                 
							field_values[index] = $( this ).attr('id') +':i:'+ $( this ).val();                 
							globalIndex = index;   
						});                 
						$('input[type="hidden"]').not('[name^="required_"], [name^="parrent_api_"], [name^="api_"]').each( function(index, element){                 
							field_values[globalIndex + index] = $( this ).attr('id') +':i:'+ $( this ).val();                 
						});                 
						$("#background_overlay_wait_form").show();                           
			            		$("#message_box_wait_form").show();                           
						$("[id^='visible_']").each(function(index, item){           
							$(this).parent().children('').removeClass("error");           
						});           
 						ajax({                        
					       	url: 'rest/form/set',                        
							data: {                        
								parameters: field_values.join(':p:') + ':p:' +  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
,                        
							},                       
						       type: 'post',                        
						       dataType: 'json',                        
				            		contentType: 'application/x-www-form-urlencoded',                        
						}, function (data) {           
								var hasErrors = false;               
								$("#error_list").empty();             
								if (data.errors.parametersErrors != null) {        
									Object.keys(data.errors.parametersErrors).map(function(name) { return {name: name, group: $('#' + name).closest('fieldset')}}).sort(function(a,b){return a.group.html() > b.group.html() ? 1 : -1}).forEach(function(obj) {      
										var name = obj.name;     
										var group = obj.group;     
										var errors = data.errors.parametersErrors[name];      
										$.each( errors, function(index, error) {               
											$("#visible_" + name).parent().children('').addClass("error");;               
											$("<li/>", {html: group.find("[id^='span']").not("[id^='span_control']").html() + ' - ' + $.trim($("[for='visible_" + name + "']").html()) + " " + error}).appendTo("#error_list");                
											hasErrors = true;          
										});            
									});            
								}            
								if (data.errors.formErrors != null) {            
									$.each( data.errors.formErrors, function(index, error) {               
										$("<li/>", {html: error}).appendTo("#error_list");                
										hasErrors = true;          
									});            
								}            
								if (hasErrors) {          
									$('#error').show();        
									$("#background_overlay_wait_form").hide();                
	    							$("#message_box_wait_form").hide();                
									window.scrollTo(0, 0);             
								} else {         
									$('#error').hide();        
									$('#showcase').trigger('set', [data]); 
									         
								}          
						});                          
					});                          
				});                
		var uri_params = window     
		    	.location     
		    	.search     
		    	.replace('?','')     
		    	.split('&')     
		    	.reduce(     
		    			function(p,e){     
		    				var a = e.split('=');     
		    				p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);     
		    				return p;     
		    			},     
		        {}     
		    );     
 		var formsWaitedToLoad = 0;     
		$( document ).ready(function() {     
				$("#background_overlay_wait_form").show();     
				$("#message_box_wait_form").show();     
				getJSON( "rest/seseion/" + "check", {no_cache: Math.floor(Math.random() * 10000)}, function( data ) {});  
				    
				formsWaitedToLoad++;                         
				ajax({            
			            	url: 'rest/form/get',            
					data: {            
						form_api: "ABOUT_ME", 
						parameters:  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
, 
						no_cache: Math.floor(Math.random() * 10000)            
					},           
			           	type: 'post',            
			        	dataType: 'json',            
		           		contentType: 'application/x-www-form-urlencoded',            
				}, function (data) { 
					load_form_data_ABOUT_ME(data, '');     
					formsWaitedToLoad--;                         
					if (formsWaitedToLoad === 0) {                         
						$("#background_overlay_wait_form").hide();                         
    						$("#message_box_wait_form").hide();                         
						$( document ).trigger('setListOnLoad');                       
					}					                         
					$('#form_id').trigger('ABOUT_ME_group_loaded');          
				});                       
				function load_form_data_ABOUT_ME(data, groupPrefix){     
					if (data.status_code === 1) {                         
						$.each(data.parameters, function(key, parameter) {                
							if (parameter.attributes.READONLY) {                         
				 				$('#visible_' + key + groupPrefix).prop( "disabled", true);                    
					 			$("#tr_" + key + groupPrefix).css('color', 'lightgray');                    
							};                   
							if (parameter.attributes.INVISIBLE) {                         
					 			$("#tr_" + key + groupPrefix).css('display', 'none');                    
							};                   
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).val(valueArray[0]);                         
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).trigger('setValueOnLoad',[{value:valueArray[0], name:(valueArray.length > 1 ? valueArray[1] : '')}]);                
						});                 
								var hasErrors = false;       
								if (data.errors.parametersErrors != null) {                
									Object.keys(data.errors.parametersErrors).map(function(name) { return {name: name, group: $('#' + name).closest('fieldset')}}).sort(function(a,b){return  a.group.html() > b.group.html() ? 1 : -1}).forEach(function(obj) {           
										var name = obj.name;          
										var group = obj.group;          
										var errors = data.errors.parametersErrors[name];           
										$.each( errors, function(index, error) {                    
											$("#visible_" + name + groupPrefix).parent().children('').addClass("error");                    
											$("<li/>", {html: group.find("[id^='span']").not("[id^='span_control']").html() + ' - ' + $.trim($("[for='visible_" + name + "']").html()) + " " + error}).appendTo("#error_list");                     
											hasErrors = true;               
										});                 
									});                 
								}                
								if (data.errors.formErrors != null) {                
									$.each( data.errors.formErrors, function(index, error) {                   
										$("<li/>", {html: error}).appendTo("#error_list");                    
										hasErrors = true;              
									});                
								}           
								if (hasErrors || $('#error:visible').length > 0) {        
									$('#error').show();        
								} else {        
									$('#error').hide();        
								}        
					}                 
					$.each(data.groups, function(key, parameters) {                         
							var currentGroupPrefix = add__g_ABOUT_ME(parameters);                         
							load_form_data_ABOUT_ME(parameters, currentGroupPrefix);  
					});                        
				}     
	$('#form_id').bind('ABOUT_ME_group_loaded', function(){ 
    
				formsWaitedToLoad++;                         
				ajax({            
			            	url: 'rest/form/get',            
					data: {            
						form_api: "ADDRESS", 
						parameters:  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
, 
						no_cache: Math.floor(Math.random() * 10000)            
					},           
			           	type: 'post',            
			        	dataType: 'json',            
		           		contentType: 'application/x-www-form-urlencoded',            
				}, function (data) { 
					load_form_data_ADDRESS(data, '');     
					formsWaitedToLoad--;                         
					if (formsWaitedToLoad === 0) {                         
						$("#background_overlay_wait_form").hide();                         
    						$("#message_box_wait_form").hide();                         
						$( document ).trigger('setListOnLoad');                       
					}					                         
					$('#form_id').trigger('ADDRESS_group_loaded');          
				});                       
				function load_form_data_ADDRESS(data, groupPrefix){     
					if (data.status_code === 1) {                         
						$.each(data.parameters, function(key, parameter) {                
							if (parameter.attributes.READONLY) {                         
				 				$('#visible_' + key + groupPrefix).prop( "disabled", true);                    
					 			$("#tr_" + key + groupPrefix).css('color', 'lightgray');                    
							};                   
							if (parameter.attributes.INVISIBLE) {                         
					 			$("#tr_" + key + groupPrefix).css('display', 'none');                    
							};                   
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).val(valueArray[0]);                         
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).trigger('setValueOnLoad',[{value:valueArray[0], name:(valueArray.length > 1 ? valueArray[1] : '')}]);                
						});                 
								var hasErrors = false;       
								if (data.errors.parametersErrors != null) {                
									Object.keys(data.errors.parametersErrors).map(function(name) { return {name: name, group: $('#' + name).closest('fieldset')}}).sort(function(a,b){return  a.group.html() > b.group.html() ? 1 : -1}).forEach(function(obj) {           
										var name = obj.name;          
										var group = obj.group;          
										var errors = data.errors.parametersErrors[name];           
										$.each( errors, function(index, error) {                    
											$("#visible_" + name + groupPrefix).parent().children('').addClass("error");                    
											$("<li/>", {html: group.find("[id^='span']").not("[id^='span_control']").html() + ' - ' + $.trim($("[for='visible_" + name + "']").html()) + " " + error}).appendTo("#error_list");                     
											hasErrors = true;               
										});                 
									});                 
								}                
								if (data.errors.formErrors != null) {                
									$.each( data.errors.formErrors, function(index, error) {                   
										$("<li/>", {html: error}).appendTo("#error_list");                    
										hasErrors = true;              
									});                
								}           
								if (hasErrors || $('#error:visible').length > 0) {        
									$('#error').show();        
								} else {        
									$('#error').hide();        
								}        
					}                 
					$.each(data.groups, function(key, parameters) {                         
							var currentGroupPrefix = add__g_ADDRESS(parameters);                         
							load_form_data_ADDRESS(parameters, currentGroupPrefix);  
					});                        
				}     
	}); 
	$('#form_id').bind('ABOUT_ME_group_loaded', function(){ 
    
				formsWaitedToLoad++;                         
				ajax({            
			            	url: 'rest/form/get',            
					data: {            
						form_api: "SPACESHIP", 
						parameters:  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
, 
						no_cache: Math.floor(Math.random() * 10000)            
					},           
			           	type: 'post',            
			        	dataType: 'json',            
		           		contentType: 'application/x-www-form-urlencoded',            
				}, function (data) { 
					load_form_data_SPACESHIP(data, '');     
					formsWaitedToLoad--;                         
					if (formsWaitedToLoad === 0) {                         
						$("#background_overlay_wait_form").hide();                         
    						$("#message_box_wait_form").hide();                         
						$( document ).trigger('setListOnLoad');                       
					}					                         
					$('#form_id').trigger('SPACESHIP_group_loaded');          
				});                       
				function load_form_data_SPACESHIP(data, groupPrefix){     
					if (data.status_code === 1) {                         
						$.each(data.parameters, function(key, parameter) {                
							if (parameter.attributes.READONLY) {                         
				 				$('#visible_' + key + groupPrefix).prop( "disabled", true);                    
					 			$("#tr_" + key + groupPrefix).css('color', 'lightgray');                    
							};                   
							if (parameter.attributes.INVISIBLE) {                         
					 			$("#tr_" + key + groupPrefix).css('display', 'none');                    
							};                   
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).val(valueArray[0]);                         
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).trigger('setValueOnLoad',[{value:valueArray[0], name:(valueArray.length > 1 ? valueArray[1] : '')}]);                
						});                 
								var hasErrors = false;       
								if (data.errors.parametersErrors != null) {                
									Object.keys(data.errors.parametersErrors).map(function(name) { return {name: name, group: $('#' + name).closest('fieldset')}}).sort(function(a,b){return  a.group.html() > b.group.html() ? 1 : -1}).forEach(function(obj) {           
										var name = obj.name;          
										var group = obj.group;          
										var errors = data.errors.parametersErrors[name];           
										$.each( errors, function(index, error) {                    
											$("#visible_" + name + groupPrefix).parent().children('').addClass("error");                    
											$("<li/>", {html: group.find("[id^='span']").not("[id^='span_control']").html() + ' - ' + $.trim($("[for='visible_" + name + "']").html()) + " " + error}).appendTo("#error_list");                     
											hasErrors = true;               
										});                 
									});                 
								}                
								if (data.errors.formErrors != null) {                
									$.each( data.errors.formErrors, function(index, error) {                   
										$("<li/>", {html: error}).appendTo("#error_list");                    
										hasErrors = true;              
									});                
								}           
								if (hasErrors || $('#error:visible').length > 0) {        
									$('#error').show();        
								} else {        
									$('#error').hide();        
								}        
					}                 
					$.each(data.groups, function(key, parameters) {                         
							var currentGroupPrefix = add__g_SPACESHIP(parameters);                         
							load_form_data_SPACESHIP(parameters, currentGroupPrefix);  
					});                        
				}     
	}); 
	$('#form_id').bind('ABOUT_ME_group_loaded', function(){ 
    
				formsWaitedToLoad++;                         
				ajax({            
			            	url: 'rest/form/get',            
					data: {            
						form_api: "MULTIPASS", 
						parameters:  
	 Object.keys(uri_params).filter(function callback(currentValue, index, array) {  
	    return currentValue != ""; 
	}).map(function callback(currentValue, index, array) {  
	    return 'uri_' + currentValue + ":i:"  + uri_params[currentValue]; 
	}).join(":p:") 
, 
						no_cache: Math.floor(Math.random() * 10000)            
					},           
			           	type: 'post',            
			        	dataType: 'json',            
		           		contentType: 'application/x-www-form-urlencoded',            
				}, function (data) { 
					load_form_data_MULTIPASS(data, '');     
					formsWaitedToLoad--;                         
					if (formsWaitedToLoad === 0) {                         
						$("#background_overlay_wait_form").hide();                         
    						$("#message_box_wait_form").hide();                         
						$( document ).trigger('setListOnLoad');                       
					}					                         
					$('#form_id').trigger('MULTIPASS_group_loaded');          
				});                       
				function load_form_data_MULTIPASS(data, groupPrefix){     
					if (data.status_code === 1) {                         
						$.each(data.parameters, function(key, parameter) {                
							if (parameter.attributes.READONLY) {                         
				 				$('#visible_' + key + groupPrefix).prop( "disabled", true);                    
					 			$("#tr_" + key + groupPrefix).css('color', 'lightgray');                    
							};                   
							if (parameter.attributes.INVISIBLE) {                         
					 			$("#tr_" + key + groupPrefix).css('display', 'none');                    
							};                   
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).val(valueArray[0]);                         
						});                        
						$.each(data.parameters, function(key, parameter) {                         
							var valueArray = parameter.value.split(':i:');                        
							$("#" + key + groupPrefix).trigger('setValueOnLoad',[{value:valueArray[0], name:(valueArray.length > 1 ? valueArray[1] : '')}]);                
						});                 
								var hasErrors = false;       
								if (data.errors.parametersErrors != null) {                
									Object.keys(data.errors.parametersErrors).map(function(name) { return {name: name, group: $('#' + name).closest('fieldset')}}).sort(function(a,b){return  a.group.html() > b.group.html() ? 1 : -1}).forEach(function(obj) {           
										var name = obj.name;          
										var group = obj.group;          
										var errors = data.errors.parametersErrors[name];           
										$.each( errors, function(index, error) {                    
											$("#visible_" + name + groupPrefix).parent().children('').addClass("error");                    
											$("<li/>", {html: group.find("[id^='span']").not("[id^='span_control']").html() + ' - ' + $.trim($("[for='visible_" + name + "']").html()) + " " + error}).appendTo("#error_list");                     
											hasErrors = true;               
										});                 
									});                 
								}                
								if (data.errors.formErrors != null) {                
									$.each( data.errors.formErrors, function(index, error) {                   
										$("<li/>", {html: error}).appendTo("#error_list");                    
										hasErrors = true;              
									});                
								}           
								if (hasErrors || $('#error:visible').length > 0) {        
									$('#error').show();        
								} else {        
									$('#error').hide();        
								}        
					}                 
					$.each(data.groups, function(key, parameters) {                         
							var currentGroupPrefix = add__g_MULTIPASS(parameters);                         
							load_form_data_MULTIPASS(parameters, currentGroupPrefix);  
					});                        
				}     
	}); 
		});    

