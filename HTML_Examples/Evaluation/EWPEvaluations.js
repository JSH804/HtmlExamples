
$(document).ready(function(){   
        $('input:checkbox').click(function() {      
            $('input:checkbox[name="' + this.name + '"]').not(this).prop('checked', false);
        })   
});
