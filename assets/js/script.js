$(function () {
    "use strict";

    var $window = $(window);
    var $document = $(document);
    var $body = $("body");
    var $navigation = $(".site-navigation");
    var $skillsSection = $(".section-skills");
    var $counterSection = $(".section-counters");
    var motionSelector = ".main-service, .feature-about, .certificate-item, .progress-group, .counter, .service-info, .timeline > li > .timeline-panel, .portfolio-item, .contact-card-item, .section-me .container, .section-twitter .container";
    var progressLoaded = false;
    var countersLoaded = false;

    if ($.fn.affix && $navigation.length && $(".hero").length) {
        $navigation.affix({
            offset: {
                top: $(".hero").outerHeight()
            }
        });
    }

    if ($.fn.scrollspy) {
        $body.scrollspy({
            target: ".site-header",
            offset: 80
        });
    }

    function collapseMobileMenu() {
        if ($window.width() < 768) {
            $("#portfolio-perfect-collapse").collapse("hide");
        }
    }

    $document.on("click", ".page-scroll a", function (event) {
        var targetSelector = $(this).attr("href");

        if (!targetSelector || targetSelector.charAt(0) !== "#") {
            return;
        }

        var $target = $(targetSelector);
        if (!$target.length) {
            return;
        }

        event.preventDefault();

        $("html, body").stop().animate({
            scrollTop: Math.max($target.offset().top - 50, 0)
        }, 700);

        collapseMobileMenu();
    });

    function animateCounters() {
        if (countersLoaded || !$counterSection.length) {
            return;
        }

        var triggerPoint = $counterSection.offset().top - window.innerHeight + 80;
        if ($window.scrollTop() < triggerPoint) {
            return;
        }

        countersLoaded = true;

        $(".counter-start").each(function () {
            var $counter = $(this);
            var endValue = parseInt($counter.data("to"), 10) || 0;
            var duration = parseInt($counter.data("speed"), 10) || 1500;
            var startTime = null;

            function step(timestamp) {
                if (!startTime) {
                    startTime = timestamp;
                }

                var progress = Math.min((timestamp - startTime) / duration, 1);
                var currentValue = Math.floor(progress * endValue);
                $counter.text(currentValue);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    $counter.text(endValue);
                }
            }

            window.requestAnimationFrame(step);
        });
    }

    function animateProgressBars() {
        if (progressLoaded || !$skillsSection.length) {
            return;
        }

        var triggerPoint = $skillsSection.offset().top - window.innerHeight + 80;
        if ($window.scrollTop() < triggerPoint) {
            return;
        }

        progressLoaded = true;

        $(".progress .progress-bar").each(function () {
            var $bar = $(this);
            var goal = parseFloat($bar.data("transitiongoal")) || 0;
            var $label = $bar.find("span");

            if (!$label.length) {
                $label = $("<span></span>");
                $bar.append($label);
            }

            $bar.css("width", goal + "%");
            $bar.attr("aria-valuenow", goal);
            $label.text(goal + "%");
        });
    }

    function handleScrollAnimations() {
        animateCounters();
        animateProgressBars();
    }

    handleScrollAnimations();
    $window.on("scroll", handleScrollAnimations);

    var motionElements = document.querySelectorAll(motionSelector);

    motionElements.forEach(function (element, index) {
        element.classList.add("motion-reveal");
        element.style.transitionDelay = Math.min(index * 0.05, 0.35) + "s";
    });

    if ("IntersectionObserver" in window) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });

        motionElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        motionElements.forEach(function (element) {
            element.classList.add("is-visible");
        });
    }

    if ($("#services-carousel").length) {
        $("#services-carousel").carousel({
            interval: false
        });
    }

    $(".portfolio-sorting a").on("click", function (event) {
        event.preventDefault();

        var $trigger = $(this);
        var group = $trigger.data("group");

        $(".portfolio-sorting a").removeClass("active");
        $trigger.addClass("active");

        $("#grid").children("[data-groups]").each(function () {
            var $item = $(this);
            var groups = $item.attr("data-groups");
            var parsedGroups = [];

            try {
                parsedGroups = JSON.parse(groups);
            } catch (error) {
                parsedGroups = [];
            }

            var shouldShow = group === "all" || parsedGroups.indexOf(group) !== -1;
            $item.toggle(shouldShow);
        });
    });

    var certificateModal = document.getElementById("certificateModal");
    var certificateModalImg = document.getElementById("certificateModalImg");
    var certificateClose = document.getElementById("certificateClose");

    function closeCertificateModal() {
        if (!certificateModal) {
            return;
        }

        certificateModal.style.display = "none";
        certificateModal.setAttribute("aria-hidden", "true");
        if (certificateModalImg) {
            certificateModalImg.src = "";
        }
    }

    $(".certificate-trigger").on("click", function () {
        if (!certificateModal || !certificateModalImg) {
            return;
        }

        certificateModalImg.src = $(this).data("image");
        certificateModal.style.display = "block";
        certificateModal.setAttribute("aria-hidden", "false");
    });

    if (certificateClose) {
        certificateClose.addEventListener("click", closeCertificateModal);
    }

    if (certificateModal) {
        certificateModal.addEventListener("click", function (event) {
            if (event.target === certificateModal) {
                closeCertificateModal();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeCertificateModal();
        }
    });
});
