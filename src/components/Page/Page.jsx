import React from 'react';
import styles from './Page.scss';

function Page(props) {
    return (
        <div className={styles.pagination} current_page="1">
            <ul>
                <li className={styles.pagination}><a>«</a></li>
                <li className={styles.pagination + styles.active}><a>1</a></li>
                <li><a href="/?tab=all&amp;page=2">2</a></li>
                <li><a href="/?tab=all&amp;page=3">3</a></li>
                <li><a href="/?tab=all&amp;page=4">4</a></li>
                <li><a href="/?tab=all&amp;page=5">5</a></li>
                <li><a>...</a></li>
                <li><a href="/?tab=all&amp;page=112">»</a></li>
            </ul>
        </div>
    )
}

export default Page;