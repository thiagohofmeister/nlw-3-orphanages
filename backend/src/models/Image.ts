import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Orphanage from './Orphanage'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  path: string

  @Column()
  latitude: number

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage
}
