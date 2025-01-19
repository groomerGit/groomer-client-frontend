const isLocal = false;

const Context = isLocal ? "http://localhost:8000" 
                        : "https://api.groomer.today/api/";

export default Context;
