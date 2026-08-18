		var breedingApp=angular.module('breedingApp', ['ngRoute', 'breedingControllers', 'ngCookies', 'ngAnimate']);

		breedingApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl: 'breeding.html?d=20171020', controller: 'breedingController'
			}).
			otherwise({
				redirectTo: '/'
			});

		}]);

		breedingApp.filter('secondsToDateTime', function() {
    		return function(seconds) {
	        	var d = new Date(0,0,0,0,0,0,0);
	        	d.setSeconds(seconds);
	        	//return d;

	        	days=d.getDate();

	        	string=d.toTimeString().slice(0, 8);

	        	if (days!=31) {
	        		string=days+"d:"+string;
	        	}

	        	return string;
    		};
    	});

    	breedingApp.filter('percentage', function() {
    		return function(percentage) {
    			return (Math.ceil(percentage*1000)/10).toFixed(1);
    		};
    	});

   		breedingApp.directive("select", function() {
		    return {
		    	restrict: "E",
		    	require: "?ngModel",
		    	scope: false,
		    	link: function (scope, element, attrs, ngModel) {
			    	if (!ngModel) {
			        	return;
			        }
			        element.bind("keyup", function() {
			        	element.triggerHandler("change");
			        });
		    	}
			}
		});

		breedingApp.directive('autocomplete', ['$window', '$parse', function($window, $parse) {
			return {
				require: ['ngModel'],
				scope: {
					ngModel: '=',
					source: '=',
					default: '='
				},
				link: function(scope, element, attrs, ngModel) {
					element.autocomplete({
						source: function(req, response) {
							var data=Object.keys(scope.source);
							var re = $.ui.autocomplete.escapeRegex(req.term);
							var matcher = new RegExp( "^" + re, "i" );
							var matches=$.grep(data, function(item) {
								return matcher.test(item);
							});
							if (Object.keys(matches).length>0) {
								if (Object.keys(matches).length===1) {
									scope.default=matches[0];$(element).val(matches[0]);$(element).blur();element.trigger('change');
								} else {
									response(matches);
								}
							} else {
								var matcher = new RegExp( re, "i" );
								var matches=$.grep(data, function(item) {
									return matcher.test(item);
								});
								if (Object.keys(matches).length===1) {
									scope.default=matches[0];$(element).val(matches[0]);$(element).blur();element.trigger('change');
								} else {
									response(matches);
								}
							}
						},
						close: function(event, ui) {element.trigger('change');$(element).blur();},
						delay: 0,
						autoFocus: true,
						minLength: 0
					});
					element.bind("click", function() {
						scope.ngModel="";
						scope.$apply();
						element.autocomplete("search","");
					});
					element.bind("blur", function() {
						scope.ngModel=scope.default;
						scope.$apply();
					});
				}
			}
		}]);

		//Drag columns into a different order. Used by both the creature row and the trough
		//row, so the list and the drag handle come from attributes rather than being baked
		//in. jQuery UI is already loaded for the autocomplete, so this needs no new
		//dependency.
		//
		//sortable('cancel') runs before the model is touched: Angular owns this DOM through
		//ng-repeat, so letting both reorder it leaves the two disagreeing about which node
		//is which. Cancel the DOM move, reorder the array, let ng-repeat re-render from the
		//single source of truth.
		breedingApp.directive('sortablelist', function() {
			return {
				link: function(scope, element, attrs) {
					var from=null;
					//Index among real columns only. ui.item.index() counts the drag
					//placeholder as a sibling, which puts it out by one; the placeholder
					//carries its own class, so filtering to .panelcolumn skips it.
					function columnindex(item) {
						return item.parent().children('.panelcolumn').index(item);
					}
					jQuery(element).sortable({
						items: '> .panelcolumn',
						handle: attrs.sortablehandle,
						axis: 'x',
						tolerance: 'pointer',
						forcePlaceholderSize: true,
						placeholder: 'panelplaceholder',
						start: function(e, ui) {
							from=columnindex(ui.item);
						},
						update: function(e, ui) {
							var to=columnindex(ui.item);
							jQuery(this).sortable('cancel');
							if (from===null || to===from) {
								return;
							}
							scope.$apply(function() {
								var list=scope[attrs.sortablelist];
								list.splice(to, 0, list.splice(from, 1)[0]);
							});
							from=null;
						}
					});
				}
			}
		});

		breedingApp.directive('percentage', function() {
			return {
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {
					ngModel.$formatters.push(function(value) {
						return value*100;
					});

					ngModel.$parsers.push(function(value) {
						return value/100;
					});
				}
			}
		});

		breedingApp.animation('.tableslide', [function() {
			return {
				addClass: function(element, className, doneFn) {
					if (className==="ng-hide") {
						jQuery(element).animate({height: 0.1, opacity: 0}, 400).animate({width: 0}, 500, doneFn);
					} else {
						doneFn();
					}
				},

			    removeClass: function(element, className, doneFn) {
			    	if (className==="ng-hide") {
			    		var width=jQuery(element).prop('scrollWidth');
			    		var height=jQuery(element).prop('scrollHeight');
			    		jQuery(element).css('display', 'none');
			    		var parentwidth=jQuery(element).parent().prop('scrollWidth');
			    		width=Math.max(width, parentwidth);
			    		jQuery(element).css('display', 'block');
			    		jQuery(element).css('width', parentwidth);
			    		jQuery(element).css('height', '0');
			    		jQuery(element).animate({width: width}, 200).animate({height: height, opacity: 1}, {duration: 400, done: function() {
			    			jQuery(element).css('width', 'auto');
			    			jQuery(element).css('height', 'auto');
			    			jQuery(element).css('opacity', '1');
			    			doneFn();
			    		}});
				     } else {
						doneFn();
					}
			    }
			}
		}]);

		breedingApp.animation('.slide', [function() {
			return {
				addClass: function(element, className, doneFn) {
					if (className==="ng-hide") {
						jQuery(element).slideUp(200, doneFn);
					} else {
						doneFn();
					}
				},

			    removeClass: function(element, className, doneFn) {
			    	if (className==="ng-hide") {
			    		jQuery(element).hide();
				     	jQuery(element).delay(100).slideDown(200, doneFn);
				     } else {
						doneFn();
					}
			    }
			}
		}]);