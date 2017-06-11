$(document).ready(function() {
	$('.delete-article').on('click', function(e) {
		const confirm_delete = confirm('Вы действительно хотите удалить данную статью?');
		if (confirm_delete){
				$target = $(e.target);
				const id = $target.attr('data-id');
			$.ajax({
				type: 'DELETE',
				url: '/articles/' + id,
				success: function(response) {
					window.location.href = '/articles';
				},
				error: function(err) {
					console.log(err);
				}
			});
		}else{
			return;
		};
	});
});