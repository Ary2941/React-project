function Message(){
    const name = "Ary";
    if (name)
        return <h1> Bem vindo, {name}! </h1>;
    return <h1> olá! </h1>; 
}

export default Message;
