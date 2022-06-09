const BASEAPI = "https://gorest.co.in/public/v2/"

export const sendRequest = async (route, request, isFile = false) => {
    let response;
    try {
      response = await fetch(BASEAPI + route, request);
      
    } catch (error) {
      return { success: false };
    }
    try {
      const data = (isFile && response.status === 200) ? await response.blob() : await response.json();
      if ('success' in data){
        return data;  
      }else{
        if(response.status === 200 || response.status === 201){
          data['success'] = true
        }else{
          data['success'] = false
        }
        
      }
      return data;
    } catch (error) {
      return { success: false };
    }
  };
