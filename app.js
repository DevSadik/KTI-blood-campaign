
 let Blood = prompt('Blood Group (O+)');
// let Place = prompt('Enter your place (Barishal)');

const tbody = document.querySelector('.item table');

student.map( data => {

    if(data.group==Blood){

        tbody.innerHTML +=`

        <tbody>
        
            <tr>
                <td class="serial">${data.id}</td>
                <td class="name">${data.name}</td>
                <td class="group">${data.group}</td>
                <td class="adress">${data.adress}</td>
                <td class="phone">${data.phone}</td>
                <td class="gender">${data.gender}</td>
            </tr>
        
        </tbody>

    `}

    });

