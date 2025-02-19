import { ReactElement, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { EmojiButton } from '../EmojiButton/EmojiButton';
import { FlexFiller } from '../FlexFiller';
import classes from './ChapterWrapper.module.css';

export interface ChapterWrapperProps {
    title: string | ReactElement;
    subtitle?: string | ReactElement;
    children: ReactNode;
    rerender?: () => void;
}

export function ChapterWrapper(props: ChapterWrapperProps) {
    const { title, subtitle, children, rerender } = props;

    const navigate = useNavigate();
    const closeChapter = () => navigate('/');

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <h2>{title}</h2>
                    <FlexFiller />
                    {rerender && <EmojiButton emoji="🔄" tooltip="RErender" onClick={rerender} />}
                    <EmojiButton emoji={<IoIosCloseCircleOutline color={'red'} />} tooltip="Close" onClick={closeChapter} />
                </div>
                <h3>{subtitle}</h3>
            </div>
            <div className={classes.content}>{children}</div>
        </div>
    );
}