
const tasks = [
    {
        id: 1,
        userId: 1,
        title: 'Drink coffee',
        priority: 'critical',
        status: 'done',
        deadline: new Date(2019, 12, 30),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugiat, fuga omnis quibusdam doloribus delectus, ratione illum, eaque aut veniam veritatis adipisci laborum. Optio ex nostrum molestiae. Porro, soluta quam?
                      Consectetur quos laboriosam natus doloribus ut necessitatibus, omnis error animi nobis possimus ipsum nisi ea molestias totam temporibus sit corporis tempora voluptatem hic! Facere voluptate unde, veniam facilis omnis dolorum.
                      Reiciendis laborum ea atque quis! Doloremque quas possimus at, ullam unde, dicta aperiam accusantium magni, ratione dolore cupiditate molestias libero cumque rerum sint eaque dolorum quos minima quasi sed officiis.
                      Odio ullam nihil debitis ea nobis excepturi ratione delectus sunt placeat laboriosam corporis porro deserunt sapiente, nesciunt enim tempora neque repellat nam obcaecati facere saepe aspernatur illo! Accusamus`
    },
    {
        id: 2,
        userId: 1,
        title: 'Perform the test task for Simbirsoft2',
        priority: 'critical',
        status: 'inwork',
        deadline: new Date(2019, 12, 29),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugiat, fuga omnis quibusdam doloribus delectus, ratione illum, eaque aut veniam veritatis adipisci laborum. Optio ex nostrum molestiae. Porro, soluta quam?
                      Consectetur quos laboriosam natus doloribus ut necessitatibus, omnis error animi nobis possimus ipsum nisi ea molestias totam temporibus sit corporis tempora voluptatem hic! Facere voluptate unde, veniam facilis omnis dolorum.
                      Reiciendis laborum ea atque quis! Doloremque quas possimus at, ullam unde, dicta aperiam accusantium magni, ratione dolore cupiditate molestias libero cumque rerum sint eaque dolorum quos minima quasi sed officiis.
                      Odio ullam nihil debitis ea nobis excepturi ratione delectus sunt placeat laboriosam corporis porro deserunt sapiente, nesciunt enim tempora neque repellat nam obcaecati facere saepe aspernatur illo! Accusamus`
    },
    {
        id: 3,
        userId: 1,
        title: 'Go to the gym',
        priority: 'normal',
        status: 'done',
        deadline: new Date(2019, 12, 28),
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus fugiat, fuga omnis quibusdam doloribus delectus, ratione illum, eaque aut veniam veritatis adipisci laborum. Optio ex nostrum molestiae. Porro, soluta quam?
                      Consectetur quos laboriosam natus doloribus ut necessitatibus, omnis error animi nobis possimus ipsum nisi ea molestias totam temporibus sit corporis tempora voluptatem hic! Facere voluptate unde, veniam facilis omnis dolorum.
                      Reiciendis laborum ea atque quis! Doloremque quas possimus at, ullam unde, dicta aperiam accusantium magni, ratione dolore cupiditate molestias libero cumque rerum sint eaque dolorum quos minima quasi sed officiis.
                      Odio ullam nihil debitis ea nobis excepturi ratione delectus sunt placeat laboriosam corporis porro deserunt sapiente, nesciunt enim tempora neque repellat nam obcaecati facere saepe aspernatur illo! Accusamus`
    },
]

class TaskService {
    getTasksForUser(userId) {

        var res = tasks.filter(x => x.userId == userId);
        return res;
    }

    getTask(taskId) {
        var res = tasks.find(x => x.id == taskId);
        return res;
    }
}

export default TaskService;