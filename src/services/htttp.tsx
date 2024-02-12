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
    try {
        const res = await myaxios.get("/getprojects");
     return res

    } catch (err) {
        console.log(err);
    }
};

export const AddProjectCall = async (payload:ProjectPayload) => {
  
    const formdata_payload = new FormData();
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    formdata_payload.append("thumbnail",payload.thumbnail[0]);

    payload.photos.map((photo)=>{
        formdata_payload.append("photos",photo);
    })
    formdata_payload.append("title",payload.title);
    formdata_payload.append("desc",payload.desc);
    formdata_payload.append("technology", JSON.stringify(payload.technology));

    console.log(formdata_payload);
    console.log(formdata_payload);

    try {
        const res = await myaxios.post("/addproject", formdata_payload);
        console.log(res.data);
        return res;

    } catch (error) {
        console.log(error);
    }
}


