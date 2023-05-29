let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
//     "Humility is the practice of recognizing our limitations and imperfections, and it is essential to personal growth and development.
// Whether its acknowledging our mistakes and shortcomings, seeking feedback from others, or approaching new situations with a sense of openness and curiosity, humility can help us learn and grow in meaningful ways"
]
//loop through function
aboutContents.forEach((content,i)=>{
    about.innerHTML += ` <p class='lead'>${i+1} ${content}</p>`
})
let education = [
    {
        id: 5,
        year: 2023,
        description: 'I stared coding at Life Choices',
        place: 'Life Choices Academy',
        type: 'Diploma',
        certificate: ''
    },
    {
        id: 6,
        year: 2022,
        description: 'Completed grade 12',
        place: 'Rhodes High School',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2017,
        description: ' finished Grade 7',
        place: 'Star Of the Sea Convent',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span>
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})