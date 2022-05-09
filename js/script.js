const app = new Vue(
    {
        el: '#root',
        data: {
            toDoList: [
                {
                    text: 'Portare fuori cane',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Diventare ricco',
                    done: false
                },
                {
                    text: 'Comprare una Ferrari',
                    done: false
                },
            ]
        },
        methods: {

        }
    }
);