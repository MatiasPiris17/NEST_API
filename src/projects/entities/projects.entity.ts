import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IProject } from '../../interface/project.interface';
import { UsersProjectsEntity } from '../../users/entities/usersProjects.entity';

@Entity({ name: 'projects' })
export class ProjectsEntity extends BaseEntity implements IProject {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => UsersProjectsEntity, (UserProject) => UserProject.project)
  usersIncludes: UsersProjectsEntity[];
}
