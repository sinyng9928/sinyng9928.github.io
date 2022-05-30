function makeMap(lat, lng){
    var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lng),
        level: 3
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    
    var markerPosition  = new kakao.maps.LatLng(lat, lng); 
    
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);
    map.setDraggable(false);
    map.setZoomable(false);

}

let tabMenu = $('.tab_btn'),
    tabContent = $('.location_content #map'),
    mapContent = $('.addrbox > div');

tabMenu.click(function(){
    tabMenu.removeClass('active');
    $(this).addClass('active');
    let t = $(this).find('button').attr('data-lat');
    let l = $(this).find('button').attr('data-lng');
    makeMap(t, l);

    activeTab($(this).index());
});

function activeTab(idx){
    mapContent.removeClass('active');
    mapContent.eq(idx).addClass('active');
}
tabMenu.eq(0).trigger('click');