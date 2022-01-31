export const storeData = (word, language) => {
    var wordData

    if (word.length !== 0) {
        if (localStorage.words) {
            wordData = JSON.parse(localStorage.getItem("words") || "[]")
            var filteredWordData = wordData.filter(storedWord => storedWord.word !== word)
            
            if (filteredWordData.length >= 4) 
                filteredWordData = filteredWordData.slice(0,4)

            wordData = [{word, language}, ...filteredWordData]
        } else 
            wordData = [{word, language}]
        
        localStorage.setItem('words', JSON.stringify(wordData))
    }
}