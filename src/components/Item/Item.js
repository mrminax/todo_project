import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = ({ value, isDone }) => (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
	})
}>
<Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
<IconButton className={styles.icon} aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
{value}
</span>);

	export default Item;
