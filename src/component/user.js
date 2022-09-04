import PropTypes from "prop-types";

function User({name, isLogin, surname, age, friends, address}) {

    return  (
        <h1>
            {isLogin ? name + ' ' + surname : '--'} <br/>
            {age}
            <br/>
            {address.title} {address.zip}
            {
               friends && friends.map(x => (
                    <div key={x.id}>{x.name}</div>
                ))
            }
        </h1>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired, // zorunlu alan
    islogin: PropTypes.bool,
    surname: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // yas, 2 tip alabilir
    friends: PropTypes.array,
    address: PropTypes.shape({ // Object tanımı
        title: PropTypes.string,
        zip: PropTypes.number
    })
};

User.defaultProps = { // eger app.js de name yollanmadı ise default olarak bunu ekrana basar
    name: "İsimsiz"
}

export default User;