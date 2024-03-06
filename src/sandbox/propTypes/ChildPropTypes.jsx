import PropTypes from 'prop-types';

const ChildPropTypes = ({
    string,
    number,
    boolean,
    object,
    array,
    func,
    arrayOfObjects,
    id,
    spesificId,
    exactObject,
    name,
    node,
    children
}) => {

    console.dir(children)
    return (
        <div>
            <h3>Child, {name}</h3>
            <h3>the bool is, {boolean ? 'true' : 'false'}</h3>
            <h4>{node} - {children}</h4>
        </div>
    );
}

ChildPropTypes.propTypes = {
    string: PropTypes.string,
    number: PropTypes.number,
    boolean: PropTypes.bool,
    object: PropTypes.object,
    array: PropTypes.array,
    func: PropTypes.func,
    arrayOfObjects: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    spesificId: PropTypes.oneOf(["asd", 1, 2, 3]),
    exactObject: PropTypes.exact({
        key: PropTypes.string,
        second: PropTypes.number,
        third: PropTypes.bool
    }),
    name: PropTypes.any.isRequired,
    node: PropTypes.node.isRequired,
    // children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]).isRequired
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

ChildPropTypes.defaultProps = {
    name: "Levi"
}

export default ChildPropTypes;
