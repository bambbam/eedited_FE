import React from 'react';
import cn from 'classnames';

import styles from './style.module.scss';

export interface Props {
    gap: number;
    className?: string;
}

const ToolBar: React.FC<Props> = (props: Props) => {
    const { gap, className }: Props = props;
    const classProps: string = cn(styles.toolbar, styles[gap!], className);
    return <div></div>;
};

export default ToolBar;
