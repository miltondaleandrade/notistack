import { green, red, blue, amber } from '@material-ui/core/colors';

import { SNACKBAR_INDENTS, allClasses } from '../utils/constants';

const styles = theme => ({
    ...allClasses.mui,
    base: {
        fontSize: '0.875rem',
        lineHeight: '1.46429em',
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: theme.typography.fontFamily,
        borderRadius: theme.shape.borderRadius,
    },
    lessPadding: {
        paddingLeft: 8 * 2.5,
    },
    variantSuccess: {
        backgroundColor: green[600], // green
        color: '#fff',
    },
    variantError: {
        backgroundColor: red[700], // dark red
        color: '#fff',
    },
    variantInfo: {
        backgroundColor: blue.A400, // nice blue
        color: '#fff',
    },
    variantWarning: {
        backgroundColor: amber[700], // amber
        color: rgba(0, 0, 0, 0.87),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    wrappedRoot: {
        position: 'relative',
        transform: 'translateX(0)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    collapseContainer: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: typeof theme.spacing === 'function' ? theme.spacing(1) : theme.spacing.unit,
            paddingRight: typeof theme.spacing === 'function' ? theme.spacing(1) : theme.spacing.unit,
        },
    },
    collapseWrapper: {
        transition: theme.transitions.create(['margin-bottom'], { easing: 'ease' }),
        marginTop: SNACKBAR_INDENTS.snackbar.default,
        marginBottom: SNACKBAR_INDENTS.snackbar.default,
    },
    collapseWrapperDense: {
        marginTop: SNACKBAR_INDENTS.snackbar.dense,
        marginBottom: SNACKBAR_INDENTS.snackbar.dense,
    },
});

export default styles;
