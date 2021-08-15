import "./card-list-component-style.css"
import {Card} from "../card-components/card-components"
export const CardList=(props)=>{
    
return (
    <div className="card-list">
    {
        props.monsters.map(
          monster=> {
            return <Card key={monster.id} monster={monster}/>
          }
        )
      }
    </div>
)
}