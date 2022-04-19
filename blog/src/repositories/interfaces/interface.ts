import { DataTypes } from "sequelize";

export interface IUserModel {
    name: DataTypes.StringDataTypeConstructor;
    email: DataTypes.StringDataTypeConstructor,
    password: DataTypes.StringDataTypeConstructor,
    createdAt: DataTypes.DateDataTypeConstructor;
    updatedAt: DataTypes.DateDataTypeConstructor;
}

export interface IBlogModel {
    message: DataTypes.StringDataTypeConstructor;
    userId: DataTypes.StringDataTypeConstructor;
}