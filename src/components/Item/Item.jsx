import React from 'react'
import { Image, Item as SemItem, Divider } from 'semantic-ui-react';
import { Badge } from '../index';
import './Item.css'

function Item({ image, github = '', header = 'default header', description = 'default', additional = "", npm = "", viewLink = "" }) {
    return (
        <SemItem.Group style={{margin:'10%'}}>
            <SemItem className='item'>
                <div style={{display:'flex',justifyContent: 'center',marginInline:'auto'}}>

                <SemItem.Image centered={true} rounded={true} size='medium' src={image} style={{ maxWidth: '', minWidth: '',marginBottom:'1em' }} />
                </div>
                <SemItem.Content verticalAlign='middle' style={{maxWidth:'25em', minWidth: '', marginInline:'auto'}}    >
                    <SemItem.Header as='a'>{header}</SemItem.Header>
                    <SemItem.Meta style={{ maxWidth: '25em', marginInline: 'auto' }}>{description}</SemItem.Meta>
                    <SemItem.Extra>{additional}</SemItem.Extra>
                    <SemItem.Description  >
                        {
                            npm &&
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '.5em' }}>
                                <SemItem.Image size='small' src={npm.img1} />
                                <SemItem.Image size='small' src={npm.img2} />
                            </div>
                        }
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '.5em', marginTop: '1em', marginBottom: '0', maxHeight: '', alignItems: 'center' }}>
                            <Badge
                                color='grey'
                                label=''
                                icon="github"
                                size='large'
                                margin=".1em .1em .1em .1em"
                                width='4em'
                                padding='0.2em'
                                link={github}
                            />
                            {
                                npm &&
                                <Badge
                                    color='red'
                                    label=''
                                    icon="npm"
                                    size='large'
                                    margin=".1em .1em .1em .1em"
                                    width='4em'
                                    padding='0.2em'
                                    link={npm.link}
                                />
                            }
                            {
                                viewLink &&
                                <Badge
                                    color='blue'
                                    label='View'
                                    icon=""
                                    size='large'
                                    margin=".1em .1em .1em .1em"
                                    width='4em'
                                    padding='0.24em'
                                    link={viewLink}
                                />
                            }

                        </div>
                    </SemItem.Description>
                </SemItem.Content>
            </SemItem>
            <Divider />
        </SemItem.Group>


    )
}

export default Item