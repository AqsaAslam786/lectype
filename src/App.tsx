
import './App.css'
import Card from './components/ProfileCard'

export type ProfileCard = {
  image: string,
  name: string,
  role: string,
  linkedin: string,
  github: string,
  gmail: string,
}

function App() {
  const profile1: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
const profile2: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
const profile3: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
  const profile4: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
  const profile5: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
  const profile6: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
  const profile7: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
  const profile8: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
  const profile9: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
const profile10: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
const profile11: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }
const profile12: ProfileCard = {
    image: "https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.webp",
    name: "Aqsa Aslam",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "aqsaaslam12334@gmail.com",
  }




  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-8'>
      

      <Card  image={profile1.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile2.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile3.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile4.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile5.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile6.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile7.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile8.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile9.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile10.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile11.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card  image={profile12.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />

      </div>
    </>
  )
}

export default App
