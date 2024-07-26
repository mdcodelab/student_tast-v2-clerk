

function FormSuccess({message}) {

    if(message) {
       return(<h1 className="bg-green-300 rounded p-2">{message}</h1>); 
    }

}

export default FormSuccess
