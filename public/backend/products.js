$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

function resetFile(input) {
    var $el = input.wrap('<form id="clearfiles"></form>');
    document.getElementById("clearfiles").reset();
    input.unwrap();
}


$(document).on('click', '.remove-image', function(e) {
    e.preventDefault();
    e.stopPropagation()
    let self = $(this)
    let randid = self.data('randid')
    self.text('Deleting....')

    let parent = self.parents('.j-drop');
    let upload_text = parent.find('.upload-text')
    let file = parent.find('.upload_input')
    let mode = self.data('mode');
    let image_id = self.data('id');
    let model = self.data('model');


    let type = self.data('type');
    let payload = {
        image_url: self.data('url'),
        type: type,
        image_id: image_id,
        model: model
    }


    $.ajax({
        url: '/admin/delete/image?folder=products',
        type: 'POST',
        data: payload,
        success: function(data) {
            $("#" + randid).remove()
            if (parent.find('.j-complete').length == 0) {
                upload_text.removeClass('hide')
                resetFile(file)
                file.attr('disabled', false)
                    //check if we are in editting mode
                console.log(mode)
                if (typeof mode !== 'undefined') {
                    file.attr('required', true)
                }
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {}
    });
})




function getFile(e, name, model = null, multiple = true) {
    let parent = e.parentNode;
    let file = e.parentNode.querySelector(".upload_input");
    let file_error = e.parentNode.querySelector("#img-error");
    if (file_error !== null) {
        file_error.remove()
    }
    parent.querySelector('.upload-text').classList.add('hide')
    let target = parent.querySelector("#j-details");
    let parent1 = document.createElement('div');
    parent1.setAttribute('class', 'j-complete j-loading')
    let parent2 = document.createElement('div');
    parent2.setAttribute('class', 'j-preview loading')
    if (typeof file !== 'undefined') {
        parent1.appendChild(parent2)
        target.appendChild(parent1)
    }

    let form = new FormData();

    form.append('file', file.files[0])
    $.ajax({
        url: '/admin/upload/image?folder=products',
        type: 'POST',
        data: form,
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            if (data.path) {
                let rand = Math.floor((Math.random() * 1000000000) + 1)
                let html = '';
                html += '<div   id="' + rand + '" class="j-complete">'

                html += '<div  class="j-preview j-no-multiple">'
                html += '<img class="img-thumnail" src="' + data.path + '" />'
                html += '<div id="remove_image" class="remove_image remove-image">'
                    //this will allow for multiple images
                html += '<a  class="remove-image" data-model="' + model + '"  data-randid="' + rand + '" data-url="' + data.path + '"  href="#">Remove</a>'
                html += '</div>'
                html += '<input type="hidden" class="file_upload_input stored_image_url"  value="' + data.path + '"  name="' + name + '">'
                html += '</div>'
                html += '</div>'
                var divs = document.querySelectorAll(".j-loading"),
                    i;
                for (i = 0; i < divs.length; ++i) {
                    divs[i].remove()
                }
                if (!multiple) {
                    file.setAttribute('disabled', true);
                }
                target.insertAdjacentHTML('beforeend', html)
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var divs = document.querySelectorAll(".j-loading"),
                i;
            for (i = 0; i < divs.length; ++i) {
                divs[i].remove()
            }
        }

    });



}





$(document).ready(function() {
    if (document.querySelector('.datetimepicker')) {
        flatpickr('.datetimepicker', {
            allowInput: true,
            minDate: "today"

        }); // flatpickr
    }

    if (document.querySelector('.timepicker')) {
        flatpickr('.timepicker', {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        }); // flatpickr
    }
});


if (document.querySelector('.datetimepicker')) {

    CKEDITOR.replace('description', {
        height: '200px',
        width: '100%',
        // toolbar: [
        //     '/',
        //     { name: 'paragraph', groups: ['list', 'indent', ], items: ['BulletedList'] },
        //     '/',
        // ]
    })

}


var row = 0;

function addRowShedule() {
    let html = '<div id="row-' + row + '" class="row dup-lagos my-3 ">';
    html += '<div class="col-sm-3">';
    html += '<div class="input-group input-group-outline">';
    html += '<label class="form-label"></label>';
    html += '<input type="text" class="form-control datetimepicker" required placeholder="Start Date" name="sch[start_time][]" data-input>';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-sm-3">';
    html += '<div class="input-group input-group-outline">';
    html += '<label class="form-label"></label>';
    html += '<input type="text" class="form-control datetimepicker" required placeholder="End Date" name="sch[end_time][]">';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-sm-2">';
    html += '<div class="input-group input-group-outline">';
    html += '<label class="form-label"></label>';
    html += '<input type="text" class="form-control timepicker" required placeholder="Start time" name="sch[start_time][]">';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-sm-2">';
    html += '<div class="input-group input-group-outline">';
    html += '<label class="form-label"></label>';
    html += '<input type="text" class="form-control timepicker" required placeholder="End time" name="sch[end_time][]">';
    html += '</div>';
    html += '</div>';
    html += '<div class="col-sm-1">';
    html += '<button onclick="$(\'#row-' + row + '\').remove();"  class="remove-section-lagos btn btn-outline-primary btn-sm mb-0" type="button" ><i class="fa fa-trash"></i> </button>';
    html += '</div>';
    html += '</div>';
    $("div.schedule:last").after(html);
    row++;

    if (document.querySelector('.datetimepicker')) {

        flatpickr('.datetimepicker', {
            allowInput: true,
            minDate: "today"
        }); // flatpickr
    }

    if (document.querySelector('.timepicker')) {
        flatpickr('.timepicker', {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        }); // flatpickr
    }
}

var Img = {
    loadImage: function() {},
    deleteImage: function(opts = {}) {
        let fileName, activator, parent;
        $(document).on("click", opts.activator, function(e) {
            e.preventDefault();
            activator = $(this);
            parent = activator.parents(".uploadloaded_image");
            opts.inputFile;
            var $el = opts.inputFile.wrap('<form id="clearfiles"></form>');
            document.getElementById("clearfiles").reset();
            opts.inputFile.unwrap();
            let params = {
                image_url: parent.find("input.stored_image").val(),
                image_id: activator.data("id"),
                delete: true,
            };
            $.ajax({
                url: opts.url,
                type: "POST",
                data: params,
                beforeSend: function() {
                    $(document)
                        .find("label#main_image-error")
                        .remove();
                    parent.find("div.upload-text").addClass("hide");
                    parent.find("img#stored_image").addClass("hide");
                    parent.find("div.remove_image").addClass("hide");
                    parent.append(
                        '<img id="image_loader" src="/images/loaders/ajax-loader.gif" class="upload_spinner">'
                    );
                },
                success: function(data) {
                    parent.find("img.upload_spinner").remove();
                    parent.find("div.upload-text").removeClass("hide");
                    parent.find("img#stored_image").remove();
                    parent.find("input.stored_image").val("");
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    parent.find("img.upload_spinner").remove();
                    //parent.find('div.upload-text').removeClass('hide');
                    parent.find("img#stored_image").removeClass("hide");
                    parent.find("div.remove_image").removeClass("hide");
                },
            });
        });
    },
    initUploadImage: function(opts = {}) {
        let fileName, activator, parent;
        console.log(opts.inputFile)
        $(document).on("click", opts.activator, function(e) { opts.inputFile.click() })

        if (opts.inputFile !== null) {
            opts.inputFile.on("change", function(e) {
                parent = $(this).parents(".uploadloaded_image");
                var image_url = parent.find("input.file_upload_input").val();
                var image_id = parent.find("input.stored_image_id").val();
                //Disable the submit button
                var formData = new FormData();
                var ins = this.files;
                var self = $(this);
                for (var x = 0; x < ins.length; x++) {
                    if (!ins[x].type.match("image.*")) {
                        resetFile(opts.inputfile);
                        proceed = false;
                        return false;
                    }
                    if (ins[x].size > 10000000) {
                        resetFile(inputfile);
                        proceed = false;
                        return;
                    }
                    formData.append("file", ins[x]);
                    formData.append("file_name", fileName);
                    formData.append("image_url", image_url);
                    formData.append("image_id", image_id);
                }

                $.ajax({
                    url: opts.url,
                    type: "POST",
                    data: formData,
                    beforeSend: function(xhr) {
                        // opts.inputFile.attr('disabled',true)
                        //$(opts.activator).addClass('uploading')
                        $(document)
                            .find("label#main_image-error")
                            .remove();
                        parent.find("div.upload-text").addClass("hide");
                        parent.find("img#stored_image").remove();
                        parent.find("div.remove_image").addClass("hide");
                        parent.append(
                            '<img id="image_loader" src="/images/loaders/ajax-loader.gif" class="upload_spinner">'
                        );
                    },
                    cache: false,
                    contentType: false,
                    processData: false,
                    complete: function() {
                        //opts.inputFile.attr('disabled',false)
                        // $(opts.activator).removeClass('uploading')
                    },
                    success: function(data) {
                        let path = $.trim(data.path);
                        console.log(data);
                        parent.find("img.upload_spinner").remove();
                        parent.append(
                            '<img id="stored_image"  class="img-thumnail" src="' +
                            path +
                            '" alt="">'
                        );
                        parent.find("div.remove_image").removeClass("hide");
                        parent.find("input.stored_image").val(path);
                        parent.find("a.stored_image").val(path);

                        localStorage.setItem("first_image", path);
                        let image = localStorage.getItem("first_image");
                        parent.find("input.stored_image").val(path);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        parent.find("img.upload_spinner").remove();
                        parent.find("div.upload-text").removeClass("hide");
                    },
                });
                //return false;
            });
        }
    },
};