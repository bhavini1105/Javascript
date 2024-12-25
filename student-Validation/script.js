
let fname = document.getElementById('fName');
let lname = document.getElementById('lName');
let email = document.getElementById('inputEmail');
let password = document.getElementById('inputPassword');
let add = document.getElementById('inputAddress');
let city = document.getElementById('inputCity');
let state = document.getElementById('inputState');
let pin = document.getElementById('inputpin');
let stu_id = document.getElementById('stu_id');
let btn = document.getElementById('btn'); 
let selection=[];

let tbody = document.querySelector('tbody'); 



let studentsData = []; 
let isEdit = false; 

const getSelection = () => {
    return JSON.parse(localStorage.getItem('studentRec')) || [];
};

// Fetch records from localStorage
const getRecorddata = () => {
    studentsData = JSON.parse(localStorage.getItem("studentData")) || [];
    return studentsData;
};

// Handle form submission
const submitbtn = () => {
    event.preventDefault();

    if (isEdit) {
        let updatedRecord = {
            id: stu_id.value,
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            password: password.value,
            add: add.value,
            city: city.value,
            state: state.value,
            pin: pin.value
        };

        let records = getRecorddata();
        let updatedData = records.map((recid) =>
            recid.id == updatedRecord.id ? updatedRecord : recid
        );

        localStorage.setItem("studentData", JSON.stringify(updatedData));
        isEdit = false; // Reset edit mode
        stu_id.value = ""; 

    }
    else {
        // Add new record
        let newRecord = {
            id: Math.floor(Math.random() * 1000), // Generate random ID
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            password: password.value,
            add: add.value,
            city: city.value,
            state: state.value,
            pin: pin.value
        };

        studentsData = getRecorddata();
        studentsData.push(newRecord);
        localStorage.setItem("studentData", JSON.stringify(studentsData));
    }

    document.getElementById("formsubmit").reset();
    showData();
};

// Edit record

const updatestd = (id) => {
    let records = getRecorddata();
    let single = records.find((stu_rec) => stu_rec.id == id);

    if (single) {
        isEdit = true;
        stu_id.value = single.id;
        fname.value = single.fname;
        lname.value = single.lname;
        email.value = single.email;
        password.value = single.password;
        add.value = single.add;
        city.value = single.city;
        state.value = single.state;
        pin.value = single.pin;
    }
    else {
        console.error("Record not found for ID:", id);
    }
};

// Delete record

// Delete record
const deleteStd = (id) => {
    let records = getRecorddata();
    let updatedData = records.filter((stu_rec) => stu_rec.id != id);

    // Save updated records to localStorage
    localStorage.setItem("studentData", JSON.stringify(updatedData));

    // Refresh the data in the table
    showData();
};


// Show data in table

const selectStd = (id)=>{
    let records = getRecorddata();
    let singleRec = records.find((stu_rec) => stu_rec.id == id);
    console.log("singale rec",singleRec);
    
    singleRec.qut = 1;

    let isExsit = selection.find((emp) => {
        return emp.id == id;
      })
    
      if (!isExsit) {
        selection.push(singleRec);
      }
      else {
        isExsit.qty +=  1;
      }
    
      badge.innerHTML = selection.length;
      localStorage.setItem('studentRec', JSON.stringify(selection));
    

}

const showData = () => {
    studentsData = getRecorddata();
    tbody.innerHTML = "";

    studentsData.forEach((stu, index) => {
        tbody.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${stu.fname} ${stu.lname}</td>
                <td>${stu.email}</td>
                <td>${stu.password}</td>
                <td>${stu.add}</td>
                <td>${stu.city}</td>
                <td>
                    <button onclick="updatestd(${stu.id})" class="btn btn-sm btn-warning">Edit</button>
                    <button onclick="deleteStd(${stu.id})" class="btn btn-sm btn-danger">Delete</button>
                    <button onclick="selectStd(${stu.id})" class="btn btn-sm btn-primary">Select</button>
                </td>
            </tr>`;
    });
};

// Show data on page load
showData();
