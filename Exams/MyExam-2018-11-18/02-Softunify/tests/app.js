class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }
    
    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }
        
        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);
        
        return this;
    }
    
    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {
            
            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);
            
            if(songs.length > 0){
                acc[cur] = songs;
            }
            
            return acc;
        }, {});
        
        let arr = Object.keys(songArtists);
        let output = "";
        
        if(arr.length > 0){
            
            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });
            
        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }
        
        return output;
    }
    
    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);
        
        let output;
        
        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }
        
        return output;
        
    }
    
    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;
        
        if (artistExist) {
            
            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }
            
            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;
            
        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }
        
        return output;
    }
}

let expect = require("chai").expect;

describe("Softunify Tests", function() {
    let softunify;
    beforeEach(function () {
        softunify = new SoftUniFy();
    });
    it('should return empty array', function () {
        expect(Object.keys(softunify.allSongs).length).to.equal(0);
    });
    it('should add songs in proper format', function () {
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        softunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

        expect(softunify.songsList).to.equal("Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ");
    });
    it('should return no artist message', function () {
        let result = softunify.rateArtist('Eminem');
        expect(result).to.equal(`The Eminem is not on your artist list.`);
    });
    it('should return no artist message', function () {
        let result = softunify.rateArtist('Eminem', 50);
        expect(result).to.equal(`The Eminem is not on your artist list.`);
    });
    it('should return empty song list', function () {
        expect(softunify.songsList).to.equal('Your song list is empty');
    });
    it('should wrong song message', function () {
        let result = softunify.playSong("Phenomenal");
        expect(result).to.equal(`You have not downloaded a Phenomenal song yet. Use SoftUniFy's function downloadSong() to change that!`)
    });
    it('should play a song', function () {
        softunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        softunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        softunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        let result = softunify.playSong("Phenomenal");
        expect(result).to.equal(`Eminem:\nPhenomenal - IM PHENOMENAL...\n`)
    });
});