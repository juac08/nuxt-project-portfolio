export interface projectData{
    name: string 
    description: string,
    category: string,
    img: string,
    link: string,
    id: number
    justAdded?: boolean
}

export interface latestProjectData{
    name: string,
    description: string,
    read:string,
    img: string,
    link: string,
    id:number
}

export interface AboutTimeline{
    
        month: number | string,
        year: number,
        title: string,
        description:string
}


export interface IntegrationTimeLine {   
    title: string,
    description:string,
    integrations: 
        {
            title: string,
            image: string,
            description: string
        }[]       
}

export interface Team{
    
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string,
    position:string
}

export interface HowWeWorkTimeLine {

    title: string,
    description: string,
    icon: string,
    id:number
    

}