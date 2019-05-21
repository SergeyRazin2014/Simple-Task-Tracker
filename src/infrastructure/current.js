class LocalStorage {
    setObject(key, ob) {
        let obStr = JSON.stringify(ob);
        localStorage.setItem(key, obStr);
    }
}