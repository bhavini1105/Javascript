const tbody = document.getElementById('stdTable');

const getSelection = () => {
    return JSON.parse(localStorage.getItem('studentRec')) || [];
};

const incQty = (id) => {
    let selection = getSelection();
    let singleRec = selection.find((emp) => emp.id == id);

    singleRec.qty = (singleRec.qty || 1) + 1;

    localStorage.setItem('studentRec', JSON.stringify(selection));
    viewSelection();
};

const decQty = (id) => {
    let selection = getSelection();
    let singleRec = selection.find((emp) => emp.id == id);

    if (singleRec.qty > 1) {
        singleRec.qty -= 1;
    }

    localStorage.setItem('studentRec', JSON.stringify(selection));
    viewSelection();
};

const deleteCart = (id) => {
    let selection = getSelection();
    let updatedData = selection.filter((rec) => rec.id != id);

    localStorage.setItem("studentRec", JSON.stringify(updatedData));
    viewSelection();
};

const viewSelection = () => {
    const selection = getSelection();
    tbody.innerHTML = "";

    selection.forEach((ele, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${ele.fname} ${ele.lname}</td>
                <td>${ele.email}</td>
                <td>
                    <button onclick="decQty(${ele.id})">-</button>  
                    ${ele.qty || 1}  
                    <button onclick="incQty(${ele.id})">+</button>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="deleteCart(${ele.id})">Delete</button>
                </td>
            </tr>`;
    });
};

// Initialize the table
viewSelection();
