import ProfileCard from '../components/ProfileCard';

function About() {
 return (
   <div style={{ backgroundColor: '#5e4e46', minHeight: '100vh', padding: '2rem' }}>
     <h1 style={{ fontFamily: "'Nanum Gothic', sans-serif", fontWeight: 'bold', color: '#e9bd7e' }}>About Page / Credits</h1>
     <p style={{ color: '#e9d8c7', fontFamily: "'Noto Sans KR', sans-serif" }}>This is our basic game about personal finance</p>
     <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', marginTop: '1rem' }}>
       <ProfileCard
         name="Ben"
         title="Designer"
         bio="Designer of the project, in charge of the UI/UX and overall visual design."
         imageUrl="https://media1.tenor.com/m/AGgVj_aylZUAAAAd/coraline-dad.gif"
       />
       <ProfileCard
         name="Nate"
         title="Developer"
         bio="Assist with the development of the project."
         imageUrl="https://i.pinimg.com/736x/4e/2a/28/4e2a2860988fdc217f78dcdad1066d3f.jpg"
       />
       <ProfileCard
         name="Wilson"
         title="Developer"
         bio="Assist with the development of the project."
         imageUrl="../../images.jpg"
       />
       <ProfileCard
         name="Eric"
         title="Head Developer"
         bio="Main Developer and project lead, ensuring code quality and performance"
         imageUrl="https://media1.tenor.com/m/fujdwWkRe6MAAAAC/fatty-kirby.gif"
       />
     </div>
   </div>
 )
}

export default About;