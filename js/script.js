const app = new Vue(
    {
        el: '#root',
        data: {
            text: '',
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
                }
            ]
        },
        methods: {
            removeToDo: function(index) {
                this.toDoList.splice(index, 1);
                console.log(index);
            },
            addToDoElement: function() {
                if (this.text.length > 0) {
                    const newToDo = {
                        text: this.text, 
                        done: false
                    };
    
                    this.toDoList.push(newToDo);
                    this.text = '';
                }
            }
        }
    }
);