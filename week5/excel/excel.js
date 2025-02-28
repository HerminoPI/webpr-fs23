
const Formulae =  {
    A1: '1',             B1: '1',              C1: 'n(A1) + n(B1)',
    A2: '2',             B2: '2',              C2: 'n(A2) + n(B2)',
    A3: 'n(A1) + n(A2)', B3: 'n(B1) + n(B2)',  C3: 'n(C1) + n(C2)',
};

const cols = ["A","B","C"];
const rows = ["1","2","3"];

function startExcel() {
    const dataContainer = document.getElementById('dataContainer');
    fillTable(dataContainer);
}

function fillTable(container) {
    rows.forEach( row => {
        const tr = document.createElement("TR");
        cols.forEach( col => {
            const td     = document.createElement("TD");
            const input  = document.createElement("INPUT");
            const cellid = "" + col + row;
            input.setAttribute("VALUE", Formulae[cellid]);
            input.setAttribute("ID", cellid);

            // todo: what to do on input change or onClick?

            td.appendChild(input);
            tr.appendChild(td);
        });
        container.appendChild(tr);
    });
}

function refresh() {
    cols.forEach( col => {
        rows.forEach( row => {
            const cellid  = "" + col + row;

            const input   = document.getElementById(cellid);

            // todo: how to refresh the input value?

        });
    });
}

// get the numerical value of an input element's value attribute
function n(input) {
    return Number(input.value); //always use this element to return a number from a String
}
