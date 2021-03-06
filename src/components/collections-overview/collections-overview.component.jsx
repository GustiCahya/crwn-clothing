import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collections-overview.styles.scss'

import { selectColletionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections
                .map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectColletionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)