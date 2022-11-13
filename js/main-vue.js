const App = {
    // Data model
    data() {
        return {
            API: "https://api.lyrics.ovh",
            searchTerm:"",
            songs: []
        }
    },
    // Utility methods
    methods: {
       async searchSongs() {
        try {
            const request = await fetch(`${this.API}/suggest/${this.searchTerm}`)
            const songs = await request.json()
            this.songs = songs.data
        } catch (error) {
            console.error(error.message)
        }
            
             
         },
        
         async getSong(artist, title) {
            try {
                const request = await fetch(`${this.API}/v1/${artist}/${title}`)
            const response = await request.json()
            const lyric = response.lyrics
            this.showSong(artist, title, lyric)
            } catch (error) {
                console.log(error.message)
            }
         },

         showSong(artist, title, lyric) {
              console.log(artist, title, lyric)
         }
          
             
    }
}

Vue.createApp(App).mount("main")