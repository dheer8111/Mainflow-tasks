var drop_1="nav ul li.dropdown1",
drop_menu_1="ul.dropdown-menu1",
drop_2="nav ul li.dropdown2",
drop_menu_2="ul.dropdown-menu2";

$(drop_1).on({
mouseenter:function() {
            $(drop_menu_1).slideDown(500);
            },
mouseleave:function() {
            $(drop_menu_1).slideUp(500);
            }
});

$(drop_2).on({
mouseenter:function() {
            $(drop_menu_2).slideDown(500);
            },
mouseleave:function() {
            $(drop_menu_2).slideUp(500);
            }
});