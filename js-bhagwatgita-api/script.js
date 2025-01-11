
let sideData = document.querySelector('.sideData');
let dataContainer = document.querySelector('.dataContainer');

fetch('https://vedicscriptures.github.io/chapters').then((response) => {

    return response.json();

}).then((resData) => {

    console.log(resData);

    sideData.innerHTML = "";

    for (const key in resData) {
        console.log(resData[key].translation);

        sideData.innerHTML += `<div onclick="return shlok('${resData[key].chapter_number}')"><ul>${resData[key].chapter_number}. ${resData[key].translation}(${resData[key].name})</ul></div>`
    }

}).catch((e) => {
    console.log(e);
});

let shlok = (ch_number) => {
    console.log(ch_number);

    fetch(`https://vedicscriptures.github.io/chapter/${ch_number}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
             dataContainer.innerHTML = `
              <h1>${data.chapter_number}. ${data.name} (${data.meaning.en})</h1>
                <p>MEANING IN ENGLISH: ${data.meaning.en}</p>
                <p>${data.summary.en}</p>
                <p>MEANING IN HINDI: ${data.meaning.hi}</p>
                <p>${data.summary.hi}</p>
                <p>TRANSLATION: ${data.translation}</p>
                <p>TRANSLITERATION: ${data.transliteration}</p>
                <button onclick="return verse(${data.chapter_number}, 1)">
                    VERSES COUNT: ${data.verses_count}
                </button>`;
            console.log(data.summary.hi);

        }).catch((e) => {
            console.log(e);
        })
    
}

let verse = (chapter_number, verse_number) => {

    fetch(`https://vedicscriptures.github.io/slok/${chapter_number}/${verse_number}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            dataContainer.innerHTML = `
                <h2>Verse : ${data.verse} </h2>
                <h2>Chapter :${data.chapter}</h2>
                <p>TRANSLATION: ${data.slok}</p>
                <p>TRANSLITERATION: ${data.transliteration}</p>
                <p>MEANING IN ENGLISH: ${data.tej.author}</p>
                <p>MEANING IN HINDI: ${data.tej.ht}</p>`;
                
        })
        .catch(e => {
            console.log(e);
        });
};