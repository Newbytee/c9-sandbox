function nextPage() {
    let stateObj = { foo: "bar" };
    history.pushState(stateObj, "page 2", "memes.html")
}