import { IonPage, IonContent } from '@ionic/react'
import React from 'react'
import { useParams } from 'react-router'
import BackHeader from '../../components/BackHeader'

const Note = () => {
    const { id }: RouterParamType = useParams()

    return (
        <IonPage>
            {/* TODO: update with note title */}
            <BackHeader title='This Note' />

            <IonContent fullscreen className='ion-padding text-muted'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa quas, tempora laborum earum commodi accusamus officia non molestias eveniet aliquid repellendus deleniti libero molestiae a eum quam, doloribus in maiores. Iure autem delectus nemo, repudiandae corrupti fugit laboriosam voluptatum esse quidem cumque accusamus laudantium numquam accusantium molestiae eligendi illo quasi eaque nostrum fugiat exercitationem pariatur! Officia quo nulla soluta vitae commodi. Molestiae cum iste, saepe ea sapiente asperiores perspiciatis voluptatum itaque facilis, inventore amet ab quibusdam tempora pariatur eius blanditiis ad odio fugit eaque quo libero delectus impedit, commodi voluptatem. Quod inventore alias sapiente, illum fugit itaque ratione doloribus!</p>
            </IonContent>

        </IonPage>
    )
}

type RouterParamType = {
    id: string
}

export default Note