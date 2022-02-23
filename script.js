AFRAME.registerComponent('screenhandler', {
    init: function() {
        console.log("In Init for Screen Handler");

        var el = this.el;
        el.addEventListener('click', function() {
            el.setAttribute("material", "src", "#bluder-cake");

            var videoEl = document.querySelector("#video");
            el.setAttribute("visible", true);

            console.log("Playing video");
            videoEl.play();
        });
    }
});