import "../styles/Newsbox.css"
const About = () => {
    return (
        <div className="contain">
            <div className="newsbox">
                <div className="imgbox">
                    <img src="/krishna 02.png" alt="image" height={300} width={300}/>
                </div>
                <div className="content">
                    <h1>KrishnaVardhan Reddy</h1>
                    
                    <p><b>About Me:</b>
                    <br/>
My name is Krishna Vardhan Reddy, and I am from Kavali, Nellore. I am currently in the final year of my Bachelor’s degree in Computer Science and Engineering, specializing in Artificial Intelligence, at PBR Visvodaya Institute of Technology and Sciences.<br/>
<br/>
<b>Skills and Experience:</b>
<ul>
<li>Proficient in programming languages like Python, Java, and C++.</li>
<li>Experienced in building projects like an e-commerce website using JSP and Spring Boot and AI-related applications such as medical chatbots.</li>
<li>Knowledgeable in web development stacks such as MERN and Java Full Stack.</li>
</ul></p>
                </div>
            </div>
            
        </div>
    )
}
export default About;