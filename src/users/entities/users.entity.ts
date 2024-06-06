import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ROLES } from '../../constants/roles';
import { IUser } from '../../interface/user.interface';
import { UsersProjectsEntity } from './usersProjects.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firsName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(() => UsersProjectsEntity, (UserProject) => UserProject.user)
  projectsIncludes: UsersProjectsEntity[];
}
