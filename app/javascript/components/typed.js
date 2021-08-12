import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

<script>
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings'
  });
</script>

var typed = new Typed('.element', options);
