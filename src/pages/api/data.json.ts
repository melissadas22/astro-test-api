//creating own api
export interface responseData {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

//sample test api
export async function get(params:string) {
    return {
        body: JSON.stringify([
            {
               urlName: "astro API",
                url: "https://astro.build"
            }
        ])
    }
    
}