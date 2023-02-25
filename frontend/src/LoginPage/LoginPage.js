import Form from "./Form";

const LoginPage = () => {
    return <div className="flex justify-around bg-cover bg-login-page w-screen h-screen">
        <div className="w-3/4 h-3/4 self-center rounded-3xl bg-red-100/80 flex flex-row justify-between divide-x-4">
            <Form title={"Login"} />
            <Form title={"Register"} />
        </div>
    </div>
};

export default LoginPage;