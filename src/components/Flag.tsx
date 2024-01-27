"use client"

const Flag = ({content}:{content:string}) => {
    const color = () => {
        switch(content){
            case "react":
                return "#5ED5F6";
            case "redux":
                return "#7248B6";
            case "tailwind":
                return "#1DC0CD";
            case "node":
                return "#479341";
            case "cloudinary":
                return "#0875D0";
            case "mongodb":
                return "#47A340";
            case "firebase":
                return "#FFCE36";
            default:
                return "#fff";
        }
    }
    
  return (
    <span style={{borderColor: color()}} className="py-1 px-2 hover:shadow-lg duration-200 transition-all border-opacity-90 rounded-full border-2 text-xs" >{content}</span>
  )
}

export default Flag
