import classes from './ExpandToggle.module.css';
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import 'index.css'
type Props = {
    sideNav?: boolean;
    expanded: boolean;
    onClick?: () => void;
};

export function ExpandToggle({ expanded, onClick, sideNav }: Props) {

    switch (sideNav) {
        case true:
            return <div className={classes.expandToggle + ' ' + classes._pos_right_middle}
                onClick={onClick}>
                <div className='avatar_circle white'>
                    {expanded ? <IoIosArrowDropleft color="#1890FF" /> : <IoIosArrowDropright color="#1890FF" />}
                </div>

            </div>
        case false: default:
            return <div className={classes.expandToggle}
                onClick={onClick}>
                {expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </div>
    }




}

