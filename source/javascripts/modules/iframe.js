$(document).ready(function () {

    //Resizes the patterns in the iframes
    var $iframeControls = $('.js-iframe-controls')

    $iframeControls.each(function (i, iframeControl) {
        var $iframeControl = $(iframeControl)
        var $iframe = $('.js-iframe', $iframeControl)

        $iframeControl.on("click", ".js-iframe-resize-btn", function () {
            var iframeSize = $(this).attr('value')
            $iframe.removeClass('small medium large').addClass(iframeSize)
        })
    })
})