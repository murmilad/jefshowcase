/*
 * jQuery Form Styler v1.4.1
 * https://github.com/Dimox/jQueryFormStyler
 *
 * Copyright 2012-2013 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2013.10.27
 *
 */

(function($) {
	$.fn.styler = function(opt) {

		var opt = $.extend({
			idSuffix: '-styler',
			filePlaceholder: '���� �� ������',
			browseText: '�����...',
			selectVisibleOptions: 0,
			singleSelectzIndex: '100',
			selectSmartPositioning: true
		}, opt);

		return this.each(function() {
			var el = $(this);
			var id = '',
					cl = '',
					title = '',
					dataList = '';
			if (el.attr('id') !== undefined && el.attr('id') != '') id = ' id="' + el.attr('id') + opt.idSuffix + '"';
			if (el.attr('class') !== undefined && el.attr('class') != '') cl = ' ' + el.attr('class');
			if (el.attr('title') !== undefined && el.attr('title') != '') title = ' title="' + el.attr('title') + '"';
			var data = el.data();
			for (var i in data) {
				if (data[i] != '') dataList += ' data-' + i + '="' + data[i] + '"';
			}
			id += dataList;

			// checkbox
			if (el.is(':checkbox')) {
				el.each(function() {
					if (el.parent('div.jq-checkbox').length < 1) {
						var checkbox = $('<div' + id + ' class="jq-checkbox' + cl + '"' + title + '><div class="jq-checkbox__div"></div></div>');

						// ������ ������������ �������
						el.css({
							position: 'absolute',
							zIndex: '-10',
                            left:'100px',
							opacity: 0
						}).after(checkbox).prependTo(checkbox);

						checkbox.attr('unselectable', 'on').css({
							'-webkit-user-select': 'none',
							'-moz-user-select': 'none',
							'-ms-user-select': 'none',
							'-o-user-select': 'none',
							'user-select': 'none',
							display: 'inline-block',
							position: 'relative',
							overflow: 'hidden'
						});

						if (el.is(':checked')) checkbox.addClass('checked');
						if (el.is(':disabled')) checkbox.addClass('disabled');

						// ���� �� �������������
						checkbox.click(function() {
							if (!checkbox.is('.disabled')) {
								if (el.is(':checked')) {
									el.prop('checked', false);
									checkbox.removeClass('checked');
								} else {
									el.prop('checked', true);
									checkbox.addClass('checked');
								}
								el.change();
								return false;
							} else {
								return false;
							}
						});
						// ���� �� label
						el.closest('label').add('label[for="' + el.attr('id') + '"]').click(function(e) {
							checkbox.click();
							e.preventDefault();
						});
						// ������������ �� Space ��� Enter
						el.change(function() {
							if (el.is(':checked')) checkbox.addClass('checked');
							else checkbox.removeClass('checked');
						})
						// ����� ������������ �������, ������� ��������� � ���� label
						.keydown(function(e) {
							if (e.which == 13 || e.which == 32) checkbox.click();
						})
						.focus(function() {
							if (!checkbox.is('.disabled')) checkbox.addClass('focused');
						})
						.blur(function() {
							checkbox.removeClass('focused');
						})
						// ���������� ��� ������������ ���������
						.on('refresh', function() {
							if (el.is(':checked')) checkbox.addClass('checked');
								else checkbox.removeClass('checked');
							if (el.is(':disabled')) checkbox.addClass('disabled');
								else checkbox.removeClass('disabled');
						});
					}
				});

			// radio
			} else if (el.is(':radio')) {
				el.each(function() {
					if (el.parent('div.jq-radio').length < 1) {
						var radio = $('<div' + id + ' class="jq-radio' + cl + '"' + title + '><div class="jq-radio__div"></div></div>');

						// ������ ������������ �����������
						el.css({
							position: 'absolute',
							zIndex: '-1',
							opacity: 0
						}).after(radio).prependTo(radio);

						radio.attr('unselectable', 'on').css({
							'-webkit-user-select': 'none',
							'-moz-user-select': 'none',
							'-ms-user-select': 'none',
							'-o-user-select': 'none',
							'user-select': 'none',
							display: 'inline-block',
							position: 'relative'
						});

						if (el.is(':checked')) radio.addClass('checked');
						if (el.is(':disabled')) radio.addClass('disabled');

						// ���� �� �����������������
						radio.click(function() {
							if (!radio.is('.disabled')) {
								radio.closest('form').find('input[name="' + el.attr('name') + '"]').prop('checked', false).parent().removeClass('checked');
								el.prop('checked', true).parent().addClass('checked');
								el.change();
								return false;
							} else {
								return false;
							}
						});
						// ���� �� label
						el.closest('label').add('label[for="' + el.attr('id') + '"]').click(function(e) {
							radio.click();
							e.preventDefault();
						});
						// ������������ ���������
						el.change(function() {
							el.parent().addClass('checked');
						})
						.focus(function() {
							if (!radio.is('.disabled')) radio.addClass('focused');
						})
						.blur(function() {
							radio.removeClass('focused');
						})
						// ���������� ��� ������������ ���������
						.on('refresh', function() {
							if (el.is(':checked')) {
								$('input[name="' + el.attr('name') + '"]').parent().removeClass('checked');
								radio.addClass('checked');
							} else {
								radio.removeClass('checked');
							}
							if (el.is(':disabled')) radio.addClass('disabled');
								else radio.removeClass('disabled');
						});
					}
				});

			// file
			} else if (el.is(':file')) {
				el.css({position: 'absolute', top: '0', right: '0', width: '100%', height: '100%', opacity: 0}).each(function() {
					if (el.parent('div.jq-file').length < 1) {
						var file = $('<div' + id + ' class="jq-file' + cl + '" style="display: inline-block; position: relative; overflow: hidden"></div>');
						var name = $('<div class="jq-file__name">' + opt.filePlaceholder + '</div>').appendTo(file);
						var browse = $('<div class="jq-file__browse">' + opt.browseText + '</div>').appendTo(file);
						el.after(file);
						file.append(el);
						if (el.is(':disabled')) file.addClass('disabled');
						el.change(function() {
							name.text(el.val().replace(/.+[\\\/]/, ''));
						})
						.focus(function() {
							file.addClass('focused');
						})
						.blur(function() {
							file.removeClass('focused');
						})
						.click(function() {
							file.removeClass('focused');
						})
						// ���������� ��� ������������ ���������
						.on('refresh', function() {
							if (el.is(':disabled')) file.addClass('disabled');
								else file.removeClass('disabled');
						})
					}
				});

			// select
			} else if (el.is('select')) {
				el.each(function() {
					if (el.next('div.jqselect').length < 1) {

						function selectbox() {

							// ��������� ��������� �������� ��� ��������� �������
							function preventScrolling(selector) {
								selector.unbind('mousewheel DOMMouseScroll').bind('mousewheel DOMMouseScroll', function(e) {
									var scrollTo = null;
									if (e.type == 'mousewheel') { scrollTo = (e.originalEvent.wheelDelta * -1); }
									else if (e.type == 'DOMMouseScroll') { scrollTo = 40 * e.originalEvent.detail; }
									if (scrollTo) { e.preventDefault(); $(this).scrollTop(scrollTo + $(this).scrollTop()); }
								});
							}

							var option = $('option', el);
							var list = '';
							// ��������� ������ �������
							function makeList() {
								for (i = 0, len = option.length; i < len; i++) {
									var li = '',
											liClass = '',
											dataList = '',
											optionClass = '',
											optgroupClass = '',
											dataJqfsClass = '';
									var disabled = 'disabled';
									var selDis = 'selected sel disabled';
									if (option.eq(i).prop('selected')) liClass = 'selected sel';
									if (option.eq(i).is(':disabled')) liClass = disabled;
									if (option.eq(i).is(':selected:disabled')) liClass = selDis;
									if (option.eq(i).attr('class') !== undefined) {
										optionClass = ' ' + option.eq(i).attr('class');
										dataJqfsClass = ' data-jqfs-class="' + option.eq(i).attr('class') + '"';
									}

									var data = option.eq(i).data();
									for (var k in data) {
										if (data[k] != '') dataList += ' data-' + k + '="' + data[k] + '"';
									}

									li = '<li' + dataJqfsClass + dataList + ' class="' + liClass + optionClass + '">'+ option.eq(i).text() +'</li>';

									// ���� ���� optgroup
									if (option.eq(i).parent().is('optgroup')) {
										if (option.eq(i).parent().attr('class') !== undefined) optgroupClass = ' ' + option.eq(i).parent().attr('class');
										li = '<li' + dataJqfsClass + ' class="' + liClass + optionClass + ' option' + optgroupClass + '">'+ option.eq(i).text() +'</li>';
										if (option.eq(i).is(':first-child')) {
											li = '<li class="optgroup' + optgroupClass + '">' + option.eq(i).parent().attr('label') + '</li>' + li;
										}
									}

									list += li;
								}
							} // end makeList()

							// ��������� ������
							function doSelect() {
								var selectbox =
									$('<div' + id + ' class="jq-selectbox jqselect' + cl + '" style="display: inline-block; position: relative; z-index:' + opt.singleSelectzIndex + '">'+
											'<div class="jq-selectbox__select' + cl + '"' + title + '>'+
												'<div class="jq-selectbox__select-text' + cl + '"></div>'+
												'<div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div>'+
											'</div>'+
										'</div>');

								// .jq-selectbox-wrapper ��������� ��� ����, ����� ���������� �� �������������� ���������,
								// ���������� ��-�� �������� position: absolute, ������� ��������� � �������,
								// ��������, ����� ������ ������� = 100%
								el.wrap('<div class="jq-selectbox-wrapper" style="position: relative"></div>').after(selectbox);

								var divSelect = $('div.jq-selectbox__select', selectbox);
								var divText = $('div.jq-selectbox__select-text', selectbox);
								var optionSelected = option.filter(':selected');

								// ����� ����� �� ���������
								if (optionSelected.length) {
									divText.text(optionSelected.text());
								} else {
									divText.text(option.first().text());
								}

								makeList();
								var dropdown =
									$('<div class="jq-selectbox__dropdown" style="position: absolute; overflow: auto; overflow-x: hidden">'+
											'<ul style="list-style: none">' + list + '</ul>'+
										'</div>');
								selectbox.append(dropdown);
								var li = $('li', dropdown);

								// ���������� ����� ������� ����� �������
								var liWidth = 0;
								li.each(function() {
									$(this).css({'display': 'inline-block', 'white-space': 'nowrap'});
									if ($(this).width() > liWidth) liWidth = $(this).width();
									$(this).css({'display': 'block', 'white-space': 'normal'});
								});
								// ����������, ������� �� ������ �������
								var elClone = el.clone().css('width', 'auto').insertAfter(el);
								var elCloneWidth = elClone.width();
								elClone.remove();
								// ���� ������ ������� �� �������
								if (elCloneWidth == el.width()) {
									divSelect.width(liWidth);
								// ���� ������ ������� �������
								} else {
									selectbox.width(el.outerWidth());
								}
								// ���� ������ ������� �������, �� ���� �����, ������ �������� ������
								if (liWidth > dropdown.width()) {
									dropdown.width(liWidth + dropdown.width() - li.width());
								}

								// ������ ������������ ������
								el.css({position: 'absolute', opacity: 0, height: selectbox.outerHeight()});

								var liSelected = li.filter('.selected');
								if (liSelected.length < 1) li.first().addClass('selected sel');
								var selectHeight = selectbox.outerHeight();
								if (dropdown.css('left') == 'auto') dropdown.css({left: 0});
								if (dropdown.css('top') == 'auto') dropdown.css({top: selectHeight});
								var liHeight = li.outerHeight();
								var position = dropdown.css('top');
								dropdown.hide();

								// ���� ������ �� ��������� �����
								if (liSelected.length) {
									// ��������� �����, ������������ ��������� �������
									if (option.first().text() != optionSelected.text()) {
										selectbox.addClass('changed');
									}
									// �������� ������� ����� ���������� ������
									selectbox.data('jqfs-class', liSelected.data('jqfs-class'));
									selectbox.addClass(liSelected.data('jqfs-class'));
								}

								// ���� ������ ����������
								if (el.is(':disabled')) {
									selectbox.addClass('disabled');
									return false;
								}

								// ��� ����� �� �������������
								divSelect.click(function() {
									el.focus();

									// ����� ����������������
									if (opt.selectSmartPositioning) {
										var win = $(window);
										var topOffset = selectbox.offset().top;
										var bottomOffset = win.height() - selectHeight - (topOffset - win.scrollTop());
										var visible = opt.selectVisibleOptions;
										var	minHeight = liHeight * 6;
										var	newHeight = liHeight * visible;
										if (visible > 0 && visible < 6) minHeight =  newHeight;
										// ��������� �����
										if (bottomOffset < 0 || bottomOffset < minHeight)	{
											dropdown.height('auto').css({top: 'auto', bottom: position});
											if (dropdown.outerHeight() > topOffset - win.scrollTop() - 20 ) {
												dropdown.height(Math.floor((topOffset - win.scrollTop() - 20) / liHeight) * liHeight);
												if (visible > 0 && visible < 6) {
													if (dropdown.height() > minHeight) dropdown.height(minHeight);
												} else if (visible > 6) {
													if (dropdown.height() > newHeight) dropdown.height(newHeight);
												}
											}
										// ��������� ����
										} else if (bottomOffset > minHeight) {
											dropdown.height('auto').css({bottom: 'auto', top: position});
											if (dropdown.outerHeight() > bottomOffset - 20 ) {
												dropdown.height(Math.floor((bottomOffset - 20) / liHeight) * liHeight);
												if (visible > 0 && visible < 6) {
													if (dropdown.height() > minHeight) dropdown.height(minHeight);
												} else if (visible > 6) {
													if (dropdown.height() > newHeight) dropdown.height(newHeight);
												}
											}
										}
									}

									$('div.jqselect').css({zIndex: (opt.singleSelectzIndex - 1)}).removeClass('opened focused');
									selectbox.css({zIndex: opt.singleSelectzIndex});
									if (dropdown.is(':hidden')) {
										$('div.jq-selectbox__dropdown:visible').hide();
										dropdown.show();
										selectbox.addClass('opened');
									} else {
										dropdown.hide();
										selectbox.removeClass('opened');
									}

									// ������������ �� ���������� ������ ��� �������� ������
									if (li.filter('.selected').length) {
										dropdown.scrollTop(dropdown.scrollTop() + li.filter('.selected').position().top - dropdown.innerHeight() / 2 + liHeight / 2);
									}

									preventScrolling(dropdown);
									return false;
								});

								// ��� ��������� ������� �� ����� ������
								li.hover(function() {
									$(this).siblings().removeClass('selected');
								});
								var selectedText = li.filter('.selected').text();
								var selText = li.filter('.selected').text();

								// ��� ����� �� ����� ������
								li.filter(':not(.disabled):not(.optgroup)').click(function() {
									var t = $(this);
									var liText = t.text();
									if (selectedText != liText) {
										var index = t.index();
										if (t.is('.option')) index -= t.prevAll('.optgroup').length;
										t.addClass('selected sel').siblings().removeClass('selected sel');
										option.prop('selected', false).eq(index).prop('selected', true);
										selectedText = liText;
										divText.text(liText);

										// ��������� �����, ������������ ��������� �������
										if (option.first().text() != liText) {
											selectbox.addClass('changed');
										} else {
											selectbox.removeClass('changed');
										}

										// �������� ������� ����� ���������� ������
										if (selectbox.data('jqfs-class')) selectbox.removeClass(selectbox.data('jqfs-class'));
										selectbox.data('jqfs-class', t.data('jqfs-class'));
										selectbox.addClass(t.data('jqfs-class'));

										el.change();
									}
									dropdown.hide();
									selectbox.removeClass('opened');
								});
								dropdown.mouseout(function() {
									$('li.sel', dropdown).addClass('selected');
								});

								// ��������� �������
								el.change(function() {
									divText.text(option.filter(':selected').text());
									li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel');
								})
								.focus(function() {
									selectbox.addClass('focused');
								})
								.blur(function() {
									selectbox.removeClass('focused');
								})
								// ��������� ������ � ����������
								.bind('keydown keyup', function(e) {
									divText.text(option.filter(':selected').text());
									li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel');
									// �����, �����, PageUp
									if (e.which == 38 || e.which == 37 || e.which == 33) {
										dropdown.scrollTop(dropdown.scrollTop() + li.filter('.selected').position().top);
									}
									// ����, ������, PageDown
									if (e.which == 40 || e.which == 39 || e.which == 34) {
										dropdown.scrollTop(dropdown.scrollTop() + li.filter('.selected').position().top - dropdown.innerHeight() + liHeight);
									}
									if (e.which == 13) {
										dropdown.hide();
									}
								});

								// ������ ���������� ������ ��� ����� �� ��������� �������
								$(document).on('click', function(e) {
									// e.target.nodeName != 'OPTION' - ��������� ��� ������ ���� � �����
									// (��� ��������� ������� � ���������� ����������� ������� onclick)
									if (!$(e.target).parents().hasClass('jq-selectbox') && e.target.nodeName != 'OPTION') {
										dropdown.hide().find('li.sel').addClass('selected');
										selectbox.removeClass('focused opened');
									}
								});

							} // end doSelect()

							// ������������
							function doMultipleSelect() {
								var selectbox = $('<div' + id + ' class="jq-select-multiple jqselect' + cl + '"' + title + ' style="display: inline-block; position: relative"></div>');

								// .jq-selectbox-wrapper ��������� ��� ����, ����� ���������� �� �������������� ���������,
								// ���������� ��-�� �������� position: absolute, ������� ��������� � �������,
								// ��������, ����� ������ ������� = 100%
								el.wrap('<div class="jq-selectbox-wrapper" style="position: relative"></div>').after(selectbox);

								makeList();
								selectbox.append('<ul style="position: relative">' + list + '</ul>');
								var ul = $('ul', selectbox).css({'overflow-x': 'hidden'});
								var li = $('li', selectbox).attr('unselectable', 'on').css({'-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', '-o-user-select': 'none', 'user-select': 'none', 'white-space': 'nowrap'});
								var size = el.attr('size');
								var ulHeight = ul.outerHeight();
								var liHeight = li.outerHeight();
								if (size !== undefined && size > 0) {
									ul.css({'height': liHeight * size});
								} else {
									ul.css({'height': liHeight * 4});
								}
								if (ulHeight > selectbox.height()) {
									ul.css('overflowY', 'scroll');
									preventScrolling(ul);
									// ������������ �� ���������� ������
									if (li.filter('.selected').length) {
										ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top);
									}
								}

								// ���� ������ ����������
								if (el.is(':disabled')) {
									selectbox.addClass('disabled');
									option.each(function() {
										if ($(this).is(':selected')) li.eq($(this).index()).addClass('selected');
									});
									// ������������� ������ �������������
									selectbox.width(el.outerWidth());
									selectbox.width(selectbox.width() - (selectbox.outerWidth() - selectbox.width()));

									// ������ ������������ ������
									el.css({position: 'absolute', opacity: 0, height: selectbox.outerHeight()});

								// ���� ������ ��������
								} else {

									// ������������� ������ �������������
									selectbox.width(el.outerWidth());
									selectbox.width(selectbox.width() - (selectbox.outerWidth() - selectbox.width()));

									// ������ ������������ ������
									el.css({position: 'absolute', opacity: 0, height: selectbox.outerHeight()});

									// ��� ����� �� ����� ������
									li.filter(':not(.disabled):not(.optgroup)').click(function(e) {
										el.focus();
										selectbox.removeClass('focused');
										var clkd = $(this);
										if(!e.ctrlKey) clkd.addClass('selected');
										if(!e.shiftKey) clkd.addClass('first');
										if(!e.ctrlKey && !e.shiftKey) clkd.siblings().removeClass('selected first');

										// ��������� ������� ��� ������� Ctrl
										if(e.ctrlKey) {
											if (clkd.is('.selected')) clkd.removeClass('selected first');
												else clkd.addClass('selected first');
											clkd.siblings().removeClass('first');
										}

										// ��������� ������� ��� ������� Shift
										if(e.shiftKey) {
											var prev = false,
													next = false;
											clkd.siblings().removeClass('selected').siblings('.first').addClass('selected');
											clkd.prevAll().each(function() {
												if ($(this).is('.first')) prev = true;
											});
											clkd.nextAll().each(function() {
												if ($(this).is('.first')) next = true;
											});
											if (prev) {
												clkd.prevAll().each(function() {
													if ($(this).is('.selected')) return false;
														else $(this).not('.disabled, .optgroup').addClass('selected');
												});
											}
											if (next) {
												clkd.nextAll().each(function() {
													if ($(this).is('.selected')) return false;
														else $(this).not('.disabled, .optgroup').addClass('selected');
												});
											}
											if (li.filter('.selected').length == 1) clkd.addClass('first');
										}

										// �������� ��������� �����
										option.prop('selected', false);
										li.filter('.selected').each(function() {
											var t = $(this);
											var index = t.index();
											if (t.is('.option')) index -= t.prevAll('.optgroup').length;
											option.eq(index).prop('selected', true);
										});
										el.change();

									});

									// �������� ��������� � ����������
									option.each(function(i) {
										$(this).data('optionIndex', i);
									});
									el.change(function() {
										li.removeClass('selected');
										var arrIndexes = [];
										option.filter(':selected').each(function() {
											arrIndexes.push($(this).data('optionIndex'));
										});
										li.not('.optgroup').filter(function(i) {
											return $.inArray(i, arrIndexes) > -1;
										}).addClass('selected');
									})
									.focus(function() {
										selectbox.addClass('focused');
									})
									.blur(function() {
										selectbox.removeClass('focused');
									});

									// ������������ � ����������
									if (ulHeight > selectbox.height()) {
										el.keydown(function(e) {
											// �����, �����, PageUp
											if (e.which == 38 || e.which == 37 || e.which == 33) {
												ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - liHeight);
											}
											// ����, ������, PageDown
											if (e.which == 40 || e.which == 39 || e.which == 34) {
												ul.scrollTop(ul.scrollTop() + li.filter('.selected:last').position().top - ul.innerHeight() + liHeight * 2);
											}
										});
									}

								}
							} // end doMultipleSelect()
							if (el.is('[multiple]')) doMultipleSelect(); else doSelect();
						} // end selectbox()

						selectbox();

						// ���������� ��� ������������ ���������
						el.on('refresh', function() {
							el.next().remove();
							selectbox();
						});
						// ���������� ������
						el.on('adaptiveWidth', function() {
							el.css({position: 'static'});
							//el.next().width(el.outerWidth());
							el.css({position: 'absolute'});
						});
						$(window).on('resize', function () {
							el.trigger('adaptiveWidth');
						});
					}
				});
			}// end select

		});

	}
})(jQuery);