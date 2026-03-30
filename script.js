function updateTime(){
    const now = new Date();

    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
    };

    const date = now.toLocaleDateString('en-GB', options);
    const time = now.toLocaleTimeString('en-GB');

    document.getElementById("live-date").innerHTML = date + " | " + time;
}

setInterval(updateTime,1000);
updateTime();

document.querySelector(".menu-parent").addEventListener("click", function(){
    const submenu = this.querySelector(".submenu");
    submenu.classList.toggle("show");
});

<script>
function openLink(url) {
    window.open(url, '_blank'); // open in new tab
}
</script>
