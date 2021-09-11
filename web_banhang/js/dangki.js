$(document).ready(function() {
    function kiemtraten(){
        var ten = $("#txtuser").val();
        var reg = /^[a-zA-Z0-9]{8,20}$/;
        if (reg.test(ten)) {
            $("#tbuser").html("(*)");
            return true;
        } else {
            $("#tbuser").html("Ten dang nhap sai dinh dang!!!");
            return false;
        }
    }
    function kiemtramk() {
            var mk = $("#txtpass").val();
            var regmk = /^[A-za-z0-9].{6,}$/;
            if (regmk.test(mk)) {
                $("#tbpass").html("(*)")
                return true;
            } else {
                $("#tbpass").html("Mat khau it nhat 7 ki tu!!!");
                return false;
            }
    }
    
   
    function kiemtratuoi (){
        var ns = new Date($("#txtns").val());
        var cur = new Date();
        if (cur.getFullYear()-ns.getFullYear() >= 18) {
            $("#tbns").html("(*)");
            return true;
        } else {
            $("#tbns").html("Bạn cần đủ 18 tuổi!!!");
             return false;
        }
    }   
    function kiemtralaimk(){
        var mk = $("#txtpass").val();
        var nlmk = $("#txtmklai").val();
        if (mk == nlmk) {
            $("#ermklai").html("(*)");
            return true;
        } else {
            $("#ermklai").html("mật khẩu không trùng khớp !!!");
            return false;
        }
    }
   function kiemtrahoten(){
        var ten = $("#txtname").val();
        var re = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*){1}$/;
        if (re.test(ten)) {
            $("#tbname").html("(*)");
            return true;
        } else {
            $("#tbname").html("Họ tên sai định dạng vd: Phan Dai !!!");
            return false;
        }
    }
    function kiemtradiachi(){
        var diachi = $("#txtadd").val();
        var re = /^$/;
        if (diachi != "") {
            $("#tbadd").html("(*)");
            return true;
        } else {
            $("#tbadd").html("Nhap dia chi !!!");
            return false;
        }
    }
    function kiemtrasdt(){
        var sdt = $("#txtphone").val();
        var re = /^[0-9]{9,10}$/;
        if (re.test(sdt)) {
            $("#tbphone").html("(*)");
            return true;
        } else {
            $("#tbphone").html("Nhập lại số điện thoại đúng định dạng vd:123456789!!!");
            return false;
        }
    }
    function kiemtraemail(){
        var email = $("#txtemail").val();
        var re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if (re.test(email)) {
            $("#tbemail").html("(*)");
            return true;
        } else {
            $("#tbemail").html("Nhập Email đúng định dạng !!!");
            return false;
        }
    }
    $("#txtuser").blur(kiemtraten);
    $("#txtpass").blur(kiemtramk);
    $("#txtns").blur(kiemtratuoi);
    $("#txtmklai").blur(kiemtralaimk); 
    $("#txtname").blur(kiemtrahoten) ;
    $("#txtadd").blur(kiemtradiachi) ;
    $("#txtphone").blur(kiemtrasdt); 
    $("#txtemail").blur(kiemtraemail);
    
    
})