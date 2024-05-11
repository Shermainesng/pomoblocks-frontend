export type Task = {
    id: string, 
    title: string, 
    description: string, 
    blocks: Block[] 
}

export type Block = {
    id: string, 
    duration: number, 
    completed: boolean
}
export var fakeTasks: Task[] = [
    {
    id: "1",
    title: 'Job Applications', 
    description: 'Apply to as many jobs as possible',
    blocks: [
        {id: "1", duration: 50, completed: false},
        {id: "2", duration: 25, completed: false},
    ]
    }, 
    {
        id: "2",
        title: 'Email potential clients', 
        description: 'Cold email clients to promote freelancing service',
        blocks:[ {id: "3", duration: 50, completed: false},]
    }, 
    {
        id: "3",
        title: 'Coding', 
        description: 'Be in the flow of focused coding to create projects',
        blocks:[ {id: "3", duration: 50, completed: false},]
    }, 
]

