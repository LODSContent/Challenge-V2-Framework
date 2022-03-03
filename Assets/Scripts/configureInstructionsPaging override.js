function configureInstructionsPaging() {
    var numPages = $(".page").length;
    if (pageIndex > numPages - 1) { //in case pages have changed and the page the user was on is no longer available.
        pageIndex = 0;
    }
    if (pageIndex === 0) {
        $("#previous").addClass("disabled");
    } else {
        $("#previous").removeClass("disabled");
    }
    if (numPages <= pageIndex + 1) {
        if (labData.IsExam) {
            $("#next").text("Submit");
        } else if ($("#exit").length > 0) {
            $("#next").text("End");
        } else {
            $("#next").addClass("disabled");
        }
    } else {
        var nextLabel = "Next";
        var pageWidth = $(window).width();
        if (pageWidth > 340) {
            var $nextPageTitle = { length: 0, text: '' }
            if ($("#page" + (pageIndex + 1) + " > :first-child").is(":header")) {
                $nextPageTitle = $("#page" + (pageIndex + 1) + " > :first-child")
            }
            else if ($("#page" + (pageIndex + 1) + " > :first-child").is(":include")) {
                $nextPageTitle = $("#page" + (pageIndex + 1) + " > :first-child > h1")
            }
            if ($nextPageTitle.length > 0) {
                var maxLength = pageWidth >= 450 ? 40 : (pageWidth > 405 ? 33 : 28);
                nextLabel += ": " + truncate($nextPageTitle.text(), maxLength, true);
            }
        }
        $("#next").text(nextLabel).removeClass("disabled");
    }
    $(".page").removeClass("selected");
    var $currentPage = $("#page" + pageIndex);
    $currentPage.addClass("selected");

    if ($currentPage.find("iframe.externalManual").length > 0) {
        $instructionsContent.addClass("externalManual");
    } else {
        $instructionsContent.removeClass("externalManual");
    }

    setupKnowledgeExpanders($currentPage);
    refreshTerminalIFrames($currentPage);
    $instructionsNavigation.show();
    $instructionsContent.addClass("withNavigation");

    $currentPage.find(".virtual-machine-console").each(function () {
        var $vmConsole = $(this);
        if ($vmConsole.find("iframe").length === 0) {
            var vmId = $vmConsole.attr("data-id");
            var $existingInLab = $instructionsContent.find(".virtual-machine-console[data-id='" + vmId + "'] iframe");
            var $existingInPage = $currentPage.find(".virtual-machine-console[data-id='" + vmId + "'] iframe");
            var url = "/VirtualizationClient/" + model.key + "?autoFocus=0&vmonly=1&vmId=" + vmId;
            if ($existingInLab.length > 0) {
                url += "&takeControl=1";
            }
            $vmConsole.html("<iframe src='' style='width:" + $vmConsole.attr("data-width") + "px; height:" + $vmConsole.attr("data-height") + "px; border:none;'>");
            window.setTimeout(function () {
                $vmConsole.find('iframe').attr("src", url);
            }, $existingInPage.length * 100);
        }
    });
}