import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Modal = ({children}) => {
    return (
        <>
            <div className={classes.basckdrop} />
            <dialog className={classes.modal}>{children}</dialog>
        </>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
