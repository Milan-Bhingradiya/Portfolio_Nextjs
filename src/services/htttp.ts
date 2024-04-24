import  myaxios  from "../utils/axios";

export const LoginCall = async (Id: string, Password: string) => {
    const payload = {
        id: Id,
        password: Password
    }

    try {
        const res = await myaxios.post("/admin/login", payload);
        return res;

    } catch (error) {
        console.log(error);
    }
}

    
interface ProjectPayload {
    // Define the properties and their types expected in the payload object
    // For example:
    thumbnail:any;
    photos: any;
    title: string;
    desc: string;
    technology: string[];
}



export const GetProjectCall= async () => {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    try {
        const res = await myaxios.get("/user/getprojects");
     return res

    } catch (err) {
        console.log(err);
    }
};

export const AddProjectCall = async (payload:ProjectPayload) => {
  
    const formdata_payload = new FormData();
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    formdata_payload.append("thumbnail",payload.thumbnail[0]);

    payload.photos.map((photo:any)=>{
        formdata_payload.append("photos",photo);
    })
    formdata_payload.append("title",payload.title);
    formdata_payload.append("desc",payload.desc);
    formdata_payload.append("technology", JSON.stringify(payload.technology));

    console.log(formdata_payload);

    try {
        const res = await myaxios.post("/user/addproject", formdata_payload);
        console.log(res.data);
        return res;

    } catch (error) {
        console.log(error);
    }
}


interface ContactusPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}


// Contact us API call
// payload: ContactusPayload
export const Contactus_apicall = async (payload:ContactusPayload) => {
    try {
        const res = await myaxios.post("/user/contactus", payload);
        console.log(res.data)
        return res.data.status;

    } catch (error) {

        console.log(error);
        return false;
    }
}


