import classes from './ExpandToggle.module.css';
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

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
                {expanded ? <IoIosArrowDropleftCircle color="blue" /> : <IoIosArrowDroprightCircle color="blue" />}
            </div>
        case false: default:
            return <div className={classes.expandToggle}
                onClick={onClick}>
                {expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </div>
    }




}

