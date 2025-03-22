import { useState } from "react";

export const AccordionItem = ({ title, content, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(content)

  return (
    <div className="block">
      <div className={isOpen ? "active" : "default"} onClick={handleIsOpen}>
        {title}
      </div>

      {isOpen && (
        <div className="content-one">
          <div className="image">
            <img src={image} alt="Massage" className="image-two" />
          </div>

          <div > 
            {content && (
              <ul className="list">
                {content.split(";").map((item, index) => (
                  <li key={index} className="list-item">
                    {item.trim()}  
                  </li>
                  ))}
              </ul>
            )}
         
          </div>
         
         </div>
       )}
     </div>
   );
}; 







