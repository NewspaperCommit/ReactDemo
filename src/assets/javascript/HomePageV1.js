var DomainName = document.domain.toString();
var IsMobile = navigator.userAgent.search("Mobile") > 0;

$(window).load(function () {
    if ($(".bannerImg").length > 0) {
        $(".bannerImg").append("<img id='ImgBanner'  src='https://" + DomainName + "/Content/images/HomeBannerImg.jpg' alt='' />");
    }
    //LoadHistoryImages();
});

$(document).ready(function () {
alert(1);
    // Count Ticker Starts
    var tickerCount = 0;
    var countDownDate = parseInt($("#hdnInitialCountTicker").val());
    var time = new Date($("#hdnMainutcDate").val());
    var currenttime = new Date();
    var utcDate = new Date($("#hdnutcDate").val());
    var difference = (((utcDate - time) / 60) / 1000);
    var seconds = parseInt(difference) * 60;
    var diffcount = parseInt(seconds) * 25;
    var mainCount = countDownDate + diffcount;

    $("#chkDrakLightSwitch").prop('checked', false);

    setInterval(function () {
        $({ Counter: mainCount }).animate({
            Counter: tickerCount
        }, {
            duration: 0,
            easing: 'linear',
            step: function () {
                if (tickerCount == 0) {
                    $("#countloder").hide();
                }
                tickerCount = Math.ceil(this.Counter + 25);
                $('#findsearchCount').text(tickerCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                mainCount = tickerCount;
            }
        });
    }, 1000);
    // Count Ticker Ends

    //LoadHistoryImages();
    $('.thisdayinHistoryUrl a').attr('target', '');
    setTimeout(function () { $("#idLogo").focus(); }, 500);
    $("#btnSubscribe").click(function () {
        $.cookie('NewspaperARCHIVE.com.Secure2SearchValues', null, { domain: '.newspaperarchive.com' })
    });
    if ($("#HdnThanksPopUp").val() == 1 || $("#HdnThanksPopUp").val() == "1") {

        CommonModalPopup("https://" + DomainName + "/HtmlFiles/ThanksToRegister.html?r=" + Math.floor(Math.random() * 10001), true, 'modal-thanks', '');
    }
    if ($("#HdnSessionExpired").val() == "1" && $("#HdnSessionExpired").val() != "") {
        $(".btnClose").click();
        CommonModalPopup("https://" + DomainName + "/HtmlFiles/SessionExpired.html?r=" + Math.floor(Math.random() * 10001), true, 'modal-thanks', '');
    }
    if ($("#hdnclass_wrap").length > 0) {
        if ($.trim($("#hdnclass_wrap").val()).toLowerCase() != "anonymous") {
            $("#libraryimage").css("display", "none");
            $("#divHomePaymentSection").css("display", "none");
        }
    }
    $("#countryMap").focusin(function () {
        $("#browseHeading").focus()
    });


    var pubTitleUrl = "";
    var url = "https://" + DomainName + "/HomeV18/GetNamesForAutocompletePubTitles/";
    var queryParam = "";

    $(".pubTitlesList").autocomplete({

        source: function (request, response) {
            $('#discovertitlesearch').attr('disabled', 'disabled')
            var keywordString = $.trim($(this)[0].bindings.val());

            if (keywordString.length >= 3) {

                $.ajax({
                    type: "GET",
                    url: url,
                    data: { "keyword": keywordString, "Mode": 1 },
                    success: function (data) {
                        if (data.resultPub != undefined && data.resultPub.length > 0) {
                            response($.map(data.resultPub, function (item) {
                                $("#PubtitleErrorSpan").css("display", "none");
                                $("#PubtitleErrorSpan").html(" ");
                                return { value: item.pubTitle, text: item.PubTitleURL };

                            }));
                        }
                        else {
                            $("#PubtitleErrorSpan").css("display", "block");
                            $("#PubtitleErrorSpan").text(data.error);
                            $("#PubtitleErrorSpan").focus();
                        }
                    }
                });
            }
        },
        select: function (e, i) {
            $('#discovertitlesearch').removeAttr('disabled');
            $("#getListTitles").val("");
            $("#getListTitles").val(i.item.text);
            $("#PubtitleErrorSpan").css("display", "none");
            $("#PubtitleErrorSpan").html(" ");

        },
        appendTo: "#formPubTitlesList"
    });
});
$("#discoverFirstName").focus(function () {
    $(this).removeAttr('placeholder');
});
$("#discoverFirstName").focusout(function () {
    if ($(this).val() == '') {
        $(this).attr('placeholder', "E.g. John");
    }
});

$("#discoverLastName").focus(function () {
    $(this).removeAttr('placeholder');
});

$("#discoverLastName").focusout(function () {
    if ($(this).val() == '') {
        $(this).attr('placeholder', "E.g. Doe");
    }
});

$("#discoverKeyword").focus(function () {
    $(this).removeAttr('placeholder');
    $("#KeywordErrorSpan span").remove();
    $("#KeywordErrorSpan").css("display", "none");
});

$("#discoverKeyword").focusout(function () {
    if ($(this).val() == '') {
        $(this).attr('placeholder', "What are you looking for?");
    }
});

$("#searchByName").focus(function (e) {
    $("#profile").hide();
    $("#searchname").show();
    $("#titles").hide();
})

$("#searchByKey").focus(function (e) {
    $("#searchname").hide();
    $("#profile").show();
    $("#titles").hide();
})
$("#searchByTitles").focus(function (e) {
    $("#profile").hide();
    $("#titles").show();
    $("#searchname").hide();
})



$("#discoverpeoplehomev5").click(function (e) {
    if (!fieldValidation()) { return false; }
    var fnameterms = "E.g. John";
    var lnameterms = "E.g. Doe";
    var fname = $("#discoverFirstName").val();
    var lname = $("#discoverLastName").val();

    if (isIE() && isIE() <= 9) {
        if ($.trim(lname).toLowerCase() == lnameterms.toLowerCase()) { lname = ""; }
        if ($.trim(fname).toLowerCase() == fnameterms.toLowerCase()) { fname = ""; }
    }
    if ($("#errorspan span").length) {
        $("#errorspan span").remove();
        if (($.trim(lname).length == 1)) {
            $("#errorspan").append('<span> Last name must be greater than 1 character</span>')
            setTimeout(function () { $("#errorspan").focus() }, 400);
            return false;
        } else if ($.trim(lname).length == 0) {
            $("#errorspan").append('<span>Please enter last name</span>')
            setTimeout(function () { $("#errorspan").focus() }, 400);
            return false;
        }

    } else {
        if (($.trim(fname).length > 0 && $.trim(lname).length == 0) || ($.trim(lname).length < 2) && $.trim(lname) == "") {
            $("#errorspan").css("display", "block");
            $("#errorspan").append('<span> Please enter last name</span>')
            setTimeout(function () { $("#errorspan").focus() }, 500);
            return false;
        }
        else if ($.trim(lname).length < 2) {
            $("#errorspan").css("display", "block");
            $("#errorspan").append('<span> Last name must be greater than 1 character </span>')
            setTimeout(function () { $("#errorspan").focus() }, 500);
            return false;
        }
        else { return true; }
    }
});


function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

$("#discoverpeoplehomev6").click(function (e) {
    if (!fieldValidation()) { return false; }
    if (e.which == 13) {
        e.preventDefault();
    }
    var keywordterms = "What are you looking for?";
    var keyword = $("#discoverKeyword").val();
    if ($.trim(keyword).toLowerCase() == keywordterms.toLowerCase()) { keyword = ""; }
    if ($("#KeywordErrorSpan span").length) {
        $("#KeywordErrorSpan span").remove();
        if (($.trim(keyword).length == 1)) {
            $("#KeywordErrorSpan").append('<span> Search term(s) must be greater than 1 character</span>');
            setTimeout(function () { $("#KeywordErrorSpan").focus() }, 400);
            return false;
        } else if ($.trim(keyword).length == 0) {
            $("#KeywordErrorSpan").append('<span>Please enter search term(s)</span>');
            setTimeout(function () { $("#KeywordErrorSpan").focus() }, 400);
            return false;
        }

    }
    else {
        if ($.trim(keyword).length == 0 || $.trim(keyword).length == 1) {
            $("#KeywordErrorSpan").css("display", "block");
            if ($.trim(keyword).length == 1) {
                $("#KeywordErrorSpan").append('<span> Search term(s) must be greater than 1 character </span>')
            } else {
                $("#KeywordErrorSpan").append('<span> Please enter search term(s)</span>')
            }
            setTimeout(function () { $("#KeywordErrorSpan").focus() }, 500);
            return false;
        } else { return true; }
    }
});



if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $("html,body").animate({ scrollTop: 0 }, 1);
}

function FocusFirstName() {
    $("#discoverFirstName").focus();
}
function FocusLastName() {
    $("#discoverLastName").focus();
}

function Focuskeyword() {
    $("#discoverKeyword").focus();
}
function FocusPubTitles() {
    $("#pubTitlesList").focus();
    $("#PubtitleErrorSpan").css("display", "none");
}

$("#discovertitlesearch").click(function (e) {
    var title = $("#pubTitlesList").val().replace('-', ',').split(',');
    var compUrl = ((title[3].trim() + "/" + title[2].trim() + "/" + title[1].trim() + "/" + title[0].trim()).replace(/\s+/g, '-').toLowerCase());
    var pub = $("#getListTitles").val().split('/');
    var resUrl = pub[0] + "/" + pub[1] + "/" + pub[2];
    if (compUrl.includes(resUrl)) {
        var hrefTitle = $("#getListTitles").val();
    }
    else {
        $("#PubtitleErrorSpan").html("Invalid PubTitle");
        $("#PubtitleErrorSpan").css("display", "block");
        $("#PubtitleErrorSpan").focus();
    }
    if ($("#PubtitleErrorSpan").html() != " ") {
        $("#PubtitleErrorSpan").css("display", "block");
        $("#PubtitleErrorSpan").focus();

    }
    if ($.trim(title).length == 0) {
        $("#PubtitleErrorSpan").css("display", "block");
        $("#PubtitleErrorSpan").html(" ");
        $("#PubtitleErrorSpan").append('<span> Please enter newspaper title </span>');
        setTimeout(function () { $("#PubtitleErrorSpan").focus() }, 400);
    }
    else {
        if ($.trim(title).length < 3) {
            $("#PubtitleErrorSpan").css("display", "block");
            $("#PubtitleErrorSpan").html(" ");
            $("#PubtitleErrorSpan").append('<span> Please enter atleast 3 characters </span>');
            setTimeout(function () { $("#PubtitleErrorSpan").focus() }, 400);
        }
    }
    if (hrefTitle != "" && $("#PubtitleErrorSpan").html() == " ") {
        $("#discovertitlesearch").attr('href', "https://" + DomainName + "/" + hrefTitle);
        window.location.href = $("#discovertitlesearch").attr('href');
    }
})

$(window).keydown(function (e) {
    var hrefTitle = $("#getListTitles").val();

    if (e.keyCode == 46 || e.keyCode == 8) {
        setTimeout(function () {
            if ($("#pubTitlesList").val() == "") {

                $("#PubtitleErrorSpan").css('display', 'none');
            }
        }, 500);
    }
    if (e.keyCode == 13) {
        if ($("#pubTitlesList").val() != "" && $("#PubtitleErrorSpan").html() != "") {
            $("#PubtitleErrorSpan").css("display", "block");
            $("#PubtitleErrorSpan").focus();
        }
        if ($("#pubTitlesList").val().length == 0) {
            $("#PubtitleErrorSpan").css("display", "block");
            $("#PubtitleErrorSpan").html('<span> Please enter newspaper title </span>');
            setTimeout(function () { $("#PubtitleErrorSpan").focus() }, 400);
        }
        else if ($("#pubTitlesList").val().length < 3 && $("#pubTitlesList").val() != "") {
            $("#PubtitleErrorSpan").css("display", "block");
            $("#PubtitleErrorSpan").html('<span> Please enter atleast 3 characters </span>');
            setTimeout(function () { $("#PubtitleErrorSpan").focus() }, 400);
        }

        if (hrefTitle != "" && $("#pubTitlesList").val() != "" && $("#pubTitlesList").val().length >= 3 && $("#PubtitleErrorSpan").html() == " ") {

            $("#discovertitlesearch").attr('href', "https://" + DomainName + "/" + hrefTitle);
            window.location.href = $("#discovertitlesearch").attr('href');
        }
    }

    //check if w is pressed if  searchByName has focus
    if (e.keyCode === 87 && $("#searchByName").is(":focus")) {
        setTimeout(function () { $("#discoverFirstName").focus() }, 500);
    }
    //check if s is pressed if  searchByKey has focus
    if (e.keyCode === 83 && $("#searchByKey").is(":focus")) {
        setTimeout(function () { $("#discoverKeyword").focus(); }, 500);
    }

    if (e.keyCode == 16 && $("#browseHeading").is(":focus")) {
        setTimeout(function () { $("#focus_subtitle").focus() }, 300);

    }
    if (e.shiftKey && e.keyCode == 9 && $("#discoverFirstName").is(":focus")) {
        setTimeout(function () { $("#searchByName").focus() }, 300);
    }
});

$(window).bind("pageshow", function () {

    $("#pubTitlesList").val("");
});

var isLoaded = false;
$(window).scroll(function () {
    if (!isLoaded) {
        var head = document.getElementsByTagName("head")[0];
        var slickjs = document.createElement('script')
        slickjs.setAttribute("type", "text/javascript")
        slickjs.setAttribute("src", "/Scripts/CustomScripts/Slicks.js");
        head.appendChild(slickjs);
         //Loading Images src path
        LoadHistoryImages();
        isLoaded = true;
        setTimeout(function () {
            $('#DayHistorySection').slick({
               // infinite: false,
                centerPadding: '20px',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                prevArrow: false,
                nextArrow: false,
                centerMode: true,
               
                customPaging: function (slider, i) {
                    return "<button class='clsbtnSliderDot' id='btnslider_"+(i+1)+"'/>";
                },
            });
           // if (IsMobile) {
            $('#DayHistorySectionv3').slick({
                infinite: false,
                    slidesToShow: 4,
                    // slidesToScroll: 4,
                    // asNavFor: '.slider-for',
                    dots: false,
                    centerMode: false,
                    focusOnSelect: false,
                    infinite: false,
                    responsive: [{
                        breakpoint: 767,
                        //settings: {
                        //    infinite: false,
                        //    slidesToShow: 1,
                        //    slidesToScroll: 1,
                        //    dots: true,
                        //    centerMode: true,
                        //    focusOnSelect: true,
                        //}
                        settings: {
                            infinite: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerPadding: '10px',
                            dots: true,
                            centerMode: true,
                            focusOnSelect: true,
                            arrows: false,
                            prevArrow: false,
                            nextArrow: false,
                        }
                    }
                    ]
                });
            //}
            $('.clsbtnSliderDot').click(function () {
                
                var index = $(this).attr("id").split('_')[1];
                var historyDate = $("#dayinhistorydate_" + index).html();
                var historydatehref = $("#dayinhistorydate_" + index).attr("href");
                $("#historydate").html(historyDate);
                $("#historydate").attr("href", historydatehref);
            });

            

        }, 800);
        //alert(IsMobile);
        if (IsMobile) {
            $(".AboutServices .AboutServicesItem.by-location").css("background", "url('https://" + DomainName + "/Content/Images/world-map-mobile.svg') no-repeat center bottom #fff");
            $(".AboutServices .AboutServicesItem.by-date").css("background", "url('https://" + DomainName + "/Content/Images/calendar-icon-mobile.svg') no-repeat center bottom #fff");
            $(".AboutServices .AboutServicesItem.by-publication").css("background", "url('https://" + DomainName + "/Content/Images/newspaper-collage-mobile.png') no-repeat center bottom #fff");

            $(".AboutServices .AboutServicesItem.by-location-mid").css("background", "url('https://" + DomainName + "/Content/Images/by-location-image.png') no-repeat center bottom #fff");
            $(".AboutServices .AboutServicesItem.by-date-mid").css("background", "url('https://" + DomainName + "/Content/Images/by-date-image.png') no-repeat center bottom #fff");
            $(".AboutServices .AboutServicesItem.by-publication-mid").css("background", "url('https://" + DomainName + "/Content/Images/by-publication-image.png') no-repeat center bottom #fff");
            
        }
        else {
            $(".AboutServices .AboutServicesItem.by-location").css("background", "url('https://" + DomainName + "/Content/Images/world-map.svg') no-repeat right bottom #fff");
            $(".AboutServices .AboutServicesItem.by-date").css("background", "url('https://" + DomainName + "/Content/Images/calendar-icon-lg.svg') no-repeat right bottom #fff");
            $(".AboutServices .AboutServicesItem.by-publication").css("background", "url('https://" + DomainName + "/Content/Images/newspaper-collage.png') no-repeat right bottom #fff");

            $(".AboutServices .AboutServicesItem.by-location-mid").css("background", "url('https://" + DomainName + "/Content/Images/by-location-image.png') no-repeat center bottom #fff");
            $(".AboutServices .AboutServicesItem.by-date-mid").css("background", "url('https://" + DomainName + "/Content/Images/by-date-image.png') no-repeat center bottom #fff");
            $(".AboutServices .AboutServicesItem.by-publication-mid").css("background", "url('https://" + DomainName + "/Content/Images/by-publication-image.png') no-repeat center bottom #fff");
           
        }
        if (window.location.pathname == "/homev3/") {
            $(".Imgexclusive").attr("src", "https://" + DomainName + "/Content/Images/exclusive-content.png");
        }
        $(".Imgbillion").attr("src", "https://" + DomainName + "/Content/Images/billions-names.png");
        $(".Imgorganize").attr("src", "https://" + DomainName + "/Content/Images/organize-S-share.png");

        $("#chkDrakLightSwitch").change(function (e) {
            e.preventDefault();
            if (this.checked) {
                $("#divthedayInHistory").removeClass("clsdark");
                $("#divthedayInHistory").addClass("theme-light");
            }
            else {
                $("#divthedayInHistory").removeClass("theme-light");
                $("#divthedayInHistory").addClass("clsdark");
            }
        });
    }
});

function LoadHistoryImages() {
    var cnt = 0;
    var imageIds = $('#hdnthisdayhistory').val().split(',');
    $.each(imageIds, function (index, value) {
        $('.imageHistory:eq(' + cnt + ')').attr('src', "https://" + DomainName + "/thumbimage.ashx?i=" + value + "&ishome=true");
        cnt = cnt + 1;
    });
}

//js for home page component
function copyIframe() {


    $('#txtIFrameEmbed').css("display", "block");
    var textIframe = document.getElementById("txtIFrameEmbed");
    textIframe.select();
    document.execCommand("copy");
    var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    $('.popuptext').show();
    $('.popuptext').delay(500).fadeOut();


}


$("#OpenCopyPopup").click(function () {
 
    // show Modal
    $('#CopyViewModal').modal('show');
    $('#txtIFrameEmbed').text('<iframe src="https://' + DomainName + '/homev4/thisdayinhistory" scrolling="no" frameborder="0" height="1100px" width="100%" style="border: 3px double #efefef;"></iframe><small style="display: block;">Found on <a href="https://' + DomainName + '/homev4/thisdayinhistory">Newspaperarchive.com</a></small>');

    //if (window.location.pathname == "/homev1/") {
    //    $('#txtIFrameEmbed').text('<iframe src="https://' + DomainName + '/homev4/thisdayinhistory" scrolling="no" frameborder="0" height="1100px" width="100%" style="border: 3px double #efefef;"></iframe><small style="display: block;">Found on <a href="https://' + DomainName + '/homev4/thisdayinhistory">Newspaperarchive.com</a></small>');
    //}
    //else if (window.location.pathname == "/homev2/") {
    //    $('#txtIFrameEmbed').text('<iframe src="https://' + DomainName + '/homev5/thisdayinhistory" scrolling="no" frameborder="0" height="1100px" width="100%" style="border: 3px double #efefef;"></iframe><small style="display: block;">Found on <a href="https://' + DomainName + '/homev5/thisdayinhistory">Newspaperarchive.com</a></small>');
    //}
    //else if (window.location.pathname == "/homev3/") {
    //    $('#txtIFrameEmbed').text('<iframe src="https://' + DomainName + '/homev3/thisdayinhistory" scrolling="no" frameborder="0" height="850px" width="100%" style="border: 3px double #efefef;"></iframe><small style="display: block;">Found on <a href="https://' + DomainName + '/homev3/thisdayinhistory">Newspaperarchive.com</a></small>');
    //}
});






