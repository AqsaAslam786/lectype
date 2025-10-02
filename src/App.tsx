
import './App.css'
import ProfileCard from './components/ProfileCard'

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

  return (
    <>
      

      <Card  image={profile1.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      
    </>
  )
}

export default App
