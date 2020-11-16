class Giphy {

    constructor(keyword) {
        this.keyword = keyword;
        //endpoint es la url donde vamos a ir a buscar los gif
        this.endpoint = "http://api.giphy.com/v1/gifs";
        this.api_key = "dc6zaTOxFJmzC";
    }

    getGiftUrl(callback) {
        //peticion ajax
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 
        this.endpoint+"/translate?api_key="+this.api_key+"&s="+this.keyword); //translate busca en giphy un gif con la palabra que le enviamos
        
        xhr.responseType = "json";

        xhr.onload = function() {
            //nos devuelve la url del gif en formato mp4
            callback(this.response.data.images.original.mp4);
        }

        xhr.send();
    }

//Esta funcion va a generar un objeto de esta clase Giphy
//getUrlAsync devuelve la url del video donde esta el GIF y se ejecuta en forma asyncrona 
    static getUrlAsync(keyword,callback) {
        return new Giphy(keyword).getGiftUrl(callback);
    }
}

