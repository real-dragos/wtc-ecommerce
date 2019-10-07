import React from 'react';

import styles from './directory.module.scss';

import MenuItem from '../menu-item/menu-item.component';
import { sections } from '../../utils/scripts/constants';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className={styles['directory']}>
                {this.state.sections.map(({id, ...otherSectionProps}) =>
                    <MenuItem key={id} {...otherSectionProps} />     
                )}
            </div>
        )
    }
}

export default Directory;