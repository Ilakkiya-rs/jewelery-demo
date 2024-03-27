import React from 'react'
import '../Features/feature.css'
const BlockUsecases = () => {
    return (
        <div className='feature-section'>
            <h1>usecases
                <div className="title__separete"></div>
            </h1>

            <div className='feature-card'>

                <div className='cards'>
                    <img src='https://cdn-icons-png.flaticon.com/128/5087/5087935.png' alt='' />
                    <div className='card-content'>
                        <h2>Enhanced Security:</h2>
                        <p>
                        Protect data and transactions with cryptographic techniques.
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src='https://cdn-icons-png.flaticon.com/128/5541/5541012.png' alt='' />
                    <div className='card-content'>
                        <h2>Increased Efficiency:</h2>
                        <p>
                        Streamline processes and reduce overhead costs associated with intermediaries.
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src='https://cdn-icons-png.flaticon.com/128/12914/12914589.png' alt='' />
                    <div className='card-content'>
                        <h2>Transparency & Trust:</h2>
                        <p>
                        Foster trust among participants by providing a transparent and auditable record of transactions.
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src='https://cdn-icons-png.flaticon.com/128/4860/4860983.png' alt='' />
                    <div className='card-content'>
                        <h2>Innovation Opportunities: </h2>
                        <p>
                        Unlock new business models and opportunities for innovation with decentralized applications (dApps).
                        </p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default BlockUsecases
