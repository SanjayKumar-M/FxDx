import React from 'react'
import '../Styles/Review.css'

const reviews = [
    { src: 'https://s3-alpha-sig.figma.com/img/972a/aa8c/b01f0e1dc620f3f4d3328f6b37392f9a?Expires=1692576000&Signature=CakPdWTZoqC0Fr1YAUBZwMxoak5NIcwxndXH-cIY5RRj45-Hobdd57svhBtBicmmcrSgX~wZfCnaLS5V8vXYK7zLvHohuHhL-euH10fDyizHfYZt9Zqnq44~TucWH1CO3XvLi58qoJd7cngtH1nWlWWDwnCtxWtG5jcp9ucjtCKYUbTtlVkiInn7LM1UH1gC9TrEGZBpgIgy~9lriIAlw8izNFoK4KTVWqMdQo1YFqPtn-Flp-sqQ~--kH~3lSNYgvdxSYcFwoX7sECilYMmG2jcj8~4zQhDrUMswua8kCHK~KmfUSVO~PesuEETsA0wMypbrC8iqnEYAWsVe7yGCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', name: 'Abijith', des: 'Trader' },
    { src: 'https://s3-alpha-sig.figma.com/img/3647/f815/cf18c986de37079cb096769a235ed385?Expires=1692576000&Signature=Vh8AZ~7pYggsweYChxfe8skhj9V1k88T13ShIcfRqYciJmIvFCaGEOBjHlIzzew5T3quUjt~riB-tGyPmoqLzudjMHuPX9bBsFLPcZ3NMbYU~7UfHBdQKsc3BwRBHziBUGZp-G0X5aiUbEUzzRzJDcQoVD8odButLDUmdRmr4LYSkt9DiNaveSrfexPaibXdWK712aIjghMmqv3QD1bWBxnNJi5sueFX0zBLSpFy-AfMbJRCQWr3aw3O2ed2F6tz6SYx4m3-5na1IpEDprTtZDm~ZTUYTY~QuIUJVLpwEZdPlkz1PQNh1f7okoa69UPk1mezlCzC5-TS8ykYnEemow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', name: 'Thofiq', des: 'Investor' },
    { src: 'https://s3-alpha-sig.figma.com/img/f5e4/73b1/49841dc2ecfc271629ee6b9acb15e66b?Expires=1692576000&Signature=Re6RWO3PJJAYIs7Ue2NrgIyuyBlmH79v3z7D7et~Xx9WAHnpW9MJFXq83Fr3IYpOnCtrHYhyyrfMGlTGX6hFm-tDfHepnNoQTtEwERFwoK2Efbk9dUqtmeGRFklVcB-OxMI~Sy5miYUmBqJCF9WMCt2mAio2nlDVGuJVTblHgcTuTGmtyRthktU3k4u3C3uyyFxWmd2BVU7eKmebpoe9oWQe6KnZoohaGD7xnuD5nKT8gUVN4ClfkzDdN8h83mPH0cJoKTohlMPJU882s8dEMeW1hanWQcJDwmh4dWZ9n4Z4~qBydiej-qr4BD2472kP0gr8dwf40WFOJg-yKIFmLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', name: 'Kumar', des: 'Developer' }
]
const Review = () => {
    return (
        <div id='review'>
            <div className="rev-top">
                <h2>Reviews from our platform users</h2>
                <sub>
                    consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
                    commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                
                    congue consectetur adipiscing elit duis tristique sollicitudin nibh sit
                    amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
              
                    vitae congue
                </sub>
            </div>
            <div id='rev-box'>
                {reviews.map((rev, i) => (
                    <div key={i} id='boxx'>
                        <div className="stars">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M13.093 0.952963C13.4514 0.181231 14.5486 0.181231 14.907 0.952963L18.2987 8.25626C18.4444 8.57002 18.7419 8.78618 19.0853 8.8278L27.0793 9.79665C27.924 9.89903 28.263 10.9425 27.6398 11.5218L21.742 17.0043C21.4887 17.2399 21.375 17.5896 21.4416 17.9291L22.9904 25.8312C23.1541 26.6662 22.2665 27.3111 21.5229 26.8974L14.4862 22.9825C14.1839 22.8143 13.8161 22.8143 13.5138 22.9825L6.47711 26.8974C5.73355 27.3111 4.84594 26.6662 5.00961 25.8312L6.55844 17.9291C6.62498 17.5896 6.51134 17.2399 6.25797 17.0043L0.360206 11.5218C-0.263004 10.9425 0.0760305 9.89903 0.920742 9.79665L8.91469 8.8278C9.25811 8.78618 9.55563 8.57002 9.70134 8.25626L13.093 0.952963Z" fill="#0267FF" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M13.093 0.952963C13.4514 0.181231 14.5486 0.181231 14.907 0.952963L18.2987 8.25626C18.4444 8.57002 18.7419 8.78618 19.0853 8.8278L27.0793 9.79665C27.924 9.89903 28.263 10.9425 27.6398 11.5218L21.742 17.0043C21.4887 17.2399 21.375 17.5896 21.4416 17.9291L22.9904 25.8312C23.1541 26.6662 22.2665 27.3111 21.5229 26.8974L14.4862 22.9825C14.1839 22.8143 13.8161 22.8143 13.5138 22.9825L6.47711 26.8974C5.73355 27.3111 4.84594 26.6662 5.00961 25.8312L6.55844 17.9291C6.62498 17.5896 6.51134 17.2399 6.25797 17.0043L0.360206 11.5218C-0.263004 10.9425 0.0760305 9.89903 0.920742 9.79665L8.91469 8.8278C9.25811 8.78618 9.55563 8.57002 9.70134 8.25626L13.093 0.952963Z" fill="#0267FF" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M13.093 0.952963C13.4514 0.181231 14.5486 0.181231 14.907 0.952963L18.2987 8.25626C18.4444 8.57002 18.7419 8.78618 19.0853 8.8278L27.0793 9.79665C27.924 9.89903 28.263 10.9425 27.6398 11.5218L21.742 17.0043C21.4887 17.2399 21.375 17.5896 21.4416 17.9291L22.9904 25.8312C23.1541 26.6662 22.2665 27.3111 21.5229 26.8974L14.4862 22.9825C14.1839 22.8143 13.8161 22.8143 13.5138 22.9825L6.47711 26.8974C5.73355 27.3111 4.84594 26.6662 5.00961 25.8312L6.55844 17.9291C6.62498 17.5896 6.51134 17.2399 6.25797 17.0043L0.360206 11.5218C-0.263004 10.9425 0.0760305 9.89903 0.920742 9.79665L8.91469 8.8278C9.25811 8.78618 9.55563 8.57002 9.70134 8.25626L13.093 0.952963Z" fill="#0267FF" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M13.093 0.952963C13.4514 0.181231 14.5486 0.181231 14.907 0.952963L18.2987 8.25626C18.4444 8.57002 18.7419 8.78618 19.0853 8.8278L27.0793 9.79665C27.924 9.89903 28.263 10.9425 27.6398 11.5218L21.742 17.0043C21.4887 17.2399 21.375 17.5896 21.4416 17.9291L22.9904 25.8312C23.1541 26.6662 22.2665 27.3111 21.5229 26.8974L14.4862 22.9825C14.1839 22.8143 13.8161 22.8143 13.5138 22.9825L6.47711 26.8974C5.73355 27.3111 4.84594 26.6662 5.00961 25.8312L6.55844 17.9291C6.62498 17.5896 6.51134 17.2399 6.25797 17.0043L0.360206 11.5218C-0.263004 10.9425 0.0760305 9.89903 0.920742 9.79665L8.91469 8.8278C9.25811 8.78618 9.55563 8.57002 9.70134 8.25626L13.093 0.952963Z" fill="#0267FF" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M13.093 0.952963C13.4514 0.181231 14.5486 0.181231 14.907 0.952963L18.2987 8.25626C18.4444 8.57002 18.7419 8.78618 19.0853 8.8278L27.0793 9.79665C27.924 9.89903 28.263 10.9425 27.6398 11.5218L21.742 17.0043C21.4887 17.2399 21.375 17.5896 21.4416 17.9291L22.9904 25.8312C23.1541 26.6662 22.2665 27.3111 21.5229 26.8974L14.4862 22.9825C14.1839 22.8143 13.8161 22.8143 13.5138 22.9825L6.47711 26.8974C5.73355 27.3111 4.84594 26.6662 5.00961 25.8312L6.55844 17.9291C6.62498 17.5896 6.51134 17.2399 6.25797 17.0043L0.360206 11.5218C-0.263004 10.9425 0.0760305 9.89903 0.920742 9.79665L8.91469 8.8278C9.25811 8.78618 9.55563 8.57002 9.70134 8.25626L13.093 0.952963Z" fill="#0267FF" />
                            </svg>
                        </div>
                        <sub>Worem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Nunc vulputate libero et<br></br> velit interdum, ac aliquet odio mattis.</sub>
                        <div id='okk'>

                            <img src={rev.src} alt='img' />
                            <div className="hee">
                                <p>{rev.name}</p>
                                <sub>{rev.des}</sub>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
