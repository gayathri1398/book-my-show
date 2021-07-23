import { Disclosure } from "@headlessui/react";
import {FiChevronDown,FiChevronUp}from 'react-icons/fi';




const PlaysFilter=(props)=>{
      return (
       
        <Disclosure>
          {({ open }) => (
            <>
            <div className="flex flex-col gap-2">
              <Disclosure.Button className="flex items-center gap-3 ">
                  {open? <FiChevronUp/>:<FiChevronDown/>}
                <span className={open?"text-red-400":"text-gray-700"}>{props.title}</span>
               
               
              </Disclosure.Button>
    
              <Disclosure.Panel>
                  <div className="text-red-400 flex flex-wrap items-center gap-3 ">
                  {props.tags.map((tag)=>(
                      <>
                      <span className="border-2 px-4 py-2 ">{tag}</span>
                      </>
                  ))}
                  </div>
              </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        
      )}
export default PlaysFilter;