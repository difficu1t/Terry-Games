import { useEffect, useState } from "react"

const SideModal = ({children, isHidden, setIsHidden, setIsClicked}: 
  {children: React.ReactNode, 
  isHidden: boolean, 
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>,
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
  }) => {

  const [ display, setDisplay ] = useState('hidden');

  useEffect(() => {
    if(isHidden){
      setDisplay('hidden')
    } else {
      setDisplay('')
    }
  }, [isHidden])

  function hideModal () {
    setIsClicked(false);
    setIsHidden(true);
  }

  return (
    <div className={display + " flex justify-end items-start fixed top-0 min-w-full min-h-screen bg-gray-500 bg-opacity-50"} onClick={hideModal}>
      {children}
    </div>
  )
}

export default SideModal