import { listAll,ref } from 'firebase/storage';
import React from 'react'
import Bar from '../components/Bar';
import ViewerCom from '../components/ViewerCom';

const PdfViewPage = ({storage}) => {
    
    const listRef = ref(storage, '/PDF')

    listAll(listRef).then((res) =>{
        res.items.forEach((item) =>{
            console.log(item.name)
        })
    })

    return (
        <>
            <Bar/>
            <div>pdf</div>
            <ViewerCom/>
        </>
    );
}

export default PdfViewPage;
