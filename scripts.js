// Place the following script in the header using code injection

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// Place the following script in the footer using code injection

//<!-- AUTOPLAY FOR THE AUTO LAYOUT BANNER SLIDESHOW (7.1) -->
<script>
  $(function () {
    window.setInterval(function () {
     $('body:not(.sqs-edit-mode-active) .user-items-list-banner-slideshow__arrow-button--right').click();
    }, 7000);
  });
</script>

