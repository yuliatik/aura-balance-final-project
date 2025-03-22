import { AccordionItem } from "./AccordionItem";
import { list } from "./list";
import './Accordion.css';

export const Accordion = () => {
    return(
        <div>
        {list.map((item, index) => (
            <AccordionItem 
                key={index} 
                title={item.title} 
                content={item.content} 
                image={item.image} 
            />
        ))}
    </div>
    )
}


