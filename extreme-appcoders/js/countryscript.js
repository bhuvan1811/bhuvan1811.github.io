const intlPhoneNumber = function(e) { const t = $.fn.intlTelInput.getCountryData(),
        n = $("#phone-number"),
        r = n.parents(".form-group").find("label"),
        l = $("#phone-number-country"),
        a = $(".phone-number-prefix"),
        o = $("#phone-number-full"),
        u = $("#error-msg"),
        i = e || "us"; let s = "";
    s = "us" === i ? "({{999}}) {{999}}-{{9999}}" : "{{9999999999999999999999}}"; const c = function() { n.attr("placeholder", "PHONE NUMBER"), n.removeClass("has-error"), r.removeClass("has-error"), u.addClass("hidden-xs-up") };
    $.each(t, function(e, t) { l.append($("<option></option>").attr("value", t.iso2).text(t.name)) }), n.intlTelInput({ allowDropdown: !1, initialCountry: i, utilsScript: "https://1cf5229636340d3e1dd5-0eccc4d82b7628eccb93a74a572fd3ee.ssl.cf1.rackcdn.com/testing/utils.js" }); const p = n.intlTelInput("getSelectedCountryData").iso2; let d = n.intlTelInput("getSelectedCountryData").dialCode;
    l.val(p), a.text("+" + d), n.formatter({ pattern: s }), $(".flag-container").remove(), $(".intl-tel-input").replaceWith(function() { return $("#phone-number", this) }), n.attr("placeholder", "Phone Number"), n.blur(function() { c(), $.trim(n.val()) && (n.intlTelInput("isValidNumber") ? o.val(n.intlTelInput("getSelectedCountryData").dialCode + n.val()) : (n.addClass("has-error"), r.addClass("has-error"), u.removeClass("hidden-xs-up"), o.val(""))) }), n.on("keyup change", c), l.change(function() { n.intlTelInput("setCountry", $(this).val()), d = n.intlTelInput("getSelectedCountryData").dialCode, a.text("+" + d), s = n.attr("placeholder").replace(new RegExp("[0-9]", "g"), "9").replace(/([9]\d{0,10})/g, "{{$1}}"), n.formatter().resetPattern(s), n.val(""), n.attr("placeholder", "Phone Number") }) };
intlPhoneNumber();