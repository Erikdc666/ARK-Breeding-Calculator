		var breedingApp=angular.module('breedingApp', ['ngRoute', 'breedingControllers', 'ngCookies', 'ngAnimate']);

		breedingApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl: 'breeding.html?d=20261008.3', controller: 'breedingController'
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

		//A tooltip follows the cursor: to its right when that fits in the window, else to
		//its left; downwards from the cursor's line, or upwards when there is no room below.
		jQuery(document).on('mouseenter mousemove', '.tooltip', function(e) {
			var tip=jQuery(this).children('.tooltiptext');
			if (!tip.length) {
				return;
			}
			var width=tip.outerWidth(), height=tip.outerHeight(), gap=14, margin=8;
			var left=e.clientX+gap, top=e.clientY;
			if (left+width>window.innerWidth-margin) {
				left=e.clientX-gap-width;
			}
			if (top+height>window.innerHeight-margin) {
				top=e.clientY-height;
			}
			tip.css({left: Math.max(margin, left)+'px', top: Math.max(margin, top)+'px'});
		});

		//Drag columns into a different order. Used by both the creature row and the trough
		//row, so the list and the drag handle come from attributes rather than being baked
		//in. Uses the browser's own drag and drop: the bundled jQuery UI build only carries
		//the autocomplete, not sortable.
		//
		//The DOM is never moved here: Angular owns it through ng-repeat. Only the array is
		//reordered, and ng-repeat re-renders from that single source of truth.
		breedingApp.directive('sortableList', function() {
			return {
				link: function(scope, element, attrs) {
					var row=jQuery(element);
					var dragged=null; //The column being dragged; null when the drag is not ours
					function columns() {
						return row.children('.panelcolumn');
					}
					//Where the dragged column would land: its index among the *other* columns,
					//counting those whose middle is left of the pointer.
					function target(e) {
						var others=columns().not(dragged), to=0;
						others.each(function() {
							var box=this.getBoundingClientRect();
							if (e.originalEvent.clientX>box.left+box.width/2) {
								to++;
							}
						});
						return {others: others, to: to};
					}
					function clearmarks() {
						columns().removeClass('dropleft dropright dragging');
					}
					row.on('dragstart', attrs.sortableHandle, function(e) {
						dragged=jQuery(this).closest('.panelcolumn');
						var transfer=e.originalEvent.dataTransfer;
						transfer.effectAllowed='move';
						transfer.setData('text/plain', ''); //Firefox starts no drag without data
						if (transfer.setDragImage) {
							transfer.setDragImage(dragged[0], 20, 10);
						}
						dragged.addClass('dragging');
					});
					row.on('dragover', function(e) {
						if (!dragged) {
							return; //Something else is being dragged over us, e.g. the other row's column
						}
						e.preventDefault();
						var t=target(e);
						columns().removeClass('dropleft dropright');
						if (t.to<t.others.length) {
							t.others.eq(t.to).addClass('dropleft');
						} else {
							t.others.last().addClass('dropright');
						}
					});
					row.on('drop', function(e) {
						if (!dragged) {
							return;
						}
						e.preventDefault();
						var from=columns().index(dragged), to=target(e).to;
						clearmarks();
						dragged=null;
						if (to===from) {
							return;
						}
						scope.$apply(function() {
							//from/to index the *expanded* columns, because collapsed
							//ones are rendered in the tray and are not in this row at
							//all. Reorder within the slots the expanded items occupy,
							//so collapsed ones keep their place in the underlying list.
							var list=scope[attrs.sortableList];
							var slots=[];
							for (var i=0; i<list.length; i++) {
								if (!list[i].collapsed) {
									slots.push(i);
								}
							}
							var expanded=[];
							for (var k=0; k<slots.length; k++) {
								expanded.push(list[slots[k]]);
							}
							expanded.splice(to, 0, expanded.splice(from, 1)[0]);
							for (var j=0; j<slots.length; j++) {
								list[slots[j]]=expanded[j];
							}
						});
					});
					row.on('dragend', function() {
						clearmarks();
						dragged=null;
					});
				}
			}
		});

		breedingApp.directive('percentage', function() {
			return {
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {
					ngModel.$formatters.push(function(value) {
						return Math.round(value*1e6)/1e4; //Not value*100: 0.3263*100 shows as 32.629999999999995
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