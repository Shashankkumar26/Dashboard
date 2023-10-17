const patients = [
    {
        name: "Jack Sparrow",
        age: 40,
        image : "/public/photo5.jpg" ,
        heartRate: 75, // in beats per minute
        bodyTemperature: 37, // in Celsius
        glucose: 120, // in mg/dL
        information: {
            bloodGroup: "0-",
            sex: "Male",
            allergies: ["Desert", "kraken"],
            diseases: ["Hypertension"],
            weight: 75, // in kilograms
            patientId: "P001",
            lastVisit: "2023-04-10"
        }
    },
    {
        name: "Jane Smith",
        age: 28,
        image : "/public/photo4.jpg" ,
        heartRate: 68,
        bodyTemperature: 36.5,
        glucose: 90,
        information: {
            bloodGroup: "B-",
            sex: "Female",
            allergies: ["Shellfish"],
            diseases: [],
            weight: 60, // in kilograms
            patientId: "P002",
            lastVisit: "2023-03-15"
        }
    },
    {
        name: "Robert Johnson",
        age: 55,
        image : "/public/photo3.jpg" ,
        heartRate: 80,
        bodyTemperature: 36.9,
        glucose: 140,
        information: {
            bloodGroup: "O+",
            sex: "Male",
            allergies: [],
            diseases: ["Diabetes"],
            weight: 85, // in kilograms
            patientId: "P003",
            lastVisit: "2023-04-22"
        }
    },
    {
        name: "Sarah Wilson",
        age: 35,
        image : "/public/photo2.jpg" ,
        heartRate: 70,
        bodyTemperature: 37.2,
        glucose: 110,
        information: {
            bloodGroup: "A-",
            sex: "Female",
            allergies: ["Dust"],
            diseases: [],
            weight: 62, // in kilograms
            patientId: "P004",
            lastVisit: "2023-04-18"
        }
    },
    {
        name: "Michael Brown",
        age: 50,
        image : "/public/photo1.jpg" ,
        heartRate: 72,
        bodyTemperature: 36.8,
        glucose: 130,
        information: {
            bloodGroup: "AB+",
            sex: "Male",
            allergies: ["Penicillin"],
            diseases: ["High Cholesterol"],
            weight: 80, // in kilograms
            patientId: "P005",
            lastVisit: "2023-04-25"
        }
    }
];



let currentPatientIndex = 0;

// Function to update the patient data on the page
function updatePatientData(patientIndex) {
    const currentPatient = patients[patientIndex];
    document.getElementById("patientName").textContent = currentPatient.name;
    document.getElementById("patientAge").textContent = currentPatient.age;
    document.getElementById("glucose").textContent = currentPatient.glucose;
    document.getElementById("patientBloodGroup").textContent = currentPatient.information.bloodGroup;
    document.getElementById("patientSex").textContent = currentPatient.information.sex;
    document.getElementById("patientAllergies").textContent = currentPatient.information.allergies.join(", ");
    document.getElementById("patientDisease").textContent = currentPatient.information.diseases.join(", ");
    document.getElementById("patientWeight").textContent = currentPatient.information.weight;
    document.getElementById("patientId").textContent = currentPatient.information.patientId;
    document.getElementById("patientLastVisit").textContent = currentPatient.information.lastVisit;
    document.getElementById("patientWeight").textContent = currentPatient.information.weight;
    document.getElementById("patientHeart").textContent = currentPatient.heartRate;
    document.getElementById("patientTemp").textContent = currentPatient.bodyTemperature;
    document.getElementById("patientImage").src = currentPatient.image;
}

// Initialize with the first patient
updatePatientData(currentPatientIndex);

document.getElementById("prevButton").addEventListener("click", function () {
    if (currentPatientIndex > 0) {
        currentPatientIndex--;
        updatePatientData(currentPatientIndex);
    }
});

document.getElementById("nextButton").addEventListener("click", function () {
    if (currentPatientIndex < patients.length - 1) {
        currentPatientIndex++;
        updatePatientData(currentPatientIndex);
    }
});