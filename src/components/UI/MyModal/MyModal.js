
import React from 'react';
import cl from './MyModal.module.css';

import {useDispatch,useSelector} from "react-redux";

import {
  setModalAction
} from "../../../toolkitRedux/toolkitSlice";

const MyModal = ({children}) => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.toolkit.modal);
    const setModal = (par) => ( 
        dispatch(setModalAction(par))
        );

    const rootClasses = [cl.myModal]
    if(modal){
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} 
            onClick={() => setModal(false)}
        >
            <div className={cl.myModalContent}
                onClick={(e)=>e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
