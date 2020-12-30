//-----------------Task 6.1----------------

const arr = ['Vasya', 'Petya', 'Alexey'];
const removeUser = (nameArr, index) => {
    nameArr.splice(index,1);             
    }        
removeUser(arr, 1);
console.log(arr)

//-----------------Task 6.2----------------

const obj = { name: 'Vasya', age: 1}
const getAllKeys = (nameObj) => {
   return console.log(Object.keys(nameObj));          
    }     
getAllKeys(obj) /// ["name", "age"]

//-----------------Task 6.3----------------

const getAllValues = (nameObj) => {
    return console.log(Object.values(nameObj));          
}     
getAllValues(obj) /// ["Vasya", 1]

//-----------------Task 6.4----------------

const objVasya = {
    id: 5,
    name: 'Vasya'
}

const secondObj = {
    id: 6,
    name: 'Katya'
}

const arrExt = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Vasya'
    },
     {
        id: 3,
        name: 'ivan'
    },
    {
        id: 4,
        name: 'Anna'
    },
];

const insertIntoarr = (nameObj, id) => {
        for(let item of arrExt) {
            if(item.id === id) {   
                let index = arrExt.indexOf(item);
                arrExt.splice(index, 0, nameObj);
                return console.log(arrExt);
            }
        }  
    }

insertIntoarr(objVasya, 4)

//-----------------Task 6.5----------------

class Condidate {
    constructor(user) {
        Object.assign(this, user);
    }
    state(){
        const newArr = this.address.split(",", 3);
        return console.log(newArr[2]);
        }
}

const condidate = new Condidate(condidateArr[0])
condidate.state() /// Colorado

//-----------------Task 6.6----------------

const getCompanyNames = () => {
    const arrCompany = new Set(condidateArr.map((item) => item.company));
    return console.log(arrCompany);
}    

getCompanyNames() /// [""EZENT, "JASPER" ... ]


//-----------------Task 6.7----------------


const getUsersByYear = (year) => {
    const arrFilterYear = condidateArr.filter((item, index, condidateArr) => condidateArr[index].registered.substr(0,4) == year);
    const arrId = arrFilterYear.map(item => item._id);
    return console.log(arrId);
    }
      
getUsersByYear(2017)

//-----------------Task 6.8----------------

const getCondidatesByUnreadMsg = (unreadMsg) => {
        const arrFilter = condidateArr.filter((item, index, condidateArr) => condidateArr[index].greeting.split(' ')[5] == unreadMsg);
        return console.log(arrFilter);
        }
          
        getCondidatesByUnreadMsg(8)
 
//-----------------Task 6.9----------------


const getCondidatesByGender = (inputgender) => {
            const arrGenderFilter = condidateArr.filter((item, index, condidateArr) => condidateArr[index].gender == inputgender);
            return console.log(arrGenderFilter);
            }              
            
    getCondidatesByGender('female')

