const tableData = {
    sq1_PLL: 'table/sq1-PLL.json'
};

Object.keys(tableData).forEach(tableId => {
    const jsonFile = tableData[tableId];
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector(`#${tableId} tbody`);
            data.forEach(item => {
                const row = document.createElement('tr');
                Object.values(item).forEach(value => {
                    const cell = document.createElement('td');
                    if (value.includes('image')) {
                        const img = document.createElement('img');
                        img.src = value;
                        cell.appendChild(img);
                    } else {
                        cell.textContent = value;
                    }
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            });
        });
});