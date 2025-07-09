import { Realm } from '@realm/react'


class UserSchema extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    age!: number;
    createdAt!: Date;

    static schema = {
        name: "UsersDetail",
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
            age: 'int',
            createdAt: 'date'
        }
    }
}

export const insetData = (name: string, age: number)=> {
    return {
        _id: new Realm.BSON.ObjectId(),
        name,
        age,
        createdAt: new Date()
    }
}

export default UserSchema