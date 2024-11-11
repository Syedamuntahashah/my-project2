import Link from "next/link";

function Projects(){
    return (
       <section>
       <div className="bg-purple-200" >
      <h2 className="text-3xl font-extrabold mb-4 text-center">My Projects</h2>

    
      <div>
        <h3 className="text-2xl font-bold mb-4">CLI Calculator</h3>
        <p>
          This is a command-line calculator built using TypeScript and Inquirer.js. 
          It allows users to perform basic arithmetic operations in the terminal.
        </p>
        <Link href="https://github.com/Syedamuntahashah/simple_calculator.git" target="_blank" rel="noopener noreferrer"/>
          <button type="button" className="bg-gray-400 p-3 rounded-lg m-4" >View Project</button>
        
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4" >Number Guessing Game</h3>
        <p>
          This is a fun number guessing game built using TypeScript and Inquirer.js. 
          The player tries to guess a randomly generated number.
        </p>
        <Link href="https://github.com/Syedamuntahashah/cli-number-guessing.git" target="_blank" rel="noopener noreferrer"/>
        <button type="button" className="bg-gray-400 p-3 rounded-lg m-4" >View Project </button>
        
      </div>

      
      <div>
        <h3 className="text-2xl font-bold mb-4" >ATM Machine Simulation</h3>
        <p>
          A simple ATM machine simulation built with TypeScript and Inquirer.js. 
          Users can check balance, withdraw money, and deposit funds.
        </p>
        <Link href="https://github.com/Syedamuntahashah/ATM-Machine_.git" target="_blank" rel="noopener noreferrer"/>
        <button type="button" className="bg-gray-400 p-3 rounded-lg m-4" > View Project </button>
        
      </div>

    
      <div>
        <h3 className="text-2xl font-bold mb-4">Hackathon projects</h3>
        <p>
          This is a resume builder that lets users input their personal details, education, 
          skills, and experience, generating a professional resume document.
        </p>
        <Link href="https://github.com/Syedamuntahashah/Hackathon-project.git" target="_blank" rel="noopener noreferrer"/>
        <button type="button" className="bg-gray-400 p-3 rounded-lg m-4" > View Project </button>
        
      </div>

    
    </div>
    </section>
    )
}
export default Projects;