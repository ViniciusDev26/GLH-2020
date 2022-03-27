import Image from "next/image"
import { StyledContainer } from "./styles"

const Data = () => {
  return(
    <StyledContainer>
      <div>
        <label>Entregas:</label>
        <Image 
          src="/assets/simple-pie-chart.svg"
          height={300}  
          width={300}
          alt="chart"
          layout="fixed"
        />
      </div>

      <div>
        <label>Entregas completas:</label>
        <Image 
          src="/assets/basic-bar-graph.png"
          height={300}  
          width={300}
          alt="chart"
          layout="fixed"
        />
      </div>

      <div>
        <label>Entregas recebidas sem erros nas faturas:</label>
        <Image 
          src="/assets/basic-bar-graph.png"
          height={300}  
          width={300}
          alt="chart"
          layout="fixed"
        />
      </div>
    </StyledContainer>
  )
}

export default Data