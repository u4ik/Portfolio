import React from 'react'
import { Image, Item as SemItem, Divider } from 'semantic-ui-react';
import { Badge } from '../index';

function Item({ image, header = 'default header', description = 'default', additional = "", npm = "" }) {
    return (
        <SemItem.Group>
            <SemItem>
                <SemItem.Image size='large' src={image} />
                <SemItem.Content verticalAlign='middle'  >
                    <SemItem.Header as='a'>{header}</SemItem.Header>
                    <SemItem.Meta>{description}</SemItem.Meta>
                    <SemItem.Extra>{additional}</SemItem.Extra>
                    <SemItem.Description >
                        {
                            npm &&
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '.5em' }}>
                                <SemItem.Image size='small' src={npm.img1} />
                                <SemItem.Image size='small' src={npm.img2} />
                            </div>
                        }
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '.5em', marginTop: '1em' }}>
                            <Badge
                                color='grey'
                                label=''
                                icon="github"
                                size='large'
                                margin=".1em .1em .1em .1em"
                                // margin="auto"
                                width='4em'
                                link="https://www.linkedin.com/in/amitsmangat/"
                            />
                            {
                                npm &&
                                <Badge
                                    color='red'
                                    label=''
                                    icon="npm"
                                    size='large'
                                    margin=".1em .1em .1em .1em"
                                    // margin="auto"
                                    width='4em'
                                    link={npm.link}
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