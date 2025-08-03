import { Column, Entity } from "typeorm";
import { BaseUuidEntity } from "./base/base-uuid.entity";

@Entity()
export class Dummy extends BaseUuidEntity {
    @Column()
    name: string;
}