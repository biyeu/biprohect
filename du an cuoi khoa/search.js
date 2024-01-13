document.getElementById('back').addEventListener("click", function(){
    window.location.href = 'duan.html'
})
let term = ''
const  updateTerm = ()=>{
    term = document.getElementById('searchTerm').value;
    if(!term || term === ''){
        alert('please enter')
    }else{
        const url = `https://itunes.apple.com/search?term=${term}`;
        const songContainer = document.getElementById('songs');
        while(songContainer.firstChild){
            songContainer.removeChild(songContainer.firstChild);
        }
        fetch(url)
            .then((Response) => Response.json())
            .then((data) =>{
                // console.log(data)
                const artists = data.results
                return artists.map(result =>{
                    
                    const article = document.createElement('article'),
                        artists = document.createElement('p'),
                        song = document.createElement('h4'),
                        img = document.createElement('img'),
                        audio = document.createElement('audio'),
                        audioSource = document.createElement('source')
                    // console.log(result);
                    artists.innerHTML = result.artistName;
                    song.innerHTML = result.trackName;
                    img.src = result.artworkUrl100;
                    audioSource.src = result.previewUrl;
                    audio.controls = true;


                    article.appendChild(img);
                    article.appendChild(artists);
                    article.appendChild(song);
                    article.appendChild(audio);
                    audio.appendChild(audioSource);

                    songContainer.appendChild(article);
                })
            })
            .catch(error=>console.log('request failed', error))
    }
}


const searchBtn = document.getElementById('searchTermbtn');
searchBtn.addEventListener('click', updateTerm)

document.addEventListener('play', event=>{
    const audio = document.getElementsByTagName('audio');
    for(let i = 0; i < audio.length; i++){
        if (audio[i] != event.target){
            audio[i].pause()
        }
    }
})