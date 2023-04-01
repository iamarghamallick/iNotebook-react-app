import Notes from './Notes';

export const Home = (props) => {
    const {showAlert, showLoading} = props;
    return (
        <div> 
            <Notes showAlert={showAlert} showLoading={showLoading} />
        </div>
    )
}
