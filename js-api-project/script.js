let sideData = document.querySelector('.sideData');
let containerData = document.querySelector('.containerData');

// if (sideData && containerData) {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((rec) => rec.json())
        .then((recData) => {
            console.log(recData.message);

            let data = recData.message;
            let content = ""; 

            for (const key in data) {
                let divData = `<div onclick="logData('${key}')">${key}`;
                if (data[key].length > 0) {
                    let ulData = `<ul>`;
                    data[key].forEach((element) => {
                        ulData += `<li>${element}</li>`;
                    });
                    ulData += `</ul>`;
                    divData += ulData;
                }
                divData += `</div>`;
                content += divData; 
            }
            
            sideData.innerHTML += content;
            
        })
        .catch((e) => console.log(e));
    // }

    let logData = (key) => { 
        console.log(`${key}`);
        fetch(`https://dog.ceo/api/breed/${key}/images`)
            .then((res) => res.json())
            .then((resData) => {
                console.log(resData.message);
    
                let resD = resData.message;
                containerData.innerHTML = ""; 
    
                let rowContent = `<div class="row my-4">`;
    
                resD.forEach((url) => {
                    rowContent += `
                        <div class="col-md-3 mb-4">
                            <div class="card" style="width: 100%;">
                                <img src="${url}" class="card-img-top" alt="Dog image">
                            </div>
                        </div>
                    `;
                });
    
                rowContent += `</div>`; 
                containerData.innerHTML = rowContent;
            })
            .catch((e) => console.log(e));
    };
    


// let containerData = document.querySelector('.containerData');

// fetch("https://dog.ceo/api/breeds/list/all").then((rec) => {
//     return rec.json();
// }).then((recData) => {
//     console.log(recData.message);

//     sideData.innerHTML = "";

//     for (const key in recData.message) {
//         if (recData.message[key].length > 0) {
//             let dropdown = `<div>
//                                 <select class="breed">
//                                 <button onclick="return breedLog(${key})"><option>${key}
//                                     </option></button>`;
//             recData.message[key].forEach((subBreed) => {
//                 dropdown += `<option value="${subBreed}">${subBreed}</option>`;
//             });

//             dropdown += `</select></div>`;
//             sideData.innerHTML += dropdown;
//         } else {
//             sideData.innerHTML += `<div>${key}</div>`;
//         }

//         // console.log("Hello");

//     }

// }).catch((e) => {
//     console.log(e);
// });

// const breedLog = (key)=>{
//     console.log("Select",key);
// }

