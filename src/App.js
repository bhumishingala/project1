// import logo from './logo.svg';
import './App.css';
import Demo from './componts/Demo';



function App() {
  // const person = {
  //   name: "Amit",
  //   age: 25
  // }

  // console.log(person.name,person.age);

  // const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //   },
  //   {
  //     name: "Piyush",
  //     age: 40,
  //   },
  // ];

  // person.map((p) => {
  //   console.log(p.name,p.age);
  // });

  // const person = {
  //   name: "Amit",
  //   age: 25,
  //   course: [
  //     "C",
  //     "HTML"
  //   ]
  // }

  // console.log(person.name,person.age);
  // person.course.map((p)=> console.log(p));

  // const person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //     course: [
  //       "C",
  //       "HTML"
  //     ]
  //   },
  //   {
  //     name: "Ajay",
  //     age: 40,
  //     course: [
  //       "Java",
  //       "JavaScript"
  //     ]
  //   }
  // ]

  // person.map((p) => {
  //   console.log(p.name,p.age);
  //   p.course.map((p1) => console.log(p1));
  // })

  // const myObj = {
  //   name: "John",
  //   age: 30,
  //   cars: {
  //     car1: "Ford",
  //     car2: "BMW",
  //     car3: "Fiat"
  //   }
  // }

  // for(let k in myObj){
  //   if(k === "cars"){
  //     for(let j in myObj[k]){
  //       console.log(myObj[k][j]);
  //     }
  //   }else{
  //     console.log(myObj[k]);
  //   }
  // }


  // const data = {
  //   personal_info: {
  //     name: 'amit',
  //     age: 25,
  //     city: 'surat'
  //   },
  //   courses: ["C", "JavaScript", "React"],
  //   branches: {
  //     rwl: {
  //       admission: 50,
  //       vacant_seat: 10
  //     },
  //     rw2: {
  //       admission: 30,
  //       vacant_seat: 20
  //     },
  //     rw3: {
  //       admission: 25,
  //       vacant_seat: 25
  //     },
  //     rw4: {
  //       admission: 40,
  //       vacant_seat: 10
  //     }
  //   }
  // }

  // for(let d in data){
  //   if(d === "personal_info"){
  //     console.log(data[d].name,data[d].age);
  //   }else if(d === "courses"){
  //     data[d].map((d1) => console.log(d1));
  //   }else{
  //     for(let j in data[d]){
  //       console.log(data[d][j].admission,data[d][j].vacant_seat);
  //     }
  //   }
  // }

  let data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];


  let Employee = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  let fdata = data.filter((d) => d.status === true && d.expiry >= 2022)
  console.log(fdata);

  let ans = fdata.reduce((acc, d, i) => acc + d.price, 0)
  console.log(ans);

  let efdata = Employee.filter((e) => e.status === true);
  console.log(efdata);

    let emloyeeans = efdata.reduce((acc, e, i) => acc + e.salary + e.bonus , 0)
    console.log(emloyeeans);

  return (
    <div>
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>Totle Price</th>
        </tr>
        {
          fdata.map((d, i) => {
            let { id, name, quantity, price, expiry, status } = d
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{expiry}</td>
                <td>{status.toString()}</td>
                {i == 0 ? <td rowSpan="2">{ans}</td> : null}
              </tr>
            )
          })
        }
      </table>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Bouns</th>
          <th>Status</th>
          <th>Totle Salary</th>
        </tr>
        {
          efdata.map((e, i) => {
            let { name, age, salary, bonus, status } = e;
            return (
              <tr key={i}>
                <td >{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{bonus}</td>
                <td>{status.toString()},</td>
                <td>{salary + bonus}</td>
                {i == 0 ? <td rowSpan="4">{emloyeeans}</td> : null}
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
