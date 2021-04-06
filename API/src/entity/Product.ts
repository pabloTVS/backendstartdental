import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class wp_posts {
    @PrimaryColumn() ID: number;
    @Column() post_author: number;
    @CreateDateColumn() post_date: Date;
    @CreateDateColumn() post_date_gmt: Date;
    @Column() post_content: string;
    @Column() post_title: string;
    @Column() post_excerpt: string;
    @Column() post_status: string;
    @Column() comment_status: string;
    @Column() ping_status: string;
    @Column() post_password: string;
    @Column() post_name: string;
    @Column() to_ping: string;
    @Column() pinged: string;
    @CreateDateColumn() post_modified: Date;
    @CreateDateColumn() post_modified_gmt: Date;
    @Column() post_content_filtered: string;
    @Column() post_parent: number;
    @Column() guid: string;
    @Column() menu_order: number;
    @Column() post_type: string;
    @Column() post_mime_type: string;
    @Column() comment_count: number;
}