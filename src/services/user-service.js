const users = [
    {
        id: 1,
        name: 'Nicolas',
        email: 'nicolas1@mail.ru',
        password: '111'
    },
    {
        id: 2,
        name: 'Nicolas2',
        email: 'nicolas2@mail.ru',
        password: '111'
    }, {
        id: 3,
        name: 'Nicolas3',
        email: 'nicolas3@mail.ru',
        password: '111'
    }

]

class UserService {
    getUser(email, passw) {
        var res = users.find(x => x.email === email && x.password === passw);
        return res;
    }
}

export default UserService;