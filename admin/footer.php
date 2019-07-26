
</body>
<script
	src="src/js/jquery-2.2.4.js"></script>
<!-- Compiled and minified JavaScript -->
<script src="src/js/materialize.min.js"></script>

<script>
	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems, options);

	});

	$(document).ready(function(){
		$('.sidenav').sidenav();
		$('.dropdown-trigger').dropdown();
	});
</script>

</html>