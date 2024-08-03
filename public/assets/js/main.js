(function($) {
    "use strict";

    // Preloader
    $(window).on("load", function() {
        $(".preloader").fadeOut();
    });

    // Close preloader on click
    $(".preloaderCls").each(function() {
        $(this).on("click", function(e) {
            e.preventDefault();
            $(".preloader").css("display", "none");
        });
    });

    // Mobile Menu
    $.fn.thmobilemenu = function(options) {
        var settings = $.extend({
            menuToggleBtn: ".th-menu-toggle",
            bodyToggleClass: "th-body-visible",
            subMenuClass: "th-submenu",
            subMenuParent: "th-item-has-children",
            subMenuParentToggle: "th-active",
            meanExpandClass: "th-mean-expand",
            appendElement: '<span class="th-mean-expand"></span>',
            subMenuToggleClass: "th-open",
            toggleSpeed: 400
        }, options);

        return this.each(function() {
            var $this = $(this);

            function toggleMenu() {
                $this.toggleClass(settings.bodyToggleClass);
                var submenuSelector = "." + settings.subMenuClass;
                $(submenuSelector).each(function() {
                    if ($(this).hasClass(settings.subMenuToggleClass)) {
                        $(this).removeClass(settings.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(settings.subMenuParentToggle);
                    }
                });
            }

            $this.find("li").each(function() {
                var $submenu = $(this).find("ul");
                $submenu.addClass(settings.subMenuClass);
                $submenu.css("display", "none");
                $submenu.parent().addClass(settings.subMenuParent);
                $submenu.prev("a").append(settings.appendElement);
                $submenu.next("a").append(settings.appendElement);
            });

            var meanExpandSelector = "." + settings.meanExpandClass;
            $(meanExpandSelector).each(function() {
                $(this).on("click", function(e) {
                    e.preventDefault();
                    var $parent = $(this).parent();
                    if ($(this).next("ul").length > 0) {
                        $parent.parent().toggleClass(settings.subMenuParentToggle);
                        $(this).next("ul").slideToggle(settings.toggleSpeed);
                        $(this).next("ul").toggleClass(settings.subMenuToggleClass);
                    } else if ($(this).prev("ul").length > 0) {
                        $parent.parent().toggleClass(settings.subMenuParentToggle);
                        $(this).prev("ul").slideToggle(settings.toggleSpeed);
                        $(this).prev("ul").toggleClass(settings.subMenuToggleClass);
                    }
                });
            });

            $(settings.menuToggleBtn).each(function() {
                $(this).on("click", function() {
                    toggleMenu();
                });
            });

            $this.on("click", function(e) {
                e.stopPropagation();
                toggleMenu();
            });

            $this.find("div").on("click", function(e) {
                e.stopPropagation();
            });
        });
    };

    $(".th-menu-wrapper").thmobilemenu();

    // Sticky Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".sticky-wrapper").addClass("sticky");
        } else {
            $(".sticky-wrapper").removeClass("sticky");
        }
    });

    // Scroll to Top Button
    if ($(".scroll-top").length > 0) {
        var scrollTopBtn = document.querySelector(".scroll-top");
        var path = document.querySelector(".scroll-top path");
        var totalLength = path.getTotalLength();

        path.style.transition = path.style.WebkitTransition = "none";
        path.style.strokeDasharray = totalLength + " " + totalLength;
        path.style.strokeDashoffset = totalLength;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        var updateDashOffset = function() {
            var scrollTop = $(window).scrollTop();
            var documentHeight = $(document).height();
            var dashOffset = totalLength - scrollTop * totalLength / documentHeight;
            path.style.strokeDashoffset = dashOffset;
        };

        updateDashOffset();

        $(window).scroll(updateDashOffset);

        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $(scrollTopBtn).addClass("show");
            } else {
                $(scrollTopBtn).removeClass("show");
            }
        });

        $(scrollTopBtn).on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 750);
            return false;
        });
    }

    // Other functionalities...

})(jQuery);
