<script>
function cambiarTrack(track) {
   var path =  track.getAttribute("path")
   viejo_audio = document.getElementById("reproductor")
   audio_padre = viejo_audio.parentNode
   audio_padre.removeChild(viejo_audio)
   nuevo_audio = document.createElement("audio")
   nuevo_audio.setAttribute("id","reproductor")
   nuevo_audio.setAttribute("controls", "controls")
  // nuevo_audio.setAttribute("autoplay", "autoplay")
   source = document.createElement("source")
   source.setAttribute("src", path)
   source.setAttribute("type", "audio/mpeg")
   source.setAttribute("id", "reproductorSource")
   nuevo_audio.appendChild(source)
   audio_padre.appendChild(nuevo_audio)}
function cargarReproductor() {
         var select = document.getElementById("selectTrack")
         var path = select.options[0].getAttribute("path")
   nuevo_audio = document.createElement("audio")
   nuevo_audio.setAttribute("id","reproductor")
   nuevo_audio.setAttribute("controls", "controls")       
   source = document.createElement("source")
   source.setAttribute("src", path)
   source.setAttribute("type", "audio/mpeg")
   source.setAttribute("id", "reproductorSource")
   nuevo_audio.appendChild(source)
   padre = document.getElementById("reproductorBox")
   padre.appendChild(nuevo_audio)
}
</script>
<div id="reproductorBox"></div>
<select id = "selectTrack" multiple onchange="cambiarTrack(this.options[this.selectedIndex]);">
<option path="../music/take-on-me.mp3">Ah Ah - Take on me</option>
<option path="../music/dust-in-the-wind.mp3">Kansas - Dust in the wind</option>
<option path="../music/how-deep-is-your-love.mp3">Bee Geees - How deep is your love</option>
</select>
<script>cargarReproductor();</script>