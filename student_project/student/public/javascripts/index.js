
(function (global, $) {
    $("#save").click(function () {
        $.ajax({
            dataType: "json",
            async: true,
            data: {
                name: $("#name").val(),
                chinese: $("#chinese").val(),
                english: $("#english").val(),
                math: $("#math").val()
            },
            type: "POST",
            success: function (res) {
                if (!res.result) {
                    layer.open({
                        title: "请求失败",
                        content: res.message, 
                        skin: 'layui-layer-lan',
                        icon: 2,
                        closeBtn: 0,
                        anim: 2
                    });
                    return false;
                }
                var newDom = '<p>' + res.message + '</p>';
                $('.add-save').after(newDom);
                setTimeout(function () {
                    location.assign('/');
                }, 500);
            },
            error: function (res) {
                layer.open({
                    title: "请求失败",
                    content: "请重试",
                    skin: 'layui-layer-lan',
                    icon: 2,
                    closeBtn: 0,
                    anim: 2
                });
            },
            complete: function () {}
        });
    })
})(window, jQuery);