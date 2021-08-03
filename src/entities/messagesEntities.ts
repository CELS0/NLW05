import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { UsersEntities } from "./usersEntities";

@Entity("messages")

class MessagesEntities {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    user_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(()=> UsersEntities)
    usersEntities: UsersEntities;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuid();20
        }
    }
}

export { MessagesEntities }