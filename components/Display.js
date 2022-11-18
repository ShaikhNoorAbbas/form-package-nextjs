import classes from './display.module.css';
const Display = (props) => {
    return (
        <div className={classes.container}>
            <h3>This is To View the Data</h3>
            <ol>
                {props.list.map((e) =>
                    <li key={e.id}>Fullname: {e.data.fullname} | Age: {e.data.age} | Email: {e.data.email}
                        | Password: {e.data.password} | Confirm Password: {e.data.confirm_password}
                    </li>
                )}
            </ol>
        </div>
    );
};
export default Display;