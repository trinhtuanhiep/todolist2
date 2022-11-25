function getStudent() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/students'
        const config = { method: 'GET' }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function addStudent(newStudent) {
    console.log(newStudent, "123")
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/students'
        const config = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudent),
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function updateStudent(updateStudent) {
    console.log(updateStudent, "fetch")
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/students/' + updateStudent.id
        const config = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStudent)
        }

        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}


function deleteStudent(studentId) {
    console.log(studentId, "fetchAPI")
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/student/delete/' + studentId.id
        const config = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }

        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function searchStudent(data) {
    console.log(data, "2313")
    const limit = 3
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/student/search?textSearch=${data.textSearch}&activePage=${data.activePage}&limit=${limit}`
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}


function getPaginateStudent(activePage) {
    console.log(activePage, "fetch")
    const limit = 3
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/student/paginate?activePage=${activePage}&limit=${limit}`
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}


export {
    getStudent,
    addStudent,
    deleteStudent,
    updateStudent,
    searchStudent,
    getPaginateStudent

}

